# 📦 Módulo de Controle de Estoque

## 📋 Visão Geral

O Módulo de Controle de Estoque é responsável pelo gerenciamento completo de materiais, peças e insumos utilizados na produção industrial. Ele permite o controle eficiente de entradas, saídas, níveis de estoque, localização de itens, gestão de fornecedores e análise de consumo, garantindo a disponibilidade de materiais quando necessário e otimizando o capital investido em estoque.

## 🏗️ Estrutura do Módulo

```
inventory/
├── api/                      # Endpoints e rotas
│   ├── routes.py             # Definição das rotas
│   └── __init__.py
│
├── models/                   # Modelos de dados
│   ├── item.py               # Modelo de itens de estoque
│   ├── category.py           # Modelo de categorias
│   ├── supplier.py           # Modelo de fornecedores
│   ├── transaction.py        # Modelo de transações (entradas/saídas)
│   ├── location.py           # Modelo de localizações físicas
│   └── __init__.py
│
├── schemas/                  # Schemas de validação
│   ├── item.py               # Schema de itens
│   ├── category.py           # Schema de categorias
│   ├── supplier.py           # Schema de fornecedores
│   ├── transaction.py        # Schema de transações
│   ├── location.py           # Schema de localizações
│   └── __init__.py
│
├── services/                 # Lógica de negócio
│   ├── item_service.py       # Serviço de itens
│   ├── supplier_service.py   # Serviço de fornecedores
│   ├── transaction_service.py # Serviço de transações
│   ├── report_service.py     # Serviço de relatórios
│   ├── forecast_service.py   # Serviço de previsão de demanda
│   └── __init__.py
│
└── __init__.py
```

## 🔄 Fluxo de Trabalho

1. **Cadastro**:
   - Registro de itens, categorias e fornecedores
   - Definição de parâmetros (estoque mínimo, máximo, ponto de pedido)
   - Configuração de localizações físicas

2. **Movimentação**:
   - Registro de entradas (compras, devoluções, ajustes)
   - Registro de saídas (requisições, consumo, transferências)
   - Rastreabilidade por lote ou número de série

3. **Monitoramento**:
   - Acompanhamento de níveis de estoque
   - Alertas de estoque mínimo
   - Análise de giro e cobertura

4. **Planejamento**:
   - Previsão de demanda
   - Sugestão de compras
   - Otimização de níveis de estoque

## 📊 Funcionalidades Principais

### Gestão de Itens

- Cadastro completo com especificações técnicas
- Classificação por categoria, tipo e criticidade
- Controle de múltiplas unidades de medida
- Gestão de códigos de barras/QR Code

### Controle de Transações

- Registro detalhado de todas as movimentações
- Histórico completo por item
- Rastreabilidade de lotes e validades
- Integração com leitor de código de barras

### Gestão de Fornecedores

- Cadastro de fornecedores com informações completas
- Histórico de compras e desempenho
- Avaliação de fornecedores
- Gestão de contratos e cotações

### Análise e Relatórios

- Relatórios de posição de estoque
- Análise ABC/XYZ
- Indicadores de desempenho (giro, cobertura, ruptura)
- Dashboards personalizáveis

## 🔌 Integração com Outros Módulos

- **Manutenção**: Fornece peças de reposição para ordens de manutenção
- **Produção**: Recebe requisições de materiais para ordens de produção
- **Compras**: Envia solicitações de compra baseadas em ponto de pedido
- **Financeiro**: Compartilha informações de valor de estoque e custos

## 🚀 Endpoints da API

### Itens

- `GET /inventory/items` - Lista todos os itens
- `GET /inventory/items/{id}` - Detalhes de um item
- `POST /inventory/items` - Cadastra um novo item
- `PUT /inventory/items/{id}` - Atualiza um item
- `DELETE /inventory/items/{id}` - Remove um item
- `GET /inventory/items/low-stock` - Lista itens com estoque baixo

### Categorias

- `GET /inventory/categories` - Lista todas as categorias
- `GET /inventory/categories/{id}` - Detalhes de uma categoria
- `POST /inventory/categories` - Cria uma nova categoria
- `PUT /inventory/categories/{id}` - Atualiza uma categoria
- `DELETE /inventory/categories/{id}` - Remove uma categoria

### Fornecedores

- `GET /inventory/suppliers` - Lista todos os fornecedores
- `GET /inventory/suppliers/{id}` - Detalhes de um fornecedor
- `POST /inventory/suppliers` - Cadastra um novo fornecedor
- `PUT /inventory/suppliers/{id}` - Atualiza um fornecedor
- `DELETE /inventory/suppliers/{id}` - Remove um fornecedor
- `GET /inventory/suppliers/{id}/items` - Lista itens de um fornecedor

### Transações

- `GET /inventory/transactions` - Lista todas as transações
- `GET /inventory/transactions/{id}` - Detalhes de uma transação
- `POST /inventory/transactions/in` - Registra entrada de estoque
- `POST /inventory/transactions/out` - Registra saída de estoque
- `POST /inventory/transactions/transfer` - Registra transferência entre localizações
- `GET /inventory/transactions/item/{item_id}` - Histórico de transações de um item

### Localizações

- `GET /inventory/locations` - Lista todas as localizações
- `GET /inventory/locations/{id}` - Detalhes de uma localização
- `POST /inventory/locations` - Cria uma nova localização
- `PUT /inventory/locations/{id}` - Atualiza uma localização
- `DELETE /inventory/locations/{id}` - Remove uma localização
- `GET /inventory/locations/{id}/items` - Lista itens em uma localização

### Relatórios

- `GET /inventory/reports/stock-position` - Relatório de posição de estoque
- `GET /inventory/reports/abc` - Análise ABC
- `GET /inventory/reports/turnover` - Relatório de giro de estoque
- `GET /inventory/reports/valuation` - Valorização de estoque

## 📝 Modelos de Dados

### Item (Item de Estoque)

```python
class Item(Base):
    __tablename__ = "inventory_items"

    id = Column(Integer, primary_key=True, index=True)
    code = Column(String, unique=True, index=True)
    name = Column(String, index=True)
    description = Column(String, nullable=True)
    category_id = Column(Integer, ForeignKey("inventory_categories.id"), index=True)
    unit = Column(String)  # pcs, kg, l, m
    min_stock = Column(Float)
    max_stock = Column(Float)
    reorder_point = Column(Float)
    current_stock = Column(Float, default=0)
    location_id = Column(Integer, ForeignKey("inventory_locations.id"), nullable=True)
    barcode = Column(String, nullable=True)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relacionamentos
    category = relationship("Category")
    location = relationship("Location")
    transactions = relationship("Transaction", back_populates="item")
    suppliers = relationship("ItemSupplier", back_populates="item")
```

### Category (Categoria)

```python
class Category(Base):
    __tablename__ = "inventory_categories"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    description = Column(String, nullable=True)
    parent_id = Column(Integer, ForeignKey("inventory_categories.id"), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relacionamentos
    items = relationship("Item", back_populates="category")
    subcategories = relationship("Category", backref=backref("parent", remote_side=[id]))
```

### Supplier (Fornecedor)

```python
class Supplier(Base):
    __tablename__ = "inventory_suppliers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    code = Column(String, unique=True, index=True)
    contact_name = Column(String, nullable=True)
    email = Column(String, nullable=True)
    phone = Column(String, nullable=True)
    address = Column(String, nullable=True)
    notes = Column(String, nullable=True)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relacionamentos
    items = relationship("ItemSupplier", back_populates="supplier")
```

### Transaction (Transação)

```python
class Transaction(Base):
    __tablename__ = "inventory_transactions"

    id = Column(Integer, primary_key=True, index=True)
    item_id = Column(Integer, ForeignKey("inventory_items.id"), index=True)
    type = Column(String, index=True)  # in, out, transfer, adjustment
    quantity = Column(Float)
    unit_price = Column(Float, nullable=True)
    source_location_id = Column(Integer, ForeignKey("inventory_locations.id"), nullable=True)
    target_location_id = Column(Integer, ForeignKey("inventory_locations.id"), nullable=True)
    reference = Column(String, nullable=True)  # Número da NF, requisição, etc.
    batch_number = Column(String, nullable=True)
    expiry_date = Column(Date, nullable=True)
    notes = Column(String, nullable=True)
    user_id = Column(Integer, ForeignKey("users.id"), index=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    # Relacionamentos
    item = relationship("Item", back_populates="transactions")
    source_location = relationship("Location", foreign_keys=[source_location_id])
    target_location = relationship("Location", foreign_keys=[target_location_id])
    user = relationship("User")
```

### Location (Localização)

```python
class Location(Base):
    __tablename__ = "inventory_locations"

    id = Column(Integer, primary_key=True, index=True)
    code = Column(String, unique=True, index=True)
    name = Column(String, index=True)
    description = Column(String, nullable=True)
    type = Column(String)  # warehouse, shelf, bin, etc.
    parent_id = Column(Integer, ForeignKey("inventory_locations.id"), nullable=True)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relacionamentos
    items = relationship("Item", back_populates="location")
    sublocations = relationship("Location", backref=backref("parent", remote_side=[id]))
    source_transactions = relationship("Transaction", foreign_keys="[Transaction.source_location_id]")
    target_transactions = relationship("Transaction", foreign_keys="[Transaction.target_location_id]")
```

## 🧪 Testes

Os testes do módulo estão localizados em `tests/inventory/` e incluem:

- **Testes de API**: Verificam os endpoints e respostas
- **Testes de Serviços**: Validam a lógica de negócio
- **Testes de Integração**: Verificam a interação com outros módulos

Para executar os testes:

```bash
# Todos os testes do módulo
pytest tests/inventory/

# Testes específicos
pytest tests/inventory/test_api.py
pytest tests/inventory/test_transaction_service.py
```

## 📈 Indicadores de Estoque

### Giro de Estoque

Mede quantas vezes o estoque é renovado em um período:

```
Giro = Consumo no Período ÷ Estoque Médio
```

### Cobertura de Estoque

Quantos dias o estoque atual consegue atender a demanda:

```
Cobertura = Estoque Atual ÷ (Consumo Médio Diário)
```

### Acuracidade de Estoque

Precisão entre estoque físico e registros do sistema:

```
Acuracidade = (1 - |Estoque Físico - Estoque Sistema| ÷ Estoque Sistema) × 100%
```

## 🔍 Boas Práticas

- **Inventário Cíclico**: Realize contagens periódicas por grupos de itens
- **FIFO/FEFO**: Utilize métodos de controle de saída por data de entrada ou validade
- **Classificação ABC**: Priorize o controle de itens conforme sua importância
- **Rastreabilidade**: Mantenha histórico completo de todas as movimentações

## 🚀 Roadmap

### Curto Prazo

1. **Inventário por Dispositivo Móvel**: Aplicativo para contagem e movimentação
2. **Integração com Código de Barras/QR Code**: Leitura automática de itens
3. **Dashboard de Indicadores**: Visão consolidada de KPIs de estoque

### Médio Prazo

1. **Previsão de Demanda**: Algoritmos para prever consumo futuro
2. **Gestão de Lotes e Validades**: Controle avançado com alertas
3. **Integração com Fornecedores**: Portal para gestão de pedidos

### Longo Prazo

1. **WMS Completo**: Sistema de gerenciamento de armazém
2. **Otimização de Estoque por IA**: Sugestões inteligentes de níveis
3. **Integração com RFID**: Rastreamento automático de itens

---

## 📝 Notas de Desenvolvimento

- O cálculo de níveis de estoque é realizado em tempo real
- As transações são imutáveis após criação para garantir auditoria
- A integração com o módulo de manutenção é feita via API
- O sistema suporta múltiplas unidades de medida e conversões
- A análise ABC é recalculada automaticamente a cada mês