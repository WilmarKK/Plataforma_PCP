"""Módulo de configurações da PlataformaPCP.

Este módulo centraliza todas as configurações do sistema, incluindo
configuração de ambiente, logging, constantes e configurações gerais.
"""

from app.core.config.settings import settings
from app.core.config.environment import get_environment, is_production, is_development, is_testing
from app.core.config.constants import StatusCode, ErrorMessage, PaginationConfig

__all__ = [
    'settings',
    'get_environment',
    'is_production',
    'is_development',
    'is_testing',
    'StatusCode',
    'ErrorMessage',
    'PaginationConfig',
]