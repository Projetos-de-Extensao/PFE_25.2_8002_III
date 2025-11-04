import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  // detect student role via localStorage (set 'userRole' = 'student' for demo)
  const isBrowser = typeof window !== 'undefined'
  const role = isBrowser ? window.localStorage.getItem('userRole') : null
  // show student UI in development automatically for demo purposes
  const isStudent = role === 'student' || (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV)
  const isProfessor = role === 'professor'

  const navigate = useNavigate()

  return (
    <header className="bg-slate-800 w-full py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div>
            <img src="/assets/ibmec_logo_bg.png" alt="logo" className="h-8 object-contain" />
          <h1 className="text-2xl font-bold text-white">Portal Monitor</h1>
        </div>

        <div className="flex items-center gap-4">
          {isStudent && (
            <div className="flex items-center gap-3">
              <Link to="/dashboard" className="bg-slate-700 hover:bg-slate-600 text-gray-100 px-3 py-2 rounded-md text-sm">Dashboard</Link>
              <Link to="/applications" className="bg-slate-700 hover:bg-slate-600 text-gray-100 px-3 py-2 rounded-md text-sm">Minhas Candidaturas</Link>
              <button
                onClick={() => {
                  if (isBrowser) {
                    window.localStorage.removeItem('userRole')
                  }
                  navigate && navigate('/')
                }}
                className="bg-red-600 hover:bg-red-500 text-white px-3 py-2 rounded-md text-sm"
              >
                Sair
              </button>
            </div>
          )}

          {isProfessor && (
            <div className="flex items-center gap-3">
              <Link to="/professor" className="bg-slate-700 hover:bg-slate-600 text-gray-100 px-3 py-2 rounded-md text-sm">Painel Professor</Link>
              <Link to="/professor" className="bg-slate-700 hover:bg-slate-600 text-gray-100 px-3 py-2 rounded-md text-sm">Minhas Vagas</Link>
              <Link to="/professor/vaga/v1/applicants" className="bg-slate-700 hover:bg-slate-600 text-gray-100 px-3 py-2 rounded-md text-sm">Avaliar Candidatos</Link>
              <button
                onClick={() => {
                  if (isBrowser) {
                    window.localStorage.removeItem('userRole')
                  }
                  navigate && navigate('/')
                }}
                className="bg-red-600 hover:bg-red-500 text-white px-3 py-2 rounded-md text-sm"
              >
                Sair
              </button>
            </div>
          )}

          
        </div>
      </div>
    </header>
  )
}
