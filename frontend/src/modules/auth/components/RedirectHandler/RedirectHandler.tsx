import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/shared/hooks/useAuth'

export const RedirectHandler: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    console.log('🔄 RedirectHandler - Estado:', { isAuthenticated, isLoading })
    
    if (!isLoading) {
      if (isAuthenticated) {
        const from = (location.state as any)?.from?.pathname || '/dashboard'
        console.log('✅ Usuário autenticado - Redirecionando para:', from)
        navigate(from, { replace: true })
      } else {
        console.log('❌ Usuário não autenticado - Redirecionando para: /login')
        navigate('/login', { replace: true })
      }
    } else {
      console.log('⏳ Ainda carregando...')
    }
  }, [isAuthenticated, isLoading, navigate, location])

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'var(--bg-primary, #f5f5f5)',
      color: 'var(--text-primary, #333)'
    }}>
      <div>
        <div>Carregando...</div>
        <div style={{ fontSize: '12px', marginTop: '10px', opacity: 0.7 }}>
          Loading: {isLoading ? 'true' : 'false'} | Auth: {isAuthenticated ? 'true' : 'false'}
        </div>
      </div>
    </div>
  )
}