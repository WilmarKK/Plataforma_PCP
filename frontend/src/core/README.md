# Core Module 🔧

O módulo **Core** é o núcleo fundamental da PlataformaPCP, fornecendo configurações centralizadas, tipos TypeScript globais e utilitários essenciais que sustentam toda a aplicação.

## 📁 Estrutura do Módulo

```
core/
├── config/              # Configurações centralizadas
│   ├── constants.ts     # Constantes globais da aplicação
│   └── theme.ts         # Sistema de design e temas
├── types/               # Definições de tipos TypeScript
│   ├── common.ts        # Tipos comuns reutilizáveis
│   └── modules.ts       # Tipos específicos dos módulos
└── utils/               # Utilitários e funções auxiliares
    ├── animations.ts    # Sistema de animações
    ├── helpers.ts       # Funções auxiliares gerais
    └── performance.ts   # Ferramentas de performance
```

---

## ⚙️ Config - Configurações Centralizadas

### 📌 `constants.ts`
Contém todas as constantes globais da aplicação, garantindo consistência e facilidade de manutenção.

#### **APP_CONFIG**
```typescript
export const APP_CONFIG = {
  name: 'PlataformaPCP',
  description: 'Gestão Industrial Inteligente',
  version: '1.0.0',
  author: 'PlataformaPCP Team'
} as const
```

#### **ROUTES** 
Definições centralizadas de todas as rotas da aplicação:
```typescript
export const ROUTES = {
  HOME: '/',
  PRODUCTION_ANALYZER: '/modules/production-analyzer',
  MAINTENANCE: '/modules/maintenance',
  // ... outras rotas
} as const
```

#### **Constantes de Configuração**
- `NOTIFICATION_DURATION`: 3000ms - Duração padrão das notificações
- `ANIMATION_DELAYS`: Configurações de delays para animações
- `OBSERVER_OPTIONS`: Configurações do IntersectionObserver

### 🎨 `theme.ts`
Sistema de design completo da aplicação com tema dark mode otimizado.

#### **Estrutura do Tema**
- **Colors**: Paleta de cores completa (backgrounds, textos, acentos)
- **Gradients**: Gradientes pré-definidos para cada módulo
- **Spacing**: Sistema de espaçamento consistente
- **BorderRadius**: Valores de border-radius padronizados
- **Breakpoints**: Pontos de quebra responsivos

#### **Exemplo de Uso**
```typescript
import { THEME } from '@/core/config/theme'

const cardStyle = {
  backgroundColor: THEME.colors.bg.card,
  borderRadius: THEME.borderRadius.lg,
  padding: THEME.spacing.lg
}
```

---

## 🏷️ Types - Sistema de Tipagem

### 📝 `common.ts`
Tipos fundamentais reutilizados em toda a aplicação.

#### **Principais Interfaces**

**NotificationConfig**
```typescript
interface NotificationConfig {
  message: string
  type: 'success' | 'warning' | 'error' | 'info'
  duration?: number
}
```

**ButtonProps**
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

**BaseComponent**
```typescript
interface BaseComponent {
  className?: string
  children?: React.ReactNode
}
```

### 🏭 `modules.ts`
Tipos específicos para o sistema modular da plataforma.

#### **ModuleInfo Interface**
Define a estrutura de cada módulo da plataforma:
```typescript
interface ModuleInfo {
  id: string
  title: string
  description: string
  icon: string
  status: 'available' | 'development' | 'planned'
  gradient?: string
  route?: string
}
```

#### **MODULE_DATA**
Array com dados de todos os módulos disponíveis:
- **Production Analyzer**: Análise de produção em tempo real
- **Maintenance**: Gestão de manutenção
- **Inventory**: Controle de estoque
- **Quality**: Sistema de qualidade
- **Integrations**: Conectividade com sistemas externos
- **Analytics**: Business Intelligence

---

## 🛠️ Utils - Utilitários e Helpers

### ✨ `animations.ts`
Sistema completo de animações da plataforma.

#### **Constantes de Animação**
```typescript
export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
  ultra: 800,
} as const

export const EASING = {
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  // ...
} as const
```

#### **Funções Principais**

**createFadeInAnimation()**
```typescript
createFadeInAnimation(delay?: number, duration?: number): string
```
Cria animação de fade-in com delay e duração personalizáveis.

**createSlideInAnimation()**
```typescript
createSlideInAnimation(
  direction: 'left' | 'right' | 'up' | 'down',
  delay?: number,
  duration?: number
): string
```

**createStaggerAnimation()**
```typescript
createStaggerAnimation(
  elements: NodeListOf<Element> | Element[],
  baseDelay?: number
): void
```

**observeIntersection()**
```typescript
observeIntersection(
  elements: NodeListOf<Element> | Element[],
  callback: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit
): IntersectionObserver
```

#### **CSS-in-JS Helpers**
- `pulse`: Animação de pulsação
- `spin`: Rotação contínua
- `bounce`: Efeito de salto
- `fadeIn`: Fade-in padrão
- `slideUp`: Deslizamento para cima

### 🔧 `helpers.ts`
Funções utilitárias essenciais para toda a aplicação.

#### **Funções Principais**

**cn()** - Class Name Utility
```typescript
cn(...classes: (string | undefined | false)[]): string
```
Combina classes CSS de forma segura, ignorando valores falsy.

**smoothScrollTo()**
```typescript
smoothScrollTo(elementId: string): void
```
Scroll suave para elemento específico.

**getStatusIcon()**
```typescript
getStatusIcon(status: string): string
```
Retorna ícone apropriado baseado no status do módulo.

**getNotificationBackground()**
```typescript
getNotificationBackground(type: NotificationType): string
```
Retorna cor de fundo baseada no tipo de notificação.

**debounce()**
```typescript
debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void)
```
Implementação de debounce para otimização de performance.

**formatModuleMessage()**
```typescript
formatModuleMessage(moduleId: string, status: string): string
```
Formata mensagens específicas para cada módulo.

**getMessageType()**
```typescript
getMessageType(status: string): NotificationType
```
Converte status do módulo em tipo de notificação.

### ⚡ `performance.ts`
Ferramentas para monitoramento e otimização de performance.

#### **Hook usePerformance**

**logLoadTime()**
```typescript
logLoadTime(appName: string): void
```
Registra tempo de carregamento da aplicação no console.

**measureFunctionTime()**
```typescript
measureFunctionTime<T extends (...args: any[]) => any>(
  fn: T,
  name: string
): T
```
Wrapper que mede tempo de execução de funções.

#### **Exemplo de Uso**
```typescript
import { usePerformance } from '@/core/utils/performance'

const { logLoadTime, measureFunctionTime } = usePerformance()

// Medir tempo de carregamento
logLoadTime('PlataformaPCP')

// Medir função específica
const optimizedFunction = measureFunctionTime(
  heavyCalculation,
  'Heavy Calculation'
)
```

---

## 📋 Convenções e Padrões

### **Imports**
```typescript
// ✅ Correto - imports absolutos
import { THEME } from '@/core/config/theme'
import { ButtonProps } from '@/core/types/common'
import { cn } from '@/core/utils/helpers'

// ❌ Evitar - imports relativos
import { THEME } from '../config/theme'
```

### **Constantes**
- Use `as const` para garantir readonly
- Nomes em UPPER_CASE para constantes globais
- Agrupe constantes relacionadas em objetos

### **Tipos**
- Use interfaces para objetos extensíveis
- Use tipos union para valores específicos
- Sempre exporte tipos que podem ser reutilizados

### **Funções Utilitárias**
- Funções puras sempre que possível
- Parâmetros opcionais com valores padrão
- Documentação JSDoc para funções complexas

---

## 🔗 Dependências Internas

Este módulo é usado por:
- ✅ **shared**: Componentes e hooks
- ✅ **modules**: Todos os módulos da aplicação
- ✅ **app**: Configuração principal

---

## 📝 Como Contribuir

1. **Novas Constantes**: Adicione em `constants.ts` seguindo o padrão existente
2. **Novos Tipos**: Adicione em `common.ts` ou `modules.ts` conforme apropriado  
3. **Novas Funções**: Adicione em `helpers.ts` com testes unitários
4. **Animações**: Utilize o sistema existente em `animations.ts`
5. **Performance**: Use ferramentas de `performance.ts` para monitoramento

---

## 🚀 Próximos Passos

- [ ] Implementar testes unitários para utilitários
- [ ] Adicionar mais animações pré-definidas
- [ ] Expandir sistema de performance monitoring
- [ ] Criar validações de tipos runtime com Zod
- [ ] Implementar sistema de feature flags