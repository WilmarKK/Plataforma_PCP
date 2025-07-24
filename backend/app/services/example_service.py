"""
Service de exemplo para referência.
Inclui funções básicas de CRUD.
"""
from sqlalchemy.orm import Session
from app.models.example import Example
from app.schemas.example import ExampleCreate

def create_example(db: Session, example_in: ExampleCreate) -> Example:
    obj = Example(name=example_in.name)
    db.add(obj)
    db.commit()
    db.refresh(obj)
    return obj 