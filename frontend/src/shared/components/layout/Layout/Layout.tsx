import React, { useEffect } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { BaseComponent } from '@/core/types/common'
import styles from './Layout.module.css'

interface LayoutProps extends BaseComponent {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    // Initialize Lucide icons
    if (window.lucide) {
      window.lucide.createIcons()
    }

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // Close any open modals or reset states
        document.querySelectorAll('.loading').forEach(el => {
          el.classList.remove('loading')
        })
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className={styles.layout}>
  <div className="bg-gradient" />  {/* ← Classe global */}
  <Header />
  <main className={styles.main}>
    {children}
  </main>
  <Footer />
</div>
  )
}