
import React, { useEffect } from 'react'
import { Layout } from '@/shared/components/layout'
import { HomePage } from '@/modules/home'
import { usePerformance } from '@/core/utils/performance'
import '@/shared/styles/animations.css'

const App: React.FC = () => {
  const { logLoadTime } = usePerformance()

  useEffect(() => {
    logLoadTime('PlataformaPCP')
  }, [logLoadTime])

  return (
    <Layout>
      <HomePage />
    </Layout>
  )
}

export default App