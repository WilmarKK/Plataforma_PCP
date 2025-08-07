# 🔄 Módulo de Integrações

## 📋 Visão Geral

O Módulo de Integrações é responsável por conectar a Plataforma PCP com sistemas externos, permitindo a troca de dados bidirecional com ERPs, MES, sistemas legados, dispositivos IoT e outras plataformas. Ele fornece uma camada de abstração que facilita a comunicação entre diferentes sistemas, garantindo a consistência e integridade dos dados em todo o ecossistema industrial.

## 🏗️ Estrutura do Módulo

```
integrations/
├── api/                      # Endpoints e rotas
│   ├── routes.py             # Definição das rotas
│   └── __init__.py
│
├── models/                   # Modelos de dados
│   ├── connection.py         # Modelo de conexões
│   ├── mapping.py            # Modelo de mapeamentos de dados
│   ├── sync_log.py           # Modelo de logs de sincronização
│   ├── webhook.py            # Modelo de webhooks
│   └── __init__.py
│
├── schemas/                  # Schemas de validação
│   ├── connection.py         # Schema de conexões
│   ├── mapping.py            # Schema de mapeamentos
│   ├── sync_log.py           # Schema de logs
│   ├── webhook.py            # Schema de webhooks
│   └── __init__.py
│
├── services/                 # Lógica de negócio
│   ├── connector_service.py  # Serviço de conexões
│   ├── sync_service.py       # Serviço de sincronização
│   ├── webhook_service.py    # Serviço de webhooks
│   ├── transform_service.py  # Serviço de transformação de dados
│   └── __init__.py
│
├── connectors/               # Implementações de conectores
│   ├── erp/                  # Conectores para ERPs
│   │   ├── sap.py            # Conector SAP
│   │   ├── oracle.py         # Conector Oracle
│   │   └── __init__.py
│   ├── mes/                  # Conectores para MES
│   │   ├── ignition.py       # Conector Ignition
│   │   ├── wonderware.py     # Conector Wonderware
│   │   └── __init__.py
│   ├── iot/                  # Conectores para IoT
│   │   ├── mqtt.py           # Conector MQTT
│   │   ├── opc_ua.py         # Conector OPC UA
│   │   └── __init__.py
│   ├── generic/              # Conectores genéricos
│   │   ├── rest_api.py       # Conector REST API
│   │   ├── database.py       # Conector de banco de dados
│   │   ├── file.py           # Conector de arquivos
│   │   └── __init__.py
│   └── __init__.py
│
└── __init__.py
```

## 🔄 Fluxo de Trabalho

1. **Configuração**:
   - Definição de conexões com sistemas externos
   - Mapeamento de campos e transformações
   - Configuração de agendamentos e gatilhos

2. **Sincronização**:
   - Importação de dados externos
   - Exportação de dados da plataforma
   - Sincronização bidirecional

3. **Monitoramento**:
   - Registro de logs de sincronização
   - Alertas de falhas e inconsistências
   - Dashboards de status das integrações

4. **Manutenção**:
   - Atualização de mapeamentos
   - Resolução de conflitos
   - Otimização de desempenho

## 📊 Tipos de Integrações

### Integrações com ERP

- **SAP**: Integração com módulos MM, PP, PM, QM
- **Oracle**: Conexão com Oracle EBS
- **Microsoft Dynamics**: Integração com Dynamics 365
- **Totvs**: Conexão com Protheus e outros produtos

### Integrações com MES

- **Ignition**: Coleta de dados de produção em tempo real
- **Wonderware**: Integração com InTouch e System Platform
- **Siemens**: Conexão com WinCC e outros produtos
- **Rockwell**: Integração com FactoryTalk

### Integrações com IoT

- **MQTT**: Protocolo leve para dispositivos IoT
- **OPC UA**: Padrão industrial para comunicação
- **Modbus**: Protocolo para dispositivos industriais
- **REST/MQTT**: APIs para dispositivos conectados

### Integrações Genéricas

- **REST API**: Conexão com qualquer API RESTful
- **Banco de Dados**: Integração direta com bancos de dados
- **Arquivos**: Importação/exportação de CSV, XML, JSON
- **Webhooks**: Recebimento de eventos externos

## 🔌 Integração com Outros Módulos

- **Análise de Produção**: Importação de dados de produção de MES e ERPs
- **Manutenção**: Sincronização de ordens de manutenção com sistemas externos
- **Controle de Estoque**: Integração com módulos de estoque de ERPs
- **Analytics & BI**: Fornecimento de dados para análises avançadas

## 🚀 Endpoints da API

### Conexões

- `GET /integrations/connections` - Lista todas as conexões
- `GET /integrations/connections/{id}` - Detalhes de uma conexão
- `POST /integrations/connections` - Cria uma nova conexão
- `PUT /integrations/connections/{id}` - Atualiza uma conexão
- `DELETE /integrations/connections/{id}` - Remove uma conexão
- `GET /integrations/connections/{id}/test` - Testa uma conexão

### Mapeamentos

- `GET /integrations/mappings` - Lista todos os mapeamentos
- `GET /integrations/mappings/{id}` - Detalhes de um mapeamento
- `POST /integrations/mappings` - Cria um novo mapeamento
- `PUT /integrations/mappings/{id}` - Atualiza um mapeamento
- `DELETE /integrations/mappings/{id}` - Remove um mapeamento

### Sincronização

- `POST /integrations/sync/{connection_id}` - Inicia sincronização manual
- `GET /integrations/sync/status/{job_id}` - Verifica status de sincronização
- `GET /integrations/sync/logs` - Lista logs de sincronização
- `GET /integrations/sync/logs/{id}` - Detalhes de um log

### Webhooks

- `GET /integrations/webhooks` - Lista todos os webhooks
- `GET /integrations/webhooks/{id}` - Detalhes de um webhook
- `POST /integrations/webhooks` - Cria um novo webhook
- `PUT /integrations/webhooks/{id}` - Atualiza um webhook
- `DELETE /integrations/webhooks/{id}` - Remove um webhook
- `POST /integrations/webhooks/{id}/trigger` - Aciona um webhook manualmente

### Conectores

- `GET /integrations/connectors` - Lista todos os conectores disponíveis
- `GET /integrations/connectors/{type}` - Detalhes de um tipo de conector
- `GET /integrations/connectors/{type}/schema` - Schema de configuração do conector

## 📝 Modelos de Dados

### Connection (Conexão)

```python
class Connection(Base):
    __tablename__ = "integration_connections"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String, nullable=True)
    connector_type = Column(String, index=True)  # erp.sap, mes.ignition, iot.mqtt, etc.
    config = Column(JSON)  # Configuração específica do conector em JSON
    is_active = Column(Boolean, default=True)
    schedule = Column(String, nullable=True)  # Expressão cron para sincronização automática
    created_by = Column(Integer, ForeignKey("users.id"), index=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    last_sync_at = Column(DateTime, nullable=True)
    last_sync_status = Column(String, nullable=True)  # success, error, in_progress

    # Relacionamentos
    creator = relationship("User")
    mappings = relationship("Mapping", back_populates="connection")
    sync_logs = relationship("SyncLog", back_populates="connection")
```

### Mapping (Mapeamento)

```python
class Mapping(Base):
    __tablename__ = "integration_mappings"

    id = Column(Integer, primary_key=True, index=True)
    connection_id = Column(Integer, ForeignKey("integration_connections.id"), index=True)
    name = Column(String, index=True)
    description = Column(String, nullable=True)
    entity_type = Column(String, index=True)  # machine, production_data, maintenance_order, etc.
    direction = Column(String)  # import, export, bidirectional
    source_entity = Column(String)  # Entidade no sistema externo
    target_entity = Column(String)  # Entidade na plataforma
    field_mappings = Column(JSON)  # Mapeamento de campos em JSON
    transformations = Column(JSON, nullable=True)  # Transformações em JSON
    filters = Column(JSON, nullable=True)  # Filtros em JSON
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relacionamentos
    connection = relationship("Connection", back_populates="mappings")
```

### SyncLog (Log de Sincronização)

```python
class SyncLog(Base):
    __tablename__ = "integration_sync_logs"

    id = Column(Integer, primary_key=True, index=True)
    connection_id = Column(Integer, ForeignKey("integration_connections.id"), index=True)
    mapping_id = Column(Integer, ForeignKey("integration_mappings.id"), nullable=True, index=True)
    direction = Column(String)  # import, export
    start_time = Column(DateTime, default=datetime.utcnow)
    end_time = Column(DateTime, nullable=True)
    status = Column(String)  # success, error, in_progress
    records_processed = Column(Integer, default=0)
    records_success = Column(Integer, default=0)
    records_error = Column(Integer, default=0)
    error_message = Column(String, nullable=True)
    details = Column(JSON, nullable=True)  # Detalhes adicionais em JSON

    # Relacionamentos
    connection = relationship("Connection", back_populates="sync_logs")
    mapping = relationship("Mapping")
```

### Webhook

```python
class Webhook(Base):
    __tablename__ = "integration_webhooks"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String, nullable=True)
    url = Column(String)
    http_method = Column(String, default="POST")  # GET, POST, PUT, etc.
    headers = Column(JSON, nullable=True)  # Cabeçalhos HTTP em JSON
    payload_template = Column(String, nullable=True)  # Template para o payload
    event_type = Column(String, index=True)  # Tipo de evento que aciona o webhook
    is_active = Column(Boolean, default=True)
    secret_key = Column(String, nullable=True)  # Chave para assinatura
    created_by = Column(Integer, ForeignKey("users.id"), index=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relacionamentos
    creator = relationship("User")
    executions = relationship("WebhookExecution", back_populates="webhook")
```

## 🧪 Testes

Os testes do módulo estão localizados em `tests/integrations/` e incluem:

- **Testes de API**: Verificam os endpoints e respostas
- **Testes de Conectores**: Validam a comunicação com sistemas externos
- **Testes de Transformação**: Verificam as transformações de dados

Para executar os testes:

```bash
# Todos os testes do módulo
pytest tests/integrations/

# Testes específicos
pytest tests/integrations/test_api.py
pytest tests/integrations/test_connectors/
```

## 📈 Monitoramento e Métricas

### Métricas de Sincronização

- **Taxa de Sucesso**: Percentual de sincronizações bem-sucedidas
- **Tempo Médio**: Duração média das sincronizações
- **Volume de Dados**: Quantidade de registros processados
- **Erros por Tipo**: Distribuição de erros por categoria

### Alertas

- **Falha de Sincronização**: Notificação quando uma sincronização falha
- **Atraso de Dados**: Alerta quando dados não são atualizados no tempo esperado
- **Inconsistência**: Detecção de dados inconsistentes entre sistemas
- **Limite de API**: Aviso quando se aproxima do limite de chamadas de API

## 🔍 Boas Práticas

- **Idempotência**: Garanta que operações possam ser repetidas sem efeitos colaterais
- **Validação de Dados**: Verifique a integridade dos dados antes da sincronização
- **Tratamento de Erros**: Implemente estratégias robustas de retry e fallback
- **Auditoria**: Mantenha logs detalhados de todas as operações

## 🚀 Roadmap

### Curto Prazo

1. **Conectores Básicos**: Implementação de conectores REST, banco de dados e arquivos
2. **Sincronização Manual**: Interface para sincronização sob demanda
3. **Logs Detalhados**: Sistema de registro e visualização de logs

### Médio Prazo

1. **Conectores Específicos**: Implementação de conectores para ERPs e MES populares
2. **Sincronização Automática**: Agendamento e gatilhos para sincronização
3. **Transformações Avançadas**: Editor visual de mapeamentos e transformações

### Longo Prazo

1. **Integração em Tempo Real**: Sincronização em tempo real via webhooks e streaming
2. **Orquestração de Dados**: Fluxos complexos de integração com múltiplos sistemas
3. **Machine Learning**: Detecção automática de mapeamentos e anomalias

---

## 📝 Notas de Desenvolvimento

- Os conectores são implementados como classes que seguem uma interface comum
- As transformações de dados são definidas usando uma linguagem de expressão personalizada
- A sincronização é executada em background usando tarefas assíncronas
- As credenciais são armazenadas de forma criptografada
- O sistema suporta retry automático para falhas temporárias