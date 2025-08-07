# 📊 Módulo de Analytics & BI

## 📋 Visão Geral

O Módulo de Analytics & BI (Business Intelligence) é responsável pela coleta, processamento, análise e visualização de dados de todos os outros módulos da plataforma. Ele permite transformar dados brutos em informações estratégicas, facilitando a tomada de decisões baseada em dados, identificação de tendências, previsão de cenários futuros e otimização de processos industriais.

## 🏗️ Estrutura do Módulo

```
analytics/
├── api/                      # Endpoints e rotas
│   ├── routes.py             # Definição das rotas
│   └── __init__.py
│
├── models/                   # Modelos de dados
│   ├── dashboard.py          # Modelo de dashboards
│   ├── report.py             # Modelo de relatórios
│   ├── kpi.py                # Modelo de indicadores
│   ├── data_source.py        # Modelo de fontes de dados
│   └── __init__.py
│
├── schemas/                  # Schemas de validação
│   ├── dashboard.py          # Schema de dashboards
│   ├── report.py             # Schema de relatórios
│   ├── kpi.py                # Schema de indicadores
│   ├── data_source.py        # Schema de fontes de dados
│   └── __init__.py
│
├── services/                 # Lógica de negócio
│   ├── dashboard_service.py  # Serviço de dashboards
│   ├── report_service.py     # Serviço de relatórios
│   ├── data_service.py       # Serviço de processamento de dados
│   ├── prediction_service.py # Serviço de previsões
│   ├── etl_service.py        # Serviço de ETL
│   └── __init__.py
│
├── utils/                    # Utilitários
│   ├── data_processors.py    # Processadores de dados
│   ├── chart_generators.py   # Geradores de gráficos
│   ├── exporters.py          # Exportadores (PDF, Excel, etc.)
│   └── __init__.py
│
└── __init__.py
```

## 🔄 Fluxo de Trabalho

1. **Coleta de Dados**:
   - Integração com todos os módulos da plataforma
   - Conexão com fontes externas (ERPs, MES, etc.)
   - Agendamento de coletas periódicas

2. **Processamento e Transformação**:
   - Limpeza e normalização de dados
   - Agregações e cálculos
   - Criação de data marts específicos

3. **Análise e Visualização**:
   - Dashboards interativos
   - Relatórios personalizados
   - Alertas baseados em KPIs

4. **Previsão e Otimização**:
   - Modelos preditivos
   - Análise de cenários
   - Recomendações de otimização

## 📊 Funcionalidades Principais

### Dashboards Interativos

- Painéis personalizáveis por usuário e função
- Visualizações em tempo real
- Drill-down para análises detalhadas
- Filtros dinâmicos e interativos

### Relatórios Avançados

- Relatórios programados e sob demanda
- Exportação em múltiplos formatos (PDF, Excel, CSV)
- Distribuição automática por e-mail
- Templates personalizáveis

### KPIs e Métricas

- Biblioteca de indicadores pré-configurados
- Criação de métricas personalizadas
- Metas e limites de alerta
- Comparação histórica e benchmarking

### Análise Preditiva

- Previsão de demanda
- Detecção de anomalias
- Manutenção preditiva
- Otimização de processos

## 🔌 Integração com Outros Módulos

- **Análise de Produção**: Dados de eficiência, produtividade e perdas
- **Manutenção**: Histórico de falhas, tempos de reparo e disponibilidade
- **Controle de Estoque**: Níveis de estoque, giro e custos
- **Gestão da Qualidade**: Índices de qualidade, não conformidades e capacidade de processo

## 🚀 Endpoints da API

### Dashboards

- `GET /analytics/dashboards` - Lista todos os dashboards
- `GET /analytics/dashboards/{id}` - Detalhes de um dashboard
- `POST /analytics/dashboards` - Cria um novo dashboard
- `PUT /analytics/dashboards/{id}` - Atualiza um dashboard
- `DELETE /analytics/dashboards/{id}` - Remove um dashboard
- `GET /analytics/dashboards/{id}/data` - Obtém dados para um dashboard

### Relatórios

- `GET /analytics/reports` - Lista todos os relatórios
- `GET /analytics/reports/{id}` - Detalhes de um relatório
- `POST /analytics/reports` - Cria um novo relatório
- `PUT /analytics/reports/{id}` - Atualiza um relatório
- `DELETE /analytics/reports/{id}` - Remove um relatório
- `GET /analytics/reports/{id}/generate` - Gera um relatório
- `POST /analytics/reports/{id}/schedule` - Agenda um relatório

### KPIs

- `GET /analytics/kpis` - Lista todos os KPIs
- `GET /analytics/kpis/{id}` - Detalhes de um KPI
- `POST /analytics/kpis` - Cria um novo KPI
- `PUT /analytics/kpis/{id}` - Atualiza um KPI
- `DELETE /analytics/kpis/{id}` - Remove um KPI
- `GET /analytics/kpis/{id}/data` - Obtém dados de um KPI
- `GET /analytics/kpis/module/{module}` - KPIs de um módulo específico

### Fontes de Dados

- `GET /analytics/data-sources` - Lista todas as fontes de dados
- `GET /analytics/data-sources/{id}` - Detalhes de uma fonte de dados
- `POST /analytics/data-sources` - Cria uma nova fonte de dados
- `PUT /analytics/data-sources/{id}` - Atualiza uma fonte de dados
- `DELETE /analytics/data-sources/{id}` - Remove uma fonte de dados
- `GET /analytics/data-sources/{id}/test` - Testa conexão com fonte de dados

### Análise de Dados

- `POST /analytics/data/query` - Executa consulta personalizada
- `GET /analytics/data/export` - Exporta dados em formato específico
- `POST /analytics/data/import` - Importa dados externos
- `GET /analytics/data/modules/{module}` - Dados de um módulo específico

### Previsões

- `POST /analytics/predictions/demand` - Previsão de demanda
- `POST /analytics/predictions/maintenance` - Previsão de falhas
- `POST /analytics/predictions/inventory` - Previsão de níveis de estoque
- `GET /analytics/predictions/models` - Lista modelos preditivos disponíveis

## 📝 Modelos de Dados

### Dashboard

```python
class Dashboard(Base):
    __tablename__ = "analytics_dashboards"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String, nullable=True)
    layout = Column(JSON)  # Configuração de layout em JSON
    is_public = Column(Boolean, default=False)
    created_by = Column(Integer, ForeignKey("users.id"), index=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relacionamentos
    creator = relationship("User")
    widgets = relationship("DashboardWidget", back_populates="dashboard")
    permissions = relationship("DashboardPermission", back_populates="dashboard")
```

### Report (Relatório)

```python
class Report(Base):
    __tablename__ = "analytics_reports"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String, nullable=True)
    query = Column(String)  # SQL ou outra linguagem de consulta
    parameters = Column(JSON, nullable=True)  # Parâmetros em JSON
    template_id = Column(Integer, ForeignKey("analytics_report_templates.id"), nullable=True)
    format = Column(String)  # pdf, excel, csv, html
    schedule = Column(String, nullable=True)  # Expressão cron para agendamento
    created_by = Column(Integer, ForeignKey("users.id"), index=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relacionamentos
    creator = relationship("User")
    template = relationship("ReportTemplate")
    executions = relationship("ReportExecution", back_populates="report")
```

### KPI (Indicador de Desempenho)

```python
class KPI(Base):
    __tablename__ = "analytics_kpis"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String, nullable=True)
    module = Column(String, index=True)  # production, maintenance, inventory, quality
    category = Column(String, index=True)  # efficiency, quality, cost, etc.
    calculation = Column(String)  # Fórmula ou query para cálculo
    unit = Column(String)  # %, $, hrs, etc.
    target = Column(Float, nullable=True)  # Valor alvo
    min_threshold = Column(Float, nullable=True)  # Limite mínimo aceitável
    max_threshold = Column(Float, nullable=True)  # Limite máximo aceitável
    is_higher_better = Column(Boolean, default=True)  # Se maior valor é melhor
    frequency = Column(String)  # daily, weekly, monthly, etc.
    created_by = Column(Integer, ForeignKey("users.id"), index=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relacionamentos
    creator = relationship("User")
    values = relationship("KPIValue", back_populates="kpi")
```

### DataSource (Fonte de Dados)

```python
class DataSource(Base):
    __tablename__ = "analytics_data_sources"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String, nullable=True)
    type = Column(String)  # database, api, file, etc.
    connection_string = Column(String, nullable=True)  # Conexão para banco de dados
    api_url = Column(String, nullable=True)  # URL para APIs
    credentials = Column(JSON, nullable=True)  # Credenciais em JSON (criptografadas)
    refresh_interval = Column(Integer, nullable=True)  # Intervalo de atualização em minutos
    is_active = Column(Boolean, default=True)
    created_by = Column(Integer, ForeignKey("users.id"), index=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relacionamentos
    creator = relationship("User")
    queries = relationship("DataQuery", back_populates="data_source")
```

## 🧪 Testes

Os testes do módulo estão localizados em `tests/analytics/` e incluem:

- **Testes de API**: Verificam os endpoints e respostas
- **Testes de Serviços**: Validam a lógica de negócio
- **Testes de Integração**: Verificam a interação com outros módulos

Para executar os testes:

```bash
# Todos os testes do módulo
pytest tests/analytics/

# Testes específicos
pytest tests/analytics/test_api.py
pytest tests/analytics/test_prediction_service.py
```

## 📈 Tipos de Visualizações

### Gráficos Básicos

- Gráficos de Linha: Tendências ao longo do tempo
- Gráficos de Barra: Comparações entre categorias
- Gráficos de Pizza: Distribuição proporcional
- Gráficos de Dispersão: Correlações entre variáveis

### Visualizações Avançadas

- Mapas de Calor: Identificação de padrões
- Gráficos de Pareto: Análise de causas principais
- Diagramas de Sankey: Fluxos e transformações
- Gráficos de Controle: Monitoramento de processos

### Dashboards Específicos

- **Dashboard Executivo**: Visão geral de KPIs críticos
- **Dashboard de Produção**: Eficiência, volume e qualidade
- **Dashboard de Manutenção**: Disponibilidade, MTBF e MTTR
- **Dashboard de Qualidade**: Índices de qualidade e não conformidades
- **Dashboard de Estoque**: Níveis, giro e custos

## 🔍 Boas Práticas

- **Visualização Eficiente**: Utilize os tipos de gráficos mais adequados para cada análise
- **Dashboards Focados**: Crie painéis específicos para cada público e necessidade
- **Atualização Automática**: Configure atualizações periódicas de dados
- **Segurança de Dados**: Implemente controle de acesso por usuário e função

## 🚀 Roadmap

### Curto Prazo

1. **Dashboards Básicos**: Implementação de painéis para principais KPIs
2. **Relatórios Automáticos**: Sistema de geração e distribuição de relatórios
3. **Integração com Módulos**: Coleta de dados de todos os módulos existentes

### Médio Prazo

1. **Análise Preditiva**: Implementação de modelos de previsão
2. **Data Lake**: Estrutura para armazenamento de grandes volumes de dados
3. **Alertas Inteligentes**: Notificações baseadas em anomalias e tendências

### Longo Prazo

1. **IA para Otimização**: Recomendações automáticas baseadas em dados
2. **Processamento em Tempo Real**: Análise de streaming de dados
3. **Assistente Virtual**: Interface conversacional para consultas de dados

---

## 📝 Notas de Desenvolvimento

- O módulo utiliza Redis para cache de consultas frequentes
- Os dashboards são renderizados no frontend usando bibliotecas como Chart.js e D3.js
- A exportação de relatórios é feita de forma assíncrona para arquivos grandes
- Os modelos preditivos são treinados periodicamente com dados históricos
- A segurança de dados é implementada em nível de linha e coluna