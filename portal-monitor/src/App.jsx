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

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-grow p-4 sm:p-8 overflow-x-hidden">
          <div className="w-full max-w-6xl mx-auto overflow-x-hidden">
            <Routes>
              {/* Public main page */}
              <Route path="/" element={<PublicDashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* Student routes */}
              <Route path="/dashboard" element={<ProtectedRoute allowedTypes={['aluno']}><StudentDashboard /></ProtectedRoute>} />
              {/* Vaga details are public; apply is protected below */}
              <Route path="/vaga/:id" element={<VagaDetailPage />} />
              <Route path="/applications" element={<ProtectedRoute allowedTypes={['aluno']}><MyApplicationsPage /></ProtectedRoute>} />
              <Route path="/vaga/:id/apply" element={<ProtectedRoute allowedTypes={['aluno']}><StudentApplicationPage /></ProtectedRoute>} />

              {/* Professor routes */}
              <Route path="/professor" element={<ProtectedRoute allowedTypes={['professor']}><ProfessorDashboard /></ProtectedRoute>} />
              <Route path="/professor/vaga/:id/applicants" element={<ProtectedRoute allowedTypes={['professor']}><VagaApplicantsPage /></ProtectedRoute>} />
              
              {/* Admin route */}
              <Route path="/admin" element={<ProtectedRoute allowedTypes={['admin']}><AdministratorDashboard /></ProtectedRoute>} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
