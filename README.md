# 🏭 PlataformaPCP - Gestão Industrial Inteligente

## 🌟 Visão Geral

A **PlataformaPCP** é uma solução completa de gestão industrial desenvolvida com arquitetura moderna e modular. Combina uma interface web intuitiva com um backend robusto para oferecer insights poderosos sobre produção, manutenção, estoque e qualidade.

### 🎯 **Principais Características**
- 📊 **Análise de Produção em Tempo Real** - OEE, disponibilidade, performance
- 🔧 **Gestão Inteligente de Manutenção** - Preventiva e preditiva
- 📦 **Controle Avançado de Estoque** - Rastreabilidade e otimização
- 🎯 **Sistema de Qualidade** - Controle e certificações
- 🤖 **Analytics & BI** - Dashboards e inteligência artificial
- 🔗 **Integrações Flexíveis** - ERP, MES, SCADA

## 🏗️ Arquitetura do Sistema

```
PlataformaPCP/
├── 🎨 frontend/                # Interface React + TypeScript
│   ├── src/
│   │   ├── app/               # Configuração e roteamento
│   │   ├── core/              # Configurações centrais
│   │   ├── modules/           # Módulos específicos (auth, home, etc.)
│   │   └── shared/            # Componentes e recursos compartilhados
│   └── package.json
│
├── ⚙️ backend/                 # API FastAPI + Python
│   ├── app/
│   │   ├── core/              # Autenticação e configurações
│   │   ├── api/               # Rotas e dependências
│   │   ├── models/            # Modelos de dados
│   │   ├── schemas/           # Schemas de validação
│   │   ├── services/          # Lógica de negócio
│   │   └── modules/           # Módulos de negócio
│   └── requirements.txt
│
├── 🗄️ database/                # Scripts SQL e migrações
│   ├── schema.sql             # Estrutura do banco de dados
│   ├── seed.sql               # Dados iniciais
│   └── init.sql               # Script de inicialização
│
├── 🐳 docker/                  # Configurações Docker
│   ├── build.bat/sh           # Scripts de build
│   ├── up.bat/sh              # Scripts para iniciar containers
│   └── down.bat/sh            # Scripts para parar containers
│
├── 📚 docs/                    # Documentação técnica
│   ├── api/                   # Documentação da API
│   ├── arquitetura.md         # Visão geral da arquitetura
│   └── manual_usuario.md      # Manual do usuário
│
├── 🧪 tests/                   # Testes automatizados
└── docker-compose.yml         # Configuração de containers
```

## 🚀 Stack Tecnológico

### **Frontend**
- **React 18** + **TypeScript** - Interface moderna e tipada
- **Vite** - Build tool ultrarrápido
- **React Router DOM** - Roteamento SPA
- **CSS Modules** - Estilos isolados e organizados
- **Lucide React** - Ícones consistentes

### **Backend**
- **FastAPI** - API moderna e performática
- **Python 3.11+** - Linguagem robusta
- **Pydantic** - Validação de dados
- **SQLAlchemy** - ORM poderoso
- **PostgreSQL** - Banco de dados relacional

### **DevOps & Qualidade**
- **Docker** - Containerização
- **ESLint + Prettier** - Padronização de código
- **Pytest** - Testes automatizados
- **Husky** - Git hooks para qualidade

## ⚡ Quick Start

### 📋 **Pré-requisitos**
- Node.js 18+ e NPM 8+
- Python 3.11+ e pip
- Docker e Docker Compose
- Git

### 🛠️ **Instalação**

#### 1️⃣ **Clone o repositório**
```bash
git clone https://github.com/wilmar-kleinschmidt/PlataformaPCP.git
cd PlataformaPCP
```

#### 2️⃣ **Setup do Frontend**
```bash
cd frontend
npm install
npm run dev
```
🌐 **Frontend**: http://localhost:5173

#### 3️⃣ **Setup do Backend**
```bash
cd backend

# Criar ambiente virtual
python -m venv venv
source venv/bin/activate  # Linux/macOS
.\venv\Scripts\activate  # Windows

# Instalar dependências
pip install -r requirements.txt

# Executar servidor
uvicorn app.main:app --reload
```
🔧 **Backend**: http://localhost:8000

#### 4️⃣ **Com Docker (Recomendado)**
```bash
# Build e execução completa
docker-compose up --build

# Ou usando os scripts
# Windows
docker\build.bat
docker\up.bat

# Linux/macOS
./docker/build.sh
./docker/up.sh
```

## 📱 Módulos da Plataforma

### ✅ **Disponível**
| Módulo | Status | Descrição |
|--------|--------|-----------|
| 📊 **Análise de Produção** | ✅ **Disponível** | Monitoramento OEE, métricas em tempo real |
| 🔐 **Autenticação** | ✅ **Disponível** | Sistema de login e controle de acesso |

### 🚧 **Em Desenvolvimento**
| Módulo | Status | Previsão |
|--------|--------|----------|
| 🔧 **Manutenção** | 🚧 **Desenvolvimento** | Q3 2025 |
| 🔗 **Integrações** | 🚧 **Desenvolvimento** | Q4 2025 |

### 📋 **Planejado**
| Módulo | Status | Previsão |
|--------|--------|----------|
| 📦 **Controle de Estoque** | 📋 **Planejado** | Q1 2026 |
| 🎯 **Gestão da Qualidade** | 📋 **Planejado** | Q2 2026 |
| 🤖 **Analytics & BI** | 📋 **Planejado** | Q3 2026 |

## 🎨 Design System

### 🌈 **Paleta de Cores**
```css
/* Cores principais */
--primary: #3b82f6;      /* Azul moderno */
--secondary: #1e293b;    /* Cinza escuro */
--accent: #06b6d4;       /* Ciano vibrante */

/* Status */
--success: #10b981;      /* Verde */
--warning: #f59e0b;      /* Amarelo */
--inactive: #6b7280;     /* Cinza */

/* Backgrounds */
--bg-primary: #0a0a0b;   /* Fundo principal */
--bg-glass: rgba(255, 255, 255, 0.1); /* Glassmorphism */
```

### ✨ **Características Visuais**
- **🌙 Dark Theme** - Interface escura para reduzir fadiga
- **🔍 Glassmorphism** - Efeitos de vidro modernos
- **⚡ Micro-animações** - Transições suaves
- **📱 Responsivo** - Design mobile-first

## 🧪 Testes e Qualidade

### **Frontend**
```bash
cd frontend
npm run lint           # ESLint
npm run type-check     # TypeScript
npm run format         # Prettier
```

### **Backend**
```bash
cd backend
pytest                 # Testes automatizados
pytest --cov          # Com cobertura
```

### **🏆 Métricas de Qualidade**
- ✅ **ESLint**: 0 erros
- ✅ **TypeScript**: Tipagem 100%
- ✅ **Prettier**: Formatação consistente
- ✅ **Pytest**: Cobertura > 80%

## 📊 Scripts Úteis

### **Frontend**
| Script | Descrição |
|--------|-----------|
| `npm run dev` | Servidor desenvolvimento |
| `npm run build` | Build produção |
| `npm run preview` | Preview do build |
| `npm run lint:fix` | Corrige ESLint |

### **Backend**
| Script | Descrição |
|--------|-----------|
| `uvicorn app.main:app --reload` | Servidor desenvolvimento |
| `pytest` | Executar testes |
| `pytest --cov` | Testes com cobertura |

## 🛣️ Roadmap

### 🔄 **2025 Q3**
- [x] ✅ Sistema de autenticação JWT
- [x] ✅ Análise de produção básica
- [ ] 🔧 Módulo de manutenção
- [ ] 📱 PWA (Progressive Web App)

### 🚀 **2025 Q4**
- [ ] 🔗 Integrações ERP/MES
- [ ] ⚡ WebSocket para tempo real
- [ ] 🧪 Testes E2E completos
- [ ] 🌍 Internacionalização

### 🌟 **2026**
- [ ] 📦 Controle de estoque
- [ ] 🎯 Gestão da qualidade
- [ ] 🤖 IA e Machine Learning
- [ ] 📱 App mobile nativo

## 🤝 Como Contribuir

### 📝 **Padrões de Desenvolvimento**
- ✅ **ESLint + Prettier** obrigatório
- ✅ **TypeScript** para frontend
- ✅ **Type hints** para Python
- ✅ **Commits semânticos**
- ✅ **Testes automatizados**

### 🔄 **Workflow**
```bash
# 1. Fork e clone
git clone [seu-fork]
cd PlataformaPCP

# 2. Crie branch feature
git checkout -b feature/nova-funcionalidade

# 3. Desenvolva e teste
# Frontend
cd frontend && npm run dev
npm run lint && npm run type-check

# Backend
cd backend && uvicorn app.main:app --reload
pytest

# 4. Commit semântico
git commit -m "feat: adiciona dashboard de manutenção"

# 5. Pull Request
git push origin feature/nova-funcionalidade
```

### 🏷️ **Convenção de Commits**
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação
- `refactor:` Refatoração
- `test:` Testes
- `chore:` Manutenção

## 📚 Documentação Adicional

### 📖 **Links Úteis**
- [📋 Frontend README](./frontend/README.md) - Detalhes do React app
- [⚙️ Backend README](./backend/README.md) - Detalhes da API FastAPI
- [🧪 Testes](./tests/README.md) - Estratégia de testes
- [📚 Wiki](https://github.com/wilmar-kleinschmidt/PlataformaPCP/wiki) - Documentação completa

### 🎓 **Guias**
- [🚀 Guia de Deploy](./docs/deployment.md)
- [🔧 Configuração de Ambiente](./docs/environment.md)
- [🏗️ Arquitetura](./docs/arquitetura.md)
- [🔗 Integrações](./docs/integrations.md)

## 👨‍💻 Desenvolvedor

<div align="center">

**Wilmar Izequiel Kleinschmidt**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/wilmar-kleinschmidt)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:kogakleinscleins@gmail.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://wilmar-dev.com)

</div>

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

---

<div align="center">

**🏭 PlataformaPCP - Transformando a Indústria 4.0**

[![Feito com ❤️](https://img.shields.io/badge/Feito%20com-❤️-red?style=for-the-badge)](https://github.com/wilmar-kleinschmidt)
[![Brasil](https://img.shields.io/badge/Brasil-009639?style=for-the-badge&logo=brazil&logoColor=white)](https://pt.wikipedia.org/wiki/Brasil)

**Se este projeto te ajudou, considere dar uma ⭐!**

</div>