# 🚀 Frontend - PlataformaPCP

## 📋 Visão Geral

O frontend da PlataformaPCP é uma aplicação moderna construída com React 18, TypeScript e Vite, seguindo as melhores práticas de desenvolvimento e design. A interface foi projetada para oferecer uma experiência de usuário intuitiva e responsiva, com foco na usabilidade e performance.

## 🏗️ Estrutura de Projeto

```
frontend/
├── public/                      # Arquivos estáticos
│   ├── favicon.ico
│   └── assets/
│       └── images/
│
├── src/
│   ├── app/                     # Configuração da aplicação
│   │   ├── providers/           # Providers de contexto
│   │   │   ├── AuthProvider.tsx # Provedor de autenticação
│   │   │   └── ThemeProvider.tsx# Provedor de tema
│   │   ├── router.tsx           # Configuração de rotas
│   │   └── App.tsx              # Componente principal
│   │
│   ├── core/                    # Funcionalidades essenciais
│   │   ├── api/                 # Configuração de API
│   │   │   ├── client.ts        # Cliente HTTP (axios)
│   │   │   ├── endpoints.ts     # Endpoints da API
│   │   │   └── interceptors.ts  # Interceptadores de requisições
│   │   ├── auth/                # Autenticação
│   │   │   ├── hooks/           # Hooks de autenticação
│   │   │   └── utils/           # Utilitários de autenticação
│   │   └── config/              # Configurações globais
│   │       └── constants.ts     # Constantes da aplicação
│   │
│   ├── modules/                 # Módulos da aplicação
│   │   ├── auth/                # Módulo de autenticação
│   │   │   ├── components/      # Componentes específicos
│   │   │   ├── pages/           # Páginas do módulo
│   │   │   │   └── LoginPage.tsx# Página de login
│   │   │   └── index.ts         # Exportações do módulo
│   │   │
│   │   ├── home/                # Módulo da página inicial
│   │   │   ├── components/      # Componentes específicos
│   │   │   ├── pages/           # Páginas do módulo
│   │   │   │   └── HomePage.tsx # Página inicial
│   │   │   └── index.ts         # Exportações do módulo
│   │   │
│   │   ├── production-analyzer/ # Módulo de análise de produção
│   │   │   ├── components/      # Componentes específicos
│   │   │   ├── hooks/           # Hooks específicos
│   │   │   ├── pages/           # Páginas do módulo
│   │   │   ├── types/           # Tipos específicos
│   │   │   └── index.ts         # Exportações do módulo
│   │   │
│   │   └── maintenance/         # Módulo de manutenção
│   │       ├── components/      # Componentes específicos
│   │       ├── pages/           # Páginas do módulo
│   │       └── index.ts         # Exportações do módulo
│   │
│   ├── shared/                  # Recursos compartilhados
│   │   ├── components/          # Componentes reutilizáveis
│   │   │   ├── ui/              # Componentes de UI
│   │   │   │   ├── Button/      # Componente de botão
│   │   │   │   ├── Card/        # Componente de card
│   │   │   │   ├── Input/       # Componente de input
│   │   │   │   └── Modal/       # Componente de modal
│   │   │   ├── layout/          # Componentes de layout
│   │   │   │   ├── Header/      # Componente de cabeçalho
│   │   │   │   ├── Sidebar/     # Componente de barra lateral
│   │   │   │   └── Footer/      # Componente de rodapé
│   │   │   └── data-display/    # Componentes de exibição de dados
│   │   │       ├── Table/       # Componente de tabela
│   │   │       ├── Chart/       # Componente de gráfico
│   │   │       └── Dashboard/   # Componente de dashboard
│   │   │
│   │   ├── hooks/               # Hooks personalizados
│   │   │   ├── useAuth.ts       # Hook de autenticação
│   │   │   ├── useNotification.ts # Hook de notificação
│   │   │   ├── useScroll.ts     # Hook de rolagem
│   │   │   └── useIntersectionObserver.ts # Hook de observação
│   │   │
│   │   ├── styles/              # Estilos globais
│   │   │   ├── globals.css      # Estilos globais
│   │   │   ├── variables.css    # Variáveis CSS
│   │   │   └── theme.ts         # Configuração de tema
│   │   │
│   │   ├── types/               # Tipos globais
│   │   │   ├── api.ts           # Tipos de API
│   │   │   ├── auth.ts          # Tipos de autenticação
│   │   │   └── common.ts        # Tipos comuns
│   │   │
│   │   └── utils/               # Utilitários
│   │       ├── date.ts          # Utilitários de data
│   │       ├── format.ts        # Utilitários de formatação
│   │       └── validation.ts    # Utilitários de validação
│   │
│   ├── index.tsx                # Ponto de entrada da aplicação
│   └── vite-env.d.ts            # Declarações de tipos para Vite
│
├── .eslintrc.js                 # Configuração do ESLint
├── .prettierrc                  # Configuração do Prettier
├── tsconfig.json                # Configuração do TypeScript
├── vite.config.ts               # Configuração do Vite
├── package.json                 # Dependências e scripts
└── README.md                    # Esta documentação
```

## 🎨 Design System

### 🎭 Tema e Estilização

O design system da PlataformaPCP segue princípios modernos de UI/UX, com foco em:

- **Glassmorphism**: Efeitos de vidro para elementos de UI
- **Dark Theme**: Suporte nativo a tema escuro
- **Responsividade**: Adaptação a diferentes tamanhos de tela
- **Acessibilidade**: Conformidade com WCAG 2.1

### 🌈 Paleta de Cores

```css
:root {
  /* Cores primárias */
  --primary-50: #e6f7ff;
  --primary-100: #bae7ff;
  --primary-200: #91d5ff;
  --primary-300: #69c0ff;
  --primary-400: #40a9ff;
  --primary-500: #1890ff; /* Cor principal */
  --primary-600: #096dd9;
  --primary-700: #0050b3;
  --primary-800: #003a8c;
  --primary-900: #002766;

  /* Cores neutras */
  --neutral-50: #fafafa;
  --neutral-100: #f5f5f5;
  --neutral-200: #e5e5e5;
  --neutral-300: #d4d4d4;
  --neutral-400: #a3a3a3;
  --neutral-500: #737373;
  --neutral-600: #525252;
  --neutral-700: #404040;
  --neutral-800: #262626;
  --neutral-900: #171717;

  /* Cores de feedback */
  --success: #52c41a;
  --warning: #faad14;
  --error: #f5222d;
  --info: #1890ff;
}
```

## 🚀 Scripts de Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Construir para produção
npm run build

# Visualizar build
npm run preview

# Executar testes
npm run test

# Verificar qualidade do código
npm run lint

# Formatar código
npm run format
```

## 📦 Módulos da Plataforma

### 📊 Análise de Produção

O módulo de Análise de Produção permite:

- Visualização de dados de produção em tempo real
- Gráficos de desempenho e eficiência
- Relatórios personalizados
- Análise de tendências

### 🔧 Manutenção

O módulo de Manutenção oferece:

- Agendamento de manutenções preventivas
- Registro de manutenções corretivas
- Histórico de intervenções
- Indicadores de desempenho (MTBF, MTTR)

### 📦 Controle de Estoque (Planejado)

O módulo de Controle de Estoque permitirá:

- Gestão de inventário
- Controle de níveis mínimos
- Alertas de reposição
- Rastreabilidade de materiais

## 🔄 Fluxo de Desenvolvimento

1. **Criar um novo componente**:
   ```bash
   mkdir -p src/shared/components/ui/NewComponent
   touch src/shared/components/ui/NewComponent/index.tsx
   touch src/shared/components/ui/NewComponent/styles.module.css
   ```

2. **Criar um novo módulo**:
   ```bash
   mkdir -p src/modules/new-module/{components,pages,hooks,types}
   touch src/modules/new-module/index.ts
   ```

3. **Adicionar uma nova rota**:
   - Editar `src/app/router.tsx`
   - Adicionar a nova rota ao router

## 🧪 Testes

A aplicação utiliza Jest e React Testing Library para testes:

```bash
# Executar todos os testes
npm run test

# Executar testes com cobertura
npm run test:coverage

# Executar testes em modo watch
npm run test:watch
```

## 🔒 Autenticação

A autenticação é gerenciada pelo hook `useAuth` que fornece:

- Login/Logout
- Verificação de estado de autenticação
- Gerenciamento de tokens JWT
- Controle de acesso baseado em papéis

## 🔍 Boas Práticas

- **Componentes**: Utilize componentes funcionais com hooks
- **TypeScript**: Defina tipos para todas as props e estados
- **CSS Modules**: Utilize para evitar conflitos de estilo
- **Testes**: Escreva testes para componentes e hooks
- **Commits Semânticos**: Siga o padrão de commits semânticos (feat, fix, docs, etc.)

## 🌐 Integração com Backend

A comunicação com o backend é feita através do cliente HTTP configurado em `src/core/api/client.ts`:

- Endpoints centralizados em `src/core/api/endpoints.ts`
- Interceptadores para tratamento de erros e autenticação
- Tipagem forte para requisições e respostas

## 📱 Responsividade

A aplicação é totalmente responsiva, adaptando-se a diferentes tamanhos de tela:

- **Desktop**: Layout completo com sidebar
- **Tablet**: Layout adaptado com sidebar colapsável
- **Mobile**: Layout otimizado para telas pequenas

## 🔄 CI/CD

O projeto utiliza GitHub Actions para:

- Verificação de qualidade de código (lint, testes)
- Build automático
- Deploy contínuo

---

## 📝 Notas de Desenvolvimento

- Utilize os componentes do design system para manter a consistência visual
- Siga o padrão de modularização para novos recursos
- Mantenha a cobertura de testes acima de 80%
- Documente novos componentes e hooks

