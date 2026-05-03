# Bounded Contexts (Contextos Delimitados) - Backend Zoota

Com base na análise das interfaces, fluxos de usuário e interligações de dados do front-end (`src/pages/app`), a arquitetura do backend deve ser modelada seguiring os princípios de Domain-Driven Design (DDD). O sistema Zoota é focado na gestão veterinária e de fazendas.

Abaixo estão os **Bounded Contexts** identificados, os domínios que eles encapsulam e as justificativas técnicas (motivos) para essa separação.

---

## 1. Contexto de Identidade e Acesso (Identity & Access Context)

**Responsabilidade:** Gerenciar quem usa o sistema e o que eles podem fazer. É a porta de entrada da aplicação.
**Módulos de UI Correspondentes:** `/authentication`, `/configuracoes` (aba Dados de Cadastro).
**Entidades Principais (Aggregates):**
*   `User` (Usuário logado/Veterinário/Gestor)
*   `Tenant` / `Clinic` (A clínica veterinária ou empresa contratante, base para isolamento de dados/multi-tenancy)
*   `Role` / `Permission` (Controle de acesso)

**Motivos para criação deste contexto:**
*   **Isolamento de Segurança:** Regras de autenticação (JWT, OAuth), hash de senhas e recuperação de contas mudam por motivos de segurança, não de negócio.
*   **Multi-tenancy:** O sistema atende clínicas. Todo dado gerado no sistema (clientes, animais, atendimentos) deve pertencer a um `Tenant` (a clínica). O contexto de identidade é quem emite o token que garante o escopo (Tenant ID) para as requisições subsequentes.

---

## 2. Contexto de Relacionamento (CRM Context)

**Responsabilidade:** Gerenciar o cadastro das entidades pagadoras e locais de atendimento (Fazendas).
**Módulos de UI Correspondentes:** `/clientes`.
**Entidades Principais (Aggregates):**
*   `Customer` (Cliente / Fazenda / Proprietário)
*   `Address` (Localização, UF)
*   `Contact` (Telefones, E-mails)

**Motivos para criação deste contexto:**
*   **Independência do Pagador:** Um cliente pode existir sem ter animais cadastrados (fase de prospecção) ou sem ter atendimentos gerados.
*   **Foco em Dados Cadastrais:** As regras de validação aqui são estáticas (validar CPF/CNPJ, CEP, formatação de telefone), não dependendo de lógicas veterinárias. Este contexto será amplamente consultado por outros.

---

## 3. Contexto Clínico / Prontuário (Clinical Context)

**Responsabilidade:** Gerenciar os pacientes (animais/rebanhos) e o histórico clínico básico.
**Módulos de UI Correspondentes:** `/animais`.
**Entidades Principais (Aggregates):**
*   `Animal` / `Patient` (Identificação, Raça, Categoria: Bovino/Equino/etc)
*   `Ownership` (O vínculo entre o Animal e o Cliente do contexto de CRM)

**Motivos para criação deste contexto:**
*   **Linguagem Ubíqua Específica:** As regras que governam um "Animal" (categorias, raças, status vital) são exclusivas da medicina veterinária e zootecnia.
*   **Relação de Dependência:** Embora o Animal dependa de um Cliente (Owner), o ciclo de vida do Animal (ficar doente, morrer, ser vendido) é distinto do ciclo de vida do Cliente (mudar de endereço, inativar contrato). Separar evita um "Deus-Objeto" (God Object) no Cliente.

---

## 4. Contexto de Operações e Faturamento (Operations & Billing Context)

**Responsabilidade:** É o "Core Domain" financeiro. Gerencia o que a clínica faz (Serviços) e a execução/faturamento disso (Atendimentos).
**Módulos de UI Correspondentes:** `/servicos`, `/atendimentos`, `/configuracoes` (aba Dados Bancários).
**Entidades Principais (Aggregates):**
*   `CatalogService` (Serviços oferecidos e precificação base)
*   `Attendance` / `Invoice` (O atendimento prestado / Fatura gerada)
*   `AttendanceItem` (Linha do atendimento vinculando um Serviço, valor cobrado e o Animal específico)
*   `BankAccount` (Dados para recebimento do Tenant)

**Motivos para criação deste contexto:**
*   **Complexidade Transacional:** A UI de "Novo Atendimento" exige forte consistência transacional. É aqui que unimos `Customer` (CRM), `Animal` (Clinical) e `CatalogService` (Operations).
*   **Imutabilidade Financeira:** Se o preço de um `CatalogService` for alterado no futuro (ex: Vacina subiu de R$80 para R$100), o `Attendance` passado não pode sofrer alteração. Ele guarda um *snapshot* do valor no momento da execução.
*   **Regras de Carrinho e Totalização:** A lógica do `reduce()` vista no front-end para calcular o "Valor Total" deve ser garantida e validada no backend neste contexto.

---

## 5. Contexto de Agendamento (Scheduling Context)

**Responsabilidade:** Controle temporal de compromissos da clínica.
**Módulos de UI Correspondentes:** `/agenda`.
**Entidades Principais (Aggregates):**
*   `Appointment` (Agendamento, Data/Hora, Motivo)
*   `ScheduleStatus` (Agendado, Concluído, Atrasado, Cancelado)

**Motivos para criação deste contexto:**
*   **Regras de Conflito de Tempo:** Este contexto precisa garantir que não haja *double-booking* (dois agendamentos no mesmo horário para o mesmo veterinário, caso exista a entidade no futuro) ou calcular o tempo de deslocamento até uma fazenda.
*   **Separação do Faturamento:** Um agendamento (`Appointment`) *não* é um atendimento (`Attendance`). Um agendamento pode ser cancelado sem impacto financeiro. O ciclo de vida temporal é diferente do ciclo de vida de faturamento.

---

## 6. Contexto de Análise de Dados (Analytics / Reporting Context)

**Responsabilidade:** Fornecer dados agregados, KPIs e séries temporais para tomada de decisão.
**Módulos de UI Correspondentes:** `/dashboard`.
**Entidades Principais (Aggregates):**
*   *Views e Projections* (Dados read-only consolidados, como "Faturamento Mensal", "Contagem de Clientes", "Top Serviços").

**Motivos para criação deste contexto:**
*   **CQRS (Command Query Responsibility Segregation):** O dashboard precisa de dados consolidados (somas, agrupamentos por mês). Fazer essas *queries* pesadas diretamente nos bancos de dados transacionais dos contextos de *Operations* ou *CRM* degrada a performance do sistema de cadastro.
*   **Otimização de Leitura:** O ideal é que eventos dos outros contextos (ex: `AttendanceCreated`, `CustomerRegistered`) alimentem uma base de leitura otimizada para o dashboard, permitindo que os gráficos (Recharts) carreguem instantaneamente.

---

## Mapa de Integração (Context Map - Resumo)

*   O **Identity Context** envelopa todos os outros (fornece o `TenantId` em todas as rotas).
*   O **Scheduling Context** faz referência a IDs do **CRM Context** (Cliente) e **Clinical Context** (Animal).
*   O **Operations Context** (Atendimentos) é o maior consumidor: ele precisa ler dados do **CRM Context**, **Clinical Context** e de si mesmo (`CatalogService`) para gerar a Fatura.
*   O **Analytics Context** é puramente reativo (assíncrono ou através de views de banco de dados), escutando o que acontece nos outros contextos para montar o Dashboard.