import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageContainer from '../components/PageContainer'
import CustomSelect from '../components/CustomSelect'
import { mockVagas, mockUsers, mockApplications } from '../data/mockData'

export default function AdministratorDashboard(){
  const navigate = useNavigate()
  
  // Estado para o filtro de usuários (Padrão: Professor)
  const [userFilter, setUserFilter] = useState('Professor')

  // --- CÁLCULO DAS ESTATÍSTICAS ---
  const totalVagas = mockVagas.length
  const vagasAbertas = totalVagas 
  
  const totalAlunos = mockUsers.filter(u => u.role === 'Aluno').length
  const totalProfessores = mockUsers.filter(u => u.role === 'Professor').length
  const totalCandidaturas = mockApplications.length

  // --- FILTRAGEM DE USUÁRIOS ---
  const filteredUsers = userFilter === 'Todos' 
    ? mockUsers 
    : mockUsers.filter(user => user.role === userFilter)

  // Opções para o CustomSelect
  const userFilterOptions = [
    { value: 'Todos', label: 'Todos' },
    { value: 'Aluno', label: 'Alunos' },
    { value: 'Professor', label: 'Professores' },
    { value: 'Administrador', label: 'Administradores' }
  ]

  // Função para ativar o filtro ao clicar no card de usuários
  const handleCardFilter = (role, sectionId) => {
    setUserFilter(role)
    const element = document.getElementById(sectionId)
    if(element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  return (
    <PageContainer>
      <div className="w-full max-w-none md:max-w-6xl mx-auto space-y-4 sm:space-y-6">
        
        {/* --- PAINEL DE CONTADORES INTERATIVO --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Card Vagas - Rola para a seção de vagas */}
            <div 
                onClick={() => document.getElementById('vagas-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white p-4 rounded-xl shadow-sm border border-blue-500 cursor-pointer hover:bg-blue-700 transition-all transform hover:-translate-y-1"
            >
                <div className="text-2xl font-bold">{vagasAbertas}</div>
                <div className="text-xs opacity-90 font-medium">Vagas Abertas</div>
            </div>

            {/* Card Candidaturas - Rola para a seção de vagas (onde as candidaturas residem) */}
            <div 
                onClick={() => document.getElementById('vagas-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-purple-600 text-white p-4 rounded-xl shadow-sm border border-purple-500 cursor-pointer hover:bg-purple-700 transition-all transform hover:-translate-y-1"
            >
                <div className="text-2xl font-bold">{totalCandidaturas}</div>
                <div className="text-xs opacity-90 font-medium">Candidaturas</div>
            </div>

            {/* Card Professores - Filtra a lista de usuários */}
            <div 
                onClick={() => handleCardFilter('Professor', 'users-section')}
                className={`p-4 rounded-xl shadow-sm border transition-all transform hover:-translate-y-1 cursor-pointer
                  ${userFilter === 'Professor' 
                    ? 'bg-emerald-700 border-emerald-400 ring-2 ring-emerald-300 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-900' 
                    : 'bg-emerald-600 border-emerald-500 hover:bg-emerald-700 text-white'
                  }`}
            >
                <div className="text-2xl font-bold text-white">{totalProfessores}</div>
                <div className="text-xs text-white opacity-90 font-medium flex justify-between items-center">
                  Professores
                  {userFilter === 'Professor' && <span className="bg-white text-emerald-800 text-[10px] px-1.5 rounded">Ativo</span>}
                </div>
            </div>

            {/* Card Alunos - Filtra a lista de usuários */}
            <div 
                onClick={() => handleCardFilter('Aluno', 'users-section')}
                className={`p-4 rounded-xl shadow-sm border transition-all transform hover:-translate-y-1 cursor-pointer
                  ${userFilter === 'Aluno' 
                    ? 'bg-indigo-700 border-indigo-400 ring-2 ring-indigo-300 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-900' 
                    : 'bg-indigo-600 border-indigo-500 hover:bg-indigo-700 text-white'
                  }`}
            >
                <div className="text-2xl font-bold text-white">{totalAlunos}</div>
                <div className="text-xs text-white opacity-90 font-medium flex justify-between items-center">
                  Alunos
                  {userFilter === 'Aluno' && <span className="bg-white text-indigo-800 text-[10px] px-1.5 rounded">Ativo</span>}
                </div>
            </div>
        </div>

        {/* Painel de Vagas */}
        <div id="vagas-section" className="rounded-none md:rounded-xl border-0 md:border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/60 p-4 sm:p-6 md:p-8 shadow-sm scroll-mt-24">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1 sm:mb-2 tracking-tight">Painel do Administrador</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-5 sm:mb-6 leading-relaxed">Gerencie vagas, usuários e acompanhe as estatísticas do sistema.</p>

          <div className="mb-4 flex flex-col sm:flex-row gap-2">
            <button onClick={() => navigate('/admin/vagas/novo')} className="bg-amber-500 hover:bg-amber-400 text-white px-4 py-2 rounded-md text-sm font-medium w-full sm:w-auto">Criar Nova Vaga</button>
          </div>

          <h2 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-3">Vagas Recentes</h2>
          <div className="space-y-3">
            {mockVagas.slice(0, 3).map(vaga => (
              <div key={vaga.id} className="rounded-lg border border-slate-200 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-700/40 p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex-1">
                  <button onClick={() => navigate(`/vaga/${vaga.id}`)} className="text-left text-slate-900 dark:text-white font-semibold text-sm sm:text-base leading-relaxed hover:underline">
                    {vaga.titulo}
                  </button>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-200 mt-1">{vaga.curso} — {vaga.professor}</div>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto flex-wrap sm:flex-nowrap">
                  <button onClick={() => navigate(`/vaga/${vaga.id}/editar`)} className="bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white px-3 py-2 rounded-md text-xs sm:text-sm flex-1 sm:flex-none">Editar</button>
                  <button onClick={() => alert('Remover vaga (simulação)')} className="bg-red-600 hover:bg-red-500 text-white px-3 py-2 rounded-md text-xs sm:text-sm flex-1 sm:flex-none">Remover</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Painel de Usuários com Filtro */}
        <div id="users-section" className="rounded-none md:rounded-xl border-0 md:border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/60 p-4 sm:p-6 md:p-8 shadow-sm scroll-mt-24">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
            <h2 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">Gerenciar Usuários</h2>
            <div className="w-full sm:w-56">
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
                <div key={user.id} className="rounded-lg border border-slate-200 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-700/40 p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-all hover:border-slate-400 dark:hover:border-slate-500">
                    <div className="flex-1">
                    <button onClick={() => navigate(`/admin/users/${user.id}`)} className="text-left text-slate-900 dark:text-white font-semibold text-sm sm:text-base leading-relaxed hover:underline">
                        {user.name} <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">({user.role})</span>
                    </button>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-200 mt-1 break-words">{user.email}</div>
                    </div>
                    <div className="flex items-center gap-2 w-full sm:w-auto flex-wrap sm:flex-nowrap">
                    <button onClick={() => navigate(`/admin/users/${user.id}`)} className="bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white px-3 py-2 rounded-md text-xs sm:text-sm flex-1 sm:flex-none">Detalhes</button>
                    </div>
                </div>
                ))
            ) : (
                <div className="text-center py-8 bg-slate-50 dark:bg-slate-800/30 rounded-lg border border-dashed border-slate-300 dark:border-slate-700">
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Nenhum usuário do tipo <strong>{userFilter}</strong> encontrado.</p>
                  <button onClick={() => setUserFilter('Todos')} className="mt-2 text-blue-500 text-xs hover:underline">Limpar filtros</button>
                </div>
            )}
          </div>
        </div>
      </div>
    </PageContainer>
  )
}