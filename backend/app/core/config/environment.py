"""Gerenciamento de ambientes da aplicação PlataformaPCP.

Este módulo fornece funções para detectar e gerenciar diferentes ambientes
(desenvolvimento, teste, produção) e suas configurações específicas.
"""

import os
from enum import Enum
from typing import Optional


class Environment(str, Enum):
    """Enumeração dos ambientes suportados."""
    DEVELOPMENT = "development"
    TESTING = "testing"
    PRODUCTION = "production"


def get_environment() -> str:
    """Retorna o ambiente atual da aplicação.
    
    O ambiente é determinado pela variável de ambiente ENVIRONMENT ou
    pela configuração padrão.
    
    Returns:
        str: Nome do ambiente atual (development, testing, production)
    """
    return os.environ.get("ENVIRONMENT", "development")


def is_development() -> bool:
    """Verifica se o ambiente atual é de desenvolvimento.
    
    Returns:
        bool: True se o ambiente for de desenvolvimento, False caso contrário
    """
    return get_environment() == Environment.DEVELOPMENT


def is_testing() -> bool:
    """Verifica se o ambiente atual é de teste.
    
    Returns:
        bool: True se o ambiente for de teste, False caso contrário
    """
    return get_environment() == Environment.TESTING


def is_production() -> bool:
    """Verifica se o ambiente atual é de produção.
    
    Returns:
        bool: True se o ambiente for de produção, False caso contrário
    """
    return get_environment() == Environment.PRODUCTION


def get_environment_config(key: str, default: Optional[str] = None) -> Optional[str]:
    """Obtém uma configuração específica do ambiente atual.
    
    Args:
        key: Chave da configuração
        default: Valor padrão caso a configuração não exista
        
    Returns:
        Optional[str]: Valor da configuração ou o valor padrão
    """
    env = get_environment()
    env_key = f"{env.upper()}_{key}"
    
    # Tentar obter do ambiente específico
    value = os.environ.get(env_key)
    if value is not None:
        return value
    
    # Tentar obter da configuração geral
    value = os.environ.get(key)
    if value is not None:
        return value
    
    # Retornar valor padrão
    return default