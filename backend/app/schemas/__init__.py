"""
schemas/__init__.py - Inicialização dos schemas

Importa todos os schemas para facilitar o acesso.
"""

from .auth import Token, TokenData, UserLogin, UserBase, UserCreate, UserResponse, UserProfile

__all__ = [
    "Token", 
    "TokenData", 
    "UserLogin", 
    "UserBase", 
    "UserCreate", 
    "UserResponse", 
    "UserProfile"
]