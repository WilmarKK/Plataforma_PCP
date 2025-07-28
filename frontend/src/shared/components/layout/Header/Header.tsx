import React from 'react'
import { Button, Icon } from '@/shared/components/ui'
import { useScroll } from '@/shared/hooks/useScroll'
import { APP_CONFIG } from '@/core/config/constants'
import { cn } from '@/core/utils/helpers'
import styles from './Header.module.css'

export const Header: React.FC = () => {
  const { isScrolled } = useScroll()

  return (
    <header className={cn(styles.header, isScrolled && styles.scrolled)}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <Icon name="factory" size={28} />
          {APP_CONFIG.name}
        </div>
        
        <nav className={styles.navActions}>
          <Button variant="ghost" icon="settings">
            Configurações
          </Button>
          <Button variant="primary" icon="user">
            Acessar
          </Button>
        </nav>
      </div>
    </header>
  )
}