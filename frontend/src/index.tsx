// Importa o React — necessário para usar JSX (a sintaxe parecida com HTML dentro do JS/TS)
import React from 'react'

// Importa o ReactDOM — usado para renderizar a aplicação na página HTML
import ReactDOM from 'react-dom/client'

// Importa o componente principal da aplicação (o <App />), localizado em src/app/App.tsx
import App from './app/App'

// Importa os estilos globais da aplicação (CSS que se aplica ao app todo)
import '@/shared/styles/globals.css'

// Renderiza a aplicação React dentro da div com id="root" (do index.html)
// ReactDOM.createRoot é usado com a versão moderna do React 18+
ReactDOM.createRoot(document.getElementById('root')!).render(
  // React.StrictMode é uma ferramenta do React para ajudar a detectar erros e avisos em tempo de desenvolvimento
  <React.StrictMode>
    {/* O componente <App /> é o ponto inicial da sua interface (ele contém o Router e todo o resto) */}
    <App />
  </React.StrictMode>,
)
// O ponto de entrada da aplicação é o arquivo index.tsx, que renderiza o componente App dentro do elemento root no HTML
// O React.StrictMode ajuda a identificar problemas potenciais na aplicação durante o desenvolvimento
// O componente App é onde a lógica principal da aplicação é definida, incluindo rotas e componentes principais
// A aplicação é estilizada globalmente através do arquivo globals.css, que contém os estilos aplicados a toda a aplicação