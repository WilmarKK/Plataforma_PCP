"""
database.py - Gerenciamento da conexão com o banco de dados PostgreSQL

Este módulo centraliza a configuração e inicialização da engine SQLAlchemy,
utilizando as variáveis de ambiente definidas em config.py.

Documentação:
- Utilize a função get_db() para obter sessões de banco nas rotas.
- Consulte o README.md para detalhes de configuração.
"""

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, Session
from sqlalchemy.ext.declarative import declarative_base
from typing import Generator
import os
import logging
import locale
import sys

# Configurações de encoding mais agressivas
os.environ['PYTHONIOENCODING'] = 'utf-8'
os.environ['PGCLIENTENCODING'] = 'utf8'
os.environ['LC_ALL'] = 'C'

# Define a codificação padrão do Python
if hasattr(sys, 'set_default_encoding'):
    sys.set_default_encoding('utf-8')

# Configura locale para evitar problemas de encoding
try:
    locale.setlocale(locale.LC_ALL, 'C')
except:
    pass

print("=== DEBUG: Informações de Encoding ===")
print(f"Default encoding: {sys.getdefaultencoding()}")
print(f"File system encoding: {sys.getfilesystemencoding()}")
print(f"PGCLIENTENCODING: {os.environ.get('PGCLIENTENCODING')}")

# Importação direta da configuração para evitar imports circulares
DATABASE_URL = "postgresql://postgres:wilmarsoller21052025@localhost:5432/plataformapcp"

# Criação da engine SQLAlchemy
engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True,
    future=True
)

# Criação da fábrica de sessões
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base para modelos SQLAlchemy
Base = declarative_base()

# Configuração de logs mais limpa
logging.basicConfig(level=logging.WARNING)
logging.getLogger('sqlalchemy.engine').setLevel(logging.WARNING)

def get_db() -> Generator[Session, None, None]:
    """
    Gera uma sessão de banco de dados para uso nas rotas FastAPI.
    Uso:
        Dependência em rotas: Depends(get_db)
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Exemplo de uso:
# from app.core.database import get_db
# @app.get("/exemplo")
# def exemplo(db: Session = Depends(get_db)):
#     ...