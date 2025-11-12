import React, { useState, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PageContainer from '../components/PageContainer'

// Simple mock users (mirrors AdministratorDashboard mock)
const mockUsers = [
  { id: 'u1', name: 'João Silva', role: 'Aluno', email: 'joao.silva@example.com' },
  { id: 'u2', name: 'Mariana Souza', role: 'Professor', email: 'mariana.souza@example.com' },
  { id: 'u3', name: 'Carlos Pereira', role: 'Administrador', email: 'carlos.pereira@example.com' }
]

export default function AdminUserDetailPage(){
  const { id } = useParams()
  const navigate = useNavigate()

  const isAuthenticated = typeof window !== 'undefined' && window.localStorage.getItem('isAuthenticated') === 'true'
  const userType = typeof window !== 'undefined' ? window.localStorage.getItem('userType') : null
  const isAdmin = isAuthenticated && userType === 'admin'

  const user = useMemo(() => mockUsers.find(u => u.id === id), [id])
  const [editMode, setEditMode] = useState(false)
  const [form, setForm] = useState({
    name: user?.name || '',
    role: user?.role || 'Aluno',
    email: user?.email || ''
  })

  const onChange = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSave = () => {
    // Static simulation: no persistence
    alert('Usuário atualizado (simulação)')
    setEditMode(false)
    navigate('/admin')
  }

  const handleCancel = () => {
    // Reset to original values
    setForm({ name: user?.name || '', role: user?.role || 'Aluno', email: user?.email || '' })
    setEditMode(false)
  }

  const handleRemove = () => {
    if(!isAdmin) return
    if(window.confirm('Remover usuário? Esta ação é simulada.')){
      alert(`Usuário ${user?.name || id} removido (simulado)`) 
      navigate('/admin')
    }
  }

  return (
    <PageContainer>
      <div className="w-full max-w-none md:max-w-3xl mx-auto space-y-4 sm:space-y-6">
        <div className="rounded-none md:rounded-xl border-0 md:border border-slate-700/60 bg-slate-800/60 p-4 sm:p-6 md:p-8 shadow-sm">
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 tracking-tight">Detalhes do Usuário</h1>
          {!user ? (
            <p className="text-gray-300 text-sm">Usuário não encontrado.</p>
          ) : (
            <div className="space-y-3">
              {!editMode ? (
                <>
                  <div className="text-white text-base"><span className="text-gray-300">Nome:</span> {user.name}</div>
                  <div className="text-white text-base"><span className="text-gray-300">Papel:</span> {user.role}</div>
                  <div className="text-white text-base break-words"><span className="text-gray-300">E-mail:</span> {user.email}</div>
                </>
              ) : (
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-1" htmlFor="name">Nome</label>
                    <input id="name" type="text" value={form.name} onChange={onChange('name')} className="w-full bg-slate-900/60 border border-slate-700/60 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500/70" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-1" htmlFor="role">Papel</label>
                    <select id="role" value={form.role} onChange={onChange('role')} className="w-full bg-slate-900/60 border border-slate-700/60 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500/70">
                      <option>Aluno</option>
                      <option>Professor</option>
                      <option>Administrador</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-1" htmlFor="email">E-mail</label>
                    <input id="email" type="email" value={form.email} onChange={onChange('email')} className="w-full bg-slate-900/60 border border-slate-700/60 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500/70" required />
                  </div>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-2">
                    <button type="submit" className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-md text-sm font-medium">Salvar</button>
                    <button type="button" onClick={handleCancel} className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-md text-sm font-medium">Cancelar</button>
                  </div>
                </form>
              )}
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mt-6">
            <button onClick={() => navigate(-1)} className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-md text-sm font-medium">Voltar</button>
            {isAdmin && !editMode && (
              <button onClick={() => setEditMode(true)} className="bg-amber-500 hover:bg-amber-400 text-white px-4 py-2 rounded-md text-sm font-medium">Editar Usuário</button>
            )}
            {isAdmin && (
              <button onClick={handleRemove} className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium">Remover Usuário</button>
            )}
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
