# 🚀 INSTRUÇÕES PARA INÍCIO DO PROJETO - PlataformaPCP

> **Para o próximo chat:** Estas são as instruções COMPLETAS para começar o projeto de forma profissional e ordenada.

---

## 📋 CONTEXTO DO PROJETO

### **O que estamos construindo:**
- **Sistema:** PlataformaPCP - Dashboard de Análise de Produção Industrial
- **Usuários:** PCP + Direção (< 10 usuários concorrentes)
- **Dados:** Milhares de registros, delay até 5min aceitável
- **Visual:** Premium como Vercel/Linear/Notion - glassmorphism + micro-animações
- **Segurança:** Dados industriais sensíveis - LGPD compliance

### **Stack Definida:**
- **Frontend:** React 18 + TypeScript + Tailwind CSS + Framer Motion
- **Backend:** Python + FastAPI + PostgreSQL
- **Deploy:** Docker Compose + Nginx + SSL
- **Design:** Dark theme + glassmorphism + micro-interações

---

## 🎯 PRIMEIRA TAREFA - SETUP INICIAL

**Execute EXATAMENTE nesta ordem:**

### **1. Criar Estrutura de Pastas**
```bash
mkdir plataforma-pcp
cd plataforma-pcp

# Criar estrutura completa
mkdir frontend backend database docs docker scripts
touch docker-compose.yml .env.example README.md .gitignore
```

### **2. Setup Frontend (React + TypeScript)**
```bash
cd frontend
npm create vite@latest . --template react-ts
npm install

# Instalar dependências principais
npm install tailwindcss @tailwindcss/forms @tailwindcss/typography
npm install framer-motion @headlessui/react @heroicons/react
npm install zustand @tanstack/react-query axios
npm install react-router-dom react-hook-form @hookform/resolvers zod
npm install recharts date-fns clsx tailwind-merge

# Dev dependencies
npm install -D @types/node eslint-config-prettier prettier
```

### **3. Configurar Tailwind CSS**
```bash
npx tailwindcss init -p
```

### **4. Setup Backend (Python + FastAPI)**
```bash
cd ../backend
python -m venv venv
source venv/bin/activate  # Linux/Mac
# venv\Scripts\activate   # Windows

pip install fastapi uvicorn[standard] sqlalchemy alembic
pip install psycopg2-binary python-jose[cryptography] passlib[bcrypt]
pip install python-multipart pydantic-settings python-dotenv
pip install pandas numpy scipy plotly
```

### **5. Configurar Banco PostgreSQL**
```bash
cd ../database
touch init.sql schema.sql seed.sql
```

---

## 📁 ESTRUTURA DE ARQUIVOS OBRIGATÓRIA

```
plataforma-pcp/
├── 📁 frontend/
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   ├── 📁 ui/           # Button, Input, Card, etc
│   │   │   ├── 📁 charts/       # Gráficos customizados
│   │   │   └── 📁 layout/       # Header, Sidebar, Layout
│   │   ├── 📁 pages/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Analytics.tsx
│   │   │   └── Login.tsx
│   │   ├── 📁 hooks/           # Custom hooks
│   │   ├── 📁 services/        # API calls
│   │   ├── 📁 store/           # Zustand stores
│   │   ├── 📁 types/           # TypeScript types
│   │   └── 📁 utils/           # Helper functions
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── package.json
├── 📁 backend/
│   ├── 📁 app/
│   │   ├── 📁 api/
│   │   │   ├── 📁 routes/       # Endpoints
│   │   │   └── deps.py          # Dependencies
│   │   ├── 📁 core/
│   │   │   ├── config.py        # Configurações
│   │   │   ├── security.py      # JWT, hashing
│   │   │   └── database.py      # DB connection
│   │   ├── 📁 models/          # SQLAlchemy models
│   │   ├── 📁 schemas/         # Pydantic schemas
│   │   ├── 📁 services/        # Business logic
│   │   └── main.py             # FastAPI app
│   ├── requirements.txt
│   └── alembic.ini
├── 📁 database/
│   ├── init.sql
│   └── schema.sql
├── 📄 docker-compose.yml
├── 📄 .env.example
└── 📄 README.md
```

---

## 🔧 ARQUIVOS DE CONFIGURAÇÃO CRÍTICOS

### **1. Frontend - tailwind.config.js**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Sistema de cores premium
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
        gray: {
          50: '#f9fafb',
          900: '#111827',
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
```

### **2. Frontend - tsconfig.json**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/pages/*": ["./src/pages/*"],
      "@/hooks/*": ["./src/hooks/*"],
      "@/services/*": ["./src/services/*"],
      "@/store/*": ["./src/store/*"],
      "@/types/*": ["./src/types/*"],
      "@/utils/*": ["./src/utils/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### **3. Backend - requirements.txt**
```txt
fastapi==0.104.1
uvicorn[standard]==0.24.0
sqlalchemy==2.0.23
alembic==1.12.1
psycopg2-binary==2.9.7
python-jose[cryptography]==3.3.0
passlib[bcrypt]==1.7.4
python-multipart==0.0.6
pydantic-settings==2.0.3
python-dotenv==1.0.0
pandas==2.1.3
numpy==1.25.2
scipy==1.11.4
plotly==5.17.0
loguru==0.7.2
slowapi==0.1.9
```

### **4. Docker Compose**
```yaml
version: '3.8'

services:
  frontend:
    build: 
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    volumes:
      - ./frontend:/app
      - /app/node_modules
    environment:
      - VITE_API_URL=http://localhost:8000

  backend:
    build: 
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "8000:8000"
    volumes:
      - ./backend:/app
    environment:
      - DATABASE_URL=postgresql://postgres:postgres@database:5432/plataforma_pcp
      - SECRET_KEY=your-secret-key-here
    depends_on:
      - database
      - redis

  database:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=plataforma_pcp
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./database/init.sql:/docker-entrypoint-initdb.d/init.sql
    ports:
      - "5432:5432"

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:
```

---

## 🎨 SISTEMA DE DESIGN - CORES E TEMAS

### **Paleta de Cores (Glassmorphism Dark)**
```css
:root {
  /* Dark Theme Principal */
  --bg-primary: #0f0f23;
  --bg-secondary: #16213e;
  --bg-tertiary: #1a237e;
  
  /* Glass Effect */
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
  --glass-shadow: rgba(0, 0, 0, 0.3);
  
  /* Accent Colors */
  --accent-blue: #64b5f6;
  --accent-green: #81c784;
  --accent-orange: #ffb74d;
  --accent-red: #e57373;
  
  /* Typography */
  --text-primary: #ffffff;
  --text-secondary: #b0bec5;
  --text-muted: #78909c;
}
```

---

## 🚀 COMANDOS DE INICIALIZAÇÃO

### **Para começar IMEDIATAMENTE:**
```bash
# 1. Clonar estrutura
git clone [seu-repo] plataforma-pcp
cd plataforma-pcp

# 2. Instalar dependências
cd frontend && npm install
cd ../backend && pip install -r requirements.txt

# 3. Configurar ambiente
cp .env.example .env
# Editar .env com suas configurações

# 4. Subir ambiente local
docker-compose up -d database redis
cd backend && uvicorn app.main:app --reload
cd frontend && npm run dev

# 5. Acessar
# Frontend: http://localhost:3000
# Backend: http://localhost:8000/docs
```

---

## 📝 PRIMEIROS ARQUIVOS A CRIAR

### **ORDEM EXATA DE CRIAÇÃO:**

1. **Backend - app/main.py** (FastAPI básico)
2. **Backend - app/core/config.py** (Configurações)
3. **Backend - app/core/database.py** (Conexão DB)
4. **Frontend - src/App.tsx** (Layout principal)
5. **Frontend - src/components/ui/Button.tsx** (Componente base)
6. **Frontend - src/pages/Dashboard.tsx** (Primeira tela)
7. **Database - schema.sql** (Estrutura do banco)
8. **Docker - Dockerfiles** (Frontend + Backend)

### **Comando para o assistente:**
```
"Crie o arquivo [NOME_DO_ARQUIVO] com as melhores práticas, 
seguindo o padrão estabelecido no plano. Use TypeScript/Python 
com tipagem completa, comentários explicativos e estrutura profissional."
```

---

## ✅ CHECKLIST DE VERIFICAÇÃO

Antes de prosseguir, verificar se:
- [ ] ✅ Estrutura de pastas criada corretamente
- [ ] ✅ Dependências instaladas sem erros
- [ ] ✅ Docker Compose funcionando
- [ ] ✅ Frontend acessível em localhost:3000
- [ ] ✅ Backend acessível em localhost:8000/docs
- [ ] ✅ PostgreSQL conectando corretamente
- [ ] ✅ Primeiro commit no Git realizado

---

## 🎯 PRÓXIMOS PASSOS APÓS SETUP

1. **Autenticação básica** - Login/JWT
2. **Layout principal** - Header + Sidebar
3. **Primeiro dashboard** - Cards + gráfico básico
4. **Conexão frontend-backend** - API calls
5. **Sistema de temas** - Dark/Light mode

---

## 🔥 DICAS IMPORTANTES

### **Para o assistente:**
- **SEMPRE** seguir a estrutura de pastas definida
- **SEMPRE** usar TypeScript com tipagem completa
- **SEMPRE** incluir comentários explicativos
- **SEMPRE** seguir as convenções de nomenclatura
- **SEMPRE** implementar error handling

### **Padrões de Código:**
- **Components:** PascalCase (ex: Button.tsx)
- **Hooks:** camelCase com 'use' (ex: useAuth.ts)
- **Utilitários:** camelCase (ex: formatDate.ts)
- **Constants:** UPPER_SNAKE_CASE
- **CSS Classes:** kebab-case

### **Commits Semânticos:**
```
feat: adiciona componente Button
fix: corrige erro de conexão com DB  
style: implementa glassmorphism no dashboard
docs: atualiza README com instruções
```

---

## 💡 COMANDOS ÚTEIS PARA O ASSISTENTE

```bash
# Criar novo componente React
"Crie o componente [Nome] em src/components/[pasta]/ 
com TypeScript, Tailwind CSS, Framer Motion e props tipadas"

# Criar endpoint FastAPI  
"Crie o endpoint [nome] em app/api/routes/ 
com Pydantic schemas, error handling e documentação"

# Criar página completa
"Crie a página [Nome] com layout responsivo, 
animações suaves e integração com a API"
```

---

## 🚨 ALERTAS IMPORTANTES

### ❌ **NÃO FAZER:**
- Usar localStorage/sessionStorage (não funciona em artifacts)
- Misturar estilos inline com Tailwind
- Criar componentes sem tipagem TypeScript
- Endpoints sem validação Pydantic
- Commits sem mensagens descritivas

### ✅ **SEMPRE FAZER:**
- Seguir a estrutura de pastas estabelecida
- Usar React.memo para otimização
- Implementar loading states
- Adicionar error boundaries
- Validar inputs no frontend E backend

---

**🎯 MISSÃO:** Criar o dashboard de produção mais moderno e funcional que a empresa já teve!

**📞 FRASE MÁGICA PARA COMEÇAR:**
*"Olá! Estou continuando o projeto PlataformaPCP. Já tenho todo o planejamento pronto. Vamos começar criando a estrutura inicial dos arquivos seguindo as instruções que tenho aqui. Por favor, crie primeiro o arquivo..."*

---

*Instruções criadas em Julho 2025 | Versão 1.0 | Status: Pronto para execução ✅*