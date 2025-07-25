-- schema.sql - Estrutura das tabelas principais do PlataformaPCP

-- =====================
-- Tabela de usuários
-- =====================
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY, -- Identificador único
    email VARCHAR(120) NOT NULL UNIQUE, -- E-mail do usuário
    password_hash VARCHAR(255) NOT NULL, -- Hash da senha
    role VARCHAR(20) NOT NULL DEFAULT 'viewer', -- Papel: admin, manager, viewer
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Data de criação
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Data de atualização
    deleted_at TIMESTAMP -- Soft delete
);

-- =====================
-- Tabela de máquinas industriais
-- =====================
CREATE TABLE IF NOT EXISTS machines (
    id SERIAL PRIMARY KEY, -- Identificador único
    name VARCHAR(100) NOT NULL UNIQUE, -- Nome único da máquina
    type VARCHAR(50) NOT NULL, -- Tipo da máquina
    speed FLOAT CHECK (speed > 0), -- Velocidade padrão (>0)
    setup_time FLOAT CHECK (setup_time >= 0), -- Tempo de setup (>=0)
    description TEXT, -- Descrição opcional
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Data de criação
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Data de atualização
    deleted_at TIMESTAMP -- Soft delete
);
CREATE INDEX IF NOT EXISTS idx_machines_type ON machines(type);

-- =====================
-- Tabela de produção
-- =====================
CREATE TABLE IF NOT EXISTS production_data (
    id SERIAL PRIMARY KEY, -- Identificador único
    machine_id INTEGER NOT NULL REFERENCES machines(id) ON DELETE CASCADE, -- Máquina relacionada
    user_id INTEGER REFERENCES users(id), -- Usuário responsável (opcional)
    date DATE NOT NULL, -- Data da produção
    product VARCHAR(100) NOT NULL, -- Produto
    quantity INTEGER NOT NULL CHECK (quantity >= 0), -- Quantidade produzida
    efficiency FLOAT CHECK (efficiency >= 0), -- Eficiência (%)
    defects INTEGER DEFAULT 0 CHECK (defects >= 0), -- Defeitos
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Data de criação
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Data de atualização
    deleted_at TIMESTAMP -- Soft delete
);
CREATE INDEX IF NOT EXISTS idx_production_machine_date ON production_data(machine_id, date);

-- =====================
-- Tabela de fórmulas personalizadas
-- =====================
CREATE TABLE IF NOT EXISTS formulas (
    id SERIAL PRIMARY KEY, -- Identificador único
    name VARCHAR(100) NOT NULL, -- Nome da fórmula
    expression TEXT NOT NULL, -- Expressão matemática
    user_id INTEGER REFERENCES users(id), -- Usuário criador
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Data de criação
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Data de atualização
    deleted_at TIMESTAMP -- Soft delete
);

-- =====================
-- Tabela de logs de auditoria
-- =====================
CREATE TABLE IF NOT EXISTS audit_logs (
    id SERIAL PRIMARY KEY, -- Identificador único
    user_id INTEGER REFERENCES users(id), -- Usuário responsável
    action VARCHAR(50) NOT NULL, -- Ação realizada
    table_name VARCHAR(50) NOT NULL, -- Tabela afetada
    old_data JSONB, -- Dados antigos
    new_data JSONB, -- Dados novos
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Data/hora do log
);

-- =====================
-- Índices e constraints adicionais podem ser adicionados conforme necessidade futura