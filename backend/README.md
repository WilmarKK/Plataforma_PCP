# 🔧 Backend - PlataformaPCP

## 📋 Visão Geral

O backend da PlataformaPCP é construído com FastAPI e Python, seguindo uma arquitetura modular para facilitar a manutenção e escalabilidade. Cada módulo de negócio é isolado em seu próprio pacote, com suas próprias rotas, modelos, schemas e serviços.

## 🏗️ Estrutura de Pastas

```
backend/
├── app/
│   ├── api/                           # Rotas da aplicação
│   │   ├── routes/                    # Definições de rotas
│   │   │   ├── auth.py                # Rotas de autenticação
│   │   │   └── __init__.py
│   │   ├── deps.py                    # Dependências (ex: current_user)
│   │   ├── routes.py                  # Router principal
│   │   └── __init__.py
│   │
│   ├── core/                          # Configurações da aplicação
│   │   ├── config.py                  # Configurações (env, settings)
│   │   ├── database.py                # Conexão com banco
│   │   ├── security.py                # Funções de segurança
│   │   └── __init__.py
│   │
│   ├── models/                        # Modelos SQLAlchemy
│   │   ├── user.py                    # Modelo de usuário
│   │   └── __init__.py
│   │
│   ├── modules/                       # Módulos organizados por domínio
│   │   ├── maintenance/               # Módulo de manutenção
│   │   │   └── __init__.py
│   │   ├── production_analyzer/       # Módulo de análise de produção
│   │   │   ├── api/                   # Rotas do módulo
│   │   │   ├── models/                # Modelos específicos
│   │   │   ├── schemas/               # Schemas de validação
│   │   │   ├── services/              # Lógica de negócio
│   │   │   └── __init__.py
│   │   └── __init__.py
│   │
│   ├── schemas/                       # Schemas Pydantic (validação)
│   │   ├── auth.py                    # Schema para autenticação
│   │   └── __init__.py
│   │
│   ├── services/                      # Lógica de negócio
│   │   ├── auth_service.py            # Serviço de autenticação
│   │   └── __init__.py
│   │
│   ├── main.py                        # Entrada principal da aplicação
│   └── __init__.py
│
├── tests/                             # Testes automatizados
│   ├── production_analyzer/           # Testes por módulo
│   │   ├── test_api.py
│   │   ├── test_common_rules.py
│   │   └── test_machine_rules.py
│   ├── test_api.py                    # Testes gerais da API
│   └── __init__.py
│
├── Dockerfile                         # Configuração Docker
├── requirements.txt                   # Dependências Python
└── README.md                          # Esta documentação
```

## 🧩 Modularização

A arquitetura modular permite:

- **Isolamento de Responsabilidades**: Cada módulo contém apenas o código relacionado à sua funcionalidade.
- **Manutenção Simplificada**: Alterações em um módulo não afetam outros módulos.
- **Escalabilidade**: Novos módulos podem ser adicionados sem modificar os existentes.
- **Testabilidade**: Cada módulo pode ser testado isoladamente.

Cada módulo segue a estrutura:

```
module_name/
├── api/                # Rotas e endpoints
├── models/             # Modelos de dados
├── schemas/            # Schemas de validação
├── services/           # Lógica de negócio
└── __init__.py
```

## 🚀 Como Executar

### 📋 Pré-requisitos

- Python 3.11+
- PostgreSQL
- Pip

### ⚙️ Configuração Local

1. **Crie um ambiente virtual**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/macOS
   .\venv\Scripts\activate  # Windows
   ```

2. **Instale as dependências**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Configure o banco de dados**:
   - Certifique-se de que o PostgreSQL está instalado e em execução
   - Crie um banco de dados chamado `plataformapcp`
   - Execute os scripts em `database/` para criar as tabelas

4. **Execute o servidor de desenvolvimento**:
   ```bash
   uvicorn app.main:app --reload
   ```

5. **Acesse a documentação da API**:
   - Swagger UI: http://localhost:8000/docs
   - ReDoc: http://localhost:8000/redoc

### 🐳 Com Docker

```bash
# Na raiz do projeto
docker-compose up --build backend

# Ou apenas o backend
docker build -t plataformapcp-backend ./backend
docker run -p 8000:8000 plataformapcp-backend
```

## 🧪 Testes Automatizados

Os testes estão organizados por módulo em `tests/`.

```bash
# Executar todos os testes
pytest

# Executar testes com cobertura
pytest --cov=app

# Executar testes de um módulo específico
pytest tests/production_analyzer/
```

## 📚 Documentação

- **Swagger UI**: Disponível em `/docs` quando o servidor está em execução
- **ReDoc**: Disponível em `/redoc` quando o servidor está em execução
- **Módulos**: Cada módulo possui seu próprio README com detalhes específicos

## 🔄 Fluxo de Desenvolvimento

1. **Criar um novo módulo**:
   ```bash
   mkdir -p app/modules/new_module/{api,models,schemas,services}
   touch app/modules/new_module/__init__.py
   touch app/modules/new_module/api/__init__.py
   touch app/modules/new_module/models/__init__.py
   touch app/modules/new_module/schemas/__init__.py
   touch app/modules/new_module/services/__init__.py
   ```

2. **Adicionar rotas ao módulo**:
   - Criar arquivo `app/modules/new_module/api/routes.py`
   - Definir router e endpoints
   - Incluir o router em `app/main.py`

3. **Implementar modelos e schemas**:
   - Definir modelos SQLAlchemy em `app/modules/new_module/models/`
   - Criar schemas Pydantic em `app/modules/new_module/schemas/`

4. **Implementar lógica de negócio**:
   - Criar serviços em `app/modules/new_module/services/`

5. **Escrever testes**:
   - Criar testes em `tests/new_module/`

## 🔒 Autenticação e Segurança

O sistema utiliza autenticação JWT (JSON Web Token) para proteger as rotas.

- **Login**: `/auth/login` - Retorna um token JWT
- **Proteção de Rotas**: Utilize o decorator `Depends(get_current_user)` para proteger rotas
- **Roles**: Implementação de controle de acesso baseado em papéis (admin, manager, viewer)

## 📊 Análise de Produção

O módulo `production_analyzer` é responsável por:

- Coleta de dados de produção
- Cálculo de métricas (OEE, disponibilidade, performance)
- Geração de relatórios
- Análise de tendências

## 🔍 Boas Práticas

- **Type Hints**: Utilize tipagem estática para melhorar a documentação e evitar erros
- **Docstrings**: Documente funções e classes seguindo o padrão Google ou NumPy
- **Testes**: Mantenha a cobertura de testes acima de 80%
- **Linting**: Utilize `flake8` e `black` para manter o código limpo e consistente
- **Commits Semânticos**: Siga o padrão de commits semânticos (feat, fix, docs, etc.)

---

## 📝 Notas de Desenvolvimento

- A conexão com o banco de dados é gerenciada em `app/core/database.py`
- As configurações da aplicação são centralizadas em `app/core/config.py`
- Utilize `app/api/deps.py` para definir dependências reutilizáveis
- Siga o padrão de modularização para novos recursos
