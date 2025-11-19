import React, { useMemo } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import PageContainer from '../components/PageContainer'
import { mockApplications } from '../data/mockData'

export default function AdminCandidaturasPage() {
  const navigate = useNavigate()

  // Função auxiliar para cores de status
  function statusBadge(status){
    const base = 'inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold '
    if(status === 'Aceito') return base + 'bg-green-500 text-black'
    if(status === 'Rejeitado') return base + 'bg-red-500 text-black'
    if(status === 'Em Análise') return base + 'bg-orange-400 text-black'
    return base + 'bg-slate-300 text-black'
  }

  // Lógica para agrupar candidaturas por Aluno
  const groupedApplications = useMemo(() => {
    return mockApplications.reduce((groups, app) => {
      const studentId = app.studentId
      if (!groups[studentId]) {
        groups[studentId] = {
          studentName: app.studentName,
          studentEmail: app.studentEmail,
          studentId: app.studentId,
          applications: []
        }
      }
      groups[studentId].applications.push(app)
      return groups
    }, {})
  }, [])

  // Transforma o objeto agrupado em array para facilitar o map
  const studentsList = Object.values(groupedApplications)

  return (
    <PageContainer>
      <div className="w-full max-w-none md:max-w-6xl mx-auto">
        <div className="rounded-xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/60 p-6 shadow-sm">
          
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Gestão de Candidaturas</h1>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Visualizando {mockApplications.length} candidaturas de {studentsList.length} alunos distintos.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {studentsList.map((studentGroup) => (
              /* Card do Aluno */
              <div key={studentGroup.studentId} className="rounded-lg border border-slate-200 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-700/30 overflow-hidden">
                
                {/* Cabeçalho do Aluno */}
                <div className="p-4 border-b border-slate-200 dark:border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-100 dark:bg-slate-700/50">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold text-lg">
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
                    <Link to={`/admin/users/${studentGroup.studentId}`} className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
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
                          <th className="py-3 px-4 font-medium w-1/2">Vaga</th>
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
                              <div className="text-xs text-gray-500 dark:text-gray-400">ID: {app.vagaId}</div>
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
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">Nenhuma candidatura encontrada no sistema.</p>
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