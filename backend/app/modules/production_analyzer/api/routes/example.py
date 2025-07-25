"""
Rota de exemplo para referência.
Inclui endpoint de criação.
"""
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.modules.production_analyzer.schemas.example import ExampleCreate, ExampleRead
from app.modules.production_analyzer.services.example_service import create_example
from app.core.database import get_db

router = APIRouter()

@router.post("/examples/", response_model=ExampleRead)
def create_example_endpoint(
    example_in: ExampleCreate,
    db: Session = Depends(get_db)
):
    return create_example(db, example_in) 