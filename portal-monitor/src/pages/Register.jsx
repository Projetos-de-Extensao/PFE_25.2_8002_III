import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageContainer from '../components/PageContainer'

export default function Register(){
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmSenha, setConfirmSenha] = useState('')
  // Infer tipo from email domain; additional fields appear only after passwords match
  const [curso, setCurso] = useState('')
  const [disciplinas, setDisciplinas] = useState([])
  const [newDisciplina, setNewDisciplina] = useState('')
  const navigate = useNavigate()

  const isStudentEmail = useMemo(() => /@alunos\.ibmec\.edu\.br$/i.test(email), [email])
  const isProfessorEmail = useMemo(() => /@professores\.ibmec\.edu\.br$/i.test(email), [email])
  const isConfirmTyped = confirmSenha.length > 0
  const passwordsMatch = senha.length > 0 && confirmSenha.length > 0 && senha === confirmSenha

  function handleSubmit(e){
    e.preventDefault()
    // Require password confirmation to proceed
    if(senha !== confirmSenha){
      alert('As senhas não coincidem')
      return
    }
    // Enforce allowed domains only
    if(!isStudentEmail && !isProfessorEmail){
      alert('Use um email institucional válido: @alunos.ibmec.edu.br ou @professores.ibmec.edu.br')
      return
    }
    // Determine tipo based on email domain
    const tipo = isProfessorEmail ? 'professor' : (isStudentEmail ? 'aluno' : 'aluno')
    // Validate curso for student domain
    if(tipo === 'aluno' && isStudentEmail && !curso.trim()){
      alert('Por favor, informe o nome do seu curso.')
      return
    }
    // include disciplinas when professor; include curso when aluno (student)
    const payload = { nome, email, senha, tipo }
    if(tipo === 'professor') payload.disciplinas = disciplinas
    if(tipo === 'aluno' && isStudentEmail) payload.curso = curso.trim()
    console.log('register', payload)
    alert('Cadastro submetido (demo)')
    // After successful registration (demo) go back to login
    navigate('/')
  }

  return (
    <PageContainer>
      <div className="w-full max-w-none sm:max-w-md mx-auto">
        <div className="rounded-none sm:rounded-xl border-0 sm:border border-slate-700/60 bg-slate-800/60 p-6 sm:p-8 md:p-10 shadow-sm">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">Portal Monitor</h2>
          <p className="text-sm sm:text-base text-gray-300">Crie sua conta</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-2">Nome Completo</label>
            <div className="relative">
              <div className="absolute top-1/2 -translate-y-1/2 left-3 pointer-events-none">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <input id="nome" type="text" required value={nome} onChange={e=>setNome(e.target.value)} placeholder="Seu nome" className="w-full bg-[#2c3346] text-gray-100 border border-slate-700/60 rounded-md py-2.5 sm:py-3 pl-10 sm:pl-11 pr-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none shadow-sm text-sm sm:text-base" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <div className="relative">
              <div className="absolute top-1/2 -translate-y-1/2 left-3 pointer-events-none">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.161V6a2 2 0 00-2-2H3z" />
                  <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                </svg>
              </div>
              <input id="email" type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="nome@ibmec.com.br" className="w-full bg-[#2c3346] text-gray-100 border border-slate-700/60 rounded-md py-2.5 sm:py-3 pl-10 sm:pl-11 pr-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none shadow-sm text-sm sm:text-base" />
            </div>
          </div>

          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-300 mb-2">Senha</label>
            <div className="relative">
              <div className="absolute top-1/2 -translate-y-1/2 left-3 pointer-events-none">
                <svg className={`${passwordsMatch ? 'w-4 h-4 sm:w-5 sm:h-5 text-green-400' : 'w-4 h-4 sm:w-5 sm:h-5 text-gray-400'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                </svg>
              </div>
              <input id="senha" type="password" required value={senha} onChange={e=>setSenha(e.target.value)} placeholder="Crie uma senha forte (8-20 caracteres)" className="w-full bg-[#2c3346] text-gray-100 border border-slate-700/60 rounded-md py-2.5 sm:py-3 pl-10 sm:pl-11 pr-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none shadow-sm text-sm sm:text-base" />
            </div>
          </div>

          {/* Confirmar Senha (re-adicionado). Não é necessário para exibir campos extras, mas é checado no envio. */}
          <div>
            <label htmlFor="confirm-senha" className="block text-sm font-medium text-gray-300 mb-2">Confirmar Senha</label>
            <div className="relative">
              <div className="absolute top-1/2 -translate-y-1/2 left-3 pointer-events-none">
                <svg className={`${!isConfirmTyped ? 'w-4 h-4 sm:w-5 sm:h-5 text-gray-400' : (passwordsMatch ? 'w-4 h-4 sm:w-5 sm:h-5 text-green-400' : 'w-4 h-4 sm:w-5 sm:h-5 text-orange-400')}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                </svg>
              </div>
              <input id="confirm-senha" type="password" required value={confirmSenha} onChange={e=>setConfirmSenha(e.target.value)} placeholder="Repita sua senha" className="w-full bg-[#2c3346] text-gray-100 border border-slate-700/60 rounded-md py-2.5 sm:py-3 pl-10 sm:pl-11 pr-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none shadow-sm text-sm sm:text-base" />
            </div>
          </div>

          {/* Conditional extra fields based on email domain; appear as soon as email matches */}
          {isStudentEmail && (
            <div>
              <label htmlFor="curso" className="block text-sm font-medium text-gray-300 mb-2">Nome do Curso</label>
              <input id="curso" type="text" value={curso} onChange={e=>setCurso(e.target.value)} placeholder="Ex: Ciência da Computação" className="w-full bg-[#2c3346] text-gray-100 border border-slate-700/60 rounded-md p-2.5 sm:p-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none shadow-sm text-sm sm:text-base" required />
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">Detectamos um email de aluno. Informe seu curso.</p>
            </div>
          )}

          {isProfessorEmail && (
            <div>
              <label htmlFor="disciplina" className="block text-sm font-medium text-gray-300 mb-2">Disciplinas que ministra</label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input id="disciplina" type="text" value={newDisciplina} onChange={e => setNewDisciplina(e.target.value)} placeholder="Ex: Cálculo I" className="flex-1 bg-[#2c3346] text-gray-100 border border-slate-700/60 rounded-md p-2.5 sm:p-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none shadow-sm text-sm sm:text-base" onKeyDown={e=>{ if(e.key=== 'Enter'){ e.preventDefault(); if(newDisciplina.trim()){ setDisciplinas(prev=>[...prev, newDisciplina.trim()]); setNewDisciplina('') } } }} />
                <button type="button" onClick={() => { if(newDisciplina.trim()){ setDisciplinas(prev=>[...prev, newDisciplina.trim()]); setNewDisciplina('') } }} className="bg-yellow-400 text-gray-900 font-semibold px-4 py-2.5 rounded-md hover:bg-yellow-300 transition-shadow shadow-sm text-sm sm:text-base whitespace-nowrap">Adicionar</button>
              </div>

              {disciplinas.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {disciplinas.map((d, i) => (
                    <span key={i} className="inline-flex items-center gap-2 bg-slate-700/60 text-gray-100 px-3 py-1 rounded-full text-xs sm:text-sm">
                      <span className="break-words">{d}</span>
                      <button type="button" onClick={() => setDisciplinas(prev => prev.filter((_, idx) => idx !== i))} className="text-gray-300 hover:text-white text-base">×</button>
                    </span>
                  ))}
                </div>
              )}
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">Detectamos um email de professor. Adicione as disciplinas que você leciona. Pressione Enter ou clique em "Adicionar".</p>
            </div>
          )}

          <div className="pt-2">
            <button type="submit" className="w-full bg-yellow-400 text-gray-900 font-bold p-3 rounded-md hover:bg-yellow-300 transition-colors duration-300 shadow-sm text-sm sm:text-base">Cadastrar</button>
          </div>
        </form>

        <div className="text-center mt-5 sm:mt-6">
          <p className="text-sm text-gray-300">Já tem conta? <a href="#" onClick={(e)=>{e.preventDefault(); navigate('/')}} className="font-medium text-blue-400 hover:text-blue-300">Faça login</a></p>
        </div>
        </div>
      </div>
    </PageContainer>
  )
}
