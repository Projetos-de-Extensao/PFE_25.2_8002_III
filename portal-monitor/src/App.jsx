import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import StudentDashboard from './pages/StudentDashboard'
import VagaDetailPage from './pages/VagaDetailPage'
import MyApplicationsPage from './pages/MyApplicationsPage'
import ProfessorDashboard from './pages/ProfessorDashboard'
import VagaApplicantsPage from './pages/VagaApplicantsPage'
import StudentApplicationPage from './pages/StudentApplicationPage'
import AdministratorDashboard from './pages/AdministratorDashboard'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow p-8">
          <div className="w-full max-w-6xl mx-auto">
            <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/vaga/:id" element={<VagaDetailPage />} />
            <Route path="/applications" element={<MyApplicationsPage />} />

            {/* Professor routes */}
            <Route path="/professor" element={<ProfessorDashboard />} />
            <Route path="/professor/vaga/:id/applicants" element={<VagaApplicantsPage />} />
            <Route path="/vaga/:id/apply" element={<StudentApplicationPage />} />
            {/* Admin route */}
            <Route path="/admin" element={<AdministratorDashboard />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
