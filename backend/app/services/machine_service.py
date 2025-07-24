"""
Service para operações CRUD de máquinas industriais.
"""
from sqlalchemy.orm import Session
from app.models.machine import Machine
from app.schemas.machine import MachineCreate, MachineUpdate
from typing import List, Optional

def get_machine(db: Session, machine_id: int) -> Optional[Machine]:
    return db.query(Machine).filter(Machine.id == machine_id).first()

def get_machine_by_name(db: Session, name: str) -> Optional[Machine]:
    return db.query(Machine).filter(Machine.name == name).first()

def get_machines(db: Session, skip: int = 0, limit: int = 100) -> List[Machine]:
    return db.query(Machine).offset(skip).limit(limit).all()

def create_machine(db: Session, machine_in: MachineCreate) -> Machine:
    obj = Machine(**machine_in.dict())
    db.add(obj)
    db.commit()
    db.refresh(obj)
    return obj

def update_machine(db: Session, machine_id: int, machine_in: MachineUpdate) -> Optional[Machine]:
    machine = get_machine(db, machine_id)
    if not machine:
        return None
    for field, value in machine_in.dict(exclude_unset=True).items():
        setattr(machine, field, value)
    db.commit()
    db.refresh(machine)
    return machine

def delete_machine(db: Session, machine_id: int) -> bool:
    machine = get_machine(db, machine_id)
    if not machine:
        return False
    db.delete(machine)
    db.commit()
    return True 