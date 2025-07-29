import React, { useEffect } from 'react'
import { AppRouter } from './router'
import { usePerformance } from '@/core/utils/performance'
import '@/shared/styles/globals.css'      // ← ADICIONAR ESTA LINHA
import '@/shared/styles/animations.css'

const App: React.FC = () => {
  const { logLoadTime } = usePerformance()

  useEffect(() => {
    logLoadTime('PlataformaPCP')
  }, [logLoadTime])

  return <AppRouter />
}

export default App