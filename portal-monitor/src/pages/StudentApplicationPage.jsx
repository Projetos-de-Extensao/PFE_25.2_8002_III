import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PageContainer from '../components/PageContainer'

function readDemoApplicants(){
  try{
    const raw = window.localStorage.getItem('demoApplicants')
    return raw ? JSON.parse(raw) : []
  }catch(e){ return [] }
}

function writeDemoApplicants(arr){
  try{ window.localStorage.setItem('demoApplicants', JSON.stringify(arr)) }catch(e){}
}

function readStudentProfile(){
  try{ const raw = window.localStorage.getItem('demoStudentProfile'); return raw ? JSON.parse(raw) : null }catch(e){ return null }
}

function writeStudentProfile(profile){
  try{ window.localStorage.setItem('demoStudentProfile', JSON.stringify(profile)) }catch(e){}
}

export default function StudentApplicationPage(){
  const { id } = useParams()
  const navigate = useNavigate()
  const profile = (typeof window !== 'undefined') ? readStudentProfile() : null
  const [nome, setNome] = useState(profile?.nome || '')
  const [email, setEmail] = useState(profile?.email || '')
  const [grade, setGrade] = useState('')
  const [descricao, setDescricao] = useState('')
  const [cvFile, setCvFile] = useState(null)
  const [cvError, setCvError] = useState('')

  const profileExists = !!profile

  function handleSubmit(e){
    e.preventDefault()
    const arr = readDemoApplicants()
    const newApplicant = {
      id: 'demo_' + Date.now(),
      vagaId: id,
      nome,
      email,
      grade: Number(grade),
      descricao,
      cvName: cvFile ? cvFile.name : '',
      selected: false,
      relatorio: ''
    }
    arr.push(newApplicant)
    writeDemoApplicants(arr)
    // Save student profile for future forms so name/email are prefilled and not editable
    if(!profileExists){
      writeStudentProfile({ nome, email })
    }
    // After applying, navigate to professor applicants view so professor can see the submission (demo)
    navigate(`/professor/vaga/${id}/applicants`)
  }

  return (
    <PageContainer>
      <div className="w-full max-w-none md:max-w-3xl mx-auto">
  <div className="rounded-xl md:rounded-2xl border-0 md:border border-slate-700/60 bg-slate-800/60 p-4 sm:p-6 md:p-8 shadow-sm">
        <h1 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-5 tracking-tight">Formulário de Candidatura</h1>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Nome</label>
            <input value={nome} onChange={e=>setNome(e.target.value)} className="w-full p-2.5 sm:p-3 rounded-md bg-[#2c3346] text-gray-100 border border-slate-700/60 shadow-sm text-sm sm:text-base" required disabled={profileExists} />
            {profileExists && <div className="text-xs text-gray-400 mt-1 break-words">Nome pré-preenchido pelo perfil (não editável).</div>}
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input value={email} type="email" onChange={e=>setEmail(e.target.value)} className="w-full p-2.5 sm:p-3 rounded-md bg-[#2c3346] text-gray-100 border border-slate-700/60 shadow-sm text-sm sm:text-base" required disabled={profileExists} />
            {profileExists && <div className="text-xs text-gray-400 mt-1 break-words">Email pré-preenchido pelo perfil (não editável).</div>}
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Nota obtida na disciplina (0-10)</label>
            <input value={grade} type="number" min="0" max="10" step="0.1" onChange={e=>setGrade(e.target.value)} className="w-32 p-2.5 sm:p-3 rounded-md bg-[#2c3346] text-gray-100 border border-slate-700/60 shadow-sm text-sm sm:text-base" required />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Breve descrição / por que você se candidata</label>
            <textarea value={descricao} onChange={e=>setDescricao(e.target.value)} className="w-full p-2.5 sm:p-3 rounded-md bg-[#2c3346] text-gray-100 border border-slate-700/60 shadow-sm text-sm sm:text-base" rows={4} required />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Currículo (PDF)</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={e=>{
                setCvError('')
                const f = e.target.files && e.target.files[0]
                if(!f) { setCvFile(null); return }
                if(f.type !== 'application/pdf') { setCvError('Apenas arquivos PDF são aceitos.'); setCvFile(null); return }
                if(f.size > 5 * 1024 * 1024) { setCvError('O arquivo excede 5 MB.'); setCvFile(null); return }
                setCvFile(f)
              }}
              className="text-xs sm:text-sm text-gray-200 w-full max-w-full file:mr-2 file:py-2 file:px-3 file:rounded file:border-0 file:text-xs sm:file:text-sm file:bg-slate-600 file:text-gray-100 hover:file:bg-slate-500 file:cursor-pointer"
            />
            {cvFile && <div className="text-xs text-gray-300 mt-2 break-words">Arquivo selecionado: {cvFile.name}</div>}
            {cvError && <div className="text-xs text-red-400 mt-2 break-words">{cvError}</div>}
            <div className="text-xs text-gray-400 mt-2 leading-relaxed break-words">O arquivo não é enviado ao servidor neste demo; apenas o nome do arquivo será salvo localmente.</div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <button type="submit" className="bg-yellow-400 text-gray-900 font-semibold px-4 py-2.5 rounded-md shadow-sm hover:bg-yellow-300 text-sm sm:text-base">Enviar Candidatura</button>
            <button type="button" onClick={()=>navigate(-1)} className="bg-slate-600 hover:bg-slate-500 text-gray-100 px-4 py-2.5 rounded-md shadow-sm text-sm sm:text-base">Cancelar</button>
          </div>
        </form>
        </div>
      </div>
    </PageContainer>
  )
}
