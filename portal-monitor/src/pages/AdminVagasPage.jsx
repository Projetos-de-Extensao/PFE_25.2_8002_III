import React, { useState, useMemo } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import PageContainer from '../components/PageContainer'
import CustomSelect from '../components/CustomSelect'
import { mockVagas } from '../data/mockData'

export default function AdminVagasPage() {
  const navigate = useNavigate()
  
  // Estados dos Filtros
  const [searchQuery, setSearchQuery] = useState('')
  const [professorFilter, setProfessorFilter] = useState('Todos')
  const [cursoFilter, setCursoFilter] = useState('Todos') // Filtro de Curso

  // Extrair lista única de professores a partir dos dados
  const professorOptions = useMemo(() => {
    const uniqueProfessors = [...new Set(mockVagas.map(v => v.professor))]
    return [
      { value: 'Todos', label: 'Todos os Professores' },
      ...uniqueProfessors.map(prof => ({ value: prof, label: prof }))
    ]
  }, [])

  // Extrair lista única de cursos a partir dos dados
  const cursoOptions = useMemo(() => {
    const uniqueCourses = [...new Set(mockVagas.map(v => v.curso))]
    return [
      { value: 'Todos', label: 'Todos os Cursos' },
      ...uniqueCourses.map(curso => ({ value: curso, label: curso }))
    ]
  }, [])

  // Lógica de Filtragem (Título + Professor + Curso)
  const filteredVagas = mockVagas.filter(vaga => {
    // 1. Filtro de Texto (Busca no Título)
    const matchesSearch = vaga.titulo.toLowerCase().includes(searchQuery.toLowerCase())
    
    // 2. Filtro de Professor
    const matchesProfessor = professorFilter === 'Todos' || vaga.professor === professorFilter

    // 3. Filtro de Curso
    const matchesCurso = cursoFilter === 'Todos' || vaga.curso === cursoFilter

    return matchesSearch && matchesProfessor && matchesCurso
  })

  return (
    <PageContainer>
      <div className="w-full max-w-none md:max-w-6xl mx-auto">
        <div className="rounded-xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/60 p-6 shadow-sm">
          
          {/* Cabeçalho da Página */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              Gerenciar Vagas <span className="text-base font-normal text-gray-500 dark:text-gray-400">({filteredVagas.length})</span>
            </h1>
            <button onClick={() => navigate('/admin/vagas/novo')} className="bg-amber-500 hover:bg-amber-400 text-white px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap w-full md:w-auto">
              + Nova Vaga
            </button>
          </div>

          {/* --- BARRA DE FILTROS --- */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6 bg-slate-50 dark:bg-slate-900/30 p-4 rounded-lg border border-slate-100 dark:border-slate-700/50">
            
            {/* 1. Campo de Busca por Título */}
            <div className="flex-1 min-w-[200px]">
                <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase">Buscar Vaga</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Ex: Monitor de Algoritmos..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="input-bg w-full border border-slate-200 dark:border-slate-600 rounded-lg py-2.5 pl-10 pr-3 text-slate-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                </div>
            </div>

            {/* 2. Select de Filtro por Professor */}
            <div className="w-full lg:w-56">
               <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase">Por Professor</label>
               <CustomSelect 
                  value={professorFilter}
                  onChange={setProfessorFilter}
                  options={professorOptions}
                  placeholder="Selecione..."
               />
            </div>

            {/* 3. Select de Filtro por Curso */}
            <div className="w-full lg:w-56">
               <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase">Por Curso</label>
               <CustomSelect 
                  value={cursoFilter}
                  onChange={setCursoFilter}
                  options={cursoOptions}
                  placeholder="Selecione..."
               />
            </div>
            
            {/* Botão Limpar */}
            {(searchQuery || professorFilter !== 'Todos' || cursoFilter !== 'Todos') && (
              <div className="flex items-end">
                <button 
                  onClick={() => { setSearchQuery(''); setProfessorFilter('Todos'); setCursoFilter('Todos'); }}
                  className="h-[42px] px-4 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-900/30 transition-colors w-full lg:w-auto"
                >
                  Limpar
                </button>
              </div>
            )}
          </div>

          {/* --- LISTA DE VAGAS --- */}
          <div className="space-y-3">
            {filteredVagas.length > 0 ? (
              filteredVagas.map(vaga => (
                <div key={vaga.id} className="rounded-lg border border-slate-200 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-700/40 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors hover:border-blue-300 dark:hover:border-blue-700">
                  <div className="flex-1">
                    <Link to={`/vaga/${vaga.id}`} className="text-lg font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:underline">
                      {vaga.titulo}
                    </Link>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mt-1 flex flex-wrap gap-x-3 gap-y-1">
                      <span className="flex items-center gap-1">
                        <span className="font-medium text-slate-700 dark:text-slate-400">Curso:</span> {vaga.curso}
                      </span>
                      <span className="text-gray-300 dark:text-gray-600 hidden sm:inline">|</span>
                      <span className="flex items-center gap-1">
                        <span className="font-medium text-slate-700 dark:text-slate-400">Prof:</span> {vaga.professor}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 line-clamp-1">
                      {vaga.descricao}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                     <button onClick={() => navigate(`/vaga/${vaga.id}/editar`)} className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 dark:bg-slate-600 dark:hover:bg-slate-500 dark:text-white dark:border-slate-500 px-3 py-2 rounded-md text-sm font-medium shadow-sm flex-1 sm:flex-none">
                       Editar
                     </button>
                     <button className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 dark:bg-red-900/20 dark:hover:bg-red-900/40 dark:text-red-400 dark:border-red-900/50 px-3 py-2 rounded-md text-sm font-medium shadow-sm flex-1 sm:flex-none">
                       Excluir
                     </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-slate-50 dark:bg-slate-800/30 rounded-lg border border-dashed border-slate-300 dark:border-slate-700">
                <p className="text-gray-500 dark:text-gray-400">
                  Nenhuma vaga encontrada com os filtros selecionados.
                </p>
              </div>
            )}
          </div>
          
          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700/60">
             <button onClick={() => navigate('/admin')} className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
                <span>←</span> Voltar ao Painel
             </button>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}