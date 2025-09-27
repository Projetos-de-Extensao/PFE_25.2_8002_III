# Product Backlog

Este documento detalha o Product Backlog para o projeto "Portal de Vagas". O escopo está focado exclusivamente no desenvolvimento **front-end** com React, utilizando dados simulados (mock) para emular o comportamento do back-end. O trabalho está organizado em três sprints de duas semanas cada.

## Personas / Papéis de Usuário

* **Aluno:** Estudante que busca e se candidata a vagas de monitoria.
* **Professor:** Docente que cria, publica e gerencia vagas de monitoria.
* **Administrador (CASA):** Membro do departamento administrativo que supervisiona o processo geral.

---

## Sprint 1: Estrutura Visual e Listagem de Vagas

**Meta da Sprint:** Montar a estrutura do projeto React, criar as telas principais e a navegação, e exibir vagas a partir de uma fonte de dados simulada (mock).

### Estado ao Final do Sprint 1

O projeto deverá ser um **protótipo clicável** com a estrutura de navegação principal e as telas essenciais já construídas. Embora a lógica de interação complexa ainda não esteja implementada, será possível visualizar o fluxo básico da aplicação.

* **Navegação Funcional:** O usuário consegue navegar entre as telas de Login, Cadastro, Lista de Vagas, Detalhes de uma Vaga e o formulário de Criação de Vaga.
* **Visualização de Dados (Mock):** A lista de vagas exibe dados de um arquivo JSON local. É possível clicar em uma vaga para ver seus detalhes completos.
* **Telas Estáticas:** Os formulários (Login, Cadastro, Criação de Vaga) estão visualmente prontos, mas a submissão dos dados apenas simula a ação, sem persistir o estado.
* **Estrutura Pronta:** A base do código em React, incluindo a estrutura de componentes e o roteamento, está finalizada e pronta para receber as funcionalidades das próximas sprints.

### Backlog para o Sprint 1

#### [P-01] (Técnico) Configurar projeto React e dados simulados (mock)
* **ID:** P-01
* **História de Usuário:** Como desenvolvedor, eu quero configurar o projeto React e um sistema de dados simulados (mock) para alimentar a aplicação.
* **Critérios de Aceitação:**
    * [ ] Projeto React inicializado com as dependências necessárias.
    * [ ] Estrutura de pastas para componentes, páginas e serviços definida.
    * [ ] Arquivos JSON criados para simular usuários, vagas e candidaturas.
    * [ ] Sistema de roteamento (navegação entre páginas) configurado.

#### [P-02] Criar UI de Login e Cadastro
* **ID:** P-02
* **História de Usuário:** Como um usuário, eu quero ver as telas de Cadastro e Login com todos os campos necessários.
* **Critérios de Aceitação:**
    * [ ] Páginas de Cadastro e Login criadas como componentes React.
    * [ ] Formulários possuem validação de campos (ex: e-mail válido, senha com mínimo de caracteres).
    * [ ] Ações de "Login" e "Cadastro" simulam uma chamada de API e redirecionam o usuário para o painel principal, gerenciando o estado de "logado" localmente.

#### [P-03] Visualizar lista de vagas de monitoria
* **ID:** P-03
* **História de Usuário:** Como um aluno logado, eu quero visualizar uma página com a lista de todas as vagas de monitoria disponíveis, carregadas dos dados simulados.
* **Critérios de Aceitação:**
    * [ ] A página busca e exibe os dados do arquivo JSON de vagas.
    * [ ] Cada vaga é exibida em um card com informações resumidas.
    * [ ] A interface da lista é intuitiva e visualmente agradável.

#### [P-04] Visualizar detalhes de uma vaga
* **ID:** P-04
* **História de Usuário:** Como um aluno, eu quero clicar em uma vaga para ver uma página com todos os seus detalhes.
* **Critérios de Aceitação:**
    * [ ] Ao clicar em um card, o usuário é levado a uma nova rota (página) que exibe as informações completas daquela vaga específica.
    * [ ] A página de detalhes é carregada rapidamente.

#### [P-05] Criar formulário para nova vaga
* **ID:** P-05
* **História de Usuário:** Como um professor logado, eu quero ver uma tela com um formulário para criar uma nova vaga.
* **Critérios de Aceitação:**
    * [ ] A página de criação de vaga contém todos os campos necessários.
    * [ ] Ao submeter o formulário, a nova vaga é adicionada ao estado local da aplicação, fazendo com que ela apareça na lista de vagas do aluno (simulando a persistência).

---

## Sprint 2: Interatividade e Gerenciamento de Estado

**Meta da Sprint:** Implementar as funcionalidades de candidatura do aluno e o gerenciamento de candidatos pelo professor, manipulando o estado da aplicação no front-end.

### Estado ao Final do Sprint 2

O projeto evolui para um **protótipo totalmente interativo**, onde o ciclo principal de uso (criação de vaga, candidatura e seleção) funciona de ponta a ponta utilizando o gerenciamento de estado do front-end. A aplicação se comporta como se estivesse conectada a um back-end.

* **Fluxo de Candidatura Completo:** Um aluno pode se candidatar a uma vaga, e essa candidatura passa a ser visível em seu painel "Minhas Candidaturas".
* **Gerenciamento de Candidatos:** Um professor pode visualizar a lista de alunos que se candidataram às suas vagas e pode alterar o status de uma candidatura (ex: "Aprovado").
* **Estado Reativo:** A mudança de status realizada pelo professor é refletida em tempo real na tela do aluno, demonstrando a reatividade da aplicação.
* **Funcionalidades Adicionais:** A busca e o filtro de vagas na página principal estão funcionando.

### Backlog para o Sprint 2

#### [P-06] Permitir candidatura do aluno a uma vaga
* **ID:** P-06
* **História de Usuário:** Como um aluno, eu quero poder me candidatar a uma vaga através de um formulário.
* **Critérios de Aceitação:**
    * [ ] A página de detalhes da vaga possui um botão "Candidatar-se".
    * [ ] O formulário permite selecionar arquivos do computador (a funcionalidade de upload será apenas visual).
    * [ ] Ao "enviar", o estado da aplicação é atualizado para refletir que o aluno se candidatou àquela vaga.

#### [P-07] Criar painel "Minhas Candidaturas" para o aluno
* **ID:** P-07
* **História de Usuário:** Como um aluno, eu quero ter uma página "Minhas Candidaturas" para acompanhar o status de cada uma.
* **Critérios de Aceitação:**
    * [ ] A página lê o estado local da aplicação para listar as vagas às quais o aluno se candidatou.
    * [ ] O status de cada candidatura (ex: "Enviada", "Em Análise", "Aprovado") é exibido.

#### [P-08] Permitir ao professor visualizar candidatos
* **ID:** P-08
* **História de Usuário:** Como um professor, eu quero visualizar a lista de candidatos inscritos para cada uma das minhas vagas.
* **Critérios de Aceitação:**
    * [ ] O painel do professor permite selecionar uma vaga e ver uma lista de alunos (mock) que se candidataram.
    * [ ] É possível simular o download dos documentos de um candidato.

#### [P-09] Permitir ao professor selecionar um candidato
* **ID:** P-09
* **História de Usuário:** Como um professor, eu quero poder alterar o status de uma candidatura para "Aprovado" ou "Não Selecionado".
* **Critérios de Aceitação:**
    * [ ] Na lista de candidatos, botões permitem ao professor alterar o status da candidatura.
    * [ ] A mudança de status no painel do professor é refletida imediatamente na página "Minhas Candidaturas" do aluno correspondente.

#### [P-10] Implementar filtro de vagas
* **ID:** P-10
* **História de Usuário:** Como um aluno, eu quero poder filtrar as vagas por disciplina ou palavra-chave na página de listagem.
* **Critérios de Aceitação:**
    * [ ] Um campo de busca na tela de vagas filtra a lista de vagas exibida (a filtragem ocorre no array de dados no front-end).

---

## Sprint 3: Dashboard, Polimento e Finalização

**Meta da Sprint:** Construir o dashboard do administrador com dados visuais simulados, refinar a interface geral do usuário e garantir a compatibilidade entre navegadores.

### Estado ao Final do Sprint 3

O projeto atinge o estado de um **produto finalizado e pronto para apresentação**. Todas as funcionalidades do backlog estão implementadas, a interface está refinada e a experiência do usuário é coesa e profissional.

* **Dashboard Administrativo:** A tela do administrador está funcional, exibindo gráficos e estatísticas a partir de dados simulados.
* **Experiência do Usuário (UX) Refinada:** A aplicação inclui notificações visuais para ações importantes, melhorando o feedback para o usuário.
* **Funcionalidades Secundárias:** A página de perfil do aluno está implementada.
* **Qualidade e Responsividade:** A aplicação foi testada, possui um layout responsivo e é compatível com os principais navegadores. O projeto está pronto para ser demonstrado.

### Backlog para o Sprint 3

#### [P-11] Criar dashboard do administrador com estatísticas
* **ID:** P-11
* **História de Usuário:** Como um administrador, eu quero acessar um dashboard com gráficos e estatísticas sobre as vagas.
* **Critérios de Aceitação:**
    * [ ] Uma página de dashboard é criada e acessível ao usuário "Administrador".
    * [ ] Componentes visuais (usando uma biblioteca como Chart.js ou Recharts) exibem dados estáticos, como "monitores por curso" e "vagas preenchidas".

#### [P-12] Implementar notificações visuais
* **ID:** P-12
* **História de Usuário:** Como um usuário, eu quero ver notificações visuais (modais ou pop-ups) para ações importantes.
* **Critérios de Aceitação:**
    * [ ] Uma notificação de sucesso aparece quando uma candidatura é enviada.
    * [ ] Uma notificação aparece no painel do aluno quando o status de sua candidatura muda.

#### [P-13] Criar página de perfil do aluno
* **ID:** P-13
* **História de Usuário:** Como um aluno, eu quero ter uma página de perfil onde posso visualizar meus dados e documentos (simulados).
* **Critérios de Aceitação:**
    * [ ] Uma página de perfil exibe as informações do usuário logado.
    * [ ] Permite a simulação de troca de arquivos de currículo e histórico.

#### [P-14] (Técnico) Garantir responsividade e compatibilidade
* **ID:** P-14
* **História de Usuário:** Como equipe, quero garantir que a interface seja responsiva e compatível com os principais navegadores.
* **Critérios de Aceitação:**
    * [ ] O layout da aplicação se ajusta bem a telas de desktop e mobile.
    * [ ] A aplicação é testada e funciona corretamente no Chrome, Firefox e Edge.