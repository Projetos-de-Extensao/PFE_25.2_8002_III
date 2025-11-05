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
  <section className="w-full max-w-6xl px-4 mx-auto">
      <div className="mb-8 flex flex-col md:flex-row md:items-start md:justify-between">
        <div className="md:flex-1">
          <h2 className="text-3xl font-bold text-white tracking-tight">Vagas de Monitoria</h2>
          <p className="mt-1 text-sm text-gray-300">Encontre oportunidades de monitoria disponíveis para seu curso.</p>
    </div>

    {/* Applications vertical column placed to the right on md+ screens */}
        <div className="mt-4 md:mt-0 md:ml-6">
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/60 px-4 py-3 text-sm text-gray-200 shadow-sm">
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2">
              {(() => {
                const apps = mockApplications
                const total = apps.length
                const started = apps.filter(a => a.status === 'Em Análise').length
                const accepted = apps.filter(a => a.status === 'Aceito').length
                const rejected = apps.filter(a => a.status === 'Rejeitado').length
                return (
                  <>
                        <a href={`/applications?status=${encodeURIComponent('Aceito')}`} className="inline-flex items-center justify-center w-44 px-3 py-2 rounded-md bg-green-500 text-black font-semibold shadow-sm hover:shadow">
                      <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Aceitas: {accepted}
                    </a>

                    <a href={`/applications?status=${encodeURIComponent('Em Análise')}`} className="inline-flex items-center justify-center w-44 px-3 py-2 rounded-md bg-orange-400 text-black font-semibold shadow-sm hover:shadow">
                      <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      </svg>
                      Em análise: {started}
                    </a>

                    <a href={`/applications?status=${encodeURIComponent('Rejeitado')}`} className="inline-flex items-center justify-center w-44 px-3 py-2 rounded-md bg-red-500 text-black font-semibold shadow-sm hover:shadow">
                      <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Rejeitadas: {rejected}
                    </a>

                    <Link to="/applications" className="inline-flex items-center justify-center w-44 px-3 py-2 rounded-md bg-slate-600 text-black font-semibold shadow-sm hover:shadow">
                      <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      Total: {total}
                    </Link>
                  </>
                )
              })()}
            </div>
          </div>

            {/* Move search and filters underneath the pills and above the cards */}
            <div className="mt-6">
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
                <div className="flex-1 min-w-0">
                  <label className="sr-only">Buscar</label>
                  <input
                    type="search"
                    placeholder="Pesquisar por título ou curso"
                    value={query}
                    onChange={e=>setQuery(e.target.value)}
                    className="w-full bg-[#2c3346] text-gray-100 border border-slate-700/60 rounded-md p-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none shadow-sm"
                  />
                </div>

                <div className="w-full sm:w-64">
                  <label className="sr-only">Filtrar por curso</label>
                  <select value={filtroCurso} onChange={e=>setFiltroCurso(e.target.value)} className="w-full bg-[#2c3346] text-gray-100 border border-slate-700/60 rounded-md p-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none shadow-sm">
                    <option value="">Todos os cursos</option>
                    <option value="Ciência da Computação">Ciência da Computação</option>
                    <option value="Sistemas de Informação">Sistemas de Informação</option>
                    <option value="Design e Web">Design e Web</option>
                    <option value="Engenharia">Engenharia</option>
                  </select>
                </div>

                <div className="flex-none">
                  <button onClick={()=>{setQuery(''); setFiltroCurso('')}} className="bg-slate-600 hover:bg-slate-500 text-gray-100 px-5 py-3 rounded-md shadow-sm">X</button>
                </div>
              </div>
            </div>
        </div>
      </div>

      

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {shown.map(v => (
          <VagaCard key={v.id} vaga={v} />
        ))}
      </div>

      {/* If none shown, show empty state */}
      {shown.length === 0 && (
        <div className="mt-10 text-center text-gray-300">Nenhuma vaga encontrada para os filtros selecionados.</div>
      )}
    </section>
  )
}