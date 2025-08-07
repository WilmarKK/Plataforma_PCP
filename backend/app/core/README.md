# 🧠 Core do Backend - PlataformaPCP

## 📋 Visão Geral

O Módulo Core é o núcleo central da Plataforma PCP, fornecendo componentes, utilitários e configurações fundamentais que são compartilhados por todos os outros módulos da aplicação. Ele estabelece a base arquitetural do sistema, implementa funcionalidades transversais e define padrões de desenvolvimento que garantem consistência, segurança e desempenho em toda a plataforma.

## 🏗️ Estrutura do Módulo

```
core/
├── config.py                 # Configurações globais do sistema
├── database.py               # Gerenciamento da conexão com o banco PostgreSQL
├── test_connection.py        # Script utilitário para diagnóstico da conexão
├── security.py               # Configurações e utilitários de segurança
├── logging_config.py         # Configuração de logs do sistema
├── middleware/               # Middlewares da aplicação
│   ├── error_handler.py      # Middleware de tratamento de erros
│   ├── logging.py            # Middleware de logging
│   └── __init__.py
├── exceptions/               # Exceções personalizadas
│   ├── base.py               # Exceção base
│   ├── http.py               # Exceções HTTP
│   └── __init__.py
├── utils/                    # Utilitários diversos
│   ├── pagination.py         # Utilitários de paginação
│   ├── validation.py         # Utilitários de validação
│   ├── date_utils.py         # Utilitários de data e hora
│   └── __init__.py
└── __init__.py
```

## 🔄 Componentes Principais

### Configuração (config.py)

Gerencia todas as configurações da aplicação, incluindo:

- Carregamento de variáveis de ambiente
- Configurações específicas para desenvolvimento, teste e produção
- Definição de constantes do sistema
- Configurações de API e serviços

### Banco de Dados (database.py)

Implementa a conexão e interação com o banco de dados PostgreSQL:

- Configuração da conexão com SQLAlchemy
- Gerenciamento de sessões
- Funções auxiliares para operações comuns
- Definição da classe Base para modelos

### Teste de Conexão (test_connection.py)

Script utilitário para diagnóstico completo da conexão com o banco:

- Verifica a conexão com o servidor PostgreSQL
- Testa encoding e configurações
- Valida a existência do banco e tabelas
- Executa operações CRUD básicas para teste

Como executar:
```sh
cd backend/app/core
python test_connection.py
```

### Segurança (security.py)

Implementa funcionalidades de segurança:

- Hashing e verificação de senhas
- Geração e validação de tokens JWT
- Funções de criptografia e descriptografia
- Proteção contra ataques comuns

### Logging (logging_config.py)

Configura o sistema de logs:

- Formatação de logs estruturados
- Configuração de níveis de log
- Rotação de arquivos de log
- Integração com serviços de monitoramento

## 🔌 Integração com Outros Módulos

- **Todos os Módulos**: Fornecem componentes e utilitários fundamentais
- **Autenticação**: Utiliza configurações de segurança e middlewares
- **API**: Utiliza tratamento de exceções e formatação de respostas
- **Módulos de Negócio**: Utilizam utilitários, cache e acesso a dados

## 📝 Exemplos de Uso

### Configuração

```python
from app.core.config import settings

# Acessando configurações
database_url = settings.DATABASE_URL
debug_mode = settings.DEBUG
api_prefix = settings.API_PREFIX
```

### Banco de Dados

```python
from app.core.database import get_db, engine, Base
from sqlalchemy.orm import Session

# Criando tabelas
Base.metadata.create_all(bind=engine)

# Usando o contexto de sessão
def get_user(user_id: int):
    with get_db() as db:
        return db.query(User).filter(User.id == user_id).first()
```

### Exceções

```python
from app.core.exceptions import NotFoundError, ValidationError

def get_user(user_id: int):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise NotFoundError(f"Usuário com ID {user_id} não encontrado")
    return user
```

## 🧪 Testes

Os testes do módulo estão localizados em `tests/core/` e incluem:

- **Testes de Configuração**: Verificam o carregamento e validação de configurações
- **Testes de Banco de Dados**: Validam as operações de banco de dados
- **Testes de Segurança**: Verificam as funções de segurança

Para executar os testes:

```bash
# Todos os testes do módulo
pytest tests/core/

# Testes específicos
pytest tests/core/test_config.py
pytest tests/core/test_database.py
```

## 🔍 Boas Práticas

- **Reutilização**: Prefira utilizar componentes do Core em vez de reimplementar funcionalidades
- **Documentação**: Sempre documente novos scripts e configurações
- **Segurança**: Mantenha as variáveis sensíveis fora do código (use .env sempre que possível)
- **Consistência**: Siga os padrões estabelecidos pelo Core em todos os módulos
- **Desacoplamento**: Mantenha o Core independente de módulos específicos de negócio

## 🚀 Roadmap

### Curto Prazo

1. **Melhorias de Logging**: Implementação de logging estruturado
2. **Cache Distribuído**: Sistema de cache para melhorar desempenho
3. **Métricas**: Coleta de métricas para monitoramento

### Médio Prazo

1. **Tracing Distribuído**: Rastreamento de requisições entre serviços
2. **Circuit Breaker**: Padrão de resiliência para chamadas externas
3. **Validação Avançada**: Sistema de validação declarativa

---

## 📝 Notas de Desenvolvimento

- O módulo Core deve ser mantido com alta cobertura de testes
- Alterações no Core devem ser cuidadosamente revisadas devido ao impacto em toda a aplicação
- A documentação deve ser mantida atualizada para facilitar o uso pelos desenvolvedores
- Consulte este README para dicas de manutenção e troubleshooting