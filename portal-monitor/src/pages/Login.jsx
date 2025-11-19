import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PageContainer from '../components/PageContainer'

const DEV_ACCOUNTS = [
  {
    label: 'Administrador',
    email: 'admin@admin.ibmec.edu.br',
    password: 'admin',
    type: 'admin',
    redirect: '/admin'
  },
  {
    label: 'Professor',
    email: 'prof@professor.ibmec.edu.br',
    password: 'professor',
    type: 'professor',
    redirect: '/professor'
  },
  {
    label: 'Aluno',
    email: 'aluno@aluno.ibmec.edu.br',
    password: 'aluno',
    type: 'aluno',
    redirect: '/dashboard'
  }
]

export default function Login(){
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    const trimmedEmail = email.trim().toLowerCase()
    const matchedAccount = DEV_ACCOUNTS.find(account => account.email === trimmedEmail && account.password === senha)

    if(!matchedAccount){
      setError('Credenciais inválidas. Utilize um dos logins de desenvolvimento listados abaixo.')
      return
    }

    localStorage.setItem('isAuthenticated', 'true')
    localStorage.setItem('userType', matchedAccount.type)
    localStorage.setItem('userEmail', matchedAccount.email)
    setError('')

    navigate(matchedAccount.redirect)
  }

  return (
    <PageContainer>
  <div className="w-full max-w-none sm:max-w-xl mx-auto">
  <div className="rounded-xl sm:rounded-2xl border-0 sm:border border-slate-700/60 bg-slate-800/60 p-6 sm:p-8 md:p-10 shadow-sm">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">Portal Monitor</h2>
          <p className="text-sm sm:text-base text-gray-300">Acesse sua conta</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <div className="relative">
              <div className="absolute top-1/2 -translate-y-1/2 left-3 pointer-events-none">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
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
                placeholder="nome@aluno.ibmec"
                className="w-full bg-[#2c3346] text-gray-100 border border-slate-700/60 rounded-md py-2.5 sm:py-3 pl-10 sm:pl-11 pr-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none shadow-sm text-sm sm:text-base"
              />
            </div>
          </div>

          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-300 mb-2">Senha</label>
            <div className="relative">
              <div className="absolute top-1/2 -translate-y-1/2 left-3 pointer-events-none">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
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
                className="w-full bg-[#2c3346] text-gray-100 border border-slate-700/60 rounded-md py-2.5 sm:py-3 pl-10 sm:pl-11 pr-3 focus:ring-2 focus:ring-yellow-400 focus:outline-none shadow-sm text-sm sm:text-base"
              />
            </div>
          </div>

          {error && (
            <div className="rounded-md border border-red-500/60 bg-red-500/10 text-red-300 text-sm px-4 py-3">
              {error}
            </div>
          )}

          <div>
            <button type="submit" className="w-full bg-yellow-400 text-gray-900 font-bold p-3 rounded-md hover:bg-yellow-300 transition-colors duration-300 shadow-sm text-sm sm:text-base">Entrar</button>
          </div>
        </form>

        <div className="mt-6 sm:mt-7 rounded-lg border border-slate-700/60 bg-slate-900/40 p-4">
          <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">Logins de desenvolvimento disponíveis</p>
          <ul className="space-y-2 text-sm text-gray-200">
            {DEV_ACCOUNTS.map(account => (
              <li key={account.email} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <span className="font-semibold text-white">{account.label}</span>
                <span className="text-gray-300 font-mono text-xs sm:text-sm break-all">{account.email} • senha: {account.password}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-5 sm:mt-6">
          <p className="text-sm text-gray-300">Não tem conta? <Link to="/register" className="font-medium text-blue-400 hover:text-blue-300">Cadastre-se</Link></p>
        </div>
        </div>
      </div>
    </PageContainer>
  )
}
