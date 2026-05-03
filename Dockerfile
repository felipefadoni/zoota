FROM oven/bun:1-alpine AS base

FROM base AS deps
WORKDIR /app

COPY package.json bun.lockb* ./

RUN bun install --frozen-lockfile

FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN bun run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY drizzle.config.ts ./drizzle.config.ts

RUN mkdir .next && \
    chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copiar os schemas para o drizzle-kit conseguir ler
COPY --from=builder --chown=nextjs:nodejs /app/src/backend/infra/postgres/schemas ./src/backend/infra/postgres/schemas

# Instalar o drizzle-kit no runner para podermos rodar bunx drizzle-kit push
RUN bun add drizzle-kit dotenv

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["bun", "server.js"]
