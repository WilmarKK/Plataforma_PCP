"""Configurações globais da aplicação PlataformaPCP.

Este módulo centraliza todas as configurações do projeto, incluindo variáveis de ambiente,
parâmetros de conexão, segurança e ajustes gerais. Use este arquivo para escalar e manter
as configurações de forma organizada.
"""

from pydantic_settings import BaseSettings
from typing import List, Optional, Dict, Any
import os
from functools import lru_cache


class Settings(BaseSettings):
    """Configurações da aplicação usando Pydantic para validação e carregamento.
    
    Atributos:
        APP_NAME: Nome da aplicação
        VERSION: Versão atual da aplicação
        DEBUG: Modo de depuração ativado
        SECRET_KEY: Chave secreta para tokens e criptografia
        DATABASE_URL: URL de conexão com o banco de dados
        ALLOWED_ORIGINS: Origens permitidas para CORS
        API_V1_STR: Prefixo para rotas da API v1
        ENVIRONMENT: Ambiente atual (development, testing, production)
        LOG_LEVEL: Nível de log (debug, info, warning, error, critical)
        JWT_SECRET_KEY: Chave secreta para tokens JWT
        JWT_ALGORITHM: Algoritmo usado para tokens JWT
        JWT_ACCESS_TOKEN_EXPIRE_MINUTES: Tempo de expiração do token de acesso
        JWT_REFRESH_TOKEN_EXPIRE_DAYS: Tempo de expiração do token de refresh
    """
    
    # Informações da aplicação
    APP_NAME: str = "PlataformaPCP"
    VERSION: str = "1.0.0"
    DEBUG: bool = True
    
    # Segurança
    SECRET_KEY: str = "your-super-secret-key-change-this-in-production"
    
    # Banco de dados
    DATABASE_URL: str = "postgresql://postgres:postgres@localhost:5432/plataforma_pcp"
    DATABASE_POOL_SIZE: int = 5
    DATABASE_MAX_OVERFLOW: int = 10
    DATABASE_POOL_RECYCLE: int = 3600
    
    # CORS
    ALLOWED_ORIGINS: List[str] = ["*"]
    
    # API
    API_V1_STR: str = "/api/v1"
    
    # Ambiente
    ENVIRONMENT: str = "development"
    
    # Logging
    LOG_LEVEL: str = "debug"
    LOG_FORMAT: str = "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
    LOG_FILE: Optional[str] = None
    
    # JWT
    JWT_SECRET_KEY: str = "your-jwt-secret-key-change-this-in-production"
    JWT_ALGORITHM: str = "HS256"
    JWT_ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    JWT_REFRESH_TOKEN_EXPIRE_DAYS: int = 7
    
    # Cache
    REDIS_URL: Optional[str] = None
    CACHE_TTL: int = 60 * 5  # 5 minutos
    
    # Uploads
    UPLOAD_DIR: str = "uploads"
    MAX_UPLOAD_SIZE: int = 10 * 1024 * 1024  # 10MB
    ALLOWED_UPLOAD_EXTENSIONS: List[str] = [".pdf", ".jpg", ".jpeg", ".png", ".csv", ".xlsx"]
    
    # Email
    SMTP_SERVER: Optional[str] = None
    SMTP_PORT: Optional[int] = None
    SMTP_USERNAME: Optional[str] = None
    SMTP_PASSWORD: Optional[str] = None
    EMAIL_FROM: Optional[str] = None
    
    # Módulos
    ENABLED_MODULES: List[str] = [
        "production_analyzer",
        "maintenance",
        "inventory",
        "quality",
        "analytics",
        "integrations"
    ]
    
    # Configurações específicas por ambiente
    ENVIRONMENT_SETTINGS: Dict[str, Dict[str, Any]] = {
        "development": {
            "DEBUG": True,
            "LOG_LEVEL": "debug",
        },
        "testing": {
            "DEBUG": True,
            "LOG_LEVEL": "debug",
            "DATABASE_URL": "postgresql://postgres:postgres@localhost:5432/plataforma_pcp_test"
        },
        "production": {
            "DEBUG": False,
            "LOG_LEVEL": "info",
            "ALLOWED_ORIGINS": ["https://plataformapcp.com.br"],
        }
    }
    
    class Config:
        """Configurações do Pydantic."""
        env_file = ".env"
        env_file_encoding = "utf-8"
        case_sensitive = True

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        
        # Aplicar configurações específicas do ambiente
        if self.ENVIRONMENT in self.ENVIRONMENT_SETTINGS:
            env_settings = self.ENVIRONMENT_SETTINGS[self.ENVIRONMENT]
            for key, value in env_settings.items():
                if not os.environ.get(key):  # Não sobrescrever variáveis de ambiente explícitas
                    setattr(self, key, value)


@lru_cache()
def get_settings() -> Settings:
    """Retorna uma instância cacheada das configurações.
    
    Returns:
        Settings: Instância das configurações
    """
    return Settings()


# Instância global das configurações
settings = get_settings()