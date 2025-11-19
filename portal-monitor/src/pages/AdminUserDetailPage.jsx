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

  // Busca o usuário nos dados mockados
  const user = useMemo(() => mockUsers.find(u => u.id === id), [id])
  
  const [editMode, setEditMode] = useState(false)
  
  // Inicializa o formulário com os dados do usuário, incluindo o CURSO
  const [form, setForm] = useState({
    name: user?.name || '',
    role: user?.role || 'Aluno',
    email: user?.email || '',
    curso: user?.curso || '' // Novo campo
  })

  const onChange = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSave = () => {
    // Simulação de salvamento
    alert(`Usuário atualizado (simulação):\nNome: ${form.name}\nRole: ${form.role}\nCurso: ${form.curso || 'N/A'}`)
    setEditMode(false)
    // Em um app real, aqui você atualizaria o backend ou o contexto
    navigate('/admin') // Volta para a lista ou mantém na página (opcional)
  }

  const handleCancel = () => {
    // Reseta para os valores originais
    setForm({ 
      name: user?.name || '', 
      role: user?.role || 'Aluno', 
      email: user?.email || '',
      curso: user?.curso || ''
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

  return (
    <PageContainer>
      <div className="w-full max-w-none md:max-w-3xl mx-auto space-y-4 sm:space-y-6">
        {/* Painel Principal */}
        <div className="rounded-none md:rounded-xl border-0 md:border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/60 p-4 sm:p-6 md:p-8 shadow-sm">
          
          {/* Título */}
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1 sm:mb-2 tracking-tight">Detalhes do Usuário</h1>
          
          {!user ? (
            <p className="text-gray-600 dark:text-gray-300 text-sm">Usuário não encontrado.</p>
          ) : (
            <div className="space-y-4 mt-4">
              {!editMode ? (
                <>
                  {/* --- MODO DE VISUALIZAÇÃO --- */}
                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700">
                        <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Nome</span>
                        <div className="text-slate-900 dark:text-white text-lg font-medium">{user.name}</div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 p-3 rounded-lg bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700">
                            <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Papel</span>
                            <div className="text-slate-900 dark:text-white">{user.role}</div>
                        </div>
                        
                        {/* Exibe o Curso apenas se existir (Geralmente Alunos) */}
                        {(user.curso || user.role === 'Aluno') && (
                            <div className="flex-1 p-3 rounded-lg bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700">
                                <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Curso</span>
                                <div className="text-slate-900 dark:text-white">{user.curso || 'Não informado'}</div>
                            </div>
                        )}
                    </div>

                    <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700">
                        <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">E-mail</span>
                        <div className="text-slate-900 dark:text-white break-all">{user.email}</div>
                    </div>
                  </div>
                </>
              ) : (
                /* --- MODO DE EDIÇÃO --- */
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1" htmlFor="name">Nome</label>
                    <input id="name" type="text" value={form.name} onChange={onChange('name')} 
                      className="input-bg w-full border border-slate-200 dark:border-slate-700/60 text-slate-900 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500/70" required />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1" htmlFor="role">Papel</label>
                        <select id="role" value={form.role} onChange={onChange('role')} 
                          className="input-bg w-full border border-slate-200 dark:border-slate-700/60 text-slate-900 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500/70">
                          <option>Aluno</option>
                          <option>Professor</option>
                          <option>Administrador</option>
                        </select>
                      </div>

                      {/* Campo Curso só aparece se o papel for Aluno */}
                      {form.role === 'Aluno' && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1" htmlFor="curso">Curso</label>
                            <input id="curso" type="text" value={form.curso} onChange={onChange('curso')} placeholder="Ex: Engenharia"
                              className="input-bg w-full border border-slate-200 dark:border-slate-700/60 text-slate-900 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500/70" />
                          </div>
                      )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1" htmlFor="email">E-mail</label>
                    <input id="email" type="email" value={form.email} onChange={onChange('email')} 
                      className="input-bg w-full border border-slate-200 dark:border-slate-700/60 text-slate-900 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500/70" required />
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-4 border-t border-slate-200 dark:border-slate-700/60">
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