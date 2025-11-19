import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import PageContainer from '../components/PageContainer'
import { mockApplications } from '../data/mockData'

export default function AdminCandidaturasPage() {
  const navigate = useNavigate()

  // Função auxiliar para cores de status (copiada de MyApplicationsPage)
  function statusBadge(status){
    const base = 'inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold '
    if(status === 'Aceito') return base + 'bg-green-500 text-black'
    if(status === 'Rejeitado') return base + 'bg-red-500 text-black'
    if(status === 'Em Análise') return base + 'bg-orange-400 text-black'
    return base + 'bg-slate-300 text-black'
  }

  return (
    <PageContainer>
      <div className="w-full max-w-none md:max-w-6xl mx-auto">
        <div className="rounded-xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/60 p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Todas as Candidaturas ({mockApplications.length})</h1>
          </div>

          <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700/60">
            <table className="min-w-full text-left table-auto">
              <thead>
                <tr className="text-slate-900 dark:text-gray-300 text-sm bg-slate-200 dark:bg-slate-700/60">
                  <th className="py-3 px-4">Vaga</th>
                  <th className="py-3 px-4">Professor</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Ações</th>
                </tr>
              </thead>
              <tbody>
                {mockApplications.map(app => (
                  <tr key={app.id} className="border-t border-slate-200 dark:border-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-700/40">
                    <td className="py-3 px-4 text-sm text-slate-900 dark:text-gray-100 font-medium">
                      {app.vaga}
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-normal mt-0.5">ID: {app.vagaId}</div>
                    </td>
                    <td className="py-3 px-4 text-sm text-slate-900 dark:text-gray-100">{app.professor}</td>
                    <td className="py-3 px-4 text-sm"><span className={statusBadge(app.status)}>{app.status}</span></td>
                    <td className="py-3 px-4 text-sm">
                       <Link to={`/vaga/${app.vagaId}`} className="text-blue-600 dark:text-blue-400 hover:underline">Ver Vaga</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6">
             <button onClick={() => navigate('/admin')} className="text-blue-600 dark:text-blue-400 hover:underline">← Voltar ao Painel</button>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}