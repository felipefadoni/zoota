# Zoota (VetPlus)

Um Micro SaaS para gestão de clínicas veterinárias, pet shops e profissionais independentes.

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias e ferramentas:

- **[Next.js](https://nextjs.org/)** (Pages Router) - Framework React
- **[React](https://reactjs.org/)** - Biblioteca de interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Material UI (MUI v9)](https://mui.com/)** & **Emotion** - Componentes de interface e estilização
- **[Recharts](https://recharts.org/)** - Biblioteca para gráficos e visualização de dados
- **[Axios](https://axios-http.com/)** - Cliente HTTP para chamadas de API
- **[Biome](https://biomejs.dev/)** - Ferramenta rápida para linting e formatação de código
- **[Bun](https://bun.sh/)** - Gerenciador de pacotes e runtime principal
- **[Docker](https://www.docker.com/)** - Containerização da aplicação

## ⚙️ Funcionalidades do Micro SaaS

A plataforma conta com os seguintes módulos e funcionalidades:

- **Autenticação:** Sistema de login, criação de conta e recuperação de senha.
- **Dashboard:** Painel principal para acompanhamento de métricas gerais e gráficos de desempenho.
- **Clientes:** Listagem geral e cadastro de novos clientes.
- **Animais:** Gestão de pets, com listagem e cadastro de novos animais.
- **Serviços:** Listagem e registro de novos serviços prestados (como consultas, banho e tosa, etc).

## 🛠️ Como rodar o projeto

### Pré-requisitos
Certifique-se de ter o [Bun](https://bun.sh/) instalado na sua máquina (ou Node.js com npm/yarn) e o [Docker](https://www.docker.com/) (opcional, para rodar via container).

### 💻 Em Desenvolvimento (Dev)

1. Clone o repositório e acesse a pasta do projeto:
   ```bash
   git clone <url-do-repositorio>
   cd zoota
   ```

2. Instale as dependências:
   ```bash
   bun install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   bun dev
   ```

4. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador. O servidor será recarregado automaticamente ao salvar as alterações no código.

### 🚀 Em Produção (Prod)

Você pode rodar a versão otimizada de produção diretamente com o Bun ou utilizando Docker.

#### Opção 1: Rodando nativamente

1. Gere a build otimizada da aplicação:
   ```bash
   bun run build
   ```

2. Inicie o servidor de produção:
   ```bash
   bun start
   ```

#### Opção 2: Rodando com Docker (Recomendado)

O projeto possui um `Dockerfile` otimizado em múltiplas etapas usando a funcionalidade *standalone* do Next.js e o Bun como base.

1. Construa a imagem Docker:
   ```bash
   docker build -t zoota-app .
   ```

2. Inicie o container mapeando a porta:
   ```bash
   docker run -p 3000:3000 zoota-app
   ```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).
