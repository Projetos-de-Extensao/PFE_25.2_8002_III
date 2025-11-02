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
  }
]

export const mockApplications = [
  { id: 'a1', vagaId: 'v1', vaga: 'Monitor de Algoritmos', status: 'Em Análise', professor: 'Dr. Silva' },
  { id: 'a2', vagaId: 'v2', vaga: 'Monitor de Banco de Dados', status: 'Aceito', professor: 'Profa. Almeida' },
  { id: 'a3', vagaId: 'v3', vaga: 'Monitor de Front-end', status: 'Rejeitado', professor: 'Prof. Costa' },
  { id: 'a4', vagaId: 'v3', vaga: 'Monitor de Front-end', status: 'Em Análise', professor: 'Prof. Costa' }
]

export default { mockVagas, mockApplications }
