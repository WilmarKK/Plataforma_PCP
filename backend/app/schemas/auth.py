"""
auth.py - Schemas para autenticação

Este módulo define os schemas Pydantic para operações de autenticação,
incluindo login, token e perfil de usuário.
"""

from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime


class Token(BaseModel):
    """Schema para resposta de token de acesso"""
    access_token: str
    token_type: str


class TokenData(BaseModel):
    """Schema para dados do token"""
    email: Optional[str] = None


class UserLogin(BaseModel):
    """Schema para login do usuário"""
    email: EmailStr
    password: str


class UserBase(BaseModel):
    """Schema base do usuário"""
    email: EmailStr
    role: str = "viewer"
    is_active: bool = True


class UserCreate(UserBase):
    """Schema para criação de usuário"""
    password: str


class UserResponse(UserBase):
    """Schema para resposta de dados do usuário"""
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


class UserProfile(BaseModel):
    """Schema para perfil do usuário logado"""
    id: int
    email: str
    role: str
    is_active: bool
    created_at: datetime

    class Config:
        from_attributes = True