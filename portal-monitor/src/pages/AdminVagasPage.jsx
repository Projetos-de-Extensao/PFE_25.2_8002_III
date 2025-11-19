import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import PageContainer from '../components/PageContainer'
import { mockVagas } from '../data/mockData'

export default function AdminVagasPage() {
  const navigate = useNavigate()

  return (
    <PageContainer>
      <div className="w-full max-w-none md:max-w-6xl mx-auto">
        <div className="rounded-xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/60 p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Todas as Vagas ({mockVagas.length})</h1>
            <button onClick={() => navigate('/admin/vagas/novo')} className="bg-amber-500 hover:bg-amber-400 text-white px-4 py-2 rounded-md text-sm font-medium">
              + Nova Vaga
            </button>
          </div>

          <div className="space-y-3">
            {mockVagas.map(vaga => (
              <div key={vaga.id} className="rounded-lg border border-slate-200 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-700/40 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <Link to={`/vaga/${vaga.id}`} className="text-lg font-semibold text-slate-900 dark:text-white hover:text-blue-500 hover:underline">
                    {vaga.titulo}
                  </Link>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    <span className="font-medium">Curso:</span> {vaga.curso} • <span className="font-medium">Prof:</span> {vaga.professor}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 line-clamp-1">
                    {vaga.descricao}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                   <button onClick={() => navigate(`/vaga/${vaga.id}/editar`)} className="bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-slate-600 dark:text-white px-3 py-2 rounded-md text-sm font-medium">
                     Editar
                   </button>
                   <button className="bg-red-100 hover:bg-red-200 text-red-700 dark:bg-red-900/30 dark:text-red-300 px-3 py-2 rounded-md text-sm font-medium">
                     Excluir
                   </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
             <button onClick={() => navigate('/admin')} className="text-blue-600 dark:text-blue-400 hover:underline">← Voltar ao Painel</button>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}