import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Header() {
  // detect student role via localStorage (set 'userRole' = 'student' for demo)
  const isBrowser = typeof window !== 'undefined'
  const role = isBrowser ? window.localStorage.getItem('userRole') : null
  const isDev = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV
  // In dev, default to student ONLY if no role is set
  const isStudent = role === 'student'  || (isDev)
  const isProfessor = role === 'professor' 
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const navLinkBase =
    'px-3 py-2 rounded-md text-sm text-gray-300 transition-all duration-150 transform focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70'
    // Subtle hover: yellow text like VagaCard, with a gentle scale
    const navLinkHover = 'hover:text-yellow-300 hover:scale-105'
  // Subtle active: brighter yellow text and slightly bolder weight, no background block
  const navLinkActive = 'text-yellow-300 font-semibold'

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-700/60 bg-gradient-to-r from-slate-900 to-slate-800/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/ibmec_logo_bg.png" alt="logo" className="h-8 w-auto object-contain" />
          <span className="text-lg sm:text-xl font-semibold tracking-tight text-white">Portal Monitor</span>
        </div>

        <nav className="flex items-center gap-2">
          {isStudent && (
            <div className="flex items-center gap-2">
              <Link
                to="/dashboard"
                className={`${navLinkBase} ${pathname.startsWith('/dashboard') ? navLinkActive : navLinkHover}`}
              >
                Dashboard
              </Link>
              <Link
                to="/applications"
                className={`${navLinkBase} ${pathname.startsWith('/applications') ? navLinkActive : navLinkHover}`}
              >
                Minhas Candidaturas
              </Link>
              <button
                onClick={() => {
                  if (isBrowser) {
                    window.localStorage.removeItem('userRole')
                  }
                  navigate && navigate('/')
                }}
                className="px-3 py-2 rounded-md text-sm bg-red-600/90 hover:bg-red-500 text-white shadow-sm"
              >
                Sair
              </button>
            </div>
          )}

          {isProfessor && (
            <div className="flex items-center gap-2">
              <Link
                to="/professor"
                className={`${navLinkBase} ${pathname === '/professor' ? navLinkActive : navLinkHover}`}
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  if (isBrowser) {
                    window.localStorage.removeItem('userRole')
                  }
                  navigate && navigate('/')
                }}
                className="px-3 py-2 rounded-md text-sm bg-red-600/90 hover:bg-red-500 text-white shadow-sm"
              >
                Sair
              </button>
            </div>
          )}

        </nav>
      </div>
    </header>
  )
}
