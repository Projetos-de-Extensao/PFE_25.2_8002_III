import React, { useState, useMemo } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import PageContainer from '../components/PageContainer'
import CustomSelect from '../components/CustomSelect'
import { mockApplications, mockVagas } from '../data/mockData'

export default function AdminCandidaturasPage() {
  const navigate = useNavigate()

  // --- ESTADOS DOS FILTROS ---
  const [searchQuery, setSearchQuery] = useState('') // Filtro por Nome do Aluno
  const [courseFilter, setCourseFilter] = useState('Todos')
  const [professorFilter, setProfessorFilter] = useState('Todos')

  // Função auxiliar para cores de status
  function statusBadge(status){
    const base = 'inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold '
    if(status === 'Aceito') return base + 'bg-green-500 text-black'
    if(status === 'Rejeitado') return base + 'bg-red-500 text-black'
    if(status === 'Em Análise') return base + 'bg-orange-400 text-black'
    return base + 'bg-slate-300 text-black'
  }

  // 1. ENRIQUECIMENTO DE DADOS: Adiciona o 'curso' em cada candidatura
  // Cruzamos a candidatura com a vaga para saber qual é o curso
  const enrichedApplications = useMemo(() => {
    return mockApplications.map(app => {
      const vaga = mockVagas.find(v => v.id === app.vagaId)
      return {
        ...app,
        curso: vaga ? vaga.curso : 'N/A' 
      }
    })
  }, [])

  // 2. OPÇÕES PARA OS SELECTS (Dinâmicas, baseadas nos dados existentes)
  const courseOptions = useMemo(() => {
    const courses = [...new Set(enrichedApplications.map(a => a.curso))]
    return [{ value: 'Todos', label: 'Todos os Cursos' }, ...courses.map(c => ({ value: c, label: c }))]
  }, [enrichedApplications])

  const professorOptions = useMemo(() => {
    const professors = [...new Set(enrichedApplications.map(a => a.professor))]
    return [{ value: 'Todos', label: 'Todos os Professores' }, ...professors.map(p => ({ value: p, label: p }))]
  }, [enrichedApplications])

  // 3. LÓGICA DE FILTRAGEM (Nome Aluno + Curso + Professor)
  const filteredApps = enrichedApplications.filter(app => {
    // Filtro de Texto (Nome do Aluno - verifica se studentName existe antes de dar lowerCase)
    const studentName = app.studentName || ''
    const matchesSearch = studentName.toLowerCase().includes(searchQuery.toLowerCase())
    
    // Filtro de Curso
    const matchesCourse = courseFilter === 'Todos' || app.curso === courseFilter
    
    // Filtro de Professor
    const matchesProfessor = professorFilter === 'Todos' || app.professor === professorFilter

    return matchesSearch && matchesCourse && matchesProfessor
  })

  // 4. AGRUPAMENTO POR ALUNO (Feito APÓS a filtragem para mostrar os resultados)
  const groupedApplications = useMemo(() => {
    return filteredApps.reduce((groups, app) => {
      const studentId = app.studentId || 'unknown'
      if (!groups[studentId]) {
        groups[studentId] = {
          studentName: app.studentName || 'Aluno Desconhecido',
          studentEmail: app.studentEmail || 'Email não informado',
          studentId: app.studentId,
          applications: []
        }
      }
      groups[studentId].applications.push(app)
      return groups
    }, {})
  }, [filteredApps])

  const studentsList = Object.values(groupedApplications)

  return (
    <PageContainer>
      <div className="w-full max-w-none md:max-w-6xl mx-auto">
        <div className="rounded-xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/60 p-6 shadow-sm">
          
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Gestão de Candidaturas</h1>
            </div>
          </div>

          {/* --- BARRA DE FILTROS --- */}
          <div className="flex flex-col xl:flex-row gap-4 mb-8 bg-slate-50 dark:bg-slate-900/30 p-4 rounded-lg border border-slate-100 dark:border-slate-700/50">
            
            {/* 1. Busca por Nome do Aluno */}
            <div className="flex-1 min-w-[250px]">
                <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase">Buscar Aluno</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pr-2 text-gray-400 pointer-events-none z-10">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Ex: João Silva..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
            className="input-bg w-full border border-slate-200 dark:border-slate-600 rounded-lg py-2.5 pl-11 pr-3 text-slate-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                </div>
            </div>

            {/* 2. Filtro por Curso */}
            <div className="w-full xl:w-56">
               <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase">Por Curso</label>
               <CustomSelect 
                  value={courseFilter}
                  onChange={setCourseFilter}
                  options={courseOptions}
                  placeholder="Selecione..."
               />
            </div>

            {/* 3. Filtro por Professor */}
            <div className="w-full xl:w-56">
               <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase">Por Professor</label>
               <CustomSelect 
                  value={professorFilter}
                  onChange={setProfessorFilter}
                  options={professorOptions}
                  placeholder="Selecione..."
               />
            </div>
            
            {/* Botão Limpar */}
            {(searchQuery || courseFilter !== 'Todos' || professorFilter !== 'Todos') && (
              <div className="flex items-end">
                <button 
                  onClick={() => { setSearchQuery(''); setCourseFilter('Todos'); setProfessorFilter('Todos'); }}
                  className="h-[42px] px-4 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-900/30 transition-colors w-full xl:w-auto"
                >
                  Limpar
                </button>
              </div>
            )}
          </div>

          {/* --- LISTA DE ALUNOS E CANDIDATURAS --- */}
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 ml-1">
            Exibindo {filteredApps.length} candidaturas de {studentsList.length} alunos encontrados.
          </p>

          <div className="space-y-6">
            {studentsList.map((studentGroup) => (
              /* Card do Aluno */
              <div key={studentGroup.studentId} className="rounded-lg border border-slate-200 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-700/30 overflow-hidden transition-all hover:border-blue-300 dark:hover:border-blue-700">
                
                {/* Cabeçalho do Aluno */}
                <div className="p-4 border-b border-slate-200 dark:border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-100 dark:bg-slate-700/50">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold text-lg border border-blue-200 dark:border-blue-800">
                      {studentGroup.studentName.charAt(0)}
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                        {studentGroup.studentName}
                      </h2>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {studentGroup.studentEmail}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <Link to={`/admin/users/${studentGroup.studentId}`} className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline bg-white dark:bg-slate-800 px-3 py-1.5 rounded border border-slate-200 dark:border-slate-600 shadow-sm">
                      Ver Perfil Completo →
                    </Link>
                  </div>
                </div>

                {/* Lista de Vagas do Aluno */}
                <div className="p-0">
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-slate-200 dark:border-slate-700/60 text-gray-500 dark:text-gray-400 bg-white dark:bg-slate-800/40">
                          <th className="py-3 px-4 font-medium w-1/2">Vaga / Curso</th>
                          <th className="py-3 px-4 font-medium">Professor</th>
                          <th className="py-3 px-4 font-medium">Status</th>
                          <th className="py-3 px-4 font-medium text-right">Ação</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-700/60">
                        {studentGroup.applications.map(app => (
                          <tr key={app.id} className="hover:bg-white dark:hover:bg-slate-700/40 transition-colors">
                            <td className="py-3 px-4">
                              <div className="font-medium text-slate-900 dark:text-white">{app.vaga}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 flex items-center gap-2">
                                <span className="bg-slate-200 dark:bg-slate-600 px-1.5 rounded text-[10px]">{app.curso}</span>
                                <span>ID: {app.vagaId}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-slate-700 dark:text-gray-300">
                              {app.professor}
                            </td>
                            <td className="py-3 px-4">
                              <span className={statusBadge(app.status)}>{app.status}</span>
                            </td>
                            <td className="py-3 px-4 text-right">
                              <Link to={`/vaga/${app.vagaId}`} className="text-blue-600 dark:text-blue-400 hover:underline text-xs sm:text-sm">
                                Ver Vaga
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}

            {studentsList.length === 0 && (
              <div className="text-center py-12 bg-slate-50 dark:bg-slate-900/30 rounded-lg border border-dashed border-slate-300 dark:border-slate-700">
                <p className="text-gray-500 dark:text-gray-400">
                  Nenhuma candidatura encontrada.
                  {searchQuery && <span> para "<strong>{searchQuery}</strong>"</span>}
                </p>
              </div>
            )}
          </div>
          
          <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-700/60">
             <button onClick={() => navigate('/admin')} className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
                <span>←</span> Voltar ao Painel
             </button>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}