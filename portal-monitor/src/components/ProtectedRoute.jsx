import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children, allowedTypes }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  const userType = localStorage.getItem('userType')

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  if (allowedTypes && !allowedTypes.includes(userType)) {
    // Redirect to appropriate dashboard if user tries to access wrong route
    if (userType === 'aluno') return <Navigate to="/dashboard" replace />
    if (userType === 'professor') return <Navigate to="/professor" replace />
    if (userType === 'admin') return <Navigate to="/admin" replace />
    return <Navigate to="/" replace />
  }

  return children
}
