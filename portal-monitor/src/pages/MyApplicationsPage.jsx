import React from 'react'
import { mockApplications, mockVagas } from '../data/mockData'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import PageContainer from '../components/PageContainer'
import CustomSelect from '../components/CustomSelect'

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

  const statusOptions = [
    { value: '', label: 'Todos' },
    { value: 'Em Análise', label: 'Em Análise' },
    { value: 'Aceito', label: 'Aceito' },
    { value: 'Rejeitado', label: 'Rejeitado' }
  ]

  function handleSelect(val){
    if(val) navigate(`/applications?status=${encodeURIComponent(val)}`)
    else navigate('/applications')
  }

  return (
    <PageContainer>
      <div className="w-full max-w-none md:max-w-4xl mx-auto">
  <div className="rounded-xl md:rounded-2xl border-0 md:border border-slate-700/60 bg-slate-800/60 p-4 sm:p-6 md:p-8 shadow-sm">
        <h1 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-5 tracking-tight">Minhas Candidaturas</h1>

        <div className="mb-4 sm:mb-5 text-sm text-gray-300 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <div className="leading-relaxed">Abaixo estão suas candidaturas de exemplo (dados mock). Use este espaço para acompanhar o status das aplicações.</div>
          <div className="sm:ml-auto w-full sm:w-auto sm:max-w-[250px] flex items-center gap-2">
            <label className="text-sm text-gray-300 whitespace-nowrap">Filtrar:</label>
            <div className="flex-1 sm:flex-none sm:min-w-[160px]">
              <CustomSelect
                value={statusFilter}
                onChange={handleSelect}
                options={statusOptions}
                placeholder="Todos"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg border border-slate-700/60">
          <table className="min-w-full text-left table-auto">
            <thead>
              <tr className="text-gray-300 text-sm bg-slate-700/60">
                <th className="py-3 px-3 sm:px-4">Vaga</th>
                <th className="py-3 px-3 sm:px-4">Professor</th>
                <th className="py-3 px-3 sm:px-4">Curso</th>
                <th className="py-3 px-3 sm:px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map(app => (
                <tr key={app.id} className="border-t border-slate-700/60 hover:bg-slate-700/40">
                  <td className="py-3 sm:py-4 px-3 sm:px-4 text-sm text-gray-100 align-top break-words whitespace-normal leading-relaxed">
                    <Link to={`/vaga/${app.vagaId}`} className="text-blue-300 hover:underline break-words">{app.vaga}</Link>
                  </td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 text-sm text-gray-100 align-top break-words whitespace-normal leading-relaxed">{app.professor}</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 text-sm text-gray-100 align-top break-words whitespace-normal leading-relaxed">{cursoByVagaId[app.vagaId] || '-'}</td>
                  <td className="py-3 sm:py-4 px-3 sm:px-4 align-top"><span className={statusBadge(app.status)}>{app.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 sm:mt-6 flex items-center gap-3">
          <Link to="/dashboard" className="bg-slate-600 hover:bg-slate-500 text-gray-100 px-4 py-2 rounded-md shadow-sm text-sm">Voltar ao Dashboard</Link>
        </div>
        </div>
      </div>
    </PageContainer>
  )
}
