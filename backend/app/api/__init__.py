"""
api/__init__.py - Inicialização da API

Importa todos os componentes da API.
"""

from .routes import auth_router
from . import deps

__all__ = ["auth_router", "deps"]