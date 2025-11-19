import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import PageContainer from '../components/PageContainer'
import CustomSelect from '../components/CustomSelect'
import { mockUsers } from '../data/mockData'

export default function AdminUsersListPage() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  
  // Pega o filtro da URL (ex: ?role=Professor) ou usa 'Todos' como padrão
  const initialRole = searchParams.get('role') || 'Todos'
  
  // Estados dos filtros
  const [userFilter, setUserFilter] = useState(initialRole)
  const [courseFilter, setCourseFilter] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOrder, setSortOrder] = useState('default') // Estado para ordenação

  // Atualiza a URL quando o filtro de papel muda
  useEffect(() => {
    setSearchParams(userFilter === 'Todos' ? {} : { role: userFilter })
    
    // Reseta filtros específicos de aluno se sair da aba aluno
    if (userFilter !== 'Aluno') {
      setCourseFilter('')
      setSortOrder('default')
    }
  }, [userFilter, setSearchParams])

  // --- OPÇÕES DE SELECT ---
  const userFilterOptions = [
    { value: 'Todos', label: 'Todos os Usuários' },
    { value: 'Aluno', label: 'Alunos' },
    { value: 'Professor', label: 'Professores' },
    { value: 'Administrador', label: 'Administradores' }
  ]

  const courseOptions = [
    { value: '', label: 'Todos os Cursos' },
    { value: 'Ciência da Computação', label: 'Ciência da Computação' },
    { value: 'Sistemas de Informação', label: 'Sistemas de Informação' },
    { value: 'Design e Web', label: 'Design e Web' },
    { value: 'Engenharia', label: 'Engenharia' }
  ]

  // Opções de Ordenação por CR
  const sortOptions = [
    { value: 'default', label: 'Padrão' },
    { value: 'desc', label: 'Maior CR (Decrescente)' },
    { value: 'asc', label: 'Menor CR (Crescente)' }
  ]

  // --- LÓGICA DE FILTRAGEM E ORDENAÇÃO ---
  const filteredUsers = useMemo(() => {
    // 1. Filtragem
    let result = mockUsers.filter(user => {
      const matchesRole = userFilter === 'Todos' || user.role === userFilter
      const matchesName = user.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCourse = courseFilter === '' || (user.curso && user.curso === courseFilter)
      return matchesRole && matchesName && matchesCourse
    })

    // 2. Ordenação por CR (Apenas para Alunos)
    if (userFilter === 'Aluno' && sortOrder !== 'default') {
      result.sort((a, b) => {
        const gradeA = a.grade || 0
        const gradeB = b.grade || 0
        return sortOrder === 'desc' ? gradeB - gradeA : gradeA - gradeB
      })
    }

    return result
  }, [userFilter, courseFilter, searchQuery, sortOrder])

  return (
    <PageContainer>
      <div className="w-full max-w-none md:max-w-6xl mx-auto">
        <div className="rounded-xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/60 p-6 shadow-sm">
          
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Gerenciar Usuários</h1>
            
          {/* --- BARRA DE FILTROS --- */}
          <div className="flex flex-col xl:flex-row gap-4 mb-6 bg-slate-50 dark:bg-slate-900/30 p-4 rounded-lg border border-slate-100 dark:border-slate-700/50">
            
            {/* 1. Busca por Nome */}
            <div className="flex-1 min-w-[200px]">
                <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase">Buscar</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pr-2 text-gray-400 pointer-events-none z-10">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Nome do usuário..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
            className="input-bg w-full border border-slate-200 dark:border-slate-600 rounded-lg py-2.5 pl-11 pr-3 text-slate-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                </div>
            </div>

            {/* 2. Filtro por Papel */}
            <div className="w-full xl:w-56">
               <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase">Tipo de Usuário</label>
               <CustomSelect 
                  value={userFilter}
                  onChange={setUserFilter}
                  options={userFilterOptions}
                  placeholder="Todos"
               />
            </div>

            {/* 3. Filtros Específicos de Aluno (Curso e CR) */}
            {userFilter === 'Aluno' && (
                <>
                  <div className="w-full xl:w-56">
                    <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase">Curso</label>
                    <CustomSelect 
                        value={courseFilter}
                        onChange={setCourseFilter}
                        options={courseOptions}
                        placeholder="Todos"
                    />
                  </div>
                  
                  {/* Filtro de Ordenação por CR */}
                  <div className="w-full xl:w-56">
                    <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase">Ordenar por CR</label>
                    <CustomSelect 
                        value={sortOrder}
                        onChange={setSortOrder}
                        options={sortOptions}
                        placeholder="Padrão"
                    />
                  </div>
                </>
            )}

            {/* Botão Limpar */}
            {(searchQuery || userFilter !== 'Todos' || courseFilter || sortOrder !== 'default') && (
                <div className="flex items-end">
                  <button 
                    onClick={() => { setSearchQuery(''); setUserFilter('Todos'); setCourseFilter(''); setSortOrder('default'); }}
                    className="h-[42px] px-4 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-900/30 transition-colors w-full xl:w-auto"
                  >
                    Limpar
                  </button>
                </div>
            )}
          </div>

          {/* --- LISTA DE USUÁRIOS --- */}
          <div className="space-y-3">
            {filteredUsers.length > 0 ? (
                filteredUsers.map(user => (
                <div key={user.id} className="rounded-lg border border-slate-200 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-700/40 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-slate-300 dark:hover:border-slate-500 transition-colors">
                    <div className="flex-1">
                        {/* Destaque do nome */}
                        <div className="font-bold text-slate-900 dark:text-white text-lg">{user.name}</div>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                           <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${
                               user.role === 'Administrador' ? 'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800' :
                               user.role === 'Professor' ? 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800' :
                               'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800'
                           }`}>
                             {user.role}
                           </span>
                           
                           {/* Badge do Curso */}
                           {user.curso && (
                             <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-slate-200 text-slate-700 border border-slate-300 dark:bg-slate-600 dark:text-slate-200 dark:border-slate-500">
                               {user.curso}
                             </span>
                           )}

                           {/* Badge do CR (Aparece se existir) */}
                           {user.grade && (
                             <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800" title="Coeficiente de Rendimento">
                               CR: {user.grade}
                             </span>
                           )}

                           <span className="text-sm text-gray-500 dark:text-gray-400 hidden sm:inline">•</span>
                           <span className="text-sm text-gray-500 dark:text-gray-400 break-all">{user.email}</span>
                        </div>
                    </div>
                    <div>
                      <button onClick={() => navigate(`/admin/users/${user.id}`)} className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 dark:bg-slate-600 dark:hover:bg-slate-500 dark:text-white dark:border-slate-500 px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm w-full sm:w-auto">
                        Ver Detalhes
                      </button>
                    </div>
                </div>
                ))
            ) : (
                <div className="text-center py-12 bg-slate-50 dark:bg-slate-800/30 rounded-lg border border-dashed border-slate-300 dark:border-slate-700">
                  <p className="text-gray-500 dark:text-gray-400">
                    Nenhum usuário encontrado. 
                    {searchQuery && <span> Busca: "<strong>{searchQuery}</strong>"</span>}
                    {userFilter !== 'Todos' && <span> Filtro: <strong>{userFilter}</strong></span>}
                    {courseFilter && <span> Curso: <strong>{courseFilter}</strong></span>}
                  </p>
                  {(searchQuery || userFilter !== 'Todos' || courseFilter) && (
                      <button 
                        onClick={() => { setSearchQuery(''); setUserFilter('Todos'); setCourseFilter(''); setSortOrder('default'); }}
                        className="mt-2 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                      >
                        Limpar todos os filtros
                      </button>
                  )}
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