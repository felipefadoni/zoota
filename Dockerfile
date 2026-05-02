# Base image para todas as etapas
FROM oven/bun:1-alpine AS base

# -----------------------------------------------------------------------------
# Etapa 1: Instalação de dependências (Deps)
# -----------------------------------------------------------------------------
FROM base AS deps
WORKDIR /app

# Copia os arquivos necessários para instalação das dependências
COPY package.json bun.lockb* ./

# Instala as dependências (apenas as de produção ou todas, depende de como gerencia o build)
# O --frozen-lockfile garante a consistência do build
RUN bun install --frozen-lockfile

# -----------------------------------------------------------------------------
# Etapa 2: Compilação do código (Builder)
# -----------------------------------------------------------------------------
FROM base AS builder
WORKDIR /app

# Copia as dependências da etapa anterior
COPY --from=deps /app/node_modules ./node_modules

# Copia todo o restante do código fonte
COPY . .

# Desabilita a telemetria do Next.js para acelerar o build e garantir privacidade
ENV NEXT_TELEMETRY_DISABLED=1

# Executa o build da aplicação Next.js
# Como adicionamos `output: "standalone"` no next.config.ts, o Next.js 
# otimizará a saída e criará a pasta .next/standalone
RUN bun run build

# -----------------------------------------------------------------------------
# Etapa 3: Ambiente de Produção (Runner)
# -----------------------------------------------------------------------------
FROM base AS runner
WORKDIR /app

# Configura o ambiente como produção
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Configurações de segurança: criação de um usuário não-root
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copia a pasta public (necessária para imagens e assets estáticos globais)
COPY --from=builder /app/public ./public

# Configura as permissões para a pasta .next
RUN mkdir .next && \
    chown nextjs:nodejs .next

# Copia os arquivos otimizados gerados pelo "standalone" do Next.js
# Estes arquivos contêm um server.js enxuto e apenas os node_modules necessários
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Muda a execução para o usuário restrito por questões de segurança
USER nextjs

# Expõe a porta da aplicação
EXPOSE 3000

ENV PORT=3000
# Configura o hostname para aceitar conexões externas
ENV HOSTNAME="0.0.0.0"

# Inicia a aplicação usando o bun com o server próprio gerado pelo Next.js
CMD ["bun", "start"]
