// Consolidated mock data for vagas and applications
export const mockVagas = [
  {
    id: 'v1',
    titulo: 'Monitor de Algoritmos',
    curso: 'Ciência da Computação',
    professor: 'Dr. Silva',
    descricao: 'Durante o horário de almoço, realize uma sessão de ajuda/estudo duas vezes por semana para auxiliar os alunos com as tarefas da disciplina e responder a quaisquer perguntas.',
    tags: ['Algoritmos', 'Java', 'Aulas']
  },
  {
    id: 'v2',
    titulo: 'Monitor de Banco de Dados',
    curso: 'Sistemas de Informação',
    professor: 'Profa. Almeida',
    descricao: 'Durante o horário de almoço, realize uma sessão de ajuda/estudo duas vezes por semana para auxiliar os alunos com as tarefas da disciplina e responder a quaisquer perguntas.',
    tags: ['SQL', 'Postgres', 'Lab']
  },
  {
    id: 'v3',
    titulo: 'Monitor de Front-end',
    curso: 'Design e Web',
    professor: 'Prof. Costa',
    descricao: 'Durante o horário de almoço, realize uma sessão de ajuda/estudo duas vezes por semana para auxiliar os alunos com as tarefas da disciplina e responder a quaisquer perguntas.',
    tags: ['React', 'CSS', 'UI']
  },
  {
    id: 'v4',
    titulo: 'Monitor de Matemática Discreta',
    curso: 'Engenharia',
    professor: 'Dr. Pereira',
    descricao: 'Durante o horário de almoço, realize uma sessão de ajuda/estudo duas vezes por semana para auxiliar os alunos com as tarefas da disciplina e responder a quaisquer perguntas.',
    tags: ['Matemática', 'Teoria', 'Provas']
  },
  {
    id: 'v5',
    titulo: 'Monitor de Cálculo I',
    curso: 'Engenharia',
    professor: 'Dr. Fernandes',
    descricao: 'Auxílio em exercícios e revisão de conteúdos fundamentais de Cálculo I, com sessões semanais e plantões de dúvidas.',
    tags: ['Cálculo', 'Derivadas', 'Integrais']
  }
]

export const mockApplications = [
  { id: 'a1', vagaId: 'v1', vaga: 'Monitor de Algoritmos', status: 'Em Análise', professor: 'Dr. Silva', studentId: 'u1', studentName: 'João Silva', studentEmail: 'joao.silva@example.com' },
  { id: 'a2', vagaId: 'v2', vaga: 'Monitor de Banco de Dados', status: 'Aceito', professor: 'Profa. Almeida', studentId: 'u1', studentName: 'João Silva', studentEmail: 'joao.silva@example.com' },
  { id: 'a3', vagaId: 'v3', vaga: 'Monitor de Front-end', status: 'Rejeitado', professor: 'Prof. Costa', studentId: 'u4', studentName: 'Ana Costa', studentEmail: 'ana.costa@example.com' },
  { id: 'a4', vagaId: 'v3', vaga: 'Monitor de Front-end', status: 'Em Análise', professor: 'Prof. Costa', studentId: 'u6', studentName: 'Lucia Ferreira', studentEmail: 'lucia.ferreira@example.com' },
  { id: 'a5', vagaId: 'v5', vaga: 'Monitor de Cálculo I', status: 'Em Análise', professor: 'Dr. Fernandes', studentId: 'u4', studentName: 'Ana Costa', studentEmail: 'ana.costa@example.com' }
]

// MODIFICAÇÃO: Adicionado 'grade' (CR) para os Alunos
export const mockUsers = [
  { id: 'u1', name: 'João Silva', role: 'Aluno', email: 'joao.silva@example.com', curso: 'Ciência da Computação', grade: 9.2 },
  { id: 'u2', name: 'Mariana Souza', role: 'Professor', email: 'mariana.souza@example.com' },
  { id: 'u3', name: 'Carlos Pereira', role: 'Administrador', email: 'carlos.pereira@example.com' },
  { id: 'u4', name: 'Ana Costa', role: 'Aluno', email: 'ana.costa@example.com', curso: 'Design e Web', grade: 8.5 },
  { id: 'u5', name: 'Roberto Santos', role: 'Professor', email: 'roberto.santos@example.com' },
  { id: 'u6', name: 'Lucia Ferreira', role: 'Aluno', email: 'lucia.ferreira@example.com', curso: 'Engenharia', grade: 7.8 }
]

export const mockApplicants = [
  { id: 'ap1', vagaId: 'v1', nome: 'João Silva', curso: 'Ciência da Computação', email: 'joao.silva@example.com', grade: 9.2, descricao: 'Já auxiliei colegas em listas e tenho facilidade em explicar conceitos.', selected: false, relatorio: '' },
  { id: 'ap2', vagaId: 'v1', nome: 'Mariana Souza', curso: 'Ciência da Computação', email: 'mariana.souza@example.com', grade: 8.7, descricao: 'Participei de projetos de extensão e tenho disponibilidade no horário solicitado.', selected: true, relatorio: 'Atuou como monitor na disciplina no semestre anterior com desempenho satisfatório.' },
  { id: 'ap3', vagaId: 'v2', nome: 'Pedro Santos', curso: 'Sistemas de Informação', email: 'pedro.santos@example.com', grade: 5.5, descricao: 'Tenho experiência prática em bancos de dados e gosto de ensinar.', selected: false, relatorio: '' },
  { id: 'ap4', vagaId: 'v3', nome: 'Ana Pereira', curso: 'Design e Web', email: 'ana.pereira@example.com', grade: 9.0, descricao: 'Criei materiais didáticos para aulas práticas.', selected: false, relatorio: '' },
  { id: 'ap5', vagaId: 'v3', nome: 'Lucas Almeida', curso: 'Design e Web', email: 'lucas.almeida@example.com', grade: 8.0, descricao: 'Tenho interesse em orientação e revisão de exercícios.', selected: false, relatorio: '' }
]

export default { mockVagas, mockApplications, mockUsers, mockApplicants }