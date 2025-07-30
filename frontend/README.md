# PlataformaPCP - Frontend

## 🏭 Gestão Industrial Inteligente

Plataforma modular completa para análise de produção, manutenção, estoque e qualidade. Transforme dados em decisões estratégicas com uma interface moderna e intuitiva.

## 🚀 Tecnologias Utilizadas

- **React 18** - Framework principal para construção da interface
- **TypeScript** - Tipagem estática para maior segurança e produtividade
- **Vite** - Build tool ultrarrápido para desenvolvimento e produção
- **React Router DOM** - Sistema de roteamento para SPAs
- **Lucide React** - Biblioteca de ícones moderna e consistente
- **CSS Modules** - Estilos organizados e isolados por componente
- **ESLint + Prettier** - Padronização e formatação de código
- **Husky + Lint-staged** - Git hooks para qualidade de código

## 📁 Estrutura Detalhada do Projeto

```
frontend/
├── public/                     # Arquivos estáticos públicos
│   ├── vite.svg               # Ícone padrão do Vite
│   └── index.html             # Template HTML principal
│
├── src/                       # Código fonte da aplicação
│   ├── app/                   # Configuração principal da aplicação
│   │   ├── App.tsx            # Componente raiz da aplicação
│   │   ├── index.ts           # Barrel export do módulo app
│   │   └── router.tsx         # Configuração das rotas
│   │
│   ├── core/                  # Configurações e utilitários centrais
│   │   ├── config/            # Arquivos de configuração
│   │   │   ├── constants.ts   # Constantes globais da aplicação
│   │   │   └── theme.ts       # Configurações de tema e cores
│   │   ├── types/             # Tipos TypeScript globais
│   │   │   ├── common.ts      # Tipos comuns reutilizáveis
│   │   │   └── modules.ts     # Tipos específicos dos módulos
│   │   └── utils/             # Utilitários e helpers
│   │       ├── animations.ts  # Funções para animações
│   │       ├── helpers.ts     # Funções auxiliares gerais
│   │       └── performance.ts # Otimizações de performance
│   │
│   ├── shared/                # Recursos compartilhados
│   │   ├── components/        # Componentes reutilizáveis
│   │   │   ├── ui/            # Componentes de interface básicos
│   │   │   │   ├── Button/    # Componente de botão
│   │   │   │   │   ├── Button.tsx
│   │   │   │   │   ├── Button.module.css
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Card/      # Componente de cartão
│   │   │   │   │   ├── Card.tsx
│   │   │   │   │   ├── Card.module.css
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Icon/      # Wrapper para ícones
│   │   │   │   │   ├── Icon.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   └── index.ts   # Barrel export dos componentes UI
│   │   │   └── layout/        # Componentes de layout
│   │   │       ├── Header/    # Cabeçalho da aplicação
│   │   │       │   ├── Header.tsx
│   │   │       │   ├── Header.module.css
│   │   │       │   └── index.ts
│   │   │       ├── Footer/    # Rodapé da aplicação
│   │   │       │   ├── Footer.tsx
│   │   │       │   ├── Footer.module.css
│   │   │       │   └── index.ts
│   │   │       ├── Layout/    # Layout principal
│   │   │       │   ├── Layout.tsx
│   │   │       │   ├── Layout.module.css
│   │   │       │   └── index.ts
│   │   │       └── index.ts   # Barrel export dos layouts
│   │   ├── hooks/             # Custom hooks reutilizáveis
│   │   │   ├── useNotification.ts      # Hook para notificações
│   │   │   ├── useScroll.ts            # Hook para controle de scroll
│   │   │   └── useIntersectionObserver.ts # Hook para observação de elementos
│   │   └── styles/            # Estilos globais
│   │       ├── globals.css    # Estilos globais da aplicação
│   │       ├── animations.css # Animações CSS reutilizáveis
│   │       └── variables.css  # Variáveis CSS globais
│   │
│   ├── modules/               # Módulos específicos da aplicação
│   │   ├── home/              # Módulo da página inicial
│   │   │   ├── components/    # Componentes específicos do home
│   │   │   │   ├── Hero/      # Seção hero da homepage
│   │   │   │   │   ├── Hero.tsx
│   │   │   │   │   ├── Hero.module.css
│   │   │   │   │   └── index.ts
│   │   │   │   ├── ModulesGrid/ # Grid dos módulos disponíveis
│   │   │   │   │   ├── ModulesGrid.tsx
│   │   │   │   │   ├── ModuleCard.tsx
│   │   │   │   │   ├── ModulesGrid.module.css
│   │   │   │   │   └── index.ts
│   │   │   │   └── index.ts   # Barrel export dos componentes
│   │   │   ├── pages/         # Páginas do módulo home
│   │   │   │   ├── HomePage.tsx # Página principal
│   │   │   │   └── index.ts   # Barrel export das páginas
│   │   │   └── index.ts       # Barrel export do módulo home
│   │   └── index.ts           # Barrel export de todos os módulos
│   │
│   └── vite-env.d.ts          # Definições de tipos do Vite
│
├── .env                       # Variáveis de ambiente (development)
├── .gitignore                 # Arquivos ignorados pelo Git
├── eslint.config.js          # Configuração do ESLint (nova versão)
├── eslintrc.cjs              # Configuração do ESLint (versão legacy)
├── package.json              # Dependências e scripts do projeto
├── prettierrc                # Configuração do Prettier
├── tsconfig.json             # Configuração do TypeScript
├── tsconfig.node.json        # Configuração TypeScript para Node.js
├── vite.config.ts            # Configuração do Vite
└── README.md                 # Documentação do projeto
```

## 📋 Arquivos de Configuração

### 🔧 Configurações Principais

| Arquivo | Descrição | Finalidade |
|---------|-----------|------------|
| `package.json` | Configuração do projeto NPM | Define dependências, scripts e metadados |
| `vite.config.ts` | Configuração do Vite | Build tool, servidor dev, aliases, plugins |
| `tsconfig.json` | Configuração do TypeScript | Compilação, path mapping, regras de tipagem |
| `tsconfig.node.json` | TypeScript para Node.js | Configuração específica para scripts Node |

### 🎨 Qualidade de Código

| Arquivo | Descrição | Finalidade |
|---------|-----------|------------|
| `eslint.config.js` | ESLint v9+ (atual) | Análise estática e regras de código |
| `eslintrc.cjs` | ESLint legacy | Fallback para compatibilidade |
| `prettierrc` | Formatação de código | Estilo consistente de formatação |

### 🌍 Ambiente e Deploy

| Arquivo | Descrição | Finalidade |
|---------|-----------|------------|
| `.env` | Variáveis de ambiente | Configurações locais de desenvolvimento |
| `.gitignore` | Arquivos ignorados | Controle de versionamento |

## 🎨 Design System

### 🎯 Arquitetura de Estilos
- **CSS Modules**: Estilos isolados por componente
- **Variáveis CSS**: Tokens de design centralizados
- **Glassmorphism**: Efeitos de vidro com blur para modernidade
- **Dark Theme**: Interface escura para reduzir fadiga visual

### 🌈 Paleta de Cores
```css
/* Cores principais */
--primary: #3b82f6;      /* Azul moderno */
--secondary: #1e293b;    /* Cinza escuro */
--accent: #06b6d4;       /* Ciano vibrante */

/* Status */
--success: #10b981;      /* Verde - recursos disponíveis */
--warning: #f59e0b;      /* Amarelo - em desenvolvimento */
--inactive: #6b7280;     /* Cinza - planejado */

/* Backgrounds */
--bg-primary: #0a0a0b;   /* Fundo principal */
--bg-glass: rgba(255, 255, 255, 0.1); /* Glassmorphism */
```

### ✨ Componentes Visuais
- **Cards modulares**: Sistema de grade responsivo
- **Micro-animações**: Transições suaves e elegantes
- **Gradientes dinâmicos**: Cores vibrantes para ícones
- **Hover effects**: Interações intuitivas

## 🛠️ Scripts Disponíveis

### 🚀 Desenvolvimento
```bash
npm run dev              # Inicia servidor de desenvolvimento (porta 5173)
npm run type-check       # Verifica tipos TypeScript
npm run type-check:watch # Verifica tipos em modo watch
```

### 📦 Build e Deploy
```bash
npm run build           # Build otimizado para produção
npm run build:analyze   # Build com análise de bundle
npm run preview         # Preview do build de produção
npm run serve           # Build + preview em um comando
```

### 🔍 Qualidade de Código
```bash
npm run lint            # Análise do código com ESLint
npm run lint:fix        # Corrige problemas automaticamente
npm run lint:staged     # Lint apenas arquivos staged
npm run format          # Formata código com Prettier
npm run format:check    # Verifica formatação sem alterar
```

### 🧹 Limpeza e Manutenção
```bash
npm run clean           # Remove dist e cache do Vite
npm run clean:all       # Remove dist e node_modules
npm run reinstall       # Limpa tudo e reinstala dependências
```

### 🧪 Testes (Planejado)
```bash
npm run test            # Executa testes unitários
npm run test:coverage   # Relatório de cobertura
```

## 🚀 Como Executar

### 📋 Pré-requisitos
- **Node.js** 18.0.0 ou superior
- **NPM** 8.0.0 ou superior
- **Git** para controle de versão

### ⚡ Instalação Rápida
```bash
# 1. Clone o repositório
git clone [url-do-repositorio]
cd plataforma-pcp-frontend

# 2. Instale as dependências
npm install

# 3. Configure o ambiente
cp .env.example .env  # Se existir arquivo de exemplo

# 4. Inicie o desenvolvimento
npm run dev
```

### 🌐 Acesso
- **Desenvolvimento**: http://localhost:5173
- **Preview**: http://localhost:4173

## 📱 Módulos da Plataforma

### ✅ Disponível
- **📊 Análise de Produção**
  - Monitoramento de OEE (Overall Equipment Effectiveness)
  - Métricas de disponibilidade e performance
  - Dashboards em tempo real

### 🚧 Em Desenvolvimento
- **🔧 Manutenção**
  - Gestão de manutenção preventiva
  - Manutenção preditiva com IoT
  - Controle de ordens de serviço

- **🔗 Integrações**
  - APIs para sistemas ERP
  - Conectores MES (Manufacturing Execution System)
  - Integração com SCADA

### 📋 Planejado
- **📦 Controle de Estoque**
  - Gestão inteligente de inventário
  - Rastreabilidade completa
  - Otimização de níveis de estoque

- **🎯 Gestão da Qualidade**
  - Sistema de controle de qualidade
  - Análise de não conformidades
  - Certificações e auditorias

- **🤖 Analytics & BI**
  - Dashboards avançados
  - Inteligência artificial
  - Relatórios personalizados

## 🔧 Configurações Técnicas

### 🛣️ Path Mapping
O projeto utiliza aliases para imports mais limpos:
```typescript
// Importações organizadas
import { Button } from '@/shared/components/ui';
import { HomePage } from '@/modules/home';
import { THEME_COLORS } from '@/core/config/theme';
import { formatDate } from '@/core/utils/helpers';
```

### 🎨 CSS Modules
Cada componente possui estilos isolados:
```typescript
// Exemplo de uso
import styles from './Button.module.css';

export const Button = () => (
  <button className={styles.primary}>
    Clique aqui
  </button>
);
```

### 🪝 Custom Hooks
Hooks reutilizáveis para funcionalidades comuns:
- `useNotification`: Sistema de notificações toast
- `useScroll`: Controle avançado de scroll
- `useIntersectionObserver`: Animações baseadas em visibilidade

## 🎯 Próximos Passos

### 🔄 Curto Prazo
1. **Implementar autenticação** com JWT
2. **Conectar APIs backend** para dados reais
3. **Adicionar módulo de manutenção**
4. **Otimizar performance** com lazy loading

### 🚀 Médio Prazo
1. **Sistema de notificações** em tempo real
2. **Testes automatizados** com Jest/Testing Library
3. **PWA** para acesso offline
4. **Internacionalização** (i18n)

### 🌟 Longo Prazo
1. **Inteligência artificial** para insights
2. **Mobile app** React Native
3. **Microserviços** arquitetura
4. **Analytics avançado** com Big Data

## 🤝 Como Contribuir

### 📝 Padrões de Código
1. **ESLint + Prettier** obrigatório
2. **TypeScript** para todos os arquivos
3. **CSS Modules** para estilos
4. **Comentários em português**
5. **Commits semânticos**

### 🔄 Workflow
```bash
# 1. Faça um fork do projeto
# 2. Crie uma branch para sua feature
git checkout -b feature/nova-funcionalidade

# 3. Faça suas alterações
# 4. Execute os testes de qualidade
npm run lint
npm run type-check
npm run format

# 5. Commit suas mudanças
git commit -m "feat: adiciona nova funcionalidade"

# 6. Push para a branch
git push origin feature/nova-funcionalidade

# 7. Abra um Pull Request
```

### 🏷️ Convenção de Commits
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação
- `refactor:` Refatoração
- `test:` Testes
- `chore:` Manutenção

## 📄 Informações do Projeto

### 👥 Equipe
Desenvolvido por Wilmar Izequiel Kleinschmidt

### 📧 Contato
- **Email**: kogakleinscleins@gmail.com
- **Website**:
- **Issues**: [GitHub Issues](https://github.com/seu-usuario/plataforma-pcp-frontend/issues)


### 🏆 Qualidade
- ✅ TypeScript para segurança de tipos
- ✅ ESLint para qualidade de código
- ✅ Prettier para formatação consistente
- ✅ Husky para git hooks
- ✅ Path mapping para imports limpos
- ✅ CSS Modules para estilos isolados

---

