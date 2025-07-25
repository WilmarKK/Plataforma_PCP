"""
Modelo de exemplo para referência.
Substitua e expanda conforme as necessidades do projeto.
"""
from sqlalchemy import Column, Integer, String
from app.core.database import Base

class Example(Base):
    __tablename__ = "examples"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True) 