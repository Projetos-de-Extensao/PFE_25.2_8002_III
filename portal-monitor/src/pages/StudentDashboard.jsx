import React, { useState } from 'react'
import VagaCard from '../components/VagaCard'
import { Link } from 'react-router-dom'
import { mockApplications, mockVagas } from '../data/mockData'

export default function StudentDashboard(){
  // Simple local state for search/filter inputs (static UI for RF04)
  const [query, setQuery] = useState('')
  const [filtroCurso, setFiltroCurso] = useState('')

  // For demo, do a basic client-side filter by title or curso
  const shown = mockVagas.filter(v => {
    const q = query.trim().toLowerCase()
    if(q && !(v.titulo.toLowerCase().includes(q) || v.curso.toLowerCase().includes(q))) return false
    if(filtroCurso && v.curso !== filtroCurso) return false
    return true
  })

  return (
    <section className="w-full max-w-6xl px-4">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Vagas de Monitoria</h2>
          <p className="text-sm text-gray-300">Encontre oportunidades de monitoria disponíveis para seu curso.</p>
        </div>

        {/* Applications summary + link */}
        <div className="bg-slate-700 rounded-md px-4 py-3 text-sm text-gray-200 flex items-center gap-4">
          <Link to="/applications" className="underline text-blue-300">Ver candidaturas</Link>
          {/* counters with colored badges to match MyApplicationsPage */}
          <div className="flex gap-3 items-center">
            {(() => {
              const apps = mockApplications
              const total = apps.length
              const started = apps.filter(a => a.status === 'Em Análise').length
              const accepted = apps.filter(a => a.status === 'Aceito').length
              const rejected = apps.filter(a => a.status === 'Rejeitado').length
              return (
                <>
                  <div className="text-xs text-gray-300 flex items-center gap-2">Total: <span className="inline-flex items-center px-2 py-1 rounded-full bg-slate-600 text-white font-semibold">{total}</span></div>
                  <div className="text-xs text-gray-300 flex items-center gap-2">Em análise: <a href={`/applications?status=${encodeURIComponent('Em Análise')}`} className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-400 text-black font-semibold">{started}</a></div>
                  <div className="text-xs text-gray-300 flex items-center gap-2">Aceitas: <a href={`/applications?status=${encodeURIComponent('Aceito')}`} className="inline-flex items-center px-2 py-1 rounded-full bg-green-500 text-white font-semibold">{accepted}</a></div>
                  <div className="text-xs text-gray-300 flex items-center gap-2">Rejeitadas: <a href={`/applications?status=${encodeURIComponent('Rejeitado')}`} className="inline-flex items-center px-2 py-1 rounded-full bg-red-500 text-white font-semibold">{rejected}</a></div>
                </>
              )
            })()}
          </div>
        </div>
      </div>

      {/* Search and filters (static UI but lightly functional) */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
        <div className="flex-1">
          <label className="sr-only">Buscar</label>
          <input
            type="search"
            placeholder="Pesquisar por título ou curso"
            value={query}
            onChange={e=>setQuery(e.target.value)}
            className="w-full bg-[#2c3346] text-gray-100 border-0 rounded-md p-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
        </div>

        <div className="w-full sm:w-64">
          <label className="sr-only">Filtrar por curso</label>
          <select value={filtroCurso} onChange={e=>setFiltroCurso(e.target.value)} className="w-full bg-[#2c3346] text-gray-100 border-0 rounded-md p-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none">
            <option value="">Todos os cursos</option>
            <option value="Ciência da Computação">Ciência da Computação</option>
            <option value="Sistemas de Informação">Sistemas de Informação</option>
            <option value="Design e Web">Design e Web</option>
            <option value="Engenharia">Engenharia</option>
          </select>
        </div>

        <div className="flex-none">
          <button onClick={()=>{setQuery(''); setFiltroCurso('')}} className="bg-slate-600 text-gray-200 px-4 py-2 rounded-md">Limpar</button>
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {shown.map(v => (
          <VagaCard key={v.id} vaga={v} />
        ))}
      </div>

      {/* If none shown, show empty state */}
      {shown.length === 0 && (
        <div className="mt-8 text-center text-gray-300">Nenhuma vaga encontrada para os filtros selecionados.</div>
      )}
    </section>
  )
}