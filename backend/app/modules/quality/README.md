# 🔍 Módulo de Gestão da Qualidade

## 📋 Visão Geral

O Módulo de Gestão da Qualidade é responsável pelo controle, garantia e melhoria contínua da qualidade dos processos e produtos industriais. Ele permite o monitoramento de parâmetros de qualidade, gestão de não conformidades, controle estatístico de processo, auditorias e implementação de metodologias como 5S, PDCA, Six Sigma e outras ferramentas da qualidade.

## 🏗️ Estrutura do Módulo

```
quality/
├── api/                      # Endpoints e rotas
│   ├── routes.py             # Definição das rotas
│   └── __init__.py
│
├── models/                   # Modelos de dados
│   ├── inspection.py         # Modelo de inspeções
│   ├── nonconformity.py      # Modelo de não conformidades
│   ├── parameter.py          # Modelo de parâmetros de qualidade
│   ├── checklist.py          # Modelo de checklists
│   ├── audit.py              # Modelo de auditorias
│   └── __init__.py
│
├── schemas/                  # Schemas de validação
│   ├── inspection.py         # Schema de inspeções
│   ├── nonconformity.py      # Schema de não conformidades
│   ├── parameter.py          # Schema de parâmetros
│   ├── checklist.py          # Schema de checklists
│   ├── audit.py              # Schema de auditorias
│   └── __init__.py
│
├── services/                 # Lógica de negócio
│   ├── inspection_service.py # Serviço de inspeções
│   ├── nonconformity_service.py # Serviço de não conformidades
│   ├── spc_service.py        # Serviço de controle estatístico
│   ├── audit_service.py      # Serviço de auditorias
│   ├── report_service.py     # Serviço de relatórios
│   └── __init__.py
│
└── __init__.py
```

## 🔄 Fluxo de Trabalho

1. **Planejamento da Qualidade**:
   - Definição de parâmetros e especificações
   - Criação de planos de inspeção
   - Elaboração de checklists e procedimentos

2. **Controle da Qualidade**:
   - Inspeções de recebimento, processo e produto final
   - Coleta de dados e medições
   - Identificação de não conformidades

3. **Garantia da Qualidade**:
   - Auditorias internas e externas
   - Gestão de documentos e registros
   - Calibração de instrumentos

4. **Melhoria da Qualidade**:
   - Análise de causas raiz
   - Implementação de ações corretivas e preventivas
   - Projetos de melhoria contínua

## 📊 Ferramentas da Qualidade

### Controle Estatístico de Processo (CEP)

- Cartas de controle (X-R, X-S, p, np, c, u)
- Capacidade de processo (Cp, Cpk)
- Análise de tendências e padrões

### Metodologias de Melhoria

- PDCA (Plan-Do-Check-Act)
- DMAIC (Define-Measure-Analyze-Improve-Control)
- 5S (Seiri, Seiton, Seiso, Seiketsu, Shitsuke)
- Kaizen (Melhoria Contínua)

### Ferramentas de Análise

- Diagrama de Pareto
- Diagrama de Ishikawa (Causa e Efeito)
- 5 Porquês
- FMEA (Análise de Modo e Efeito de Falha)

## 🔌 Integração com Outros Módulos

- **Análise de Produção**: Recebe dados de produção para análise de qualidade
- **Manutenção**: Compartilha informações sobre falhas e não conformidades
- **Controle de Estoque**: Integra com inspeções de recebimento
- **Analytics & BI**: Fornece dados para análises avançadas

## 🚀 Endpoints da API

### Inspeções

- `GET /quality/inspections` - Lista todas as inspeções
- `GET /quality/inspections/{id}` - Detalhes de uma inspeção
- `POST /quality/inspections` - Cria uma nova inspeção
- `PUT /quality/inspections/{id}` - Atualiza uma inspeção
- `DELETE /quality/inspections/{id}` - Remove uma inspeção
- `GET /quality/inspections/product/{product_id}` - Inspeções de um produto

### Não Conformidades

- `GET /quality/nonconformities` - Lista todas as não conformidades
- `GET /quality/nonconformities/{id}` - Detalhes de uma não conformidade
- `POST /quality/nonconformities` - Registra uma nova não conformidade
- `PUT /quality/nonconformities/{id}` - Atualiza uma não conformidade
- `PATCH /quality/nonconformities/{id}/status` - Atualiza o status
- `DELETE /quality/nonconformities/{id}` - Remove uma não conformidade

### Parâmetros de Qualidade

- `GET /quality/parameters` - Lista todos os parâmetros
- `GET /quality/parameters/{id}` - Detalhes de um parâmetro
- `POST /quality/parameters` - Cria um novo parâmetro
- `PUT /quality/parameters/{id}` - Atualiza um parâmetro
- `DELETE /quality/parameters/{id}` - Remove um parâmetro
- `GET /quality/parameters/product/{product_id}` - Parâmetros de um produto

### Checklists

- `GET /quality/checklists` - Lista todos os checklists
- `GET /quality/checklists/{id}` - Detalhes de um checklist
- `POST /quality/checklists` - Cria um novo checklist
- `PUT /quality/checklists/{id}` - Atualiza um checklist
- `DELETE /quality/checklists/{id}` - Remove um checklist
- `POST /quality/checklists/{id}/apply` - Aplica um checklist

### Auditorias

- `GET /quality/audits` - Lista todas as auditorias
- `GET /quality/audits/{id}` - Detalhes de uma auditoria
- `POST /quality/audits` - Cria uma nova auditoria
- `PUT /quality/audits/{id}` - Atualiza uma auditoria
- `DELETE /quality/audits/{id}` - Remove uma auditoria
- `GET /quality/audits/{id}/findings` - Lista achados de uma auditoria

### Controle Estatístico

- `GET /quality/spc/charts/{parameter_id}` - Gera carta de controle
- `GET /quality/spc/capability/{parameter_id}` - Calcula capacidade de processo
- `GET /quality/spc/pareto` - Gera diagrama de Pareto
- `POST /quality/spc/data` - Adiciona dados para análise

## 📝 Modelos de Dados

### Inspection (Inspeção)

```python
class Inspection(Base):
    __tablename__ = "quality_inspections"

    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(String, index=True)  # Código do produto
    batch_number = Column(String, index=True)  # Número do lote
    inspection_type = Column(String)  # receiving, process, final
    inspector_id = Column(Integer, ForeignKey("users.id"), index=True)
    date = Column(DateTime, default=datetime.utcnow)
    status = Column(String)  # approved, rejected, pending
    notes = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relacionamentos
    inspector = relationship("User")
    parameters = relationship("InspectionParameter", back_populates="inspection")
    nonconformities = relationship("Nonconformity", back_populates="inspection")
```

### Nonconformity (Não Conformidade)

```python
class Nonconformity(Base):
    __tablename__ = "quality_nonconformities"

    id = Column(Integer, primary_key=True, index=True)
    inspection_id = Column(Integer, ForeignKey("quality_inspections.id"), nullable=True, index=True)
    product_id = Column(String, index=True)  # Código do produto
    description = Column(String)
    severity = Column(String)  # critical, major, minor
    status = Column(String)  # open, in_progress, closed
    reported_by = Column(Integer, ForeignKey("users.id"), index=True)
    assigned_to = Column(Integer, ForeignKey("users.id"), nullable=True, index=True)
    detection_date = Column(DateTime, default=datetime.utcnow)
    closure_date = Column(DateTime, nullable=True)
    root_cause = Column(String, nullable=True)
    corrective_action = Column(String, nullable=True)
    preventive_action = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relacionamentos
    inspection = relationship("Inspection", back_populates="nonconformities")
    reporter = relationship("User", foreign_keys=[reported_by])
    assignee = relationship("User", foreign_keys=[assigned_to])
```

### Parameter (Parâmetro de Qualidade)

```python
class Parameter(Base):
    __tablename__ = "quality_parameters"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String, nullable=True)
    product_id = Column(String, index=True)  # Código do produto
    unit = Column(String)  # mm, kg, °C, etc.
    lower_spec = Column(Float, nullable=True)  # Limite inferior de especificação
    target = Column(Float, nullable=True)  # Valor alvo
    upper_spec = Column(Float, nullable=True)  # Limite superior de especificação
    is_critical = Column(Boolean, default=False)
    measurement_method = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relacionamentos
    inspection_values = relationship("InspectionParameter", back_populates="parameter")
    control_charts = relationship("ControlChart", back_populates="parameter")
```

### Checklist

```python
class Checklist(Base):
    __tablename__ = "quality_checklists"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String, nullable=True)
    type = Column(String)  # 5S, safety, process, etc.
    frequency = Column(String)  # daily, weekly, monthly, etc.
    created_by = Column(Integer, ForeignKey("users.id"), index=True)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relacionamentos
    creator = relationship("User")
    items = relationship("ChecklistItem", back_populates="checklist")
    applications = relationship("ChecklistApplication", back_populates="checklist")
```

### Audit (Auditoria)

```python
class Audit(Base):
    __tablename__ = "quality_audits"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    type = Column(String)  # internal, external, supplier
    standard = Column(String, nullable=True)  # ISO 9001, IATF 16949, etc.
    area = Column(String)  # department or process
    lead_auditor_id = Column(Integer, ForeignKey("users.id"), index=True)
    start_date = Column(DateTime)
    end_date = Column(DateTime)
    status = Column(String)  # planned, in_progress, completed
    score = Column(Float, nullable=True)
    notes = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relacionamentos
    lead_auditor = relationship("User")
    findings = relationship("AuditFinding", back_populates="audit")
    team_members = relationship("AuditTeamMember", back_populates="audit")
```

## 🧪 Testes

Os testes do módulo estão localizados em `tests/quality/` e incluem:

- **Testes de API**: Verificam os endpoints e respostas
- **Testes de Serviços**: Validam a lógica de negócio
- **Testes de Integração**: Verificam a interação com outros módulos

Para executar os testes:

```bash
# Todos os testes do módulo
pytest tests/quality/

# Testes específicos
pytest tests/quality/test_api.py
pytest tests/quality/test_spc_service.py
```

## 📈 Indicadores de Qualidade

### Índice de Qualidade

Percentual de produtos aprovados em relação ao total produzido:

```
Índice de Qualidade = (Produtos Aprovados ÷ Total Produzido) × 100%
```

### Taxa de Não Conformidade

Quantidade de não conformidades por unidade produzida:

```
Taxa de Não Conformidade = Número de Não Conformidades ÷ Total Produzido
```

### Capacidade de Processo

Mede a capacidade do processo em atender às especificações:

```
Cp = (Limite Superior - Limite Inferior) ÷ (6 × Desvio Padrão)
Cpk = min[(Média - Limite Inferior), (Limite Superior - Média)] ÷ (3 × Desvio Padrão)
```

## 🔍 Boas Práticas

- **Prevenção**: Foco em prevenir defeitos, não apenas detectá-los
- **Melhoria Contínua**: Implementação do ciclo PDCA em todos os processos
- **Análise de Dados**: Decisões baseadas em dados e fatos
- **Padronização**: Documentação e seguimento de procedimentos

## 🚀 Roadmap

### Curto Prazo

1. **Inspeção Digital**: Formulários eletrônicos para coleta de dados
2. **Dashboard de Qualidade**: Visão consolidada de indicadores
3. **Gestão de Não Conformidades**: Fluxo completo com ações corretivas

### Médio Prazo

1. **Controle Estatístico Avançado**: Implementação de cartas de controle
2. **Integração com Equipamentos de Medição**: Coleta automática de dados
3. **Sistema de Auditorias**: Gestão completa de auditorias internas e externas

### Longo Prazo

1. **Machine Learning para Previsão de Defeitos**: Detecção antecipada
2. **Visão Computacional para Inspeção**: Detecção automática de defeitos
3. **Digital Twin para Simulação**: Testes virtuais de qualidade

---

## 📝 Notas de Desenvolvimento

- O controle estatístico é implementado no serviço `spc_service.py`
- As cartas de controle são geradas dinamicamente com base nos dados coletados
- A integração com o módulo de produção é feita via API
- Os cálculos de capacidade de processo são realizados em tempo real
- O sistema suporta múltiplos tipos de inspeção e parâmetros