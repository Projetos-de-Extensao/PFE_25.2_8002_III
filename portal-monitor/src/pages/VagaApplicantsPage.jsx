import React, { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { mockVagas, mockApplicants } from '../data/mockData'
import PageContainer from '../components/PageContainer'
import CustomSelect from '../components/CustomSelect'

function readDemoApplicants(){
  try{ const raw = window.localStorage.getItem('demoApplicants'); return raw ? JSON.parse(raw) : [] }catch(e){ return [] }
}

function readSelectedIds(){
  try{ const raw = window.localStorage.getItem('selectedApplicants'); return raw ? JSON.parse(raw) : [] }catch(e){ return [] }
}

function writeSelectedIds(arr){ try{ window.localStorage.setItem('selectedApplicants', JSON.stringify(arr)) }catch(e){} }

function readRemovedSelectedIds(){
  try{ const raw = window.localStorage.getItem('removedSelectedApplicants'); return raw ? JSON.parse(raw) : [] }catch(e){ return [] }
}

function writeRemovedSelectedIds(arr){ try{ window.localStorage.setItem('removedSelectedApplicants', JSON.stringify(arr)) }catch(e){} }

export default function VagaApplicantsPage(){
  const { id } = useParams()
  const vaga = mockVagas.find(v => v.id === id) || { titulo: 'Vaga' }
  
  const [expanded, setExpanded] = useState(null)
  const [selectedIds, setSelectedIds] = useState(()=>readSelectedIds())
  const [removedSelectedIds, setRemovedSelectedIds] = useState(()=>readRemovedSelectedIds())

  // --- ESTADOS PARA FILTROS E ORDENAÇÃO ---
  const [searchQuery, setSearchQuery] = useState('')
  const [courseFilter, setCourseFilter] = useState('Todos')
  const [sortOrder, setSortOrder] = useState('default') // NOVO: Estado de ordenação

  // combine static mock applicants with demo applicants persisted in localStorage
  const combined = useMemo(()=>{
    const demo = readDemoApplicants()
    return [...mockApplicants, ...demo]
  }, [])

  // --- OPÇÕES DE FILTRO E ORDENAÇÃO ---
  const courseOptions = useMemo(() => {
    const applicantsForThisVaga = combined.filter(a => a.vagaId === id)
    const uniqueCourses = [...new Set(applicantsForThisVaga.map(a => a.curso))]
    return [
      { value: 'Todos', label: 'Todos os Cursos' },
      ...uniqueCourses.map(c => ({ value: c, label: c }))
    ]
  }, [combined, id])

  const sortOptions = [
    { value: 'default', label: 'Padrão' },
    { value: 'desc', label: 'Maior CR (Decrescente)' },
    { value: 'asc', label: 'Menor CR (Crescente)' }
  ]

  // --- LÓGICA DE FILTRAGEM E ORDENAÇÃO ---
  const filteredAndSortedApplicants = useMemo(() => {
    // 1. Filtragem
    let result = combined.filter(a => {
      const matchesId = a.vagaId === id
      const matchesName = a.nome.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCourse = courseFilter === 'Todos' || a.curso === courseFilter
      return matchesId && matchesName && matchesCourse
    })

    // 2. Ordenação (NOVO)
    if (sortOrder !== 'default') {
      result = result.sort((a, b) => {
        const gradeA = a.grade || 0
        const gradeB = b.grade || 0
        return sortOrder === 'desc' ? gradeB - gradeA : gradeA - gradeB
      })
    }

    return result
  }, [combined, id, searchQuery, courseFilter, sortOrder])


  // compute selection based on the filtered/sorted list
  const inProcess = filteredAndSortedApplicants.filter(a => {
    const isMockSelected = a.selected && !removedSelectedIds.includes(a.id)
    const isLocalSelected = selectedIds.includes(a.id)
    return !(isMockSelected || isLocalSelected)
  })
  
  // Note: For "selected", we might want to show them regardless of filter, 
  // but keeping them filtered/sorted is usually better UX in lists.
  const selected = filteredAndSortedApplicants.filter(a => (a.selected && !removedSelectedIds.includes(a.id)) || selectedIds.includes(a.id))

  function toggleExpand(id){ setExpanded(prev => prev === id ? null : id) }

  function handleSelect(appId){
    const ids = Array.from(new Set([...selectedIds, appId]))
    writeSelectedIds(ids)
    setSelectedIds(ids)
    setExpanded(null)
  }

  function handleUnselect(appId){
    const ok = window.confirm('Tem certeza que deseja remover a seleção deste candidato?')
    if(!ok) return
    if(selectedIds.includes(appId)){
      const ids = selectedIds.filter(i => i !== appId)
      writeSelectedIds(ids)
      setSelectedIds(ids)
      return
    }
    const removed = Array.from(new Set([...removedSelectedIds, appId]))
    writeRemovedSelectedIds(removed)
    setRemovedSelectedIds(removed)
  }

  return (
    <PageContainer>
      <div className="w-full max-w-4xl mx-auto">
        {/* Painel Principal */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-800/60 p-8 shadow-sm">
          
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Candidatos para: {vaga.titulo}</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Gerencie as candidaturas recebidas. Clique no nome para ver detalhes.</p>

        {/* --- BARRA DE FILTROS --- */}
        <div className="flex flex-col xl:flex-row gap-4 mb-8 bg-slate-50 dark:bg-slate-900/30 p-4 rounded-lg border border-slate-100 dark:border-slate-700/50">
            {/* 1. Busca por Nome */}
            <div className="flex-1 min-w-[200px]">
                <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase">Buscar Aluno</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pr-2 text-gray-400 pointer-events-none z-10">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Ex: Maria Silva..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
            className="input-bg w-full border border-slate-200 dark:border-slate-600 rounded-lg py-2.5 pl-11 pr-3 text-slate-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                </div>
            </div>

            {/* 2. Filtro por Curso */}
            <div className="w-full xl:w-56">
               <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase">Filtrar por Curso</label>
               <CustomSelect 
                  value={courseFilter}
                  onChange={setCourseFilter}
                  options={courseOptions}
                  placeholder="Selecione..."
               />
            </div>

             {/* 3. NOVO: Ordenação por Nota (CR) */}
             <div className="w-full xl:w-56">
               <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase">Ordenar por</label>
               <CustomSelect 
                  value={sortOrder}
                  onChange={setSortOrder}
                  options={sortOptions}
                  placeholder="Ordenação"
               />
            </div>

             {/* Botão Limpar */}
             {(searchQuery || courseFilter !== 'Todos' || sortOrder !== 'default') && (
              <div className="flex items-end">
                <button 
                  onClick={() => { setSearchQuery(''); setCourseFilter('Todos'); setSortOrder('default'); }}
                  className="h-[42px] px-4 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-900/30 transition-colors w-full xl:w-auto"
                >
                  Limpar
                </button>
              </div>
            )}
        </div>

        <section className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-white">Em processo <span className="text-sm font-normal text-gray-500">({inProcess.length})</span></h2>
          </div>
          
          <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700/60">
            <table className="min-w-full text-left">
              <thead>
                <tr className="text-slate-900 dark:text-gray-300 text-sm bg-slate-200 dark:bg-slate-700/60">
                  <th className="py-2 px-3">Nome</th>
                  <th className="py-2 px-3">Curso</th>
                  <th className="py-2 px-3">Nota (CR)</th> {/* Adicionei cabeçalho para Nota */}
                  <th className="py-2 px-3">Email</th>
                  <th className="py-2 px-3">Ação</th>
                </tr>
              </thead>
              <tbody>
                {inProcess.length > 0 ? (
                    inProcess.map(ap => (
                    <React.Fragment key={ap.id}>
                        <tr className="border-t border-slate-200 dark:border-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-700/40">
                        <td className="py-3 px-3 text-slate-900 dark:text-gray-100">
                            <button onClick={()=>toggleExpand(ap.id)} className="text-left w-full text-blue-600 dark:text-blue-300 hover:underline font-medium">{ap.nome}</button>
                        </td>
                        <td className="py-3 px-3 text-slate-900 dark:text-gray-100">{ap.curso}</td>
                        {/* Exibição da Nota na tabela principal */}
                        <td className="py-3 px-3 text-slate-900 dark:text-gray-100 font-medium">{ap.grade}</td>
                        <td className="py-3 px-3 text-slate-900 dark:text-gray-100">{ap.email}</td>
                        <td className="py-3 px-3">
                            <button onClick={()=>handleSelect(ap.id)} className="bg-green-500 hover:bg-green-400 text-black font-semibold px-3 py-1.5 rounded text-xs">Selecionar</button>
                        </td>
                        </tr>

                        {expanded === ap.id && (
                        <tr className="bg-slate-50 dark:bg-slate-700/50">
                            <td colSpan={5} className="py-3 px-3 text-slate-900 dark:text-gray-100">
                            <div className="space-y-2 p-2">
                                <div><strong className="text-slate-700 dark:text-gray-300">Descrição:</strong> {ap.descricao ?? '—'}</div>
                                <div><strong className="text-slate-700 dark:text-gray-300">CV:</strong> {ap.cvName ? ap.cvName : '—'}</div>
                            </div>
                            </td>
                        </tr>
                        )}
                    </React.Fragment>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5" className="py-8 text-center text-gray-500 dark:text-gray-400">
                            Nenhum candidato encontrado com os filtros atuais.
                        </td>
                    </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">Já selecionados <span className="text-sm font-normal text-gray-500">({selected.length})</span></h2>
          {selected.length === 0 ? (
            <div className="text-gray-600 dark:text-gray-300 text-sm italic border border-dashed border-slate-300 dark:border-slate-700 p-4 rounded-lg text-center">
                Nenhum candidato selecionado ainda.
            </div>
          ) : (
            <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700/60">
              <table className="min-w-full text-left">
                <thead>
                  <tr className="text-slate-900 dark:text-gray-300 text-sm bg-slate-200 dark:bg-slate-700/60">
                    <th className="py-2 px-3">Nome</th>
                    <th className="py-2 px-3">Curso</th>
                    <th className="py-2 px-3">Nota (CR)</th>
                    <th className="py-2 px-3">Relatório</th>
                    <th className="py-2 px-3">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {selected.map(ap => (
                        <tr key={ap.id} className="border-t border-slate-200 dark:border-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-700/40">
                          <td className="py-3 px-3 text-slate-900 dark:text-gray-100 font-medium">{ap.nome}</td>
                          <td className="py-3 px-3 text-slate-900 dark:text-gray-100">{ap.curso}</td>
                          <td className="py-3 px-3 text-slate-900 dark:text-gray-100 font-medium">{ap.grade}</td>
                          <td className="py-3 px-3 text-slate-900 dark:text-gray-100">{ap.relatorio || 'Sem relatório'}</td>
                          <td className="py-3 px-3">
                            <button onClick={()=>handleUnselect(ap.id)} className="text-red-600 hover:text-red-500 font-semibold text-xs underline">Remover</button>
                          </td>
                        </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-700/60">
          <Link to="/professor" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
            <span>←</span> Voltar ao Painel
          </Link>
        </div>
        </div>
      </div>
    </PageContainer>
  )
}