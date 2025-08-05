# Módulo de Login

Uma página de login moderna e responsiva para a PlataformaPCP (Plataforma de Gestão Industrial) com animações avançadas em CSS, design glassmorphism e integração SSO.

## 🎨 Características

- **Design Glassmorphism Moderno**: Card de login translúcido com efeitos de blur de fundo
- **Animações Dinâmicas de Background**: Orbs flutuantes com gradientes e movimentos orbitais
- **Gradientes Vibrantes**: Gradientes multicoloridos animados em toda a interface
- **Design Responsivo**: Otimizado para desktop, tablet e dispositivos móveis
- **Acessibilidade**: Suporta `prefers-reduced-motion` para usuários sensíveis a movimento
- **Otimizado para Performance**: Usa propriedades `will-change` e aceleração de hardware
- **Integração SSO Pronta**: Preparado para opções de Single Sign-On

## 📁 Estrutura de Arquivos

```
├── index.ts              # Exportações do módulo
├── LoginPage.tsx         # Componente principal da página de login
├── LoginPage.module.css  # Estilização com animações e design responsivo
└── README.md            # Esta documentação
```

## 🚀 Como Usar

### Implementação Básica

```tsx
import { LoginPage } from './LoginPage'

// No seu roteador da aplicação ou componente
function App() {
  return <LoginPage />
}
```

### Com Configuração de Rotas

```tsx
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/login'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {/* Outras rotas */}
    </Routes>
  )
}
```

## 🎯 Dependências de Componentes

O componente LoginPage requer que estas dependências estejam disponíveis:

```tsx
// Componentes necessários (devem ser implementados separadamente)
import { Icon } from '@/shared/components/ui'          // Componente de ícones da UI
import { LoginForm } from '../components'             // Componente do formulário de login
import { SSOButtons } from '../components'            // Componente dos botões SSO
```

## 🎨 Sistema de Design

### Paleta de Cores

```css
/* Gradientes Principais */
background: linear-gradient(-45deg, 
  #1a1a2e,  /* Azul Marinho Escuro */
  #16213e,  /* Azul Escuro */
  #0f3462,  /* Azul Médio */
  #4a3265,  /* Roxo Azulado */
  #6b4b7c,  /* Roxo Médio */
  #7d5a8a   /* Roxo Claro */
);

/* Cores de Destaque */
#3b82f6   /* Azul */
#8b5cf6   /* Roxo */
#ec4899   /* Rosa */
#22c55e   /* Verde */
#fbbf24   /* Amarelo */
```

### Tipografia

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Breakpoints

```css
@media (max-width: 480px) /* Mobile */
```

## ⚡ Animações

### Animações de Keyframe Disponíveis

1. **modernGradientFlow**: Fundo gradiente animado (duração 8s)
2. **floatingOrbs**: Animações de orbs flutuantes (duração 18-22s)
3. **pulseGlow**: Efeito de brilho pulsante (duração 15s)
4. **orbitalMotion**: Movimento orbital circular (duração 30s)
5. **fadeInUp**: Animação de entrada do componente (duração 1s)
6. **textShimmer**: Brilho do gradiente do texto (duração 3s)

### Considerações de Performance

- Usa propriedade `will-change` para animações otimizadas
- Aceleração de hardware habilitada para animações suaves a 60fps
- Respeita configuração de acessibilidade `prefers-reduced-motion`
- Efeitos de blur são mínimos (1px) para manter performance

## 📱 Comportamento Responsivo

### Desktop (> 480px)
- Orbs e animações em tamanho completo
- Máximo impacto visual
- Todos os elementos interativos totalmente visíveis

### Mobile (≤ 480px)
- Tamanhos de orbs reduzidos para performance
- Paddings e tamanhos de fonte menores
- Hierarquia visual mantida
- Áreas de interação otimizadas para toque

## 🛠️ Personalização

### Modificando Cores

Edite as propriedades CSS personalizadas em `LoginPage.module.css`:

```css
/* Atualize os fundos gradientes */
.container {
  background: linear-gradient(-45deg, 
    #sua-cor-1, 
    #sua-cor-2, 
    /* ... mais cores */
  );
}
```

### Ajustando Animações

```css
/* Acelerar/desacelerar animações */
.background::before {
  animation: floatingOrbs 10s ease-in-out infinite; /* Alterado de 18s */
}

/* Desabilitar animações específicas */
.container {
  animation: none; /* Remove o fluxo do gradiente */
}
```

### Modificando Efeito Glassmorphism

```css
.loginCard {
  background: rgba(255, 255, 255, 0.15); /* Mais opaco */
  backdrop-filter: blur(30px);            /* Mais blur */
  border: 2px solid rgba(255, 255, 255, 0.2); /* Borda mais forte */
}
```

## 🎪 Personalização da Marca

Atualize a seção da marca em `LoginPage.tsx`:

```tsx
<div className={styles.brandLogo}>
  <Icon name="seu-icone" size={32} />
  NomeDaSuaPlataforma
</div>
<h1 className={styles.brandTitle}>Sua Mensagem de Boas-vindas</h1>
<p className={styles.brandSubtitle}>
  Descrição da sua plataforma
</p>
```

## 🔧 Requisitos Técnicos

### Suporte Mínimo de Navegadores
- Chrome 91+
- Firefox 90+
- Safari 14+
- Edge 91+

### Recursos CSS Necessários
- CSS Grid & Flexbox
- CSS Custom Properties (Variáveis)
- CSS Animations & Keyframes
- backdrop-filter (Glassmorphism)
- CSS Gradients

## 🐛 Problemas Comuns e Soluções

### Problema: Animações não suaves no mobile
**Solução**: Reduza a complexidade das animações ou desabilite em dispositivos de baixo desempenho
```css
@media (max-width: 480px) and (prefers-reduced-motion: no-preference) {
  .background::before { animation-duration: 25s; }
}
```

### Problema: Glassmorphism não funciona
**Solução**: Verifique o suporte do navegador para `backdrop-filter`
```css
.loginCard {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(25px);
  /* Fallback para navegadores não suportados */
  @supports not (backdrop-filter: blur(25px)) {
    background: rgba(255, 255, 255, 0.2);
  }
}
```

### Problema: Alto uso de CPU
**Solução**: Adicione otimizações de performance
```css
.background * {
  will-change: transform;
  transform: translateZ(0); /* Força aceleração de hardware */
}
```

## 📋 Acessibilidade

- ✅ Respeita `prefers-reduced-motion`
- ✅ Mantém proporções de contraste de cores
- ✅ Estrutura HTML semântica
- ✅ Navegação por teclado pronta
- ✅ Texto compatível com leitores de tela

## 🔄 Histórico de Versões

### v1.0.0
- Implementação inicial com design glassmorphism
- Suite completa de animações
- Breakpoints responsivos
- Integração SSO pronta
- Otimizações de performance

## 🤝 Contribuindo

Ao modificar este componente:

1. Teste em múltiplos dispositivos e navegadores
2. Verifique se as animações não causam enjoo de movimento
3. Mantenha padrões de acessibilidade
4. Atualize a documentação para novas funcionalidades
5. Teste o impacto de performance das mudanças

## 📄 Licença

Este componente faz parte do projeto PlataformaPCP. Consulte a licença do projeto principal.