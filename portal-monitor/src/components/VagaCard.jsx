import React from 'react'
import { Link } from 'react-router-dom'

export default function VagaCard({ vaga }){
  // vaga: { id, titulo, curso, professor, descricao, tags, vagas }
  return (
    <Link to={`/vaga/${vaga.id}`} className="block group">
      <article className="h-full rounded-xl border border-slate-700/60 bg-slate-800/60 p-5 shadow-sm transition-all duration-200 group-hover:border-slate-500/50 group-hover:shadow-lg group-hover:-translate-y-0.5">
        <header className="mb-3">
          <h3 className="text-base font-semibold text-white tracking-tight group-hover:text-yellow-300">{vaga.titulo}</h3>
          <div className="mt-0.5 text-sm text-gray-300">{vaga.curso}</div>
        </header>

        <p className="text-sm text-gray-300 line-clamp-3 mb-4">{vaga.descricao}</p>

        <footer className="flex items-center justify-between">
          <div className="text-xs text-gray-400">Prof: {vaga.professor}</div>
          <div className="flex flex-wrap gap-1.5">
            {vaga.tags && vaga.tags.slice(0,3).map((t, i) => (
              <span key={i} className="text-[11px] leading-5 px-2 py-0.5 rounded-full bg-slate-700/70 text-gray-200 border border-slate-600/60">{t}</span>
            ))}
          </div>
        </footer>
      </article>
    </Link>
  )
}
