"""
create_test_user.py - Script para criar usuário de teste

Este script cria um usuário de teste para facilitar o desenvolvimento
e testes da aplicação.
"""

from sqlalchemy.orm import Session
from app.core.database import SessionLocal, engine
from app.models.user import User
from app.services.auth_service import get_password_hash
from app.core.database import Base

def create_test_user():
    """Cria usuário de teste"""
    # Criar tabelas se não existirem
    Base.metadata.create_all(bind=engine)
    
    db: Session = SessionLocal()
    try:
        # Verificar se usuário já existe
        existing_user = db.query(User).filter(User.email == "admin@test.com").first()
        if existing_user:
            print("Usuário de teste já existe!")
            return
        
        # Criar usuário admin de teste
        test_user = User(
            email="admin@test.com",
            password_hash=get_password_hash("admin123"),
            role="admin",
            is_active=True
        )
        
        db.add(test_user)
        db.commit()
        db.refresh(test_user)
        
        print("Usuário de teste criado com sucesso!")
        print(f"Email: {test_user.email}")
        print(f"Senha: admin123")
        print(f"Role: {test_user.role}")
        
    except Exception as e:
        print(f"Erro ao criar usuário: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    create_test_user()