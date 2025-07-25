"""
Service de exemplo para referência.
Inclui funções básicas de CRUD.
"""
from sqlalchemy.orm import Session
from app.modules.production_analyzer.models.example import Example
from app.modules.production_analyzer.schemas.example import ExampleCreate

def create_example(db: Session, example_in: ExampleCreate) -> Example:
    obj = Example(name=example_in.name)
    db.add(obj)
    db.commit()
    db.refresh(obj)
    return obj 