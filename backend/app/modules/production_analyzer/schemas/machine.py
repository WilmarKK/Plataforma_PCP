"""
Schemas para cadastro e leitura de máquinas industriais.
"""
from pydantic import BaseModel
from typing import Optional

class MachineBase(BaseModel):
    name: str
    type: str
    speed: Optional[float] = None
    setup_time: Optional[float] = None
    description: Optional[str] = None

class MachineCreate(MachineBase):
    pass

class MachineUpdate(MachineBase):
    pass

class MachineRead(MachineBase):
    id: int
    class Config:
        orm_mode = True 