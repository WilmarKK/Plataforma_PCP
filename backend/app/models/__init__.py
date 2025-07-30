"""
models/__init__.py - Inicialização dos modelos

Importa todos os modelos para facilitar o acesso e garantir
que sejam registrados no SQLAlchemy.
"""

from .user import User

__all__ = ["User"]