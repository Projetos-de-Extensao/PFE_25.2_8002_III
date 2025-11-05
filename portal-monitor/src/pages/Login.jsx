import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageContainer from '../components/PageContainer'

export default function Login(){
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    // For class/demo: just log values for now. Replace with API call later.
    console.log('login attempt', { email, senha })
    alert('Login submetido (demo)')
  }

  return (
    <PageContainer>
      <div className="w-full max-w-md mx-auto">
        <div className="rounded-xl border border-slate-700/60 bg-slate-800/60 p-8 sm:p-10 shadow-sm">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Portal Monitor</h2>
          <p className="text-gray-300">Acesse sua conta</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.161V6a2 2 0 00-2-2H3z" />
                  <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                </svg>
              </div>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="nome@aluno.ibmec.com"
                className="w-full bg-[#2c3346] text-gray-100 border border-slate-700/60 rounded-md p-3 pl-10 focus:ring-2 focus:ring-yellow-400 focus:outline-none shadow-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-300 mb-2">Senha</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                id="senha"
                type="password"
                required
                value={senha}
                onChange={e => setSenha(e.target.value)}
                placeholder="Sua senha"
                className="w-full bg-[#2c3346] text-gray-100 border border-slate-700/60 rounded-md p-3 pl-10 focus:ring-2 focus:ring-yellow-400 focus:outline-none shadow-sm"
              />
            </div>
          </div>

          <div>
            <button type="submit" className="w-full bg-yellow-400 text-gray-900 font-bold p-3 rounded-md hover:bg-yellow-300 transition-colors duration-300 shadow-sm">Entrar</button>
          </div>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-300">Não tem conta? <Link to="/register" className="font-medium text-blue-400 hover:text-blue-300">Cadastre-se</Link></p>
        </div>
        </div>
      </div>
    </PageContainer>
  )
}
