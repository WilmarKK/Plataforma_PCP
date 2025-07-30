"""
deps.py - Dependências da API

Este módulo contém dependências reutilizáveis para as rotas da API,
incluindo autenticação e autorização.
"""

from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.services.auth_service import get_current_user
from app.models.user import User

# Configuração do esquema de autenticação Bearer
security = HTTPBearer()


def get_current_active_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db)
) -> User:
    """
    Dependência para obter o usuário atual autenticado e ativo.
    
    Args:
        credentials: Credenciais do token Bearer
        db: Sessão do banco de dados
        
    Returns:
        User: Usuário autenticado e ativo
        
    Raises:
        HTTPException: Se o usuário não estiver ativo
    """
    user = get_current_user(db, credentials.credentials)
    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Inactive user"
        )
    return user


def get_admin_user(
    current_user: User = Depends(get_current_active_user)
) -> User:
    """
    Dependência para verificar se o usuário atual é admin.
    
    Args:
        current_user: Usuário atual autenticado
        
    Returns:
        User: Usuário admin
        
    Raises:
        HTTPException: Se o usuário não for admin
    """
    if current_user.role != "admin":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not enough permissions"
        )
    return current_user


def get_manager_or_admin_user(
    current_user: User = Depends(get_current_active_user)
) -> User:
    """
    Dependência para verificar se o usuário atual é manager ou admin.
    
    Args:
        current_user: Usuário atual autenticado
        
    Returns:
        User: Usuário manager ou admin
        
    Raises:
        HTTPException: Se o usuário não for manager nem admin
    """
    if current_user.role not in ["manager", "admin"]:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not enough permissions"
        )
    return current_user