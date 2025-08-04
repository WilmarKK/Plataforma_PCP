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

## 🌳 Estrutura Detalhada do Projeto

```
PlataformaPCP/
├── .husky/                     # Git hooks para qualidade de código
│   └── _/
│       └── husky.sh
├── public/                     # Arquivos estáticos públicos
│   ├── favicon.svg
│   └── vite.svg
├── src/                        # Código fonte da aplicação
│   ├── app/                    # Configuração principal da aplicação
│   │   ├── App.tsx             # Componente raiz da aplicação
│   │   ├── index.ts            # Barrel export do módulo app
│   │   ├── README.md           # Documentação do módulo app
│   │   └── router.tsx          # Configuração das rotas
│   │
│   ├── core/                   # Configurações e utilitários centrais
│   │   ├── config/             # Arquivos de configuração
│   │   │   ├── constants.ts    # Constantes globais da aplicação
│   │   │   └── theme.ts        # 🎨 Configurações de tema e cores
│   │   ├── types/              # Tipos TypeScript globais
│   │   │   ├── common.ts       # Tipos comuns reutilizáveis
│   │   │   └── modules.ts      # Tipos específicos dos módulos
│   │   ├── utils/              # Utilitários e helpers
│   │   │   ├── animations.ts   # Funções para animações
│   │   │   ├── helpers.ts      # Funções auxiliares gerais
│   │   │   └── performance.ts  # Otimizações de performance
│   │   └── README.md
│   │
│   ├── modules/                # Módulos específicos da aplicação
│   │   ├── auth/               # 🔐 Módulo de autenticação
│   │   │   ├── components/     # Componentes do auth (Login, etc.)
│   │   │   ├── pages/          # Páginas de login/registro
│   │   │   └── index.ts
│   │   ├── home/               # 🏠 Módulo da página inicial
│   │   │   ├── components/     # Componentes específicos do home
│   │   │   ├── pages/          # Página principal do dashboard
│   │   │   └── index.ts
│   │   ├── index.ts            # Barrel export de todos os módulos
│   │   └── README.md
│   │
│   ├── shared/                 # Recursos compartilhados
│   │   ├── components/         # Componentes reutilizáveis
│   │   │   ├── layout/         # Componentes de layout (Header, Footer)
│   │   │   └── ui/             # 🧩 Componentes de UI básicos (Button, Card)
│   │   ├── hooks/              # Custom hooks reutilizáveis
│   │   │   ├── useAuth.tsx     # Hook para autenticação
│   │   │   ├── useIntersectionObserver.ts # Hook para observação de elementos
│   │   │   ├── useNotification.ts # Hook para notificações
│   │   │   └── useScroll.ts    # Hook para controle de scroll
│   │   ├── styles/             # 🎨 Estilos globais
│   │   │   ├── animations.css  # Animações CSS reutilizáveis
│   │   │   ├── globals.css     # ⭐ Estilos globais da aplicação
│   │   │   └── variables.css   # ⭐ Variáveis CSS globais (cores, espaçamentos)
│   │   └── README.md
│   │
│   ├── index.tsx               # Ponto de entrada da aplicação
│   └── vite-env.d.ts          # Definições de tipos do Vite
│
├── .env                        # Variáveis de ambiente (development)
├── eslint.config.js           # Configuração do ESLint (nova versão)
├── eslintrc.cjs               # Configuração do ESLint (versão legacy)
├── estrutura.txt              # Estrutura gerada automaticamente
├── gitignore                  # Arquivos ignorados pelo Git
├── index.html                 # ⭐ Template HTML principal
├── package.json               # ⭐ Dependências e scripts do projeto
├── package-lock.json          # Lock de dependências
├── prettierrc                 # Configuração do Prettier
├── README.md                  # Documentação do projeto
├── tsconfig.json              # Configuração do TypeScript
└── tsconfig.node.js           # Configuração TypeScript para Node.js
```

## 📋 Arquivos Críticos para Estilização

### 🎯 **Prioridade Alta** (necessários para padronização)
| Arquivo | Descrição | Funcionalidade |
|---------|-----------|----------------|
| **`src/shared/styles/globals.css`** | Estilos globais | Reset, tipografia, classes utilitárias |
| **`src/shared/styles/variables.css`** | Variáveis CSS | Cores, espaçamentos, breakpoints |
| **`src/core/config/theme.ts`** | Configuração de tema | Tokens de design, paleta de cores |
| **`src/shared/components/ui/`** | Componentes UI | Button, Input, Card padronizados |

### 🔧 **Configuração Base**
| Arquivo | Descrição | Finalidade |
|---------|-----------|------------|
| `package.json` | Dependências do projeto | Framework CSS, bibliotecas de UI |
| `index.html` | Template base | Meta tags, fontes, CDNs |
| `src/modules/auth/pages/` | Página de login | Componente que precisa de ajuste |

## 🎨 Design System Atual

### 🌈 Paleta de Cores (configurável)
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

### ✨ Características Visuais
- **Glassmorphism**: Efeitos de vidro com blur para modernidade
- **Dark Theme**: Interface escura para reduzir fadiga visual
- **CSS Modules**: Estilos isolados por componente
- **Micro-animações**: Transições suaves e elegantes

## 🛠️ Scripts de Desenvolvimento

### 🚀 Desenvolvimento
```bash
npm run dev              # Servidor de desenvolvimento (porta 5173)
npm run type-check       # Verificação de tipos TypeScript
npm run type-check:watch # Verificação em modo watch
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
npm run format          # Formata código com Prettier
npm run format:check    # Verifica formatação sem alterar
```

### 🧹 Manutenção
```bash
npm run clean           # Remove dist e cache do Vite
npm run clean:all       # Remove dist e node_modules
npm run reinstall       # Limpa tudo e reinstala dependências
```

## 🚀 Instalação e Execução

### 📋 Pré-requisitos
- **Node.js** 18.0.0 ou superior
- **NPM** 8.0.0 ou superior
- **Git** para controle de versão

### ⚡ Setup Rápido
```bash
# 1. Clone o repositório
git clone [url-do-repositorio]
cd PlataformaPCP

# 2. Instale as dependências
npm install

# 3. Configure o ambiente
cp .env.example .env  # Se existir

# 4. Inicie o desenvolvimento
npm run dev
```

### 🌐 Acesso Local
- **Desenvolvimento**: http://localhost:5173
- **Preview produção**: http://localhost:4173

## 📱 Módulos da Plataforma

### ✅ **Disponível**
- **📊 Análise de Produção**
  - Monitoramento de OEE (Overall Equipment Effectiveness)
  - Métricas de disponibilidade e performance
  - Dashboards em tempo real

### 🚧 **Em Desenvolvimento**
- **🔧 Manutenção**
  - Gestão de manutenção preventiva
  - Manutenção preditiva com IoT
  - Controle de ordens de serviço

- **🔗 Integrações**
  - APIs para sistemas ERP
  - Conectores MES (Manufacturing Execution System)
  - Integração com SCADA

### 📋 **Planejado**
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
O projeto utiliza aliases para imports organizados:
```typescript
// Importações com path mapping
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

### 🪝 Custom Hooks Disponíveis
- **`useAuth`**: Gerenciamento de autenticação
- **`useNotification`**: Sistema de notificações toast
- **`useScroll`**: Controle avançado de scroll
- **`useIntersectionObserver`**: Animações baseadas em visibilidade

## 🎯 Roadmap de Desenvolvimento

### 🔄 **Curto Prazo**
1. **🔐 Sistema de autenticação** completo com JWT
2. **🎨 Padronização visual** de todos os componentes
3. **📱 Responsividade** completa para mobile
4. **🔌 Integração backend** para dados reais

### 🚀 **Médio Prazo**
1. **⚡ Notificações em tempo real** com WebSocket
2. **🧪 Testes automatizados** (Jest + Testing Library)
3. **📱 PWA** para funcionamento offline
4. **🌍 Internacionalização** (pt-BR, en-US)

### 🌟 **Longo Prazo**
1. **🤖 IA e Machine Learning** para insights preditivos
2. **📱 App mobile** nativo (React Native)
3. **🏗️ Arquitetura de microserviços**
4. **📊 Big Data Analytics** avançado

## 🤝 Como Contribuir

### 📝 Padrões de Desenvolvimento
- ✅ **ESLint + Prettier** obrigatório
- ✅ **TypeScript** para todos os arquivos
- ✅ **CSS Modules** para estilos isolados
- ✅ **Comentários em português**
- ✅ **Commits semânticos**

### 🔄 Workflow de Contribuição
```bash
# 1. Fork do projeto
# 2. Clone localmente
git clone [seu-fork]
cd PlataformaPCP

# 3. Crie branch para feature
git checkout -b feature/nova-funcionalidade

# 4. Desenvolva e teste
npm run dev
npm run lint
npm run type-check

# 5. Commit semântico
git commit -m "feat: adiciona componente de gráfico"

# 6. Push e Pull Request
git push origin feature/nova-funcionalidade
```

### 🏷️ Convenção de Commits
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Alterações na documentação
- `style:` Formatação e estilos
- `refactor:` Refatoração de código
- `test:` Adição ou correção de testes
- `chore:` Tarefas de manutenção

## 👨‍💻 Informações do Projeto

### 🧑‍🔬 **Desenvolvedor**
**Wilmar Izequiel Kleinschmidt**
- 📧 **Email**: kogakleinscleins@gmail.com
- 🌐 **LinkedIn**: [linkedin.com/in/wilmar-kleinschmidt](https://linkedin.com/in/wilmar-kleinschmidt)
- 💼 **Portfolio**: [wilmar-dev.com](https://wilmar-dev.com)

### 📊 **Status do Projeto**
- ✅ **Versão**: 1.0.0-beta
- 🚀 **Status**: Em desenvolvimento ativo
- 📅 **Última atualização**: Julho 2025
- 🏆 **Qualidade**: A+ (ESLint, TypeScript, Prettier)

### 🔗 **Links Úteis**
- 📋 **Issues**: [GitHub Issues](https://github.com/wilmar-kleinschmidt/PlataformaPCP/issues)
- 📖 **Wiki**: [Documentação técnica](https://github.com/wilmar-kleinschmidt/PlataformaPCP/wiki)
- 🚀 **Demo**: [plataforma-pcp-demo.vercel.app](https://plataforma-pcp-demo.vercel.app)

---

<div align="center">

**🏭 PlataformaPCP - Transformando a Indústria 4.0**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

</div>

