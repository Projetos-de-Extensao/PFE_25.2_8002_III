import React, { useState } from 'react'
import VagaCard from '../components/VagaCard'
import CustomSelect from '../components/CustomSelect'
import { mockVagas } from '../data/mockData'

export default function PublicDashboard(){
  const [query, setQuery] = useState('')
  const [filtroCurso, setFiltroCurso] = useState('')

  const cursoOptions = [
    { value: '', label: 'Todos os cursos' },
    { value: 'Ciência da Computação', label: 'Ciência da Computação' },
    { value: 'Sistemas de Informação', label: 'Sistemas de Informação' },
    { value: 'Design e Web', label: 'Design e Web' },
    { value: 'Engenharia', label: 'Engenharia' }
  ]

  const shown = mockVagas.filter(v => {
    const q = query.trim().toLowerCase()
    if(q && !(v.titulo.toLowerCase().includes(q) || v.curso.toLowerCase().includes(q))) return false
    if(filtroCurso && v.curso !== filtroCurso) return false
    return true
  })

  return (
    <section className="w-full max-w-6xl px-4 mx-auto">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-white tracking-tight">Vagas de Monitoria</h2>
        <p className="mt-2 text-sm text-gray-300">
          Você pode ser monitor! Crie sua conta e inscreva-se na vaga de interesse. Sem login, você pode explorar as vagas e ver os detalhes.
        </p>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
        <div className="flex-1 min-w-0">
          <label className="sr-only">Buscar</label>
          <input
            type="search"
            placeholder="Pesquisar por título ou curso"
            value={query}
            onChange={e=>setQuery(e.target.value)}
            className="w-full bg-[#2c3346] text-gray-100 border border-slate-700/60 rounded-md p-2.5 sm:p-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none shadow-sm text-sm sm:text-base"
          />
        </div>

        <div className="w-full sm:w-auto sm:min-w-[200px] sm:max-w-[280px]">
          <label className="sr-only">Filtrar por curso</label>
          <CustomSelect
            value={filtroCurso}
            onChange={setFiltroCurso}
            options={cursoOptions}
            placeholder="Todos os cursos"
          />
        </div>

        <div className="flex-none w-full sm:w-auto">
          <button onClick={()=>{setQuery(''); setFiltroCurso('')}} className="w-full sm:w-auto bg-slate-600 hover:bg-slate-500 text-gray-100 px-5 py-2.5 sm:py-3 rounded-md shadow-sm text-sm sm:text-base">Limpar</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {shown.map(v => (
          <VagaCard key={v.id} vaga={v} />
        ))}
      </div>

      {shown.length === 0 && (
        <div className="mt-10 text-center text-gray-300">Nenhuma vaga encontrada para os filtros selecionados.</div>
      )}
    </section>
  )
}
