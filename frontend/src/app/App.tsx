import React from 'react'
import { AuthProvider } from '@/shared/hooks/useAuth'
import { AppRouter } from './router'
import '@/shared/styles/globals.css'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App