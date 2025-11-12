import React from 'react'
import { useNavigate } from 'react-router-dom'
import PageContainer from '../components/PageContainer'
import { mockVagas } from '../data/mockData'

// Simple mock users for the admin page
const mockUsers = [
  { id: 'u1', name: 'João Silva', role: 'Aluno', email: 'joao.silva@example.com' },
  { id: 'u2', name: 'Mariana Souza', role: 'Professor', email: 'mariana.souza@example.com' },
  { id: 'u3', name: 'Carlos Pereira', role: 'Administrador', email: 'carlos.pereira@example.com' }
]

export default function AdministratorDashboard(){
  const navigate = useNavigate()
  
  

  return (
    <PageContainer>
      <div className="w-full max-w-none md:max-w-6xl mx-auto space-y-4 sm:space-y-6">
        <div className="rounded-none md:rounded-xl border-0 md:border border-slate-700/60 bg-slate-800/60 p-4 sm:p-6 md:p-8 shadow-sm">
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 tracking-tight">Painel do Administrador</h1>
          <p className="text-sm text-gray-300 mb-5 sm:mb-6 leading-relaxed">Aqui você pode visualizar e gerenciar vagas e usuários do sistema.</p>

          <div className="mb-4 flex flex-col sm:flex-row gap-2">
            <button onClick={() => navigate('/admin/vagas/novo')} className="bg-amber-500 hover:bg-amber-400 text-white px-4 py-2 rounded-md text-sm font-medium w-full sm:w-auto">Criar Nova Vaga</button>
          </div>

          <h2 className="text-base sm:text-lg font-semibold text-white mb-3">Vagas</h2>
          <div className="space-y-3">
            {mockVagas.map(vaga => (
              <div key={vaga.id} className="rounded-lg border border-slate-700/60 bg-slate-700/40 p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex-1">
                  <button onClick={() => navigate(`/vaga/${vaga.id}`)} className="text-left text-white font-semibold text-sm sm:text-base leading-relaxed hover:underline">
                    {vaga.titulo}
                  </button>
                  <div className="text-xs sm:text-sm text-gray-200 mt-1">{vaga.curso} — {vaga.professor}</div>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto flex-wrap sm:flex-nowrap">
                  <button onClick={() => navigate(`/vaga/${vaga.id}`)} className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 rounded-md text-xs sm:text-sm flex-1 sm:flex-none">Ver detalhes</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-none md:rounded-xl border-0 md:border border-slate-700/60 bg-slate-800/60 p-4 sm:p-6 md:p-8 shadow-sm">
          <h2 className="text-base sm:text-lg font-semibold text-white mb-3">Usuários</h2>

          <div className="space-y-3">
            {mockUsers.map(user => (
              <div key={user.id} className="rounded-lg border border-slate-700/60 bg-slate-700/40 p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex-1">
                  <button onClick={() => navigate(`/admin/users/${user.id}`)} className="text-left text-white font-semibold text-sm sm:text-base leading-relaxed hover:underline">
                    {user.name} <span className="text-xs sm:text-sm text-gray-300">({user.role})</span>
                  </button>
                  <div className="text-xs sm:text-sm text-gray-200 mt-1 break-words">{user.email}</div>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto flex-wrap sm:flex-nowrap">
                  <button onClick={() => navigate(`/admin/users/${user.id}`)} className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 rounded-md text-xs sm:text-sm flex-1 sm:flex-none">Ver detalhes</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
