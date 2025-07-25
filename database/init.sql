-- init.sql - Script de inicialização do banco de dados
-- Cria o banco de dados e o usuário padrão para o PlataformaPCP

CREATE DATABASE plataformapcp;

-- Usuário padrão (ajuste a senha conforme necessário)
CREATE USER analisador_user WITH ENCRYPTED PASSWORD 'senha_segura';
GRANT ALL PRIVILEGES ON DATABASE plataformapcp TO analisador_user; 