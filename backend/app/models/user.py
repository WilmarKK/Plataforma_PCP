"""
user.py - Modelo de usuário para autenticação

Este módulo define o modelo SQLAlchemy para a tabela users,
incluindo campos para autenticação e autorização.
"""

from sqlalchemy import Column, Integer, String, DateTime, Boolean
from sqlalchemy.sql import func
from app.core.database import Base


class User(Base):
    """
    Modelo de usuário para autenticação e autorização.
    
    Campos:
        id: Identificador único
        email: E-mail único do usuário
        password_hash: Hash da senha
        role: Papel do usuário (admin, manager, viewer)
        is_active: Status ativo/inativo
        created_at: Data de criação
        updated_at: Data de atualização
    """
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(120), unique=True, index=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    role = Column(String(20), nullable=False, default="viewer")
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())