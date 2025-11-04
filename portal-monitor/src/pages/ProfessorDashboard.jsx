import React from 'react'
import { mockVagas } from '../data/mockData'
import { Link } from 'react-router-dom'
import PageContainer from '../components/PageContainer'

export default function ProfessorDashboard(){
  return (
    <PageContainer>
      <div className="w-full max-w-5xl mx-auto">
        <div className="bg-slate-700 rounded-lg p-8 shadow-lg">
          <h1 className="text-2xl font-bold text-white mb-4">Painel do Professor</h1>
          <p className="text-sm text-gray-300 mb-6">Lista de vagas abertas e links para ver os candidatos inscritos.</p>

          <div className="space-y-4">
            {mockVagas.map(vaga => (
              <div key={vaga.id} className="bg-slate-600 p-4 rounded-md flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold">{vaga.titulo}</div>
                  <div className="text-sm text-gray-200">{vaga.curso} — {vaga.professor}</div>
                </div>
                <div className="flex items-center gap-3">
                  <Link to={`/professor/vaga/${vaga.id}/applicants`} className="bg-blue-500 hover:bg-blue-400 text-white px-3 py-2 rounded-md text-sm">Ver Candidatos</Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </PageContainer>
  )
}
