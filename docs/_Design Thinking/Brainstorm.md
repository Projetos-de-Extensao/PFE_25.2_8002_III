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

### Requisitos elicitados

|ID|Descrição|
|----|-------------|
|BS01| O cliente...|
|BS02| O cliente...|
|BS03| O cliente...|
|BS04| O cliente...|
|BS05| O cliente...|
|BS06| O cliente...|
|BS07| O cliente...|
|BS08| O cliente...|
|BS09| O cliente...|
|BS10| O produto...|
|BS11| O produto...|
|BS12| O produto...|
|BS13| O produto...|
|BS14| O produto...|
|BS15| O produto...|

## Conclusão
<p align = "justify">
Através da aplicação da técnica, foi possível elicitar alguns dos primeiros requisitos do projeto.
</p>

## Referências Bibliográficas

> BARBOSA, S. D. J; DA SILVA, B. S. Interação humano-computador. Elsevier, 2010.

## Autor(es)
| Data | Versão | Descrição | Autor(es) |
| -- | -- | -- | -- |
| DD/MM/YYYY | 1.0 | Criação do documento | XXX XXXX, XXXX XXXX, YYY YYYY e ZZZ XXXX |
