# ⚙️ Configurações do Sistema - PlataformaPCP

## 📋 Visão Geral

O módulo de configurações centraliza todas as definições e parâmetros globais da Plataforma PCP. Ele fornece uma interface unificada para acessar configurações de ambiente, conexões de banco de dados, segurança, logging e outras configurações essenciais do sistema. Este módulo é fundamental para manter a consistência e facilitar a manutenção das configurações em toda a aplicação.

## 🏗️ Estrutura do Módulo

```
config/
├── __init__.py             # Inicialização do módulo
├── settings.py             # Configurações principais usando Pydantic
├── environment.py          # Gerenciamento de ambientes (dev, test, prod)
├── logging_config.py       # Configurações de logging
└── constants.py            # Constantes globais da aplicação
```

## 🔄 Componentes Principais

### Settings (settings.py)

Implementa a classe `Settings` usando Pydantic para validação e carregamento de configurações:

- Carregamento automático de variáveis de ambiente do arquivo `.env`
- Validação de tipos e valores
- Valores padrão para configurações opcionais
- Configurações específicas para diferentes ambientes

### Ambientes (environment.py)

Gerencia diferentes configurações para ambientes de desenvolvimento, teste e produção:

- Detecção automática do ambiente atual
- Configurações específicas para cada ambiente
- Sobrescrita de configurações baseada no ambiente

### Logging (logging_config.py)

Configura o sistema de logs da aplicação:

- Formatação de logs estruturados
- Configuração de níveis de log por ambiente
- Rotação de arquivos de log
- Integração com serviços de monitoramento

### Constantes (constants.py)

Define constantes globais utilizadas em toda a aplicação:

- Códigos de status HTTP personalizados
- Mensagens de erro padronizadas
- Limites e timeouts
- Configurações de paginação

## 📝 Exemplos de Uso

### Acessando Configurações

```python
from app.core.config.settings import settings

# Acessando configurações
database_url = settings.DATABASE_URL
debug_mode = settings.DEBUG
api_prefix = settings.API_V1_STR
```

### Verificando o Ambiente

```python
from app.core.config.environment import get_environment, is_production

# Verificando o ambiente atual
current_env = get_environment()  # 'development', 'testing' ou 'production'

# Verificando se é ambiente de produção
if is_production():
    # Aplicar configurações específicas de produção
    pass
```

### Configurando Logging

```python
from app.core.config.logging_config import setup_logging

# Configurando o sistema de logs
setup_logging()

# Usando o logger configurado
import logging
logger = logging.getLogger(__name__)
logger.info("Aplicação iniciada")
logger.error("Erro ao conectar ao banco de dados", exc_info=True)
```

## 🔌 Integração com Outros Módulos

- **Core**: Fornece configurações essenciais para o núcleo da aplicação
- **Database**: Utiliza configurações de conexão com o banco de dados
- **API**: Utiliza configurações de rotas, CORS e segurança
- **Auth**: Utiliza configurações de segurança e JWT
- **Todos os Módulos**: Acessam configurações globais e constantes

## 🧪 Testes

Os testes do módulo estão localizados em `tests/core/config/` e incluem:

- **Testes de Settings**: Verificam o carregamento e validação de configurações
- **Testes de Environment**: Validam a detecção e configuração de ambientes
- **Testes de Logging**: Verificam a configuração correta do sistema de logs

Para executar os testes:

```bash
# Todos os testes do módulo
pytest tests/core/config/

# Testes específicos
pytest tests/core/config/test_settings.py
pytest tests/core/config/test_environment.py
```

## 🔍 Boas Práticas

- **Centralização**: Mantenha todas as configurações neste módulo
- **Segurança**: Nunca armazene senhas ou chaves diretamente no código
- **Validação**: Utilize a validação do Pydantic para garantir valores corretos
- **Documentação**: Documente todas as configurações e seus valores padrão
- **Ambientes**: Mantenha configurações específicas para cada ambiente

## 🚀 Roadmap

### Curto Prazo

1. **Configurações Dinâmicas**: Implementar sistema de configurações que podem ser alteradas em runtime
2. **Validação Avançada**: Adicionar validações mais complexas para configurações críticas
3. **Documentação Automática**: Gerar documentação das configurações disponíveis

### Médio Prazo

1. **Interface de Administração**: Criar interface para visualizar e editar configurações
2. **Versionamento de Configurações**: Implementar histórico de alterações
3. **Configurações por Tenant**: Suporte a configurações específicas por cliente

---

## 📝 Notas de Desenvolvimento

- Sempre utilize o objeto `settings` para acessar configurações
- Evite importações circulares ao utilizar configurações
- Mantenha arquivos `.env` fora do controle de versão
- Documente novas configurações adicionadas
- Considere o impacto de alterações nas configurações em toda a aplicação