# Documentação de UX/UI e Arquitetura do Sistema - Módulos Internos (`src/pages/app`)

Este documento mapeia a experiência do usuário (UX), a interface de usuário (UI), a arquitetura de dados e como os módulos da aplicação Zoota (localizados em `src/pages/app`) se interligam. O sistema foi projetado para ser um painel de controle (Dashboard) focado na gestão veterinária e de fazendas.

## 1. Visão Arquitetural e Padrões de UX/UI

A aplicação utiliza o ecossistema **Next.js (Pages Router)**, **React** e **Material-UI (MUI v5)**, focando em uma experiência de Single Page Application (SPA).

*   **Consistência Visual (Design System):** A interface adota um estilo "flat" moderno. Os componentes (como `Card`) utilizam `elevation={0}`, bordas sólidas (`1px solid #e0e0e0`) e cantos arredondados (`borderRadius: "12px" / "14px"`). O espaçamento é padronizado (ex: `spacing={3}` nas Grids).
*   **Layout Unificado:** O usuário é mantido em um contexto contínuo através dos wrappers `AppLayout` (que provê a Sidebar de navegação e a Topbar) e `PageHeader` (que padroniza os títulos, descrições e botões de ação principal de cada página).
*   **Ações de Tabela (Row Actions):** O padrão para interagir com itens em listas (editar, excluir, visualizar) é o uso de um ícone de três pontos verticais (`FiMoreVertical`) que abre um menu contextual suspenso, mantendo a interface limpa e focada nos dados.
*   **Navegação Fluida:** Transições de tela são feitas de forma programática usando `useRouter` (ex: botões de "Voltar" ou "Novo Registro"), evitando recarregamentos completos da página e garantindo a sensação de um aplicativo nativo.

## 2. Detalhamento das Páginas, Dados e Fluxos

### 2.1 Dashboard (`/dashboard/index.tsx`)
**O que faz:** É a tela inicial pós-login. Atua como um "Hub" de informações, dando ao gestor/veterinário um panorama rápido da saúde financeira e operacional do negócio.
**Dados Exibidos:**
*   **Métricas Chave (KPIs):** Faturamento Total, Total Recebido, A Receber, Atendimentos Realizados, Total de Clientes e Total de Animais.
*   **Gráficos:** Faturamento dos últimos 6 meses (Gráfico de Barras) e Serviços mais prestados (Gráfico de Rosca/Donut).
**Interligação:** Os dados apresentados aqui são um consolidado (agregação) das informações geradas nos módulos de **Atendimentos**, **Clientes**, **Animais** e **Serviços**.

### 2.2 Agenda (`/agenda/index.tsx`)
**O que faz:** Organiza os compromissos futuros e passados (consultas, retornos, vacinações).
**Dados Exibidos:** Data, Horário, Cliente/Propriedade, Animal atendido, Motivo da visita e Status (Agendado, Concluído, Atrasado).
**Interligação:** Conecta-se visual e logicamente com **Clientes** (para saber onde ir) e **Animais** (quem será atendido). O status visual (`StatusChip`) ajuda na triagem rápida do dia.

### 2.3 Clientes (`/clientes`)
**O que faz:** Gerencia o cadastro das entidades contratantes (Fazendas, Haras, Proprietários pessoa física). É a base do relacionamento.
**Dados Exibidos:**
*   *Lista:* Nome da Fazenda/Cliente, Proprietário, Localização e Status (Ativo/Inativo/Pendente).
*   *Formulário (`novo.tsx`):* Dados completos de cadastro, incluindo endereço com seleção de UF.
**Interligação:** É a entidade "Pai". Sem um cliente, não é possível cadastrar um **Animal** nem gerar um **Atendimento** ou **Agenda**.

### 2.4 Animais (`/animais`)
**O que faz:** Cadastro e prontuário dos pacientes ou rebanhos.
**Dados Exibidos:** Identificação (Nome/Brinco), Raça, Categoria (Bovino, Equino, Canino, Felino), Status e, crucialmente, o Proprietário/Fazenda.
**Interligação:** É uma entidade "Filha" de **Clientes**. O cadastro de um animal exige a vinculação a um proprietário. Eles são os alvos principais nas telas de **Agenda** e **Atendimentos**.

### 2.5 Serviços (`/servicos`)
**O que faz:** Define o catálogo de produtos e procedimentos oferecidos pela clínica, padronizando a precificação.
**Dados Exibidos:** Título (ex: Consulta, Vacina), Descrição, Valor Base e Status.
**Interligação:** Atua como um dicionário de preços. Os itens cadastrados aqui são consumidos pelo módulo de **Atendimentos** para gerar o valor total a ser cobrado.

### 2.6 Atendimentos (`/atendimentos`)
**O que faz:** É o coração financeiro e operacional do sistema. Registra a prestação de serviço, unindo "Quem pagou", "Quem foi atendido" e "O que foi feito".
**Dados Exibidos:**
*   *Lista:* Número da Fatura (ex: FAT-001), Data, Cliente, Quantidade de Serviços, Valor Total e Status de Pagamento (Pago, Pendente, Atrasado).
*   *Formulário de Novo Atendimento (`novo.tsx`):*
    *   **UX de Seleção em Cascata:** O usuário seleciona um **Cliente**. Ao fazer isso, o sistema filtra a lista de **Animais** para mostrar *apenas* os pertencentes àquele cliente. Se o cliente for trocado, a seleção do animal é resetada para evitar inconsistências de dados.
    *   **Carrinho de Serviços:** O usuário adiciona múltiplos **Serviços** (com seus respectivos valores) a uma lista. O sistema calcula o *Valor Total* dinamicamente.
**Interligação:** É o ponto de convergência de todos os outros módulos. Consome dados de **Clientes** (pagador), **Animais** (paciente) e **Serviços** (itens faturados), alimentando futuramente os gráficos do **Dashboard**.

### 2.7 Configurações (`/configuracoes/index.tsx`)
**O que faz:** Permite o ajuste das informações da própria clínica ou do usuário logado.
**UX de Navegação:** Utiliza um sistema de Abas (Tabs) para separar "Dados de Cadastro" (informações pessoais, alteração de senha) de "Dados da Conta" (informações bancárias). A transição de abas ocorre instantaneamente via controle de estado (`useState`), sem mudar de página, oferecendo uma experiência fluida.

### 2.8 Autenticação (`/authentication`)
**O que faz:** Controla o acesso ao sistema.
**UX:** Diferente do resto da aplicação, este módulo *não* utiliza o `AppLayout`. Ele possui um design focado na conversão e segurança (telas limpas, focadas no formulário de login, criação de conta ou recuperação de senha), garantindo que o usuário não se distraia antes de entrar no sistema.