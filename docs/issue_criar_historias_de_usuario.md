# Histórias de Usuário

## 1. Cadastro de Usuário

**Como** um novo aluno,
**eu quero** me cadastrar na plataforma,
**para que** eu possa acessar as funcionalidades do sistema.

### Critérios de Aceitação
- O usuário deve informar nome, e-mail, senha e tipo de usuário (aluno, professor, admin).
- O sistema deve validar se o e-mail já está cadastrado.
- O usuário deve receber uma confirmação de cadastro.

---

## 2. Login

**Como** um usuário cadastrado,
**eu quero** fazer login na plataforma,
**para que** eu possa acessar minha área restrita.

### Critérios de Aceitação
- O usuário deve informar e-mail e senha válidos.
- O sistema deve autenticar e redirecionar para o painel correspondente ao tipo de usuário.
- Mensagem de erro deve ser exibida em caso de falha.

---

## 3. Visualizar Vagas Disponíveis

**Como** um aluno,
**eu quero** visualizar as vagas de estágio disponíveis,
**para que** eu possa me candidatar às oportunidades.

### Critérios de Aceitação
- O sistema deve exibir uma lista de vagas com informações resumidas.
- O aluno pode clicar em uma vaga para ver detalhes.
- Apenas vagas ativas devem ser exibidas.

---

## 4. Candidatar-se a uma Vaga

**Como** um aluno,
**eu quero** me candidatar a uma vaga de estágio,
**para que** eu possa participar do processo seletivo.

### Critérios de Aceitação
- O aluno deve estar logado para se candidatar.
- O sistema deve registrar a candidatura e impedir candidaturas duplicadas.
- O aluno deve receber uma confirmação da candidatura.

---

## 5. Gerenciar Vagas (Admin/Professor)

**Como** um administrador ou professor,
**eu quero** criar, editar e remover vagas de estágio,
**para que** as oportunidades estejam sempre atualizadas.

### Critérios de Aceitação
- Apenas usuários autorizados podem acessar o painel de gerenciamento.
- O sistema deve permitir criar, editar e remover vagas.
- Mudanças devem ser refletidas imediatamente para os alunos.

---

# Backlog do Produto

1. Cadastro de Usuário
2. Login
3. Visualizar Vagas Disponíveis
4. Candidatar-se a uma Vaga
5. Gerenciar Vagas (Admin/Professor)
