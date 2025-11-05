import React from 'react'
import { mockVagas } from '../data/mockData'
import { Link } from 'react-router-dom'
import PageContainer from '../components/PageContainer'

export default function ProfessorDashboard(){
  return (
    <PageContainer>
      <div className="w-full max-w-none md:max-w-5xl mx-auto">
        <div className="rounded-none md:rounded-xl border-0 md:border border-slate-700/60 bg-slate-800/60 p-4 sm:p-6 md:p-8 shadow-sm">
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 tracking-tight">Painel do Professor</h1>
          <p className="text-sm text-gray-300 mb-5 sm:mb-6 leading-relaxed">Lista de vagas abertas e links para ver os candidatos inscritos.</p>

          <div className="space-y-3 sm:space-y-4">
            {mockVagas.map(vaga => (
              <div key={vaga.id} className="rounded-lg border border-slate-700/60 bg-slate-700/40 p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex-1">
                  <div className="text-white font-semibold text-sm sm:text-base leading-relaxed">{vaga.titulo}</div>
                  <div className="text-xs sm:text-sm text-gray-200 mt-1">{vaga.curso} — {vaga.professor}</div>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Link to={`/professor/vaga/${vaga.id}/applicants`} className="bg-blue-500 hover:bg-blue-400 text-white px-3 sm:px-4 py-2 rounded-md text-sm shadow-sm w-full sm:w-auto text-center">Ver Candidatos</Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </PageContainer>
  )
}
