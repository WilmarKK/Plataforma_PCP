import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react'

interface User {
  name: string
  email: string
  id?: string
}

interface AuthContextType {
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  user: User | null
}

// CRIAR O CONTEXTO COM VALOR PADRÃO
const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  logout: () => {},
  user: null
})

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const checkAuth = () => {
      try {
        const token = localStorage.getItem('auth_token')
        const userData = localStorage.getItem('user_data')
        
        if (token && userData) {
          const parsedUser = JSON.parse(userData)
          setIsAuthenticated(true)
          setUser(parsedUser)
        } else {
          // Garantir que está explicitamente não autenticado
          setIsAuthenticated(false)
          setUser(null)
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error)
        localStorage.removeItem('auth_token')
        localStorage.removeItem('user_data')
        setIsAuthenticated(false)
        setUser(null)
      } finally {
        // IMPORTANTE: Só seta isLoading como false depois de tudo
        setIsLoading(false)
      }
    }

    // Usar setTimeout para garantir que a verificação aconteça no próximo tick
    const timeoutId = setTimeout(checkAuth, 0)
    
    return () => clearTimeout(timeoutId)
  }, [])

  const login = async (email: string, password: string): Promise<void> => {
    try {
      setIsLoading(true) // Mostrar loading durante login
      
      // Simular chamada API
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Validação simples
      if (email === 'admin@test.com' && password === '123456') {
        const userData: User = {
          id: '1',
          name: 'Administrador',
          email: email
        }
        
        setIsAuthenticated(true)
        setUser(userData)
        
        localStorage.setItem('auth_token', 'fake_token_' + Date.now())
        localStorage.setItem('user_data', JSON.stringify(userData))
      } else {
        throw new Error('Credenciais inválidas')
      }
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)
    localStorage.removeItem('auth_token')
    localStorage.removeItem('user_data')
  }

  const value: AuthContextType = {
    isAuthenticated,
    isLoading,
    login,
    logout,
    user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}