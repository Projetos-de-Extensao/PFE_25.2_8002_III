import React from 'react'
import { mockApplications, mockVagas } from '../data/mockData'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import PageContainer from '../components/PageContainer'

function statusBadge(status){
  const base = 'inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold '
  // Use black semi-bold text for all status pills per design request
  if(status === 'Aceito') return base + 'bg-green-500 text-black'
  if(status === 'Rejeitado') return base + 'bg-red-500 text-black'
  if(status === 'Em Análise') return base + 'bg-orange-400 text-black'
  return base + 'bg-slate-600 text-black'
}

export default function MyApplicationsPage(){
  const navigate = useNavigate()
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const statusFilter = params.get('status') || ''

  const applications = mockApplications.filter(app => {
    if(!statusFilter) return true
    return app.status === statusFilter
  })

  // Map vagaId -> curso to show the requested column
  const cursoByVagaId = React.useMemo(() => {
    const map = {}
    mockVagas.forEach(v => { map[v.id] = v.curso })
    return map
  }, [])

  function handleSelect(e){
    const s = e.target.value
    if(s) navigate(`/applications?status=${encodeURIComponent(s)}`)
    else navigate('/applications')
  }

  return (
    <PageContainer>
      <div className="w-full max-w-4xl mx-auto">
        <div className="rounded-xl border border-slate-700/60 bg-slate-800/60 p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-white mb-4 tracking-tight">Minhas Candidaturas</h1>

        <div className="mb-4 text-sm text-gray-300 flex items-center gap-4">
          <div>Abaixo estão suas candidaturas de exemplo (dados mock). Use este espaço para acompanhar o status das aplicações.</div>
          <div className="ml-auto">
            <label className="text-sm text-gray-300 mr-2">Filtrar:</label>
            <select value={statusFilter} onChange={handleSelect} className="bg-[#2c3346] text-gray-100 rounded-md p-2">
              <option value="">Todos</option>
              <option value="Em Análise">Em Análise</option>
              <option value="Aceito">Aceito</option>
              <option value="Rejeitado">Rejeitado</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg border border-slate-700/60">
          <table className="min-w-full text-left">
            <thead>
              <tr className="text-gray-300 text-sm bg-slate-700/60">
                <th className="py-2 px-3">Vaga</th>
                <th className="py-2 px-3">Professor</th>
                <th className="py-2 px-3">Curso</th>
                <th className="py-2 px-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map(app => (
                <tr key={app.id} className="border-t border-slate-700/60 hover:bg-slate-700/40">
                  <td className="py-3 px-3 text-gray-100">
                    <Link to={`/vaga/${app.vagaId}`} className="text-blue-300 hover:underline">{app.vaga}</Link>
                  </td>
                  <td className="py-3 px-3 text-gray-100">{app.professor}</td>
                  <td className="py-3 px-3 text-gray-100">{cursoByVagaId[app.vagaId] || '-'}</td>
                  <td className="py-3 px-3"><span className={statusBadge(app.status)}>{app.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <Link to="/dashboard" className="bg-slate-600 hover:bg-slate-500 text-gray-100 px-4 py-2 rounded-md shadow-sm">Voltar ao Dashboard</Link>
        </div>
        </div>
      </div>
    </PageContainer>
  )
}
