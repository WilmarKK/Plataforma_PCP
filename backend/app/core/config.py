"""
config.py - Configurações globais da aplicação PlataformaPCP

Este módulo centraliza todas as configurações do projeto, incluindo variáveis de ambiente,
parâmetros de conexão, segurança e ajustes gerais. Use este arquivo para escalar e manter
as configurações de forma organizada.
"""

from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    APP_NAME: str = "PlataformaPCP"
    DEBUG: bool = True
    SECRET_KEY: str
    DATABASE_URL: str
    ALLOWED_ORIGINS: List[str] = ["*"]
    API_V1_STR: str = "/api/v1"
    ENVIRONMENT: str = "development"
    LOG_LEVEL: str = "debug"

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


settings = Settings()
