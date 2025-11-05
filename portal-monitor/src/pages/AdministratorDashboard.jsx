import React from 'react'
import PageContainer from '../components/PageContainer'
import { mockVagas } from '../data/mockData'

// Simple mock users for the admin page
const mockUsers = [
  { id: 'u1', name: 'João Silva', role: 'Aluno', email: 'joao.silva@example.com' },
  { id: 'u2', name: 'Mariana Souza', role: 'Professor', email: 'mariana.souza@example.com' },
  { id: 'u3', name: 'Carlos Pereira', role: 'Administrador', email: 'carlos.pereira@example.com' }
]

export default function AdministratorDashboard(){
  const handleEditVaga = (id) => {
    // placeholder: in a full app you'd open an editor or navigate
    alert(`Editar vaga ${id}`)
  }

  const handleRemoveVaga = (id) => {
    // placeholder: confirm and remove
    if(window.confirm('Remover vaga?')){
      alert(`Vaga ${id} removida (simulada)`)
    }
  }

  const handleEditUser = (id) => {
    alert(`Editar usuário ${id}`)
  }

  const handleRemoveUser = (id) => {
    if(window.confirm('Remover usuário?')){
      alert(`Usuário ${id} removido (simulado)`)
    }
  }

  return (
    <PageContainer>
      <div className="w-full max-w-6xl mx-auto space-y-6">
        <div className="rounded-xl border border-slate-700/60 bg-slate-800/60 p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-white mb-1 tracking-tight">Painel do Administrador</h1>
          <p className="text-sm text-gray-300 mb-6">Aqui você pode visualizar e gerenciar vagas e usuários do sistema.</p>

          <h2 className="text-lg font-semibold text-white mb-3">Vagas</h2>
          <div className="space-y-3">
            {mockVagas.map(vaga => (
              <div key={vaga.id} className="rounded-lg border border-slate-700/60 bg-slate-700/40 p-4 flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold">{vaga.titulo}</div>
                  <div className="text-sm text-gray-200">{vaga.curso} — {vaga.professor}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => handleEditVaga(vaga.id)} className="bg-amber-500 hover:bg-amber-400 text-white px-3 py-2 rounded-md text-sm">Editar Vaga</button>
                  <button onClick={() => handleRemoveVaga(vaga.id)} className="bg-red-600 hover:bg-red-500 text-white px-3 py-2 rounded-md text-sm">Remover</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-700/60 bg-slate-800/60 p-8 shadow-sm">
          <h2 className="text-lg font-semibold text-white mb-3">Usuários</h2>

          <div className="space-y-3">
            {mockUsers.map(user => (
              <div key={user.id} className="rounded-lg border border-slate-700/60 bg-slate-700/40 p-4 flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold">{user.name} <span className="text-sm text-gray-300">({user.role})</span></div>
                  <div className="text-sm text-gray-200">{user.email}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => handleEditUser(user.id)} className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-2 rounded-md text-sm">Editar Usuário</button>
                  <button onClick={() => handleRemoveUser(user.id)} className="bg-red-600 hover:bg-red-500 text-white px-3 py-2 rounded-md text-sm">Remover</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
