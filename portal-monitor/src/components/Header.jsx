import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Header() {
  const isBrowser = typeof window !== 'undefined'
  const isAuthenticated = isBrowser ? localStorage.getItem('isAuthenticated') === 'true' : false
  const userType = isBrowser ? localStorage.getItem('userType') : null
  
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function check() {
      setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 700)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const handleLogout = () => {
    if (isBrowser) {
      localStorage.removeItem('isAuthenticated')
      localStorage.removeItem('userType')
      localStorage.removeItem('userEmail')
    }
    navigate('/')
    setMenuOpen(false)
  }

  const navLinkBase = 'px-3 py-2 rounded-md text-sm text-gray-300 transition-all duration-150 transform focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/70'
  const navLinkHover = 'hover:text-yellow-300 hover:scale-105'
  const navLinkActive = 'text-yellow-300 font-semibold'

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-700/60 bg-gradient-to-r from-slate-900 to-slate-800/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/ibmec_logo_bg.png" alt="logo" className="h-8 w-auto object-contain" />
          <span className="text-lg sm:text-xl font-semibold tracking-tight text-white">Portal Monitor</span>
        </div>

        {isAuthenticated && (
          <nav>
            {/* Desktop nav */}
            <div className="desktop-nav items-center gap-2">
              {userType === 'aluno' && (
                <>
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
                    onClick={handleLogout}
                    className="px-3 py-2 rounded-md text-sm bg-red-600/90 hover:bg-red-500 text-white shadow-sm"
                  >
                    Sair
                  </button>
                </>
              )}

              {userType === 'professor' && (
                <>
                  <Link
                    to="/professor"
                    className={`${navLinkBase} ${pathname === '/professor' || pathname.startsWith('/professor/') ? navLinkActive : navLinkHover}`}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-3 py-2 rounded-md text-sm bg-red-600/90 hover:bg-red-500 text-white shadow-sm"
                  >
                    Sair
                  </button>
                </>
              )}

              {userType === 'admin' && (
                <>
                  <Link
                    to="/admin"
                    className={`${navLinkBase} ${pathname === '/admin' ? navLinkActive : navLinkHover}`}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-3 py-2 rounded-md text-sm bg-red-600/90 hover:bg-red-500 text-white shadow-sm"
                  >
                    Sair
                  </button>
                </>
              )}
            </div>

            {/* Mobile nav */}
            <div className="mobile-nav">
              <button
                aria-label="Abrir menu"
                onClick={() => setMenuOpen(prev => !prev)}
                className="hamburger inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-700/40 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                </svg>
              </button>

              {menuOpen && (
                <div className="mobile-overlay" role="dialog" aria-modal="true">
                  <div className="mobile-overlay__header flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src="/assets/ibmec_logo_bg.png" alt="logo" className="h-8 w-auto object-contain" />
                      <span className="text-lg font-semibold text-slate-900">Portal Monitor</span>
                    </div>
                    <button aria-label="Fechar menu" onClick={() => setMenuOpen(false)} className="p-2 rounded-md hover:bg-slate-100">
                      <svg className="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="mobile-overlay__panel mt-6">
                    <nav className="flex flex-col gap-2">
                      {userType === 'aluno' && (
                        <>
                          <Link to="/dashboard" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded text-slate-900 hover:bg-slate-100">Dashboard</Link>
                          <Link to="/applications" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded text-slate-900 hover:bg-slate-100">Minhas Candidaturas</Link>
                          <button onClick={handleLogout} className="text-left px-4 py-3 rounded text-slate-900 hover:bg-slate-100">Sair</button>
                        </>
                      )}
                      {userType === 'professor' && (
                        <>
                          <Link to="/professor" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded text-slate-900 hover:bg-slate-100">Dashboard</Link>
                          <button onClick={handleLogout} className="text-left px-4 py-3 rounded text-slate-900 hover:bg-slate-100">Sair</button>
                        </>
                      )}
                      {userType === 'admin' && (
                        <>
                          <Link to="/admin" onClick={() => setMenuOpen(false)} className="px-4 py-3 rounded text-slate-900 hover:bg-slate-100">Dashboard</Link>
                          <button onClick={handleLogout} className="text-left px-4 py-3 rounded text-slate-900 hover:bg-slate-100">Sair</button>
                        </>
                      )}
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
