import React, { useMemo } from 'react'
import { mockVagas, mockApplicants } from '../data/mockData'
import { Link } from 'react-router-dom'
import PageContainer from '../components/PageContainer'

export default function ProfessorDashboard(){
  const isBrowser = typeof window !== 'undefined'
  const professorEmail = isBrowser ? window.localStorage.getItem('userEmail') : null

  const professorProfiles = {
    'professor@professor.ibmec.edu.br': {
      name: 'Prof. Roberto Andrade'
    }
  }

  const professorName = professorProfiles[professorEmail]?.name || 'Prof. Roberto Andrade'

  const professorVagas = useMemo(
    () => mockVagas.filter(vaga => vaga.professor === professorName),
    [professorName]
  )
  const professorVagaIds = useMemo(() => professorVagas.map(v => v.id), [professorVagas])

  const readDemoApplicants = () => {
    if(!isBrowser) return []
    try {
      const raw = window.localStorage.getItem('demoApplicants')
      return raw ? JSON.parse(raw) : []
    } catch (error) {
      console.warn('Erro ao ler demoApplicants no painel do professor', error)
      return []
    }
  }

  const pendingApplicants = useMemo(() => {
    const staticApplicants = mockApplicants.filter(ap => professorVagaIds.includes(ap.vagaId))
    const demoApplicants = readDemoApplicants().filter(ap => professorVagaIds.includes(ap.vagaId))
    const pool = [...staticApplicants, ...demoApplicants]
    return pool.filter(ap => ap.selected !== true)
  }, [professorVagaIds, isBrowser])

  const openVagasCount = professorVagas.length
  const pendingCount = pendingApplicants.length

  return (
    <PageContainer>
      <div className="w-full max-w-none md:max-w-5xl mx-auto">
  <div className="rounded-xl md:rounded-2xl border-0 md:border border-slate-700/60 bg-slate-800/60 p-4 sm:p-6 md:p-8 shadow-sm">
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 tracking-tight">Painel do Professor</h1>
          <p className="text-sm text-gray-300 mb-5 sm:mb-6 leading-relaxed">Acompanhe suas vagas de monitoria e o andamento dos candidatos.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
            <div className="rounded-lg border border-slate-700/60 bg-slate-700/40 p-4">
              <p className="text-xs uppercase tracking-wide text-gray-400">Vagas abertas</p>
              <p className="text-2xl font-bold text-white">{openVagasCount}</p>
            </div>
            <div className="rounded-lg border border-slate-700/60 bg-slate-700/40 p-4">
              <p className="text-xs uppercase tracking-wide text-gray-400">Candidatos pendentes</p>
              <p className="text-2xl font-bold text-white">{pendingCount}</p>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {professorVagas.length === 0 ? (
              <div className="rounded-lg border border-dashed border-slate-700/60 bg-slate-700/30 p-4 text-sm text-gray-300">
                Nenhuma vaga atribuída ao seu perfil no momento.
              </div>
            ) : (
              professorVagas.map(vaga => (
                <div key={vaga.id} className="rounded-lg border border-slate-700/60 bg-slate-700/40 p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm sm:text-base leading-relaxed">{vaga.titulo}</div>
                    <div className="text-xs sm:text-sm text-gray-200 mt-1">{vaga.curso} — {vaga.professor}</div>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <Link to={`/professor/vaga/${vaga.id}/applicants`} className="bg-blue-500 hover:bg-blue-400 text-white px-3 sm:px-4 py-2 rounded-md text-sm shadow-sm w-full sm:w-auto text-center">Ver Candidatos</Link>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </PageContainer>
  )
}
