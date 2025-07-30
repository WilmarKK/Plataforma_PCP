"""
routes/__init__.py - Inicialização das rotas

Importa todas as rotas para facilitar o acesso.
"""

from .auth import router as auth_router

__all__ = ["auth_router"]