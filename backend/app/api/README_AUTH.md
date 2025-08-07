# Sistema de Autenticação - PlataformaPCP

Este documento descreve o sistema de autenticação implementado na PlataformaPCP.

## Endpoints Disponíveis

### 1. Login - `/auth/token` (POST)

Endpoint para autenticação usando OAuth2 Password Flow.

**Formato:** `application/x-www-form-urlencoded`

```bash
curl -X POST "http://localhost:8000/auth/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=admin@test.com&password=admin123"
```

**Resposta:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer"
}
```

### 2. Login JSON - `/auth/token/json` (POST)

Endpoint alternativo para autenticação usando JSON.

**Formato:** `application/json`

```bash
curl -X POST "http://localhost:8000/auth/token/json" \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@test.com", "password": "admin123"}'
```

**Resposta:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer"
}
```

### 3. Perfil do Usuário - `/auth/me` (GET)

Endpoint para obter informações do usuário autenticado.

**Autenticação:** Bearer Token

```bash
curl -X GET "http://localhost:8000/auth/me" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

**Resposta:**
```json
{
  "id": 1,
  "email": "admin@test.com",
  "role": "admin",
  "is_active": true,
  "created_at": "2025-01-30T10:00:00Z"
}
```

## Estrutura do Sistema

### Modelos
- **User** (`app/models/user.py`): Modelo SQLAlchemy para usuários

### Schemas
- **Token**: Schema para resposta de token
- **UserLogin**: Schema para dados de login
- **UserProfile**: Schema para perfil do usuário

### Serviços
- **auth_service.py**: Lógica de autenticação, JWT, hash de senhas

### Dependências
- **get_current_active_user**: Obtém usuário autenticado
- **get_admin_user**: Verifica se usuário é admin
- **get_manager_or_admin_user**: Verifica se usuário é manager ou admin

## Configuração

### Variáveis de Ambiente
```env
SECRET_KEY=sua_chave_secreta_aqui
DATABASE_URL=postgresql://user:password@localhost:5432/database
```

### Roles de Usuário
- **admin**: Acesso total ao sistema
- **manager**: Acesso de gerenciamento
- **viewer**: Acesso apenas de visualização

## Instalação e Teste

### 1. Instalar Dependências
```bash
pip install -r requirements.txt
```

### 2. Criar Usuário de Teste
```bash
cd backend
python -m app.create_test_user
```

### 3. Executar Servidor
```bash
cd backend
python -m app.main
```

### 4. Testar Endpoints
```bash
cd backend
python test_auth.py
```

## Segurança

- Senhas são hasheadas usando bcrypt
- Tokens JWT com expiração de 30 minutos
- Verificação de usuário ativo
- Sistema de roles para autorização

## Documentação da API

Acesse `http://localhost:8000/docs` para ver a documentação interativa do Swagger.