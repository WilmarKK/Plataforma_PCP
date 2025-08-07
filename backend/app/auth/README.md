# 🔐 Módulo de Autenticação e Autorização

## 📋 Visão Geral

O Módulo de Autenticação e Autorização é responsável pelo controle de acesso à Plataforma PCP, garantindo que apenas usuários autorizados possam acessar o sistema e que cada usuário tenha acesso apenas às funcionalidades e dados pertinentes ao seu perfil. Este módulo implementa mecanismos seguros de autenticação, gerenciamento de sessões, controle de permissões baseado em papéis (RBAC) e auditoria de acessos.

## 🏗️ Estrutura do Módulo

```
auth/
├── api/                      # Endpoints e rotas
│   ├── routes.py             # Definição das rotas
│   └── __init__.py
│
├── models/                   # Modelos de dados
│   ├── user.py               # Modelo de usuários
│   ├── role.py               # Modelo de papéis
│   ├── permission.py         # Modelo de permissões
│   ├── session.py            # Modelo de sessões
│   └── __init__.py
│
├── schemas/                  # Schemas de validação
│   ├── user.py               # Schema de usuários
│   ├── role.py               # Schema de papéis
│   ├── permission.py         # Schema de permissões
│   ├── auth.py               # Schema de autenticação
│   └── __init__.py
│
├── services/                 # Lógica de negócio
│   ├── auth_service.py       # Serviço de autenticação
│   ├── user_service.py       # Serviço de usuários
│   ├── role_service.py       # Serviço de papéis
│   ├── permission_service.py # Serviço de permissões
│   └── __init__.py
│
├── utils/                    # Utilitários
│   ├── password.py           # Utilitários de senha
│   ├── jwt.py                # Utilitários de JWT
│   ├── oauth.py              # Utilitários de OAuth
│   └── __init__.py
│
├── middleware/               # Middlewares
│   ├── auth_middleware.py    # Middleware de autenticação
│   ├── rbac_middleware.py    # Middleware de RBAC
│   └── __init__.py
│
└── __init__.py
```

## 🔄 Fluxo de Autenticação

1. **Login**:
   - Usuário fornece credenciais (email/senha)
   - Sistema valida credenciais
   - Sistema gera tokens de acesso e refresh
   - Tokens são retornados ao cliente

2. **Autorização**:
   - Cliente envia token de acesso com cada requisição
   - Middleware valida o token
   - Middleware verifica permissões do usuário
   - Acesso é concedido ou negado

3. **Renovação de Token**:
   - Token de acesso expira
   - Cliente usa token de refresh para obter novo token de acesso
   - Sistema valida token de refresh e gera novo token de acesso

4. **Logout**:
   - Cliente solicita logout
   - Sistema invalida tokens
   - Sessão é encerrada

## 📊 Funcionalidades Principais

### Autenticação

- **Login com Email/Senha**: Autenticação básica com credenciais
- **JWT (JSON Web Tokens)**: Tokens seguros para autenticação stateless
- **Refresh Tokens**: Mecanismo para renovação de sessão sem re-login
- **Proteção contra Ataques**: Limitação de tentativas, CSRF, XSS

### Gerenciamento de Usuários

- **CRUD de Usuários**: Criação, leitura, atualização e exclusão
- **Perfis de Usuário**: Informações pessoais e preferências
- **Recuperação de Senha**: Fluxo seguro para redefinição
- **Ativação/Desativação**: Controle de status de contas

### Controle de Acesso

- **RBAC (Role-Based Access Control)**: Controle baseado em papéis
- **Permissões Granulares**: Acesso específico a recursos e ações
- **Hierarquia de Papéis**: Herança de permissões
- **Escopo de Dados**: Restrição de acesso a dados específicos

### Auditoria e Segurança

- **Logs de Acesso**: Registro de todas as atividades de autenticação
- **Detecção de Anomalias**: Identificação de padrões suspeitos
- **Políticas de Senha**: Requisitos de complexidade e expiração
- **Sessões Ativas**: Gerenciamento de sessões simultâneas

## 🔌 Integração com Outros Módulos

- **Todos os Módulos**: Fornece middleware de autenticação e autorização
- **Audit Logs**: Registra ações de usuários para auditoria
- **Notificações**: Envia alertas de segurança e confirmações
- **Configurações**: Permite personalização de políticas de segurança

## 🚀 Endpoints da API

### Autenticação

- `POST /auth/login` - Realiza login e retorna tokens
- `POST /auth/refresh` - Renova token de acesso usando refresh token
- `POST /auth/logout` - Realiza logout e invalida tokens
- `POST /auth/password-reset-request` - Solicita redefinição de senha
- `POST /auth/password-reset` - Redefine senha com token
- `GET /auth/me` - Retorna informações do usuário autenticado

### Usuários

- `GET /auth/users` - Lista todos os usuários (admin)
- `GET /auth/users/{id}` - Detalhes de um usuário
- `POST /auth/users` - Cria um novo usuário
- `PUT /auth/users/{id}` - Atualiza um usuário
- `DELETE /auth/users/{id}` - Remove um usuário
- `PATCH /auth/users/{id}/status` - Ativa/desativa um usuário

### Papéis e Permissões

- `GET /auth/roles` - Lista todos os papéis
- `GET /auth/roles/{id}` - Detalhes de um papel
- `POST /auth/roles` - Cria um novo papel
- `PUT /auth/roles/{id}` - Atualiza um papel
- `DELETE /auth/roles/{id}` - Remove um papel
- `GET /auth/permissions` - Lista todas as permissões
- `POST /auth/roles/{id}/permissions` - Atribui permissões a um papel

### Sessões

- `GET /auth/sessions` - Lista sessões ativas do usuário
- `DELETE /auth/sessions/{id}` - Encerra uma sessão específica
- `DELETE /auth/sessions/all` - Encerra todas as sessões do usuário

## 📝 Modelos de Dados

### User (Usuário)

```python
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    username = Column(String, unique=True, index=True)
    password_hash = Column(String)
    first_name = Column(String)
    last_name = Column(String)
    is_active = Column(Boolean, default=True)
    is_verified = Column(Boolean, default=False)
    last_login = Column(DateTime, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relacionamentos
    roles = relationship("UserRole", back_populates="user")
    sessions = relationship("Session", back_populates="user")
    audit_logs = relationship("AuditLog", back_populates="user")
```

### Role (Papel)

```python
class Role(Base):
    __tablename__ = "roles"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    description = Column(String, nullable=True)
    is_default = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relacionamentos
    users = relationship("UserRole", back_populates="role")
    permissions = relationship("RolePermission", back_populates="role")
```

### Permission (Permissão)

```python
class Permission(Base):
    __tablename__ = "permissions"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    description = Column(String, nullable=True)
    resource = Column(String, index=True)  # Recurso (módulo, entidade)
    action = Column(String, index=True)    # Ação (read, write, delete, etc.)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relacionamentos
    roles = relationship("RolePermission", back_populates="permission")
```

### Session (Sessão)

```python
class Session(Base):
    __tablename__ = "sessions"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), index=True)
    refresh_token = Column(String, unique=True, index=True)
    user_agent = Column(String, nullable=True)
    ip_address = Column(String, nullable=True)
    expires_at = Column(DateTime)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    last_activity = Column(DateTime, default=datetime.utcnow)

    # Relacionamentos
    user = relationship("User", back_populates="sessions")
```

## 🧪 Testes

Os testes do módulo estão localizados em `tests/auth/` e incluem:

- **Testes de API**: Verificam os endpoints e respostas
- **Testes de Serviços**: Validam a lógica de negócio
- **Testes de Segurança**: Verificam vulnerabilidades e proteções

Para executar os testes:

```bash
# Todos os testes do módulo
pytest tests/auth/

# Testes específicos
pytest tests/auth/test_api.py
pytest tests/auth/test_security.py
```

## 🔒 Segurança

### Armazenamento de Senhas

- **Hashing**: Senhas armazenadas com bcrypt ou Argon2
- **Salt**: Uso de salt único para cada senha
- **Fatores de Trabalho**: Configuráveis para equilibrar segurança e desempenho

### Tokens JWT

- **Assinatura**: Tokens assinados com algoritmo seguro (HS256, RS256)
- **Expiração**: Tempo de vida curto para tokens de acesso
- **Payload Mínimo**: Apenas informações essenciais no token

### Proteção contra Ataques

- **Rate Limiting**: Limitação de tentativas de login
- **CSRF Protection**: Proteção contra Cross-Site Request Forgery
- **XSS Prevention**: Cabeçalhos de segurança e sanitização
- **CORS**: Configuração segura de Cross-Origin Resource Sharing

## 🔍 Boas Práticas

- **Princípio do Menor Privilégio**: Conceda apenas as permissões necessárias
- **Defesa em Profundidade**: Múltiplas camadas de segurança
- **Falha Segura**: Em caso de erro, negar acesso por padrão
- **Auditoria Completa**: Registro de todas as ações sensíveis

## 🚀 Roadmap

### Curto Prazo

1. **Autenticação Básica**: Login com email/senha e JWT
2. **RBAC**: Implementação de papéis e permissões básicas
3. **Gerenciamento de Usuários**: CRUD completo de usuários

### Médio Prazo

1. **MFA (Multi-Factor Authentication)**: Autenticação de dois fatores
2. **SSO (Single Sign-On)**: Integração com provedores externos
3. **Permissões Avançadas**: Controle de acesso baseado em dados

### Longo Prazo

1. **OAuth/OIDC**: Implementação como provedor de identidade
2. **Análise Comportamental**: Detecção de atividades suspeitas
3. **Biometria**: Suporte a autenticação biométrica

---

## 📝 Notas de Desenvolvimento

- O módulo utiliza o pacote `passlib` para hashing seguro de senhas
- Os tokens JWT são gerados e validados com o pacote `python-jose`
- O middleware de autenticação é implementado usando FastAPI dependencies
- As políticas de senha são configuráveis via variáveis de ambiente
- O sistema suporta invalidação imediata de tokens em caso de comprometimento