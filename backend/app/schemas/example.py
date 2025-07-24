"""
Schema de exemplo para referência.
Substitua e expanda conforme as necessidades do projeto.
"""
from pydantic import BaseModel

class ExampleBase(BaseModel):
    name: str

class ExampleCreate(ExampleBase):
    pass

class ExampleRead(ExampleBase):
    id: int
    class Config:
        orm_mode = True 