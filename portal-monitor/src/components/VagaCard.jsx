import React from 'react'
import { Link } from 'react-router-dom'

export default function VagaCard({ vaga }){
  // vaga: { id, titulo, curso, professor, descricao, tags, vagas }
  return (
    <Link to={`/vaga/${vaga.id}`} className="block">
      <article className="bg-slate-800 rounded-lg p-4 shadow-md hover:shadow-lg transition">
        <header className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{vaga.titulo}</h3>
            <div className="text-sm text-gray-300">{vaga.curso}</div>
          </div>
        </header>

        <p className="text-sm text-gray-300 mb-3">{vaga.descricao}</p>

        <footer className="flex items-center justify-between">
          <div className="text-sm text-gray-400">Prof: {vaga.professor}</div>
          <div className="flex gap-2">
            {vaga.tags && vaga.tags.slice(0,3).map((t, i) => (
              <span key={i} className="text-xs bg-slate-700 text-gray-200 px-2 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </footer>
      </article>
    </Link>
  )
}
