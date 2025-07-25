"""
Rotas REST para cadastro e gerenciamento de máquinas industriais.
"""
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.modules.production_analyzer.schemas.machine import MachineCreate, MachineRead, MachineUpdate
from app.modules.production_analyzer.services.machine_service import (
    get_machine, get_machines, create_machine, update_machine, delete_machine
)
from app.core.database import get_db

router = APIRouter(prefix="/machines", tags=["machines"])

@router.get("/", response_model=List[MachineRead])
def list_machines(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    """Lista todas as máquinas cadastradas."""
    return get_machines(db, skip=skip, limit=limit)

@router.post("/", response_model=MachineRead)
def create_machine_endpoint(machine_in: MachineCreate, db: Session = Depends(get_db)):
    """Cadastra uma nova máquina."""
    return create_machine(db, machine_in)

@router.get("/{machine_id}", response_model=MachineRead)
def get_machine_endpoint(machine_id: int, db: Session = Depends(get_db)):
    """Obtém detalhes de uma máquina pelo ID."""
    machine = get_machine(db, machine_id)
    if not machine:
        raise HTTPException(status_code=404, detail="Máquina não encontrada")
    return machine

@router.put("/{machine_id}", response_model=MachineRead)
def update_machine_endpoint(machine_id: int, machine_in: MachineUpdate, db: Session = Depends(get_db)):
    """Atualiza os dados de uma máquina."""
    machine = update_machine(db, machine_id, machine_in)
    if not machine:
        raise HTTPException(status_code=404, detail="Máquina não encontrada")
    return machine

@router.delete("/{machine_id}", response_model=bool)
def delete_machine_endpoint(machine_id: int, db: Session = Depends(get_db)):
    """Remove uma máquina do cadastro."""
    return delete_machine(db, machine_id) 