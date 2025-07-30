"""
auth.py - Rotas de autenticação

Este módulo contém as rotas para login, perfil de usuário
e outras operações relacionadas à autenticação.
"""

from datetime import timedelta
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.schemas.auth import Token, UserProfile, UserLogin
from app.services.auth_service import (
    authenticate_user,
    create_access_token,
    ACCESS_TOKEN_EXPIRE_MINUTES
)
from app.api.deps import get_current_active_user
from app.models.user import User

router = APIRouter()


@router.post("/token", response_model=Token)
def login_for_access_token(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):
    """
    Endpoint para login e obtenção de token de acesso.
    
    Args:
        form_data: Dados do formulário OAuth2 (username/email e password)
        db: Sessão do banco de dados
        
    Returns:
        Token: Token de acesso JWT
        
    Raises:
        HTTPException: Se as credenciais forem inválidas
    """
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


@router.post("/token/json", response_model=Token)
def login_json(
    user_login: UserLogin,
    db: Session = Depends(get_db)
):
    """
    Endpoint alternativo para login com JSON.
    
    Args:
        user_login: Dados de login (email e password)
        db: Sessão do banco de dados
        
    Returns:
        Token: Token de acesso JWT
        
    Raises:
        HTTPException: Se as credenciais forem inválidas
    """
    user = authenticate_user(db, user_login.email, user_login.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


@router.get("/me", response_model=UserProfile)
def read_users_me(
    current_user: User = Depends(get_current_active_user)
):
    """
    Endpoint para obter o perfil do usuário atual.
    
    Args:
        current_user: Usuário atual autenticado
        
    Returns:
        UserProfile: Dados do perfil do usuário
    """
    return UserProfile(
        id=current_user.id,
        email=current_user.email,
        role=current_user.role,
        is_active=current_user.is_active,
        created_at=current_user.created_at
    )