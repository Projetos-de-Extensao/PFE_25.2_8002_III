# Projeto CASA Monitor: Portal Monitor

## Contribuidores (Grupo 3)
| Matrícula    | Aluno                       |
|--------------|-----------------------------|
| 202407138829 | Nicholas Borges de Vasconcelos |
| 000000000000 | João Márcio Prado Silva     |
| 000000000000 | Victor Robson               |
| 202508486083 | Matheus Oliveira            |

## Sobre o Projeto
O **Portal Monitor** é uma aplicação web front-end desenvolvida para a disciplina de Projeto da CASA. O objetivo é criar uma plataforma centralizada e moderna para gerenciar o processo de seleção de monitores acadêmicos.

A solução conecta três perfis de usuários:
* **Alunos:** Que podem buscar, visualizar e se candidatar a vagas de monitoria.
* **Professores:** Que podem publicar e gerenciar suas vagas, além de selecionar os candidatos.
* **Administradores (CASA):** Que possuem uma visão geral do programa através de um dashboard com estatísticas.

Este projeto foi construído com foco total no **front-end**, utilizando a biblioteca React para criar uma interface de usuário rica e interativa, com um back-end simulado para fins de demonstração.

## Funcionalidades Principais

#### Para Alunos
- Visualização de uma lista completa de vagas de monitoria disponíveis.
- Ferramenta de busca e filtro para encontrar vagas por disciplina ou palavra-chave.
- Página de detalhes para cada vaga, com requisitos e responsabilidades.
- Processo de candidatura simplificado com upload de documentos (simulado).
- Painel pessoal para acompanhar o status de todas as candidaturas.

#### Para Professores
- Formulário para criação e publicação de novas vagas de monitoria.
- Painel para visualizar e gerenciar os alunos inscritos em cada vaga.
- Funcionalidade para selecionar o candidato ideal para preencher a vaga.

#### Para Administradores (CASA)
- Dashboard com visão geral e estatísticas da plataforma (ex: número de monitores por curso, vagas preenchidas vs. abertas).

## Tecnologias Utilizadas

* **Front-End:**
    * **React**: Biblioteca JavaScript para construção de interfaces de usuário.
    * **JavaScript (ES6+):** Linguagem de programação principal.
    * **HTML5 & CSS3:** Estruturação e estilização das páginas.

* **Ferramentas de Desenvolvimento:**
    * **Node.js** / **npm**: Ambiente de execução e gerenciador de pacotes.
    * **Git & GitHub:** Para versionamento de código.
    * **Visual Studio Code:** Editor de código.

* **Back-End (Simulado):**
    * O projeto não possui um back-end real. Os dados são simulados através de arquivos **JSON** locais para permitir o funcionamento completo da interface para demonstração.

## Instalação e Execução

Para executar este projeto localmente, você precisará ter o [Node.js](https://nodejs.org/) (que inclui o npm) e o [Git](https://git-scm.com/) instalados em sua máquina.

Siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd nome-do-repositorio
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm start
    ```
A aplicação será aberta automaticamente em seu navegador no endereço `http://localhost:3000`.
