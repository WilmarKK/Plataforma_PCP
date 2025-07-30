import React, { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/shared/components/ui'
import { useNotification } from '@/shared/hooks/useNotification'
import { useAuth } from '@/shared/hooks/useAuth'
import styles from './LoginForm.module.css'

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const navigate = useNavigate()
  const { showError, showSuccess } = useNotification()
  const { login } = useAuth()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!email || !password) {
      showError('Por favor, preencha todos os campos.')
      return
    }

    setIsLoading(true)
    
    try {
      await login(email, password)
      showSuccess('Login realizado com sucesso!')
      
      setTimeout(() => {
        navigate('/')
      }, 1000)
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro ao fazer login'
      showError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault()
    alert('Demo: admin@test.com / 123456')
  }

  return (
    <div>
      <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
        <small style={{ color: '#666', fontSize: '12px' }}>
          Demo: admin@test.com / 123456
        </small>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="email">
            Email ou Usuário
          </label>
          <input
            type="email"
            id="email"
            className={styles.formInput}
            placeholder="seu.email@empresa.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="password">
            Senha
          </label>
          <input
            type="password"
            id="password"
            className={styles.formInput}
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>

        <div className={styles.formOptions}>
          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="remember"
              className={styles.checkbox}
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              disabled={isLoading}
            />
            <label htmlFor="remember" className={styles.checkboxLabel}>
              Lembrar-me
            </label>
          </div>
          <a href="#" className={styles.forgotLink} onClick={handleForgotPassword}>
            Esqueci minha senha
          </a>
        </div>

        {/* BOTÃO SIMPLIFICADO - SEM PROPS COMPLEXAS */}
        <button
          type="submit"
          className={`${styles.submitButton} ${isLoading ? styles.loading : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Entrando...' : 'Entrar na Plataforma'}
        </button>
      </form>
    </div>
  )
}