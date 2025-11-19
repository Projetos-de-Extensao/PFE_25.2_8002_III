import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageContainer from '../components/PageContainer'
import CustomSelect from '../components/CustomSelect'
import { mockVagas, mockUsers, mockApplications } from '../data/mockData'

export default function AdministratorDashboard(){
  const navigate = useNavigate()
  const [userFilter, setUserFilter] = useState('Professor')

  const totalVagas = mockVagas.length
  const vagasAbertas = totalVagas 
  const totalAlunos = mockUsers.filter(u => u.role === 'Aluno').length
  const totalProfessores = mockUsers.filter(u => u.role === 'Professor').length
  const totalCandidaturas = mockApplications.length

  const filteredUsers = userFilter === 'Todos' 
    ? mockUsers 
    : mockUsers.filter(user => user.role === userFilter)

  const userFilterOptions = [
    { value: 'Todos', label: 'Todos' },
    { value: 'Aluno', label: 'Alunos' },
    { value: 'Professor', label: 'Professores' },
    { value: 'Administrador', label: 'Administradores' }
  ]
  
  return (
    <PageContainer>
      <div className="w-full max-w-none md:max-w-6xl mx-auto space-y-4 sm:space-y-6">
        
        {/* --- PAINEL DE CONTADORES INTERATIVO --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Card Vagas -> Vai para página de todas as vagas */}
            <div 
                onClick={() => navigate('/admin/vagas')}
                className="bg-blue-600 text-white p-4 rounded-xl shadow-sm border border-blue-500 cursor-pointer hover:bg-blue-700 transition-all transform hover:-translate-y-1"
            >
                <div className="text-2xl font-bold">{vagasAbertas}</div>
                <div className="text-xs opacity-90 font-medium">Vagas Abertas</div>
            </div>

            {/* Card Candidaturas -> Vai para página de todas as candidaturas */}
            <div 
                onClick={() => navigate('/admin/candidaturas')}
                className="bg-purple-600 text-white p-4 rounded-xl shadow-sm border border-purple-500 cursor-pointer hover:bg-purple-700 transition-all transform hover:-translate-y-1"
            >
                <div className="text-2xl font-bold">{totalCandidaturas}</div>
                <div className="text-xs opacity-90 font-medium">Candidaturas</div>
            </div>

            {/* Card Professores -> Vai para lista de usuários filtrada */}
            <div 
                onClick={() => navigate('/admin/usuarios?role=Professor')}
                className="bg-emerald-600 text-white p-4 rounded-xl shadow-sm border border-emerald-500 cursor-pointer hover:bg-emerald-700 transition-all transform hover:-translate-y-1"
            >
                <div className="text-2xl font-bold">{totalProfessores}</div>
                <div className="text-xs opacity-90 font-medium">Professores</div>
            </div>

            {/* Card Alunos -> Vai para lista de usuários filtrada */}
            <div 
                onClick={() => navigate('/admin/usuarios?role=Aluno')}
                className="bg-indigo-600 text-white p-4 rounded-xl shadow-sm border border-indigo-500 cursor-pointer hover:bg-indigo-700 transition-all transform hover:-translate-y-1"
            >
                <div className="text-2xl font-bold">{totalAlunos}</div>
                <div className="text-xs opacity-90 font-medium">Alunos</div>
            </div>
        </div>

        {/* Painel de Vagas (Resumo) */}
        <div className="rounded-none md:rounded-xl border-0 md:border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/60 p-4 sm:p-6 md:p-8 shadow-sm">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1 sm:mb-2 tracking-tight">Painel do Administrador</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-5 sm:mb-6 leading-relaxed">Gerencie vagas, usuários e acompanhe as estatísticas do sistema.</p>

          <div className="mb-4 flex flex-col sm:flex-row gap-2">
            <button onClick={() => navigate('/admin/vagas/novo')} className="bg-amber-500 hover:bg-amber-400 text-white px-4 py-2 rounded-md text-sm font-medium w-full sm:w-auto">Criar Nova Vaga</button>
          </div>

          <div className="flex justify-between items-center mb-3">
            <h2 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">Vagas Recentes</h2>
            <button onClick={() => navigate('/admin/vagas')} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Ver todas</button>
          </div>
          
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
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Painel de Usuários (Resumo) */}
        <div className="rounded-none md:rounded-xl border-0 md:border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/60 p-4 sm:p-6 md:p-8 shadow-sm">
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
            {filteredUsers.slice(0, 5).map(user => (
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
            ))}
            {filteredUsers.length > 5 && (
               <div className="text-center pt-2">
                 <button onClick={() => navigate('/admin/usuarios')} className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Ver todos os usuários</button>
               </div>
            )}
          </div>
        </div>
      </div>
    </PageContainer>
  )
}