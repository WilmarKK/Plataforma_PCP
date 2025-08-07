# 📊 Módulo de Análise de Produção

## 📋 Visão Geral

O módulo de Análise de Produção é responsável por coletar, processar e visualizar dados de produção industrial. Ele permite o monitoramento em tempo real de indicadores de desempenho, análise de tendências e geração de relatórios para tomada de decisão.

## 🏗️ Estrutura do Módulo

```
production_analyzer/
├── api/                      # Endpoints e rotas
│   ├── routes.py             # Definição das rotas
│   └── __init__.py
│
├── models/                   # Modelos de dados
│   ├── machine.py            # Modelo de máquina
│   ├── production_data.py    # Modelo de dados de produção
│   ├── formula.py            # Modelo de fórmulas de cálculo
│   └── __init__.py
│
├── schemas/                  # Schemas de validação
│   ├── machine.py            # Schema de máquina
│   ├── production_data.py    # Schema de dados de produção
│   ├── formula.py            # Schema de fórmulas
│   ├── report.py             # Schema de relatórios
│   └── __init__.py
│
├── services/                 # Lógica de negócio
│   ├── machine_service.py    # Serviço de máquinas
│   ├── production_service.py # Serviço de dados de produção
│   ├── formula_service.py    # Serviço de fórmulas
│   ├── report_service.py     # Serviço de relatórios
│   ├── calculator.py         # Cálculos de métricas
│   └── __init__.py
│
└── __init__.py
```

## 🔄 Fluxo de Dados

1. **Coleta de Dados**:
   - Entrada manual via formulários
   - Integração com sistemas MES/SCADA
   - Sensores IoT (planejado)

2. **Processamento**:
   - Cálculo de métricas (OEE, disponibilidade, performance)
   - Aplicação de fórmulas personalizadas
   - Detecção de anomalias

3. **Visualização**:
   - Dashboards em tempo real
   - Relatórios periódicos
   - Exportação em diversos formatos (PDF, Excel, CSV)

## 📊 Métricas Principais

### OEE (Overall Equipment Effectiveness)

O OEE é calculado pela fórmula:

```
OEE = Disponibilidade × Performance × Qualidade
```

Onde:
- **Disponibilidade**: Tempo de operação ÷ Tempo planejado
- **Performance**: (Quantidade produzida × Tempo de ciclo ideal) ÷ Tempo de operação
- **Qualidade**: Quantidade de produtos bons ÷ Quantidade total produzida

### Outras Métricas

- **MTBF (Mean Time Between Failures)**: Tempo médio entre falhas
- **MTTR (Mean Time To Repair)**: Tempo médio para reparo
- **Eficiência de Produção**: Produção real ÷ Capacidade teórica
- **Taxa de Defeitos**: Quantidade de defeitos ÷ Quantidade total produzida

## 🔌 Integração com Outros Módulos

- **Manutenção**: Compartilha dados de paradas e falhas
- **Controle de Estoque**: Recebe informações de consumo de materiais
- **Qualidade**: Fornece dados para análise de defeitos

## 🚀 Endpoints da API

### Máquinas

- `GET /production-analyzer/machines` - Lista todas as máquinas
- `GET /production-analyzer/machines/{id}` - Detalhes de uma máquina
- `POST /production-analyzer/machines` - Cria uma nova máquina
- `PUT /production-analyzer/machines/{id}` - Atualiza uma máquina
- `DELETE /production-analyzer/machines/{id}` - Remove uma máquina

### Dados de Produção

- `GET /production-analyzer/production-data` - Lista dados de produção
- `GET /production-analyzer/production-data/{id}` - Detalhes de um registro
- `POST /production-analyzer/production-data` - Registra dados de produção
- `PUT /production-analyzer/production-data/{id}` - Atualiza um registro
- `DELETE /production-analyzer/production-data/{id}` - Remove um registro

### Fórmulas

- `GET /production-analyzer/formulas` - Lista todas as fórmulas
- `GET /production-analyzer/formulas/{id}` - Detalhes de uma fórmula
- `POST /production-analyzer/formulas` - Cria uma nova fórmula
- `PUT /production-analyzer/formulas/{id}` - Atualiza uma fórmula
- `DELETE /production-analyzer/formulas/{id}` - Remove uma fórmula

### Relatórios

- `GET /production-analyzer/reports/oee` - Relatório de OEE
- `GET /production-analyzer/reports/efficiency` - Relatório de eficiência
- `GET /production-analyzer/reports/defects` - Relatório de defeitos
- `GET /production-analyzer/reports/custom` - Relatório personalizado
- `POST /production-analyzer/reports/export` - Exporta relatório

## 📝 Modelos de Dados

### Machine (Máquina)

```python
class Machine(Base):
    __tablename__ = "machines"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    type = Column(String, index=True)
    speed = Column(Float)  # Velocidade nominal (peças/hora)
    setup_time = Column(Integer)  # Tempo de setup em minutos
    description = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relacionamentos
    production_data = relationship("ProductionData", back_populates="machine")
```

### ProductionData (Dados de Produção)

```python
class ProductionData(Base):
    __tablename__ = "production_data"

    id = Column(Integer, primary_key=True, index=True)
    machine_id = Column(Integer, ForeignKey("machines.id"), index=True)
    user_id = Column(Integer, ForeignKey("users.id"), index=True)
    date = Column(Date, index=True)
    product = Column(String, index=True)
    quantity = Column(Integer)
    efficiency = Column(Float)
    defects = Column(Integer)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relacionamentos
    machine = relationship("Machine", back_populates="production_data")
    user = relationship("User")
```

### Formula (Fórmula)

```python
class Formula(Base):
    __tablename__ = "formulas"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    expression = Column(String)
    user_id = Column(Integer, ForeignKey("users.id"), index=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relacionamentos
    user = relationship("User")
```

## 🧪 Testes

Os testes do módulo estão localizados em `tests/production_analyzer/` e incluem:

- **Testes de API**: Verificam os endpoints e respostas
- **Testes de Regras Comuns**: Validam regras de negócio gerais
- **Testes de Regras de Máquina**: Validam regras específicas de máquinas

Para executar os testes:

```bash
# Todos os testes do módulo
pytest tests/production_analyzer/

# Testes específicos
pytest tests/production_analyzer/test_api.py
pytest tests/production_analyzer/test_machine_rules.py
```

## 📈 Relatórios

O módulo gera relatórios em diversos formatos:

- **PDF**: Relatórios formais para impressão
- **Excel**: Planilhas para análise detalhada
- **CSV**: Dados brutos para integração
- **JSON**: Dados para consumo via API

Os relatórios são armazenados em `RELATORIOS PRODUTIVIDADE/` organizados por data.

## 🔍 Boas Práticas

- **Validação de Dados**: Utilize os schemas Pydantic para validar entradas
- **Separação de Responsabilidades**: Mantenha a lógica de negócio nos serviços
- **Documentação**: Documente todas as funções e endpoints
- **Testes**: Mantenha a cobertura de testes acima de 80%

## 🚀 Roadmap

### Curto Prazo

1. **Dashboards em Tempo Real**: Implementar visualização em tempo real
2. **Exportação de Relatórios**: Adicionar mais formatos de exportação
3. **Filtros Avançados**: Melhorar a capacidade de filtragem de dados

### Médio Prazo

1. **Integração IoT**: Conectar com sensores e dispositivos IoT
2. **Análise Preditiva**: Implementar algoritmos de previsão
3. **Alertas Automáticos**: Notificações baseadas em regras

### Longo Prazo

1. **Machine Learning**: Detecção de anomalias e otimização
2. **Digital Twin**: Representação virtual das máquinas
3. **Integração Completa**: Conexão com todos os sistemas da fábrica

---

## 📝 Notas de Desenvolvimento

- A lógica principal de cálculo está em `services/calculator.py`
- As fórmulas personalizadas são avaliadas usando a biblioteca `simpleeval`
- Os relatórios PDF são gerados com `reportlab`
- A integração com sistemas externos é feita via API REST