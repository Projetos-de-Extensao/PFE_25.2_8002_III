---
id: brainstorm
title: Brainstorm
---

## Introdução
<p align = "justify">
O brainstorm é uma técnica de elicitação de requisitos que consiste em reunir a equipe e discutir sobre diversos tópicos gerais do projeto apresentados no documento problema de negócio. No brainstorm o diálogo é incentivado e críticas são evitadas para permitir que todos colaborem com suas próprias ideias.
</p>

## Metodologia
<p align = "justify">
Nós definimos estas 6 perguntas para a sessão de brainstorming. Depois, individualmente, adicionamos nossas respostas ao documento. Em seguida, nos reunimos para decidir os requisitos do projeto.
</p>

## Brainstorm

## Versão 1.0

## Perguntas

### 1. Qual o objetivo principal da aplicação?

<p align = "justify">
<b>Nicholas</b> - O objetivo principal e criar mu website para o Programa de Monitores do departamento CASA. A plataforma servirá como um portal centralizado para a publicação de vagas para cada disciplina.
</p>

<p align = "justify">
<b>Victor</b> - O objetivo principal é criar um website para o Monitores IBMEC. A plataforma deve servir como um ""portal" para a publicações de vagas relacionadas a cada disciplina desejada pelo CASA/Professores IBMEC.
</p>

<p align = "justify">
<b>João</b> - O objetivo principal é desenvolver um portal que centralize a divulgação das vagas de monitoria, permitindo que os alunos possam visualizar e se candidatar de forma prática, enquanto os professores podem publicar e acompanhar as oportunidades.
</p>

<p align = "justify">
<b>Matheus</b> - O objetivo é o desenvolvimento de um site que tenha um portal para centralizar a divulgação de vagas de mentoria, permitindo assim que os alunos possam se candidatar e os professores poderão publicar e acompanhar as oportunidades.
</p>

---

### 2. Como será o processo para cadastrar um novo usuario?

<p align = "justify">
<b>Nicholas</b> - O processo para cadastrar um novo usuário deve ser fácil e rápido, tanto para o professor, aluno e administrador. Em um contexto real, a universidade já terá os registros dos usuários.
</p>

<p align = "justify"> 
<b>Victor</b> - O processo de cadastro deverá ser separado pelos clientes, alunos, professores e administradores (CASA). Os alunos informam seu Nome, CPF e matrícula (principal dado que já contem os registros de cada aluno na universidade, nome e CPF seriam mais como validor do aluno). Essa cadastro daria ao aluno o acesso as vagas postadas no portal, de acordo com seu sua nota e CR. Os professores teriam que informar nome, CPF e matrícula, porém o acesso seria para postar as vagas preteridas por eles. Já os administradores (CASA) o acesso seria por forma de matrícula e um autentificador de 2 fatores, já que eles seriam a parte com mais permissões no portal, deve criar uma segurança maior.
</p>

<p align = "justify">
<b>João</b> - O processo de cadastro deverá ser integrado ao sistema acadêmico, de modo que alunos utilizem matrícula, CPF e nome para validação. Professores terão acesso especial para publicação de vagas, e administradores contarão com autenticação em dois fatores para garantir maior segurança.
</p>

<p align = "justify">
<b>Matheus</b> - O processo de registro deve ser conectado ao sistema acadêmico, permitindo que os alunos utilizem matrícula, CPF e nome para autenticação. Os professores terão permissões específicas para criar e gerenciar vagas, enquanto os administradores contarão com uma autenticação em dois fatores para aumentar a segurança.
</p>
---

### 3. Como será a forma de adicionar vagas de monitoria?

<p align = "justify">
<b>Nicholas</b> - O professor poderá criar uma vaga de monitoria para que os alunos se candidatem, com base nas disciplinas que ele leciona.
</p>

<p align = "justify">
<b>Victor</b> - O professor deverá solicitar a criação da vaga, de acordo com as necessidades da matéria, os números de monitores desejados. E enviar esse cadastro para o CASA (ADMIN), liberar a vaga para o portal.
</p>

<p align = "justify">
<b>João</b> - O professor terá acesso a um painel no qual poderá criar vagas vinculadas às disciplinas que ministra. Essas vagas passarão por uma validação do administrador antes de serem publicadas no portal.
</p>

<p align = "justify">
<b>Matheus</b> - O professor terá um painel exclusivo onde poderá criar vagas associadas às disciplinas que leciona. Antes de serem divulgadas no portal, essas vagas precisarão ser aprovadas pelo administrador.

</p>

---

### 4. Outras perguntas pertinentes ao contexto?

<p align = "justify">
<b>Nicholas</b> - Quantos alunos poderão se candidatar a uma vaga de monitoria e quem deverá decidir esse limite?
</p>

<p align = "justify">
<b>Victor</b> - Pode ter um filtro baseado nas notas e CR de cada aluno. Com no máximo 20 selecionados para cada vaga de monitoria, estando aptos a participarem de outros processos de seleção, como entrevistas e afins.
</p>

<p align = "justify">
<b>João</b> - Uma questão importante é como será definido o critério de desempate quando mais de um aluno atender aos requisitos. Além disso, é necessário considerar se haverá limite de monitorias simultâneas por aluno.
</p>

<p align = "justify">
<b>Matheus</b> - Um ponto relevante a ser definido é o critério de desempate nos casos em que múltiplos alunos cumprirem os requisitos da vaga. Também é importante estabelecer se haverá um limite para o número de monitorias que cada aluno poderá exercer ao mesmo tempo.
</p>

---

### 5. O que o administrador deveria ver no dashboard?

<p align = "justify">
<b>Nicholas</b> - O administrador vai precisar ter um filtro para ver certas vagas de monitoria.
</p>

<p align = "justify">
<b>Victor</b> - Um filtro geral, com a parte de matriculas, para professores, alunos e admins. Vendo também as vagas criadas pelos professores e as já "ativas no portal", alunos que estão selecionados em cada vaga, entre outros.
</p>

<p align = "justify">
<b>João</b> - O administrador deverá visualizar no dashboard todas as vagas cadastradas, status de candidaturas, relatórios de professores e alunos envolvidos, além de indicadores como quantidade de vagas ativas e preenchidas.
</p>

<p align = "justify">
<b>Matheus</b> - O administrador contará com um dashboard completo, onde poderá visualizar todas as vagas cadastradas, o status das candidaturas, relatórios referentes a professores e alunos participantes, além de métricas como o número de vagas ativas, preenchidas e outros indicadores relevantes.

</p>

---

### 6. Quais informações seriam interessante para o usuarios?

<p align = "justify">
<b>Nicholas</b> - Seria interessante o usarios poderem ver o status da vaga.
</p>

<p align = "justify">
<b>Victor</b> - Alunos, ver um dashboard para inserir os dados selecionados, o próximo onde teria as vagas que ele poderia concorrer de acordo com a nota e CR.
</p>

<p align = "justify">
<b>João</b> - Para os usuários, seria interessante visualizar prazos de candidatura, requisitos de cada vaga, status atualizado da inscrição e resultados do processo seletivo.
</p>

<p align = "justify">
<b>Matheus</b> - Para os usuários, é importante disponibilizar informações como os prazos para candidatura, os requisitos específicos de cada vaga, o status atualizado da inscrição e os resultados do processo seletivo, garantindo maior transparência e acompanhamento em tempo real.
</p>

<b>WWWWs</b> - O usuário poderá ver scouts de partidas do torneio, ver as regras dos torneios, locais e data das partidas.

---

## Requisitos elicitados

Após uma sessão de brainstorming, o grupo consolidou as ideias e definiu os seguintes requisitos essenciais para o desenvolvimento da plataforma Monitor CASA. Este documento serve como guia para o escopo do projeto, detalhando as funcionalidades necessárias e os critérios de qualidade esperados.

Os requisitos são divididos em duas categorias principais:

* **Requisitos Funcionais:** O que o sistema deve fazer. São as funcionalidades e ações que os usuários podem realizar.
* **Requisitos Não Funcionais:** Como o sistema deve ser. São as características de qualidade, como segurança, usabilidade e desempenho.

---

### Requisitos Funcionais (RF)

### RF - Módulo Geral (Todos os Usuários)
* **RF01:** O sistema deve permitir que usuários se cadastrem e realizem login de forma segura para acessar a plataforma.
* **RF02:** O sistema deve redirecionar o usuário para seu respectivo painel (dashboard) após o login bem-sucedido.

### RF - Módulo do Aluno
* **RF03:** O sistema deve permitir que o aluno visualize uma lista de vagas de monitoria disponíveis.
* **RF04:** O sistema deve fornecer uma ferramenta de busca para que o aluno possa filtrar vagas por disciplina ou palavra-chave.
* **RF05:** O sistema deve permitir que o aluno clique em uma vaga para ver seus detalhes (descrição, requisitos, remuneração).
* **RF06:** O sistema deve permitir que o aluno se candidate a uma vaga de interesse.
* **RF07:** O sistema deve possuir uma área onde o aluno possa acompanhar o status de todas as suas candidaturas.

### RF - Módulo do Professor
* **RF08:** O sistema deve permitir que o professor crie e publique novas vagas de monitoria.
* **RF09:** O sistema deve fornecer um formulário para o professor preencher os detalhes da vaga (título, disciplina, descrição).
* **RF10:** O sistema deve permitir que o professor visualize a lista de candidatos inscritos em uma vaga e selecione um deles para preenchê-la.

### RF - Módulo do Administrador
* **RF11:** O sistema deve apresentar um painel de controle (dashboard) para o administrador com estatísticas gerais da plataforma.

---

### Requisitos Não Funcionais (RNF)

* **RNF01 (Usabilidade):** A interface do sistema deve ser intuitiva, clara e de fácil utilização para todos os perfis de usuário, minimizando a necessidade de treinamento.
* **RNF02 (Desempenho):** As páginas e as respostas a ações do usuário (como buscas e filtros) devem carregar em um tempo aceitável.
* **RNF03 (Compatibilidade):** O sistema deve ser compatível com os principais navegadores web do mercado (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).
