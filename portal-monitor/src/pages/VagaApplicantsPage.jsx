import React, { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { mockVagas, mockApplicants } from '../data/mockData'
import PageContainer from '../components/PageContainer'

function readDemoApplicants(){
  try{ const raw = window.localStorage.getItem('demoApplicants'); return raw ? JSON.parse(raw) : [] }catch(e){ return [] }
}

function readSelectedIds(){
  try{ const raw = window.localStorage.getItem('selectedApplicants'); return raw ? JSON.parse(raw) : [] }catch(e){ return [] }
}

function writeSelectedIds(arr){ try{ window.localStorage.setItem('selectedApplicants', JSON.stringify(arr)) }catch(e){} }

function readRemovedSelectedIds(){
  try{ const raw = window.localStorage.getItem('removedSelectedApplicants'); return raw ? JSON.parse(raw) : [] }catch(e){ return [] }
}

function writeRemovedSelectedIds(arr){ try{ window.localStorage.setItem('removedSelectedApplicants', JSON.stringify(arr)) }catch(e){} }

export default function VagaApplicantsPage(){
  const { id } = useParams()
  const vaga = mockVagas.find(v => v.id === id) || { titulo: 'Vaga' }
  const [expanded, setExpanded] = useState(null)
  const [selectedIds, setSelectedIds] = useState(()=>readSelectedIds())
  const [removedSelectedIds, setRemovedSelectedIds] = useState(()=>readRemovedSelectedIds())

  // combine static mock applicants with demo applicants persisted in localStorage
  const combined = useMemo(()=>{
    const demo = readDemoApplicants()
    // avoid id collisions by using ids as-is (demo ids prefixed with demo_)
    return [...mockApplicants, ...demo]
  }, [])

  const applicants = combined.filter(a => a.vagaId === id)
  // compute selection considering persisted selections and any removals of mock-selected applicants
  const inProcess = applicants.filter(a => {
    const isMockSelected = a.selected && !removedSelectedIds.includes(a.id)
    const isLocalSelected = selectedIds.includes(a.id)
    return !(isMockSelected || isLocalSelected)
  })
  const selected = applicants.filter(a => (a.selected && !removedSelectedIds.includes(a.id)) || selectedIds.includes(a.id))

  function toggleExpand(id){ setExpanded(prev => prev === id ? null : id) }

  function handleSelect(appId){
    // persist selection and update local state so UI updates without a full reload
    const ids = Array.from(new Set([...selectedIds, appId]))
    writeSelectedIds(ids)
    setSelectedIds(ids)
    // close any expanded row
    setExpanded(null)
  }

  function handleUnselect(appId){
    // confirm with the user
    const ok = window.confirm('Tem certeza que deseja remover a seleção deste candidato?')
    if(!ok) return
    // if the id is in selectedIds (local selections), remove it
    if(selectedIds.includes(appId)){
      const ids = selectedIds.filter(i => i !== appId)
      writeSelectedIds(ids)
      setSelectedIds(ids)
      return
    }
    // otherwise it may be a mock applicant that was initially selected; record it as removed
    const removed = Array.from(new Set([...removedSelectedIds, appId]))
    writeRemovedSelectedIds(removed)
    setRemovedSelectedIds(removed)
  }

  return (
    <PageContainer>
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-slate-700 rounded-lg p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-2">Candidatos para: {vaga.titulo}</h1>
        <p className="text-sm text-gray-300 mb-6">Lista de candidatos (dados mock + envios de demonstração). Clique no nome para ver detalhes da candidatura.</p>

        <section className="mb-6">
          <h2 className="text-lg font-semibold text-white mb-3">Em processo</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="text-gray-300 text-sm">
                  <th className="py-2 px-3">Nome</th>
                  <th className="py-2 px-3">Curso</th>
                  <th className="py-2 px-3">Email</th>
                  <th className="py-2 px-3">Ação</th>
                </tr>
              </thead>
              <tbody>
                {inProcess.map(ap => (
                  <React.Fragment key={ap.id}>
                    <tr className="border-t border-slate-600">
                      <td className="py-3 px-3 text-gray-100">
                        <button onClick={()=>toggleExpand(ap.id)} className="text-left w-full text-blue-300 hover:underline">{ap.nome}</button>
                      </td>
                      <td className="py-3 px-3 text-gray-100">{ap.curso}</td>
                      <td className="py-3 px-3 text-gray-100">{ap.email}</td>
                      <td className="py-3 px-3">
                        <button onClick={()=>handleSelect(ap.id)} className="bg-green-500 hover:bg-green-400 text-black font-semibold px-3 py-2 rounded-md">Selecionar Monitor</button>
                      </td>
                    </tr>

                    {expanded === ap.id && (
                      <tr className="bg-slate-600">
                        <td colSpan={4} className="py-3 px-3 text-gray-100">
                          <div className="space-y-2">
                            <div><strong className="text-white">Nota na disciplina:</strong> {ap.grade ?? '—'}</div>
                            <div><strong className="text-white">Descrição do candidato:</strong> {ap.descricao ?? '—'}</div>
                            <div><strong className="text-white">CV:</strong> {ap.cvName ? ap.cvName : '—'}</div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Já selecionados</h2>
          {selected.length === 0 ? (
            <div className="text-gray-300">Nenhum candidato selecionado ainda.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead>
                  <tr className="text-gray-300 text-sm">
                    <th className="py-2 px-3">Nome</th>
                    <th className="py-2 px-3">Curso</th>
                    <th className="py-2 px-3">Relatório</th>
                    <th className="py-2 px-3">CV</th>
                    <th className="py-2 px-3">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {selected.map(ap => (
                        <tr key={ap.id} className="border-t border-slate-600">
                          <td className="py-3 px-3 text-gray-100">{ap.nome}</td>
                          <td className="py-3 px-3 text-gray-100">{ap.curso}</td>
                          <td className="py-3 px-3 text-gray-100">{ap.relatorio || 'Sem relatório disponível'}</td>
                          <td className="py-3 px-3 text-gray-100">{ap.cvName ? ap.cvName : '—'}</td>
                          <td className="py-3 px-3">
                            <button onClick={()=>handleUnselect(ap.id)} className="bg-red-600 hover:bg-red-500 text-white font-semibold px-3 py-2 rounded-md">Remover seleção</button>
                          </td>
                        </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <div className="mt-6 flex items-center gap-3">
          <Link to="/professor" className="bg-slate-600 text-gray-200 px-4 py-2 rounded-md">Voltar ao Painel</Link>
        </div>
        </div>
      </div>
    </PageContainer>
  )
}
