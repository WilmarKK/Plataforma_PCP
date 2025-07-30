# Shared - Recursos Compartilhados

Este diretório contém todos os recursos compartilhados da aplicação, incluindo componentes reutilizáveis, hooks customizados e estilos globais. Todos os elementos aqui são projetados para serem reutilizados em diferentes módulos da aplicação.

## 📂 Estrutura

shared/
├── components/        
│   ├── ui/            
│   │   ├── Button/    ✅ (Button.tsx, Button.module.css, index.ts)
│   │   ├── Card/      ✅ (Card.tsx, Card.module.css, index.ts)
│   │   ├── Icon/      ✅ (Icon.tsx, index.ts)
│   │   └── index.ts   ✅ (barrel export dos componentes UI)
│   └── layout/        
│       ├── Header/    ✅ (Header.tsx, Header.module.css, index.ts)
│       ├── Footer/    ✅ (Footer.tsx, Footer.module.css, index.ts)
│       ├── Layout/    ✅ (Layout.tsx, Layout.module.css, index.ts)
│       └── index.ts   ✅ (barrel export dos layouts)
├── hooks/             
│   ├── useNotification.ts        ✅
│   ├── useScroll.ts              ✅
│   └── useIntersectionObserver.ts ✅
└── styles/            
    ├── globals.css    ✅
    ├── animations.css ✅
    └── variables.css  ✅

---

## 🧩 Components

### UI Components (`components/ui/`)

Componentes de interface fundamentais que seguem o design system da aplicação.

#### Button

Componente de botão altamente customizável com suporte a ícones, estados de loading e diferentes variantes.

**Props:**
```typescript
interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'ghost' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  icon?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  className?: string
}
```

**Variantes:**
- `primary`: Estilo principal com background accent e texto branco
- `ghost`: Botão transparente com borda sutil
- `secondary`: Estilo secundário com background de card

**Tamanhos:**
- `sm`: Padding reduzido (0.5rem 1rem)
- `md`: Tamanho padrão (0.75rem 1.5rem)
- `lg`: Tamanho maior (1rem 2rem)

**Recursos:**
- Suporte a ícones via Lucide React
- Estado de loading com spinner animado
- Estado disabled com opacidade reduzida
- Animações de hover com `translateY(-1px)`
- Focus ring acessível
- Responsive design para mobile

**Exemplo de uso:**
```tsx
<Button 
  variant="primary" 
  size="md" 
  icon="plus"
  onClick={handleClick}
  loading={isLoading}
>
  Adicionar Item
</Button>
```

#### Card

Componente de cartão com efeitos glassmorphism e animações suaves.

**Props:**
```typescript
interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'glass' | 'glass-strong' | 'solid'
  hover?: boolean
  onClick?: () => void
}
```

**Variantes:**
- `glass`: Efeito glassmorphism sutil (5% opacity, blur 16px)
- `glass-strong`: Efeito glassmorphism mais intenso (8% opacity, blur 20px)
- `solid`: Cartão sólido com background padrão

**Recursos:**
- Pseudo-elemento `::before` para linha superior em gradiente
- Animação de hover com `translateY(-4px)`
- Cursor pointer quando clicável
- Border radius de 16px para design moderno
- Responsive padding para mobile

**Exemplo de uso:**
```tsx
<Card 
  variant="glass" 
  hover={true}
  onClick={handleCardClick}
>
  <h3>Título do Card</h3>
  <p>Conteúdo do cartão...</p>
</Card>
```

#### Icon

Wrapper para ícones do Lucide React com integração global.

**Props:**
```typescript
interface IconProps {
  name: string
  size?: number
  color?: string
  className?: string
}
```

**Recursos:**
- Integração com biblioteca Lucide via CDN
- Suporte a todos os ícones do Lucide
- Tamanho customizável (padrão: 24px)
- Cor customizável via prop ou CSS
- Re-renderização automática quando necessário

**Exemplo de uso:**
```tsx
<Icon 
  name="star" 
  size={20} 
  color="var(--accent)"
  className="custom-icon"
/>
```

### Layout Components (`components/layout/`)

Componentes estruturais para organização da interface.

#### Header

Cabeçalho fixo com efeito glassmorphism e detecção de scroll.

**Recursos:**
- Posição fixa no topo da tela
- Background transparente que se torna opaco no scroll
- Logo com gradiente text-clip
- Navegação com botões de ação
- Backdrop filter blur(20px)
- Z-index 100 para sobreposição
- Layout responsivo para mobile

**Estrutura:**
- Logo com ícone "factory" e nome da aplicação
- Área de navegação com botões "Configurações" e "Acessar"
- Container centralizado com max-width 1400px

**Estados:**
- Normal: Background transparente
- Scrolled: Background com opacity 0.9 e blur

**Dependências:**
- `useScroll` hook para detecção de scroll
- Componentes `Button` e `Icon`
- Constantes de `APP_CONFIG`

#### Footer

Rodapé simples e minimalista com informações de copyright.

**Recursos:**
- Border superior sutil
- Texto centralizado
- Cor de texto muted para menor destaque
- Padding generoso (3rem vertical)
- Margin top automático (4rem)

**Conteúdo:**
- Copyright 2025 PlataformaPCP
- Texto sobre foco em excelência operacional

#### Layout

Componente de layout principal que envolve toda a aplicação.

**Props:**
```typescript
interface LayoutProps extends BaseComponent {
  children: React.ReactNode
}
```

**Recursos:**
- Background gradiente animado fixo
- Inicialização automática dos ícones Lucide
- Container principal centralizado (max-width: 1400px)
- Padding top para compensar header fixo (120px desktop, 100px mobile)
- Navegação por teclado (ESC para fechar modais)
- Estrutura: Header + Main + Footer

**Estrutura:**
```tsx
<div className={styles.layout}>
  <div className="bg-gradient" />  {/* Background animado */}
  <Header />
  <main className={styles.main}>
    {children}
  </main>
  <Footer />
</div>
```

**Background Gradiente:**
- Posição fixa cobrindo toda a tela
- Múltiplos gradientes radiais sobrepostos
- Animação `gradientShift` de 20s
- Z-index -1 para ficar atrás do conteúdo
- Cores em tons de azul, rosa e ciano com opacity 0.3

---

## 🪝 Hooks

### useNotification

Hook para exibição de notificações toast com diferentes tipos e animações.

**Retorno:**
```typescript
{
  showNotification: (message: string, type?: NotificationType, duration?: number) => void
  showSuccess: (message: string) => void
  showWarning: (message: string) => void
  showError: (message: string) => void
  showInfo: (message: string) => void
}
```

**Tipos de notificação:**
- `success`: Verde para ações bem-sucedidas
- `warning`: Amarelo para avisos
- `error`: Vermelho para erros
- `info`: Azul para informações gerais

**Recursos:**
- Posicionamento fixo no canto superior direito
- Animações de entrada e saída suaves
- Backdrop filter blur(16px) para efeito glassmorphism
- Auto-remoção após duração configurável
- Box shadow para profundidade visual
- Suporte a múltiplas notificações simultâneas

**Configurações:**
- Duração padrão: Definida em `NOTIFICATION_DURATION`
- Posição: `top: 20px, right: 20px`
- Animação: `translateX(400px)` para entrada/saída
- Z-index: 1000 para sobreposição

**Exemplo de uso:**
```tsx
const { showSuccess, showError } = useNotification()

const handleSubmit = async () => {
  try {
    await submitForm()
    showSuccess('Formulário enviado com sucesso!')
  } catch (error) {
    showError('Erro ao enviar formulário')
  }
}
```

### useScroll

Hook para monitoramento da posição e direção do scroll da página.

**Retorno:**
```typescript
{
  scrollY: number
  scrollDirection: 'up' | 'down'
  isScrolled: boolean
}
```

**Recursos:**
- Monitoramento da posição Y do scroll
- Detecção da direção do movimento
- Flag `isScrolled` para posições > 50px
- Event listener otimizado com `{ passive: true }`
- Cleanup automático do event listener

**Exemplo de uso:**
```tsx
const { isScrolled, scrollDirection } = useScroll()

return (
  <header className={cn(
    styles.header,
    isScrolled && styles.scrolled,
    scrollDirection === 'down' && styles.hidden
  )}>
    {/* header content */}
  </header>
)
```

### useIntersectionObserver

Hook para observação de elementos entrando/saindo da viewport.

**Parâmetros:**
```typescript
options?: IntersectionObserverInit
```

**Retorno:**
```typescript
{
  elementRef: RefObject<HTMLElement>
  isIntersecting: boolean
  hasIntersected: boolean
}
```

**Recursos:**
- Ref para anexar ao elemento observado
- Estado atual de intersecção
- Flag persistente para primeira intersecção
- Configurações customizáveis do observer
- Fallback para `OBSERVER_OPTIONS` das constantes

**Exemplo de uso:**
```tsx
const { elementRef, hasIntersected } = useIntersectionObserver({
  threshold: 0.1,
  rootMargin: '50px'
})

return (
  <div 
    ref={elementRef}
    className={cn(
      'content',
      hasIntersected && 'animate-fade-in'
    )}
  >
    Conteúdo que anima na primeira aparição
  </div>
)
```

### useAnimationOnScroll

Hook utilitário para ativar animações quando elemento aparece na tela.

**Retorno:**
```typescript
elementRef: RefObject<HTMLElement>
```

**Recursos:**
- Wrapper do `useIntersectionObserver`
- Ativa `animationPlayState: 'running'` automaticamente
- Ideal para animações CSS pausadas inicialmente

**Exemplo de uso:**
```tsx
const animationRef = useAnimationOnScroll()

return (
  <div 
    ref={animationRef}
    style={{ animationPlayState: 'paused' }}
    className="fade-in-animation"
  >
    Conteúdo que anima ao aparecer
  </div>
)
```

---

## 🎨 Styles - Sistema de Estilos Globais

### Variables.css - Design System

Arquivo central com todas as variáveis CSS do design system, organizadas em categorias:

#### **Cores - Backgrounds**
```css
--bg-primary: #0a0a0b          /* Background principal (quase preto) */
--bg-secondary: #1a1a1d        /* Background secundário */
--bg-tertiary: #2a2a2d         /* Background terciário */
--bg-card: rgba(255,255,255,0.03)  /* Background para cards */
--bg-hover: rgba(255,255,255,0.06) /* Background hover */
--bg-active: rgba(255,255,255,0.09) /* Background ativo */
```

#### **Cores - Bordas**
```css
--border-primary: rgba(255,255,255,0.1)    /* Borda principal */
--border-secondary: rgba(255,255,255,0.06) /* Borda secundária */
--border-accent: rgba(59,130,246,0.3)      /* Borda com accent */
```

#### **Cores - Texto**
```css
--text-primary: #ffffff        /* Texto principal (branco) */
--text-secondary: #a1a1aa      /* Texto secundário (cinza claro) */
--text-muted: #71717a          /* Texto muted (cinza médio) */
--text-inverse: #000000        /* Texto inverso (preto) */
```

#### **Cores - Brand & Status**
```css
--accent: #3b82f6              /* Azul principal */
--success: #10b981             /* Verde sucesso */
--warning: #f59e0b             /* Amarelo aviso */
--error: #ef4444               /* Vermelho erro */
```

#### **Gradientes**
```css
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
--gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)
--gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)
```

#### **Spacing System**
Escala de espaçamento baseada em rem:
```css
--space-xs: 0.25rem   /* 4px */
--space-sm: 0.5rem    /* 8px */
--space-md: 0.75rem   /* 12px */
--space-lg: 1rem      /* 16px */
--space-xl: 1.5rem    /* 24px */
--space-2xl: 2rem     /* 32px */
/* ... até 6xl: 6rem */
```

#### **Typography Scale**
```css
--text-xs: 0.75rem    /* 12px */
--text-sm: 0.875rem   /* 14px */
--text-base: 1rem     /* 16px */
--text-lg: 1.125rem   /* 18px */
/* ... até 6xl: 3.75rem */
```

#### **Glassmorphism**
```css
--glass-bg: rgba(255,255,255,0.05)      /* Background glass sutil */
--glass-bg-strong: rgba(255,255,255,0.08) /* Background glass forte */
--glass-blur: 16px                       /* Blur padrão */
--glass-blur-strong: 20px                /* Blur intenso */
```

#### **Z-Index Scale**
```css
--z-dropdown: 1000
--z-fixed: 1030
--z-modal: 1050
--z-toast: 1080
```

### Globals.css - Estilos Base

Estilos fundamentais e utilitários globais:

#### **Reset & Base**
- Reset CSS completo com `box-sizing: border-box`
- Font family system com fallbacks
- Background escuro (`--bg-primary`)
- Line-height 1.6 para legibilidade
- `overflow-x: hidden` para prevenir scroll horizontal

#### **Classes Utilitárias Glassmorphism**
```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
}

.glass-strong {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
}
```

#### **Background Gradiente Animado**
```css
.bg-gradient {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: /* múltiplos radial-gradients */;
  animation: gradientShift 20s ease infinite;
  z-index: -1;
}
```

#### **Scrollbar Customizada**
- Width: 8px
- Track: `--bg-secondary`
- Thumb: `--border` com hover em `--text-muted`
- Border radius: 4px

#### **Estados de Loading**
```css
.loading {
  opacity: 0.6;
  pointer-events: none;
}

.pulse {
  animation: pulse 2s infinite;
}
```

### Animations.css - Sistema de Animações

Keyframes e classes utilitárias para animações:

#### **Keyframes Principais**
```css
@keyframes gradientShift {
  /* Rotação e escala do background */
  0%, 100% { transform: scale(1) rotate(0deg); }
  33% { transform: scale(1.1) rotate(120deg); }
  66% { transform: scale(0.9) rotate(240deg); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInRight {
  from { transform: translateX(400px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
```

#### **Classes de Animação**
```css
.fade-in { animation: fadeInUp 0.8s ease forwards; }
.fade-in-delay { animation: fadeInUp 0.8s ease 0.2s forwards; opacity: 0; }
.scale-in { animation: scaleIn 0.3s ease forwards; }
.slide-in-right { animation: slideInRight 0.3s ease forwards; }
.shake { animation: shake 0.5s ease; }
```

#### **Hover Effects**
```css
.hover-lift {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.hover-scale {
  transition: transform 0.2s ease;
}
.hover-scale:hover {
  transform: scale(1.02);
}
```

#### **Stagger Animation**
```css
.stagger-children > * {
  animation-delay: calc(var(--stagger-delay, 0.1s) * var(--stagger-index, 0));
}
```

**Uso:**
```tsx
<div className="stagger-children">
  <div style={{'--stagger-index': 0}} className="fade-in">Item 1</div>
  <div style={{'--stagger-index': 1}} className="fade-in">Item 2</div>
  <div style={{'--stagger-index': 2}} className="fade-in">Item 3</div>
</div>
```

#### **Transition Utilities**
```css
.transition-all { transition: all 0.2s ease; }
.transition-fast { transition: all 0.1s ease; }
.transition-slow { transition: all 0.5s ease; }
```

---

## 📱 Responsividade

Todos os componentes incluem breakpoints para mobile com design mobile-first:

### **Breakpoint Principal**
```css
@media (max-width: 768px)
```

### **Ajustes por Componente**

#### **Button**
- Padding reduzido: `0.6rem 1.2rem` (padrão), `0.4rem 0.8rem` (sm), `0.8rem 1.6rem` (lg)
- Font size reduzido: `0.85rem` (padrão), `0.8rem` (sm), `0.9rem` (lg)

#### **Card**
- Padding reduzido de `2rem` para `1.5rem`

#### **Header**
- Padding horizontal reduzido de `2rem` para `1rem`
- Gap entre ações reduzido de `1rem` para `0.5rem`
- Logo font size reduzido de `1.5rem` para `1.25rem`

#### **Layout**
- Padding horizontal reduzido de `2rem` para `1rem`
- Padding top reduzido de `120px` para `100px`

#### **Globals**
- Font size base reduzido para `14px`

### **Estratégia Mobile-First**
- Todos os estilos base são otimizados para mobile
- Media queries aplicam ajustes para telas maiores
- Touch targets adequados (mínimo 44px)
- Gestos touch considerados nas animações

---

## 🔧 Utilitários & Integrações

### **Função `cn()`**
Utilitário para concatenação condicional de classes CSS:
```typescript
import { cn } from '@/core/utils/helpers'

// Uso nos componentes
className={cn(
  styles.base,
  variant && styles[variant],
  disabled && styles.disabled,
  className
)}
```

### **Integração TypeScript**
Todos os componentes utilizam tipos definidos em `@/core/types/common`:

```typescript
// Exemplos de tipos utilizados
interface ButtonProps {
  variant?: 'primary' | 'ghost' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  // ...
}

interface CardProps {
  variant?: 'glass' | 'glass-strong' | 'solid'
  hover?: boolean
  // ...
}

type NotificationType = 'success' | 'warning' | 'error' | 'info'
```

### **Constantes Globais**
Integração com configurações centralizadas:

```typescript
// De @/core/config/constants
APP_CONFIG.name              // Nome da aplicação
NOTIFICATION_DURATION        // Duração padrão das notificações
OBSERVER_OPTIONS            // Configurações do Intersection Observer
```

### **Integração Lucide Icons**
- Carregamento via CDN global
- Inicialização automática no Layout
- Re-renderização quando necessário
- Suporte a todos os ícones da biblioteca

### **Performance**
- Event listeners com `{ passive: true }`
- Cleanup automático de event listeners
- Animações CSS otimizadas com `transform` e `opacity`
- Backdrop filter para efeitos performáticos
- Z-index organizados para evitar conflitos

---

## 📋 Checklist de Uso

### **Ao criar novos componentes:**
- [ ] Utilizar variáveis CSS do design system
- [ ] Implementar responsividade mobile-first
- [ ] Adicionar TypeScript types apropriados
- [ ] Incluir estados de loading/disabled quando aplicável
- [ ] Usar função `cn()` para concatenação de classes
- [ ] Adicionar animações sutis com classes utilitárias
- [ ] Implementar focus states acessíveis
- [ ] Testar com diferentes variantes/props

### **Ao usar hooks:**
- [ ] Verificar cleanup de event listeners
- [ ] Considerar dependencies do useEffect
- [ ] Implementar error boundaries quando necessário
- [ ] Otimizar re-renders com useCallback/useMemo

### **Ao adicionar estilos:**
- [ ] Usar variáveis CSS existentes
- [ ] Seguir padrões de nomenclatura
- [ ] Incluir breakpoints mobile
- [ ] Considerar modo escuro/claro (futuro)
- [ ] Manter consistência com spacing scale

---

## 🚀 Próximos Passos

### **Melhorias Planejadas:**
1. **Modo Claro**: Implementação das variáveis para light mode
2. **Acessibilidade**: Melhorias em ARIA labels e navegação por teclado
3. **Animações Avançadas**: Mais classes utilitárias e keyframes
4. **Componentes Adicionais**: Modal, Select, Input, etc.
5. **Temas**: Sistema de temas customizáveis
6. **Performance**: Lazy loading de componentes pesados

### **Documentação:**
- [ ] Adicionar Storybook para componentes
- [ ] Criar guia de contribuição
- [ ] Documentar padrões de teste
- [ ] Adicionar exemplos interativos