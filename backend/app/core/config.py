"""
config.py - Configurações globais da aplicação AnalisadorProducaoWeb

Este módulo centraliza todas as configurações do projeto, incluindo variáveis de ambiente,
parâmetros de conexão, segurança e ajustes gerais. Use este arquivo para escalar e manter
as configurações de forma organizada.

Documentação:
- Adicione novas configurações como constantes ou via Pydantic Settings.
- Consulte o README.md para instruções de ambiente e variáveis obrigatórias.
"""

from pydantic_settings import BaseSettings
from typing import Any
import os

class Settings(BaseSettings):
    """
    Classe de configurações principais do sistema.
    Utiliza Pydantic para validação e carregamento de variáveis de ambiente.
    """
    APP_NAME: str = "AnalisadorProducaoWeb"  # Removido o caractere especial 'ç'
    DEBUG: bool = True
    SECRET_KEY: str = os.getenv("SECRET_KEY", "changeme")
    DATABASE_URL: str = os.getenv("DATABASE_URL", "postgresql://postgres:postgres@localhost:5432/analisador_producao")
    ALLOWED_ORIGINS: list[str] = ["*"]
    API_V1_STR: str = "/api/v1"

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"

settings = Settings()

# Exemplo de uso:
# from app.core.config import settings
# print(settings.DATABASE_URL)