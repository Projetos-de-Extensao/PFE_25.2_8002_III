import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import PageContainer from '../components/PageContainer'
import CustomSelect from '../components/CustomSelect'
import { mockUsers } from '../data/mockData'

export default function AdminUsersListPage() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  
  // Pega o filtro da URL (ex: ?role=Professor) ou usa 'Todos' como padrão
  const initialRole = searchParams.get('role') || 'Todos'
  const [userFilter, setUserFilter] = useState(initialRole)

  // Atualiza a URL quando o filtro muda (opcional, mas bom para UX)
  useEffect(() => {
    setSearchParams(userFilter === 'Todos' ? {} : { role: userFilter })
  }, [userFilter, setSearchParams])

  const filteredUsers = userFilter === 'Todos' 
    ? mockUsers 
    : mockUsers.filter(user => user.role === userFilter)

  const userFilterOptions = [
    { value: 'Todos', label: 'Todos os Usuários' },
    { value: 'Aluno', label: 'Alunos' },
    { value: 'Professor', label: 'Professores' },
    { value: 'Administrador', label: 'Administradores' }
  ]

  return (
    <PageContainer>
      <div className="w-full max-w-none md:max-w-6xl mx-auto">
        <div className="rounded-xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/60 p-6 shadow-sm">
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Gerenciar Usuários</h1>
            
            <div className="w-full md:w-64">
               <CustomSelect 
                  value={userFilter}
                  onChange={setUserFilter}
                  options={userFilterOptions}
                  placeholder="Filtrar por..."
               />
            </div>
          </div>

          <div className="space-y-3">
            {filteredUsers.length > 0 ? (
                filteredUsers.map(user => (
                <div key={user.id} className="rounded-lg border border-slate-200 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-700/40 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-slate-300 dark:hover:border-slate-500 transition-colors">
                    <div className="flex-1">
                        <div className="font-bold text-slate-900 dark:text-white text-lg">{user.name}</div>
                        <div className="flex items-center gap-2 mt-1">
                           <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200">
                             {user.role}
                           </span>
                           <span className="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>
                        </div>
                    </div>
                    <div>
                      <button onClick={() => navigate(`/admin/users/${user.id}`)} className="bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-slate-600 dark:text-white px-4 py-2 rounded-md text-sm font-medium">
                        Ver Detalhes
                      </button>
                    </div>
                </div>
                ))
            ) : (
                <div className="text-center py-12 bg-slate-50 dark:bg-slate-800/30 rounded-lg border border-dashed border-slate-300 dark:border-slate-700">
                  <p className="text-gray-500 dark:text-gray-400">Nenhum usuário do tipo <strong>{userFilter}</strong> encontrado.</p>
                </div>
            )}
          </div>

          <div className="mt-8">
             <button onClick={() => navigate('/admin')} className="text-blue-600 dark:text-blue-400 hover:underline">← Voltar ao Painel</button>
          </div>

        </div>
      </div>
    </PageContainer>
  )
}