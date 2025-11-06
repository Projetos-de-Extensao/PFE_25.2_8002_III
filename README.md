# Projeto CASA Monitor: Portal Monitor

## Contribuidores (Grupo 3)
| Matrícula    | Aluno                       |
|--------------|-----------------------------|
| 202407138829 | Nicholas Borges de Vasconcelos |
| 202208385001 | João Márcio Prado Silva     |
| 202503798371 | Victor Robson               |
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
- Painel para visualizar e gerenciar os alunos inscritos em cada vaga.
- Funcionalidade para selecionar o candidato ideal para preencher a vaga.

#### Para Administradores (CASA)
- Formulário para criação e publicação de novas vagas de monitoria.
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

Esta seção foi pensada para alguém que nunca rodou um projeto React antes. Siga na ordem e você estará com o portal funcionando rapidamente.

### Pré-requisitos
Você precisa ter instalado:
1. Node.js (versão LTS recomendada 18+): https://nodejs.org/
2. Git (para clonar o repositório) ou baixe o ZIP direto do GitHub: https://git-scm.com/
3. (Opcional) Python 3.10+ e `pip` caso queira visualizar a documentação MkDocs local (`docs/`).

Verifique se o Node está instalado:
```powershell
node -v
npm -v
```
Se esses comandos não mostrarem versões, instale o Node antes de continuar.

### Passo a passo rápido
1. Clonar o repositório (ou baixar ZIP e extrair):
    ```powershell
    git clone https://github.com/Projetos-de-Extensao/PFE_25.2_8002_III.git
    cd portal-monitor
    ```
2. Instalar dependências (primeira vez):
    ```powershell
    npm install
    ```
3. Rodar em modo de desenvolvimento (hot reload):
    ```powershell
    npm run dev
    ```
    Abra (ou o navegador abrirá automaticamente) em: http://localhost:5173
4. Criar uma conta de teste:
    - Clique em "Cadastrar".
    - Use um e-mail institucional válido para testar regras de perfil:
      - Aluno: `seu_nome@alunos.ibmec.edu.br` (mostra campo Curso).
      - Professor: `seu_nome@professores.ibmec.edu.br` (mostra campo Disciplinas).
    - A autenticação e dados são simulados via `localStorage` (não há back-end real).
5. Explorar vagas:
    - Sem login você já vê a página pública de vagas.
    - Para se candidatar, faça login ou registre-se; ao clicar em candidatar sem estar autenticado você será direcionado à tela de login.

### Scripts adicionais úteis
Produção (gera build otimizado em `dist/`):
```powershell
npm run build
```
Pré-visualizar o build de produção:
```powershell
npm run preview
```

### Documentação (MkDocs) opcional
A pasta `docs/` contém material complementar. Para servir a documentação localmente:
```powershell
pip install mkdocs mkdocs-material
mkdocs serve
```
Depois acesse: http://127.0.0.1:8000

### Estrutura mínima esperada após instalar
```
PFE_25.2_8002_III/
  node_modules/        (criado pelo npm install)
  docs/                (documentação e artefatos de design)
  prototype/           (HTML de protótipo inicial)
  src/                 (se existir, código React principal)
  README.md
  package.json
```

### Solução de problemas comuns
| Problema | Causa provável | Como resolver |
|----------|----------------|---------------|
| Porta já em uso | Outro processo usando 5173 | Feche o processo ou rode `npm run dev -- --port 5174` |
| `node` não reconhecido | Node não instalado ou PATH incorreto | Reinstale Node LTS e reinicie o terminal |
| Instalação lenta | Conexão ou cache corrompido | `npm cache verify` ou tente novamente mais tarde |
| Navegador não abre | Auto-open falhou | Acesse manualmente http://localhost:5173 |
| Mudanças não atualizam | Cache do navegador ou erro de build | Verifique terminal, recarregue, ou reinicie `npm run dev` |

### Como contribuir rapidamente
1. Crie um branch: `git checkout -b feat/nova-funcionalidade`
2. Edite os componentes.
3. Teste local (`npm run dev`).
4. Commit: `git commit -m "feat: nova funcionalidade X"`
5. Push: `git push origin feat/nova-funcionalidade`
6. Abra um Pull Request no GitHub.

### Limitações atuais
O projeto não possui back-end real: todos os dados (usuário, vagas, candidaturas) são simulados em memória/localStorage apenas para demonstração. Não use dados sensíveis.

### Resumo rápido (cola)
```powershell
git clone https://github.com/Projetos-de-Extensao/PFE_25.2_8002_III.git; cd PFE_25.2_8002_III
npm install
npm run dev
# Abrir http://localhost:5173
```

Se tiver qualquer dúvida adicional, abra uma Issue no repositório.
