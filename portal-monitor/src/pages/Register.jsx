import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register(){
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmSenha, setConfirmSenha] = useState('')
  const [tipo, setTipo] = useState('aluno')
  const [disciplina, setDisciplina] = useState('')
  const navigate = useNavigate()

  const isConfirmTyped = confirmSenha.length > 0
  const passwordsMatch = senha.length > 0 && confirmSenha.length > 0 && senha === confirmSenha

  function handleSubmit(e){
    e.preventDefault()
    if(senha !== confirmSenha){
      alert('As senhas não coincidem')
      return
    }
    // include disciplina only when professor
    const payload = { nome, email, senha, tipo }
    if(tipo === 'professor') payload.disciplina = disciplina
    console.log('register', payload)
    alert('Cadastro submetido (demo)')
    // After successful registration (demo) go back to login
    navigate('/')
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-slate-700 p-8 sm:p-10 rounded-lg shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Portal Monitor</h2>
          <p className="text-gray-300">Crie sua conta</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-2">Nome Completo</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <input id="nome" type="text" required value={nome} onChange={e=>setNome(e.target.value)} placeholder="Seu nome" className="w-full bg-[#2c3346] text-gray-100 border-0 rounded-md p-3 pl-10 focus:ring-2 focus:ring-yellow-400 focus:outline-none" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.161V6a2 2 0 00-2-2H3z" />
                  <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                </svg>
              </div>
              <input id="email" type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="nome@ibmec.com.br" className="w-full bg-[#2c3346] text-gray-100 border-0 rounded-md p-3 pl-10 focus:ring-2 focus:ring-yellow-400 focus:outline-none" />
            </div>
          </div>

          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-300 mb-2">Senha</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className={`${passwordsMatch ? 'w-5 h-5 text-green-400' : 'w-5 h-5 text-gray-400'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                </svg>
              </div>
              <input id="senha" type="password" required value={senha} onChange={e=>setSenha(e.target.value)} placeholder="Crie uma senha forte (8-20 caracteres)" className="w-full bg-[#2c3346] text-gray-100 border-0 rounded-md p-3 pl-10 focus:ring-2 focus:ring-yellow-400 focus:outline-none" />
            </div>
          </div>

          <div>
            <label htmlFor="confirm-senha" className="block text-sm font-medium text-gray-300 mb-2">Confirmar Senha</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className={`${!isConfirmTyped ? 'w-5 h-5 text-gray-400' : (passwordsMatch ? 'w-5 h-5 text-green-400' : 'w-5 h-5 text-orange-400')}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                </svg>
              </div>
              <input id="confirm-senha" type="password" required value={confirmSenha} onChange={e=>setConfirmSenha(e.target.value)} placeholder="Repita sua senha" className="w-full bg-[#2c3346] text-gray-100 border-0 rounded-md p-3 pl-10 focus:ring-2 focus:ring-yellow-400 focus:outline-none" />
            </div>
          </div>

          <div>
            <span className="block text-sm font-medium text-gray-300 mb-2">Tipo de Usuário</span>
            <div className="flex items-center space-x-6">
              <label className="flex items-center text-gray-200 cursor-pointer">
                <input type="radio" name="tipo-usuario" value="aluno" checked={tipo==='aluno'} onChange={()=>setTipo('aluno')} className="custom-radio" />
                <span className="ml-2">Aluno</span>
              </label>
              <label className="flex items-center text-gray-200 cursor-pointer">
                <input type="radio" name="tipo-usuario" value="professor" checked={tipo==='professor'} onChange={()=>setTipo('professor')} className="custom-radio" />
                <span className="ml-2">Professor</span>
              </label>
            </div>

            {tipo === 'professor' && (
              <div className="mt-4">
                <label htmlFor="disciplina" className="block text-sm font-medium text-gray-300 mb-2">Título da disciplina</label>
                <input id="disciplina" type="text" value={disciplina} onChange={e => setDisciplina(e.target.value)} placeholder="Ex: Cálculo I" className="w-full bg-[#2c3346] text-gray-100 border-0 rounded-md p-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none" />
                <p className="text-xs text-gray-400 mt-1">Informe o nome da disciplina que você ministra (opcional).</p>
              </div>
            )}
          </div>

          <div className="pt-2">
            <button type="submit" className="w-full bg-yellow-400 text-gray-900 font-bold p-3 rounded-md hover:bg-yellow-300 transition-colors duration-300">Cadastrar</button>
          </div>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-300">Já tem conta? <a href="#" onClick={(e)=>{e.preventDefault(); navigate('/')}} className="font-medium text-blue-400 hover:text-blue-300">Faça login</a></p>
        </div>
      </div>
    </div>
  )
}
