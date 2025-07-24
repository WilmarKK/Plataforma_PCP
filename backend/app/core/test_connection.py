#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script de teste com suas credenciais específicas
"""

import os
import sys
import psycopg2
from urllib.parse import quote_plus
import traceback

# Configurações de encoding
os.environ['PYTHONIOENCODING'] = 'utf-8'
os.environ['PGCLIENTENCODING'] = 'utf8'

# Suas credenciais
USERNAME = "postgres"
PASSWORD = "wilmarsoller21052025"
HOST = "localhost"
PORT = 5432
DATABASE = "analisador_producao"

print("=== TESTE COM SUAS CREDENCIAIS ===")
print(f"Usuário: {USERNAME}")
print(f"Host: {HOST}:{PORT}")
print(f"Database: {DATABASE}")
print(f"Senha: {'*' * len(PASSWORD)}")
print()

def test_connection():
    """Testa a conexão com suas credenciais"""
    try:
        print("🔄 Tentando conexão direta...")
        
        conn = psycopg2.connect(
            host=HOST,
            port=PORT,
            database=DATABASE,
            user=USERNAME,
            password=PASSWORD,
            client_encoding='utf8',
            connect_timeout=10
        )
        
        print("✅ CONEXÃO ESTABELECIDA!")
        
        # Testa algumas operações básicas
        cursor = conn.cursor()
        
        # Versão do PostgreSQL
        cursor.execute("SELECT version();")
        version = cursor.fetchone()[0]
        print(f"📊 PostgreSQL: {version.split(',')[0]}")
        
        # Encoding atual
        cursor.execute("SHOW client_encoding;")
        encoding = cursor.fetchone()[0]
        print(f"🔤 Encoding: {encoding}")
        
        # Lista tabelas existentes
        cursor.execute("""
            SELECT tablename 
            FROM pg_tables 
            WHERE schemaname = 'public'
            ORDER BY tablename;
        """)
        tables = cursor.fetchall()
        
        if tables:
            print(f"📋 Tabelas encontradas ({len(tables)}):")
            for table in tables[:10]:  # Mostra apenas as primeiras 10
                print(f"   - {table[0]}")
            if len(tables) > 10:
                print(f"   ... e mais {len(tables) - 10} tabelas")
        else:
            print("📋 Nenhuma tabela encontrada (banco vazio)")
        
        # Testa criação de tabela de exemplo
        print("\n🔧 Testando operações básicas...")
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS teste_conexao (
                id SERIAL PRIMARY KEY,
                nome VARCHAR(100),
                data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        """)
        
        # Insere dados de teste
        cursor.execute("""
            INSERT INTO teste_conexao (nome) 
            VALUES ('Teste de Conexão') 
            ON CONFLICT DO NOTHING;
        """)
        
        # Lê os dados
        cursor.execute("SELECT * FROM teste_conexao LIMIT 5;")
        test_data = cursor.fetchall()
        print(f"✅ Operações CRUD funcionando! ({len(test_data)} registros de teste)")
        
        conn.commit()
        cursor.close()
        conn.close()
        
        return True
        
    except psycopg2.OperationalError as e:
        print(f"❌ Erro de conexão:")
        
        # Trata erros de encoding em mensagens portuguesas
        try:
            error_msg = str(e)
            # Se contém bytes, tenta decodificar
            if hasattr(e, 'args') and len(e.args) > 1 and isinstance(e.args[1], bytes):
                decoded = e.args[1].decode('latin-1', errors='replace')
                print(f"   {decoded}")
            else:
                print(f"   {error_msg}")
        except:
            print(f"   {e}")
        
        return False
        
    except Exception as e:
        print(f"❌ Erro inesperado: {e}")
        traceback.print_exc()
        return False

def check_database_exists():
    """Verifica se o banco de dados existe"""
    try:
        print("🔍 Verificando se o banco existe...")
        
        # Conecta no banco postgres (padrão) para verificar
        conn = psycopg2.connect(
            host=HOST,
            port=PORT,
            database="postgres",  # Banco padrão
            user=USERNAME,
            password=PASSWORD,
            connect_timeout=10
        )
        
        cursor = conn.cursor()
        cursor.execute(
            "SELECT 1 FROM pg_database WHERE datname = %s;", 
            (DATABASE,)
        )
        exists = cursor.fetchone() is not None
        
        cursor.close()
        conn.close()
        
        if exists:
            print(f"✅ Banco '{DATABASE}' existe!")
            return True
        else:
            print(f"❌ Banco '{DATABASE}' NÃO existe!")
            
            # Pergunta se quer criar
            print(f"\n💡 O banco '{DATABASE}' precisa ser criado.")
            create = input("Criar agora? (s/n): ").lower().strip()
            
            if create in ['s', 'sim', 'y', 'yes']:
                return create_database()
            else:
                print("ℹ️  Você precisará criar o banco manualmente.")
                return False
                
    except Exception as e:
        print(f"❌ Erro ao verificar banco: {e}")
        return False

def create_database():
    """Cria o banco de dados"""
    try:
        print(f"🏗️  Criando banco '{DATABASE}'...")
        
        conn = psycopg2.connect(
            host=HOST,
            port=PORT,
            database="postgres",
            user=USERNAME,
            password=PASSWORD,
            autocommit=True
        )
        
        cursor = conn.cursor()
        cursor.execute(f'CREATE DATABASE "{DATABASE}";')
        cursor.close()
        conn.close()
        
        print(f"✅ Banco '{DATABASE}' criado com sucesso!")
        return True
        
    except Exception as e:
        print(f"❌ Erro ao criar banco: {e}")
        return False

def generate_connection_strings():
    """Gera as strings de conexão para usar no projeto"""
    print("\n=== CONFIGURAÇÃO PARA SEU PROJETO ===")
    
    # URL básica
    basic_url = f"postgresql://{USERNAME}:{PASSWORD}@{HOST}:{PORT}/{DATABASE}"
    print(f"🔗 DATABASE_URL (básica):")
    print(f"   {basic_url}")
    
    # URL com senha escapada (para casos especiais)
    escaped_password = quote_plus(PASSWORD)
    escaped_url = f"postgresql://{USERNAME}:{escaped_password}@{HOST}:{PORT}/{DATABASE}"
    print(f"\n🔗 DATABASE_URL (senha escapada):")
    print(f"   {escaped_url}")
    
    # Para SQLAlchemy
    print(f"\n🔗 SQLALCHEMY_DATABASE_URI:")
    print(f"   {escaped_url}")
    
    # Configuração do .env
    print(f"\n📄 Adicione ao seu arquivo .env:")
    print("   # PostgreSQL Configuration")
    print(f"   DATABASE_URL={basic_url}")
    print(f"   DB_HOST={HOST}")
    print(f"   DB_PORT={PORT}")
    print(f"   DB_NAME={DATABASE}")
    print(f"   DB_USER={USERNAME}")
    print(f"   DB_PASSWORD={PASSWORD}")

def main():
    print("🚀 Iniciando diagnóstico completo...\n")
    
    # 1. Verifica se o banco existe
    if not check_database_exists():
        print("\n❌ Não foi possível prosseguir sem o banco de dados.")
        return
    
    # 2. Testa a conexão
    print("\n" + "="*50)
    if test_connection():
        print("\n🎉 TUDO FUNCIONANDO PERFEITAMENTE!")
        generate_connection_strings()
        
        print(f"\n✨ Próximos passos:")
        print("   1. Copie a configuração do .env acima")
        print("   2. Cole no seu arquivo .env")
        print("   3. Reinicie sua aplicação")
        print("   4. A conexão deve funcionar!")
        
    else:
        print("\n❌ Problemas encontrados na conexão.")
        print("💡 Possíveis soluções:")
        print("   1. Verifique se o PostgreSQL está rodando")
        print("   2. Confirme se a senha está correta")
        print("   3. Verifique se o usuário tem permissões")

if __name__ == "__main__":
    main()