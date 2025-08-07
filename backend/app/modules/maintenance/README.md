# 🔧 Módulo de Manutenção

## 📋 Visão Geral

O módulo de Manutenção é responsável pelo gerenciamento completo das atividades de manutenção industrial, incluindo manutenções preventivas, corretivas e preditivas. Ele permite o planejamento, execução, monitoramento e análise de todas as intervenções realizadas nos equipamentos.

## 🏗️ Estrutura do Módulo

```
maintenance/
├── api/                      # Endpoints e rotas
│   ├── routes.py             # Definição das rotas
│   └── __init__.py
│
├── models/                   # Modelos de dados
│   ├── maintenance_plan.py   # Modelo de plano de manutenção
│   ├── maintenance_order.py  # Modelo de ordem de manutenção
│   ├── maintenance_task.py   # Modelo de tarefas de manutenção
│   ├── spare_part.py         # Modelo de peças de reposição
│   └── __init__.py
│
├── schemas/                  # Schemas de validação
│   ├── maintenance_plan.py   # Schema de plano de manutenção
│   ├── maintenance_order.py  # Schema de ordem de manutenção
│   ├── maintenance_task.py   # Schema de tarefas de manutenção
│   ├── spare_part.py         # Schema de peças de reposição
│   └── __init__.py
│
├── services/                 # Lógica de negócio
│   ├── plan_service.py       # Serviço de planos de manutenção
│   ├── order_service.py      # Serviço de ordens de manutenção
│   ├── task_service.py       # Serviço de tarefas de manutenção
│   ├── spare_part_service.py # Serviço de peças de reposição
│   ├── scheduler.py          # Agendamento de manutenções
│   └── __init__.py
│
└── __init__.py
```

## 🔄 Fluxo de Trabalho

1. **Planejamento**:
   - Criação de planos de manutenção preventiva
   - Definição de periodicidade (horas, ciclos, dias)
   - Associação de tarefas e recursos necessários

2. **Execução**:
   - Geração automática de ordens de manutenção
   - Registro de manutenções corretivas
   - Alocação de técnicos e recursos

3. **Monitoramento**:
   - Acompanhamento do status das ordens
   - Registro de tempos e recursos utilizados
   - Cálculo de indicadores (MTBF, MTTR)

4. **Análise**:
   - Histórico de intervenções por equipamento
   - Análise de causas raiz
   - Relatórios de desempenho

## 📊 Tipos de Manutenção

### Manutenção Preventiva

Baseada em intervalos predefinidos para prevenir falhas:

- **Sistemática**: Baseada em tempo ou ciclos
- **Condicional**: Baseada em inspeções periódicas
- **Preditiva**: Baseada em análise de tendências

### Manutenção Corretiva

Realizada após a ocorrência de uma falha:

- **Planejada**: Falha identificada, mas operação continua até intervenção programada
- **Emergencial**: Intervenção imediata devido a falha crítica

## 🔌 Integração com Outros Módulos

- **Análise de Produção**: Recebe dados de paradas e falhas
- **Controle de Estoque**: Verifica disponibilidade de peças de reposição
- **Gestão da Qualidade**: Compartilha informações sobre não conformidades

## 🚀 Endpoints da API

### Planos de Manutenção

- `GET /maintenance/plans` - Lista todos os planos
- `GET /maintenance/plans/{id}` - Detalhes de um plano
- `POST /maintenance/plans` - Cria um novo plano
- `PUT /maintenance/plans/{id}` - Atualiza um plano
- `DELETE /maintenance/plans/{id}` - Remove um plano

### Ordens de Manutenção

- `GET /maintenance/orders` - Lista todas as ordens
- `GET /maintenance/orders/{id}` - Detalhes de uma ordem
- `POST /maintenance/orders` - Cria uma nova ordem
- `PUT /maintenance/orders/{id}` - Atualiza uma ordem
- `PATCH /maintenance/orders/{id}/status` - Atualiza o status de uma ordem
- `DELETE /maintenance/orders/{id}` - Remove uma ordem

### Tarefas de Manutenção

- `GET /maintenance/tasks` - Lista todas as tarefas
- `GET /maintenance/tasks/{id}` - Detalhes de uma tarefa
- `POST /maintenance/tasks` - Cria uma nova tarefa
- `PUT /maintenance/tasks/{id}` - Atualiza uma tarefa
- `DELETE /maintenance/tasks/{id}` - Remove uma tarefa

### Peças de Reposição

- `GET /maintenance/spare-parts` - Lista todas as peças
- `GET /maintenance/spare-parts/{id}` - Detalhes de uma peça
- `POST /maintenance/spare-parts` - Cadastra uma nova peça
- `PUT /maintenance/spare-parts/{id}` - Atualiza uma peça
- `DELETE /maintenance/spare-parts/{id}` - Remove uma peça

## 📝 Modelos de Dados

### MaintenancePlan (Plano de Manutenção)

```python
class MaintenancePlan(Base):
    __tablename__ = "maintenance_plans"

    id = Column(Integer, primary_key=True, index=True)
    machine_id = Column(Integer, ForeignKey("machines.id"), index=True)
    name = Column(String, index=True)
    description = Column(String, nullable=True)
    frequency_type = Column(String)  # hours, cycles, days
    frequency_value = Column(Integer)
    active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relacionamentos
    machine = relationship("Machine")
    tasks = relationship("MaintenanceTask", back_populates="plan")
    orders = relationship("MaintenanceOrder", back_populates="plan")
```

### MaintenanceOrder (Ordem de Manutenção)

```python
class MaintenanceOrder(Base):
    __tablename__ = "maintenance_orders"

    id = Column(Integer, primary_key=True, index=True)
    plan_id = Column(Integer, ForeignKey("maintenance_plans.id"), nullable=True, index=True)
    machine_id = Column(Integer, ForeignKey("machines.id"), index=True)
    user_id = Column(Integer, ForeignKey("users.id"), index=True)
    type = Column(String)  # preventive, corrective, predictive
    priority = Column(String)  # low, medium, high, critical
    status = Column(String)  # pending, in_progress, completed, cancelled
    description = Column(String)
    scheduled_date = Column(DateTime)
    start_date = Column(DateTime, nullable=True)
    end_date = Column(DateTime, nullable=True)
    notes = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relacionamentos
    plan = relationship("MaintenancePlan", back_populates="orders")
    machine = relationship("Machine")
    user = relationship("User")
    tasks = relationship("MaintenanceTask", back_populates="order")
    spare_parts = relationship("OrderSparePart")
```

### MaintenanceTask (Tarefa de Manutenção)

```python
class MaintenanceTask(Base):
    __tablename__ = "maintenance_tasks"

    id = Column(Integer, primary_key=True, index=True)
    plan_id = Column(Integer, ForeignKey("maintenance_plans.id"), nullable=True, index=True)
    order_id = Column(Integer, ForeignKey("maintenance_orders.id"), nullable=True, index=True)
    name = Column(String)
    description = Column(String)
    estimated_time = Column(Integer)  # em minutos
    actual_time = Column(Integer, nullable=True)  # em minutos
    status = Column(String)  # pending, in_progress, completed, skipped
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relacionamentos
    plan = relationship("MaintenancePlan", back_populates="tasks")
    order = relationship("MaintenanceOrder", back_populates="tasks")
```

### SparePart (Peça de Reposição)

```python
class SparePart(Base):
    __tablename__ = "spare_parts"

    id = Column(Integer, primary_key=True, index=True)
    code = Column(String, unique=True, index=True)
    name = Column(String, index=True)
    description = Column(String, nullable=True)
    unit = Column(String)  # pcs, kg, l, m
    min_stock = Column(Float)
    current_stock = Column(Float)
    location = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relacionamentos
    orders = relationship("OrderSparePart", back_populates="spare_part")
```

## 🧪 Testes

Os testes do módulo estão localizados em `tests/maintenance/` e incluem:

- **Testes de API**: Verificam os endpoints e respostas
- **Testes de Serviços**: Validam a lógica de negócio
- **Testes de Integração**: Verificam a interação com outros módulos

Para executar os testes:

```bash
# Todos os testes do módulo
pytest tests/maintenance/

# Testes específicos
pytest tests/maintenance/test_api.py
pytest tests/maintenance/test_scheduler.py
```

## 📈 Indicadores de Manutenção

### MTBF (Mean Time Between Failures)

Tempo médio entre falhas, calculado por:

```
MTBF = Tempo Total de Operação ÷ Número de Falhas
```

### MTTR (Mean Time To Repair)

Tempo médio para reparo, calculado por:

```
MTTR = Tempo Total de Reparo ÷ Número de Reparos
```

### Disponibilidade

Percentual de tempo em que o equipamento está disponível para operação:

```
Disponibilidade = MTBF ÷ (MTBF + MTTR) × 100%
```

## 🔍 Boas Práticas

- **Planejamento Preventivo**: Priorize manutenções preventivas sobre corretivas
- **Documentação**: Mantenha registros detalhados de todas as intervenções
- **Análise de Causas**: Investigue a causa raiz de falhas recorrentes
- **Padronização**: Utilize procedimentos padronizados para cada tipo de manutenção

## 🚀 Roadmap

### Curto Prazo

1. **Notificações Automáticas**: Alertas para manutenções programadas
2. **Checklist Digital**: Formulários eletrônicos para execução de tarefas
3. **Dashboard de Manutenção**: Visão consolidada de indicadores

### Médio Prazo

1. **Manutenção Preditiva**: Implementação de algoritmos de previsão de falhas
2. **Integração com IoT**: Monitoramento em tempo real de parâmetros
3. **Aplicativo Mobile**: Acesso em campo para técnicos

### Longo Prazo

1. **Realidade Aumentada**: Suporte visual para procedimentos complexos
2. **Machine Learning**: Otimização automática de planos de manutenção
3. **Digital Twin**: Simulação de cenários de manutenção

---

## 📝 Notas de Desenvolvimento

- O agendamento de manutenções é gerenciado pelo serviço `scheduler.py`
- A integração com o módulo de estoque é feita via `spare_part_service.py`
- Os cálculos de indicadores são realizados em tempo real
- A geração de ordens de manutenção pode ser manual ou automática