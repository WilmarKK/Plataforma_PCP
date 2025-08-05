# Guia de Implementação dos Componentes de Login

## 🏗️ Arquitetura dos Componentes Necessários

### Árvore de Dependências dos Componentes

```
LoginPage
├── Icon (de @/shared/components/ui)
├── LoginForm (de ../components)
└── SSOButtons (de ../components)
```

## 🔧 Especificações dos Componentes

### 1. Componente Icon (`@/shared/components/ui`)

**Localização**: `src/shared/components/ui/Icon.tsx`

**Interface**:
```tsx
interface IconProps {
  name: string
  size?: number
  color?: string
  className?: string
}

export const Icon: React.FC<IconProps>
```

**Ícones Necessários**:
- `factory` - Usado na seção do logo da marca

**Exemplo de Implementação**:
```tsx
import React from 'react'

interface IconProps {
  name: string
  size?: number
  color?: string
  className?: string
}

export const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  color = 'currentColor',
  className = ''
}) => {
  const iconMap = {
    factory: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
        <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
      </svg>
    ),
    // Adicione mais ícones conforme necessário
  }

  return iconMap[name as keyof typeof iconMap] || null
}
```

### 2. Componente LoginForm (`../components`)

**Localização**: `src/pages/login/components/LoginForm.tsx`

**Funcionalidades Esperadas**:
- Campo de entrada de email/usuário
- Campo de senha com toggle de visibilidade
- Checkbox "Lembrar de mim"
- Link "Esqueceu a senha?"
- Botão de envio com estado de carregamento
- Validação de formulário
- Exibição de mensagens de erro

**Interface**:
```tsx
interface LoginFormProps {
  onSubmit?: (credentials: LoginCredentials) => void
  loading?: boolean
  error?: string
}

interface LoginCredentials {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm: React.FC<LoginFormProps>
```

**Requisitos de Estilização**:
```css
/* Deve combinar com o tema glassmorphism */
.loginForm {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.inputGroup {
  position: relative;
}

.input {
  width: 100%;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: rgba(59, 130, 246, 0.6);
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.submitButton {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submitButton:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
}
```

### 3. Componente SSOButtons (`../components`)

**Localização**: `src/pages/login/components/SSOButtons.tsx`

**Funcionalidades Esperadas**:
- Botão SSO do Google
- Botão Microsoft/Azure AD
- Botão GitHub (opcional)
- Estados de carregamento
- Tratamento de erros

**Interface**:
```tsx
interface SSOButtonsProps {
  onGoogleLogin?: () => void
  onMicrosoftLogin?: () => void
  onGitHubLogin?: () => void
  loading?: boolean
  disabled?: boolean
}

export const SSOButtons: React.FC<SSOButtonsProps>
```

**Layout Esperado**:
```tsx
export const SSOButtons: React.FC<SSOButtonsProps> = ({
  onGoogleLogin,
  onMicrosoftLogin,
  loading = false,
  disabled = false
}) => {
  return (
    <div className={styles.ssoContainer}>
      <button 
        className={styles.ssoButton}
        onClick={onGoogleLogin}
        disabled={loading || disabled}
      >
        <Icon name="google" size={20} />
        Continuar com Google
      </button>
      
      <button 
        className={styles.ssoButton}
        onClick={onMicrosoftLogin}
        disabled={loading || disabled}
      >
        <Icon name="microsoft" size={20} />
        Continuar com Microsoft
      </button>
    </div>
  )
}
```

**Requisitos de Estilização**:
```css
.ssoContainer {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.ssoButton {
  width: 100%;
  padding: 0.875rem 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
}

.ssoButton:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}
```

## 📁 Estrutura de Arquivos Recomendada

```
src/
├── pages/
│   └── login/
│       ├── components/
│       │   ├── index.ts
│       │   ├── LoginForm/
│       │   │   ├── index.ts
│       │   │   ├── LoginForm.tsx
│       │   │   ├── LoginForm.module.css
│       │   │   └── LoginForm.test.tsx
│       │   └── SSOButtons/
│       │       ├── index.ts
│       │       ├── SSOButtons.tsx
│       │       ├── SSOButtons.module.css
│       │       └── SSOButtons.test.tsx
│       ├── index.ts
│       ├── LoginPage.tsx
│       ├── LoginPage.module.css
│       └── README.md
└── shared/
    └── components/
        └── ui/
            └── Icon/
                ├── index.ts
                ├── Icon.tsx
                ├── Icon.module.css
                └── icons/
                    ├── factory.svg
                    ├── google.svg
                    └── microsoft.svg
```

## 🎨 Integração de Design Tokens

### Propriedades CSS Personalizadas

Defina estas no seu CSS global ou sistema de design:

```css
:root {
  /* Tokens Específicos da Página de Login */
  --login-glass-bg: rgba(255, 255, 255, 0.12);
  --login-glass-border: rgba(255, 255, 255, 0.18);
  --login-glass-backdrop: blur(25px);
  
  /* Elementos Interativos */
  --button-primary-bg: linear-gradient(135deg, #3b82f6, #8b5cf6);
  --button-secondary-bg: rgba(255, 255, 255, 0.05);
  --input-bg: rgba(255, 255, 255, 0.08);
  --input-border: rgba(255, 255, 255, 0.15);
  --input-focus-border: rgba(59, 130, 246, 0.6);
  
  /* Tipografia */
  --text-primary: #ffffff;
  --text-secondary: #cbd5e1;
  --text-muted: #94a3b8;
  
  /* Espaçamento */
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 2.5rem;
  --space-3xl: 3rem;
  
  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-2xl: 24px;
}
```

## 🔐 Integração de Autenticação

### Fluxo de Autenticação Esperado

```tsx
// Exemplo de hook de autenticação
interface UseAuthReturn {
  login: (credentials: LoginCredentials) => Promise<void>
  loginWithGoogle: () => Promise<void>
  loginWithMicrosoft: () => Promise<void>
  loading: boolean
  error: string | null
  user: User | null
}

// Uso na LoginPage
const LoginPageContainer: React.FC = () => {
  const { login, loginWithGoogle, loginWithMicrosoft, loading, error } = useAuth()
  const navigate = useNavigate()

  const handleLogin = async (credentials: LoginCredentials) => {
    try {
      await login(credentials)
      navigate('/dashboard')
    } catch (err) {
      // Erro tratado pelo hook useAuth
    }
  }

  return (
    <LoginPage
      onLogin={handleLogin}
      onGoogleLogin={loginWithGoogle}
      onMicrosoftLogin={loginWithMicrosoft}
      loading={loading}
      error={error}
    />
  )
}
```

## 🧪 Estratégia de Testes

### Testes Unitários

```tsx
// LoginForm.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('deve validar formato de email', async () => {
    render(<LoginForm />)
    
    const emailInput = screen.getByLabelText(/email/i)
    fireEvent.change(emailInput, { target: { value: 'email-inválido' } })
    fireEvent.blur(emailInput)
    
    await waitFor(() => {
      expect(screen.getByText(/formato de email inválido/i)).toBeInTheDocument()
    })
  })
  
  it('deve enviar formulário com credenciais válidas', async () => {
    const mockOnSubmit = jest.fn()
    render(<LoginForm onSubmit={mockOnSubmit} />)
    
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' }
    })
    fireEvent.change(screen.getByLabelText(/senha/i), {
      target: { value: 'senha123' }
    })
    
    fireEvent.click(screen.getByRole('button', { name: /entrar/i }))
    
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'senha123',
        rememberMe: false
      })
    })
  })
})
```

### Testes de Integração

```tsx
// LoginPage.integration.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@/providers/AuthProvider'
import { LoginPage } from './LoginPage'

const renderWithProviders = (component: React.ReactElement) => {
  render(
    <BrowserRouter>
      <AuthProvider>
        {component}
      </AuthProvider>
    </BrowserRouter>
  )
}

describe('Integração LoginPage', () => {
  it('deve navegar para dashboard após login bem-sucedido', async () => {
    renderWithProviders(<LoginPage />)
    
    // Preenche formulário e envia
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'admin@empresa.com' }
    })
    fireEvent.change(screen.getByLabelText(/senha/i), {
      target: { value: 'senha-correta' }
    })
    
    fireEvent.click(screen.getByRole('button', { name: /entrar/i }))
    
    await waitFor(() => {
      expect(window.location.pathname).toBe('/dashboard')
    })
  })
})
```

## 🚀 Recomendações de Performance

### Code Splitting

```tsx
// Lazy load da página de login
import { lazy, Suspense } from 'react'

const LoginPage = lazy(() => import('./pages/login').then(m => ({ default: m.LoginPage })))

function App() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <LoginPage />
    </Suspense>
  )
}
```

### Otimização de Imagens

```tsx
// Otimize logos da marca e ícones
const iconsOtimizados = {
  factory: '/icons/factory.webp',
  google: '/icons/google.webp',
  microsoft: '/icons/microsoft.webp'
}
```

### Otimização do Tamanho do Bundle

```tsx
// Use imports tree-shaking friendly
import { useState } from 'react'
import { Icon } from '@/shared/components/ui/Icon'

// Em vez de
import * as React from 'react'
import { Icon } from '@/shared/components/ui'
```

## 📱 Considerações Mobile

### Otimizações Específicas para Mobile

```css
/* Melhorias de performance mobile */
@media (max-width: 768px) {
  .container {
    /* Reduz complexidade das animações */
    animation-duration: 12s;
  }
  
  .background::before,
  .background::after {
    /* Orbs menores para economizar bateria */
    width: 150px;
    height: 150px;
    animation-duration: 20s;
  }
}

/* Otimizações para touch */
.ssoButton,
.submitButton {
  min-height: 44px; /* Tamanho mínimo recomendado para touch */
  touch-action: manipulation; /* Previne zoom duplo toque */
}
```

### Inputs Mobile-Friendly

```tsx
// Inputs otimizados para mobile
<input
  type="email"
  inputMode="email"
  autoComplete="username"
  placeholder="seu@email.com"
/>

<input
  type="password"
  autoComplete="current-password"
  placeholder="Sua senha"
/>
```

## 🔧 Configurações de Build

### Configuração do Webpack/Vite

```javascript
// vite.config.js ou webpack.config.js
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'login-vendor': ['react', 'react-dom'],
          'login-ui': ['@/shared/components/ui']
        }
      }
    }
  }
}
```

Este guia de implementação garante que seu módulo LoginPage terá todos os componentes e funcionalidades necessárias para funcionar perfeitamente na sua aplicação PlataformaPCP.