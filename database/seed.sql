-- seed.sql - Dados de exemplo para o AnalisadorProducaoWeb

-- Usuários
INSERT INTO users (email, password_hash, role) VALUES
  ('admin@empresa.com', '$2b$12$adminhash', 'admin'),
  ('manager@empresa.com', '$2b$12$managerhash', 'manager'),
  ('viewer@empresa.com', '$2b$12$viewerhash', 'viewer');

-- Máquinas
INSERT INTO machines (name, type, speed, setup_time, description) VALUES
  ('Bobst 102', 'bobst', 5000, 30, 'Máquina Bobst para corte e vinco'),
  ('CV Guangya', 'cv_guangya', 900, 30, 'Máquina CV Guangya'),
  ('Furnax', 'furnax', 4000, 60, 'Máquina Furnax'),
  ('Komori', 'komori', 6000, 45, 'Máquina Komori'),
  ('Laminadora', 'laminadora', 4000, 0, 'Máquina Laminadora'),
  ('Sakurai', 'sakurai', 1800, 0, 'Máquina Sakurai');

-- Produção (último ano, OPs e facas variadas)
INSERT INTO production_data (machine_id, user_id, date, product, quantity, efficiency, defects) VALUES
  (1, 1, '2024-01-10', 'OP1001', 10000, 95.5, 2),
  (1, 2, '2024-02-15', 'OP1002', 12000, 97.0, 1),
  (2, 1, '2024-03-20', 'Faca 011', 8000, 90.0, 0),
  (2, 3, '2024-04-05', 'Faca 011', 8500, 92.0, 1),
  (3, 2, '2024-05-12', 'OP2001', 15000, 93.5, 3),
  (4, 1, '2024-06-18', 'OP3001', 20000, 98.0, 0),
  (5, 2, '2024-07-22', 'Faca 012', 7000, 89.0, 2),
  (6, 3, '2024-08-30', 'OP4001', 9500, 94.0, 1);

-- Fórmulas
INSERT INTO formulas (name, expression, user_id) VALUES
  ('Eficiência Simples', 'quantidade / tempo', 1),
  ('Produtividade Avançada', '(quantidade - defeitos) / (tempo * fator)', 2);

-- Logs de auditoria
INSERT INTO audit_logs (user_id, action, table_name, old_data, new_data) VALUES
  (1, 'INSERT', 'machines', NULL, '{"name": "Bobst 102"}'),
  (2, 'UPDATE', 'production_data', '{"quantity": 10000}', '{"quantity": 12000}'),
  (3, 'DELETE', 'formulas', '{"name": "Fórmula Antiga"}', NULL); 