import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import './index.css'

console.log('🔍 index.tsx: Iniciando aplicação')

const container = document.getElementById('root')
console.log('🔍 index.tsx: Elemento root encontrado?', !!container)

if (!container) {
  console.error('❌ Elemento root não encontrado!')
  throw new Error('Failed to find the root element')
}

try {
  console.log('🔍 index.tsx: Criando root do React')
  const root = createRoot(container)
  
  console.log('🔍 index.tsx: Iniciando renderização')
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
  
  console.log('🔍 index.tsx: Renderização iniciada')
  
} catch (error) {
  console.error('❌ Erro durante a renderização:', error)
  throw error
}
