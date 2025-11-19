import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import Register from './pages/Register'
import StudentDashboard from './pages/StudentDashboard'
import VagaDetailPage from './pages/VagaDetailPage'
import MyApplicationsPage from './pages/MyApplicationsPage'
import ProfessorDashboard from './pages/ProfessorDashboard'
import VagaApplicantsPage from './pages/VagaApplicantsPage'
import StudentApplicationPage from './pages/StudentApplicationPage'
import AdministratorDashboard from './pages/AdministratorDashboard'
import PublicDashboard from './pages/PublicDashboard'
import CreateVagaPage from './pages/CreateVagaPage'
import AdminUserDetailPage from './pages/AdminUserDetailPage'

// Novas páginas que vamos criar
import AdminVagasPage from './pages/AdminVagasPage'
import AdminCandidaturasPage from './pages/AdminCandidaturasPage'
import AdminUsersListPage from './pages/AdminUsersListPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#FCF8ED] text-[#333333] dark:bg-[#0f1724] dark:text-white">
        <Header />
        <main className="flex-grow p-4 sm:p-8 overflow-x-hidden">
          <div className="w-full max-w-6xl mx-auto overflow-x-hidden">
            <Routes>
              {/* Rotas Públicas e de Autenticação */}
              <Route path="/" element={<PublicDashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Rotas de Aluno */}
              <Route path="/dashboard" element={<ProtectedRoute allowedTypes={['aluno']}><StudentDashboard /></ProtectedRoute>} />
              <Route path="/vaga/:id" element={<VagaDetailPage />} />
              <Route path="/applications" element={<ProtectedRoute allowedTypes={['aluno']}><MyApplicationsPage /></ProtectedRoute>} />
              <Route path="/vaga/:id/apply" element={<ProtectedRoute allowedTypes={['aluno']}><StudentApplicationPage /></ProtectedRoute>} />

              {/* Rotas de Professor */}
              <Route path="/professor" element={<ProtectedRoute allowedTypes={['professor']}><ProfessorDashboard /></ProtectedRoute>} />
              <Route path="/professor/vaga/:id/applicants" element={<ProtectedRoute allowedTypes={['professor']}><VagaApplicantsPage /></ProtectedRoute>} />

              {/* Rotas de Admin */}
              <Route path="/admin" element={<ProtectedRoute allowedTypes={['admin']}><AdministratorDashboard /></ProtectedRoute>} />
              <Route path="/admin/vagas/novo" element={<ProtectedRoute allowedTypes={['admin']}><CreateVagaPage mode="create" /></ProtectedRoute>} />
              <Route path="/admin/vagas/:id/editar" element={<ProtectedRoute allowedTypes={['admin']}><CreateVagaPage mode="edit" /></ProtectedRoute>} />
              <Route path="/admin/users/:id" element={<ProtectedRoute allowedTypes={['admin']}><AdminUserDetailPage /></ProtectedRoute>} />
              
              {/* --- NOVAS ROTAS DOS CARDS --- */}
              <Route path="/admin/vagas" element={<ProtectedRoute allowedTypes={['admin']}><AdminVagasPage /></ProtectedRoute>} />
              <Route path="/admin/candidaturas" element={<ProtectedRoute allowedTypes={['admin']}><AdminCandidaturasPage /></ProtectedRoute>} />
              <Route path="/admin/usuarios" element={<ProtectedRoute allowedTypes={['admin']}><AdminUsersListPage /></ProtectedRoute>} />

              {/* Fallback */}
              <Route path="*" element={<PublicDashboard />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}