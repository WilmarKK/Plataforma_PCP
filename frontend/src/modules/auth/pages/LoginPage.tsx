import React from 'react'
import { Icon } from '@/shared/components/ui'
import { LoginForm, SSOButtons } from '../components'
import styles from './LoginPage.module.css'

export const LoginPage: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* ESTA LINHA ESTAVA FALTANDO! */}
      <div className={styles.background} />
      
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <div className={styles.brandLogo}>
              <Icon name="factory" size={32} />
              PlataformaPCP
            </div>
            <h1 className={styles.brandTitle}>Bem-vindo de volta</h1>
            <p className={styles.brandSubtitle}>
              Faça login para acessar sua plataforma de<br />
              Gestão Industrial Inteligente
            </p>
          </div>

          {/* Login Form */}
          <LoginForm />

          {/* Divider */}
          <div className={styles.divider}>
            <span className={styles.dividerText}>ou continue com</span>
          </div>

          {/* SSO Options */}
          <SSOButtons />

          {/* Footer */}
          <div className={styles.loginFooter}>
            <p className={styles.footerText}>
              Ao fazer login, você concorda com nossos<br />
              <a href="#" className={styles.footerLink}>Termos de Uso</a> e{' '}
              <a href="#" className={styles.footerLink}>Política de Privacidade</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}