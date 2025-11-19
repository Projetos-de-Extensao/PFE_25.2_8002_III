import React, { useState, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PageContainer from '../components/PageContainer'
import { mockUsers } from '../data/mockData'

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
    email: user?.email || '',
    curso: user?.curso || '',
    grade: user?.grade || ''
  })

  const onChange = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSave = () => {
    alert(`Usuário atualizado (simulação):\nNome: ${form.name}\nRole: ${form.role}\nCurso: ${form.curso || 'N/A'}\nCR: ${form.grade || 'N/A'}`)
    setEditMode(false)
    navigate('/admin') 
  }

  const handleCancel = () => {
    setForm({ 
      name: user?.name || '', 
      role: user?.role || 'Aluno', 
      email: user?.email || '',
      curso: user?.curso || '',
      grade: user?.grade || ''
    })
    setEditMode(false)
  }

  const handleRemove = () => {
    if(!isAdmin) return
    if(window.confirm('Remover usuário? Esta ação é simulada.')){
      alert(`Usuário ${user?.name || id} removido (simulado)`) 
      navigate('/admin')
    }
  }

  // Helper para definir se mostramos campos de aluno
  const showStudentFields = (form.role === 'Aluno' && editMode) || (user?.role === 'Aluno' && !editMode);

  return (
    <PageContainer>
      <div className="w-full max-w-none md:max-w-3xl mx-auto space-y-4 sm:space-y-6">
  <div className="rounded-xl md:rounded-2xl border-0 md:border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/60 p-4 sm:p-6 md:p-8 shadow-sm">
          
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1 sm:mb-2 tracking-tight">Detalhes do Usuário</h1>
          
          {!user ? (
            <p className="text-gray-600 dark:text-gray-300 text-sm">Usuário não encontrado.</p>
          ) : (
            <div className="space-y-4 mt-6">
              {!editMode ? (
                /* --- MODO DE VISUALIZAÇÃO (GRID) --- */
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                    
                    {/* Nome (Largura Total) */}
                    <div className="sm:col-span-12 p-3 rounded-lg bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700">
                        <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Nome</span>
                        <div className="text-slate-900 dark:text-white text-lg font-medium">{user.name}</div>
                    </div>

                    {/* Email (Largura Total) */}
                    <div className="sm:col-span-12 p-3 rounded-lg bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700">
                        <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">E-mail</span>
                        <div className="text-slate-900 dark:text-white break-all">{user.email}</div>
                    </div>

                    {/* Papel (Se for aluno ocupa menos espaço, se não for ocupa tudo ou metade) */}
                    <div className={`${showStudentFields ? 'sm:col-span-4' : 'sm:col-span-12'} p-3 rounded-lg bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700`}>
                        <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Papel</span>
                        <div className="text-slate-900 dark:text-white">{user.role}</div>
                    </div>
                    
                    {/* Curso e CR (Apenas se for Aluno) */}
                    {showStudentFields && (
                      <>
                        <div className="sm:col-span-6 p-3 rounded-lg bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700">
                            <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Curso</span>
                            <div className="text-slate-900 dark:text-white">{user.curso || 'Não informado'}</div>
                        </div>
                        <div className="sm:col-span-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700">
                            <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">CR</span>
                            <div className="text-slate-900 dark:text-white font-bold">{user.grade || '-'}</div>
                        </div>
                      </>
                    )}
                </div>
              ) : (
                /* --- MODO DE EDIÇÃO (GRID) --- */
                <form className="grid grid-cols-1 sm:grid-cols-12 gap-4" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                  
                  {/* Nome */}
                  <div className="sm:col-span-12">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1" htmlFor="name">Nome</label>
                    <input id="name" type="text" value={form.name} onChange={onChange('name')} 
                      className="input-bg w-full border border-slate-200 dark:border-slate-700/60 text-slate-900 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500/70" required />
                  </div>

                  {/* Email */}
                  <div className="sm:col-span-12">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1" htmlFor="email">E-mail</label>
                    <input id="email" type="email" value={form.email} onChange={onChange('email')} 
                      className="input-bg w-full border border-slate-200 dark:border-slate-700/60 text-slate-900 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500/70" required />
                  </div>
                  
                  {/* Papel */}
                  <div className={`${showStudentFields ? 'sm:col-span-4' : 'sm:col-span-12'}`}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1" htmlFor="role">Papel</label>
                    <select id="role" value={form.role} onChange={onChange('role')} 
                      className="input-bg w-full border border-slate-200 dark:border-slate-700/60 text-slate-900 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500/70">
                      <option>Aluno</option>
                      <option>Professor</option>
                      <option>Administrador</option>
                    </select>
                  </div>

                  {/* Campos Extras para Aluno */}
                  {showStudentFields && (
                      <>
                        <div className="sm:col-span-6">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1" htmlFor="curso">Curso</label>
                          <input id="curso" type="text" value={form.curso} onChange={onChange('curso')} placeholder="Ex: Engenharia"
                            className="input-bg w-full border border-slate-200 dark:border-slate-700/60 text-slate-900 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500/70" />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1" htmlFor="grade">CR</label>
                          <input id="grade" type="number" step="0.1" min="0" max="10" value={form.grade} onChange={onChange('grade')} placeholder="0.0"
                            className="input-bg w-full border border-slate-200 dark:border-slate-700/60 text-slate-900 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500/70" />
                        </div>
                      </>
                  )}

                  <div className="sm:col-span-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-4 border-t border-slate-200 dark:border-slate-700/60">
                    <button type="submit" className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-md text-sm font-medium">Salvar Alterações</button>
                    <button type="button" onClick={handleCancel} className="bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white px-4 py-2 rounded-md text-sm font-medium">Cancelar</button>
                  </div>
                </form>
              )}
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mt-8 pt-4 border-t border-slate-200 dark:border-slate-700/60">
            {/* Botão Voltar */}
            <button onClick={() => navigate(-1)} className="bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white px-4 py-2 rounded-md text-sm font-medium">Voltar</button>
            
            {/* Botões de Ação Admin */}
            {isAdmin && !editMode && (
              <>
                <button onClick={() => setEditMode(true)} className="bg-amber-500 hover:bg-amber-400 text-white px-4 py-2 rounded-md text-sm font-medium">Editar Usuário</button>
                <button onClick={handleRemove} className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium">Remover Usuário</button>
              </>
            )}
          </div>
        </div>
      </div>
    </PageContainer>
  )
}