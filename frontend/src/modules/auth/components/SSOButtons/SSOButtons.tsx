import React from 'react'
import { Button } from '@/shared/components/ui'
import { useNotification } from '@/shared/hooks/useNotification'
import styles from './SSOButtons.module.css'

export const SSOButtons: React.FC = () => {
  const { showInfo, showWarning } = useNotification()

  const handleSSO = (method: 'ad' | 'sso') => {
    const methodNames = {
      ad: 'Active Directory',
      sso: 'SSO Corporativo'
    }
    
    showInfo(`Conectando com ${methodNames[method]}...`)
    
    // Simulate SSO process
    setTimeout(() => {
      showWarning('Funcionalidade em desenvolvimento')
    }, 1500)
  }

  return (
    <div className={styles.ssoButtons}>
      <Button
        variant="ghost"
        size="md"
        icon="building"
        onClick={() => handleSSO('ad')}
        className={styles.ssoButton}
      >
        Active Directory
      </Button>
      <Button
        variant="ghost"
        size="md"
        icon="shield"
        onClick={() => handleSSO('sso')}
        className={styles.ssoButton}
      >
        SSO Corporativo
      </Button>
    </div>
  )
}