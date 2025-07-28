import React from 'react'
import { Button } from '@/shared/components/ui'
import { smoothScrollTo } from '@/core/utils/helpers'
import { APP_CONFIG } from '@/core/config/constants'
import styles from './Hero.module.css'

export const Hero: React.FC = () => {
  const handleScrollToModules = () => {
    smoothScrollTo('modules')
  }

  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Gestão Industrial Inteligente</h1>
      <p className={styles.subtitle}>
        {APP_CONFIG.description}. Plataforma modular completa para análise de produção, manutenção, estoque e qualidade. 
        Transforme dados em decisões estratégicas.
      </p>
      <div className={styles.cta}>
        <Button 
          variant="primary" 
          icon="rocket" 
          onClick={handleScrollToModules}
        >
          Explorar Módulos
        </Button>
        <Button variant="ghost" icon="play-circle">
          Ver Demo
        </Button>
      </div>
    </section>
  )
}