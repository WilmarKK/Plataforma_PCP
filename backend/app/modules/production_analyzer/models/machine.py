"""
Model de Máquina Industrial (exemplo: Bobst).
Permite cadastro dinâmico de máquinas e seus parâmetros.
"""
from sqlalchemy import Column, Integer, String, Float
from app.core.database import Base

class Machine(Base):
    __tablename__ = "machines"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True, nullable=False)
    type = Column(String, index=True, nullable=False)
    speed = Column(Float, nullable=True)  # Velocidade padrão
    setup_time = Column(Float, nullable=True)  # Tempo de setup padrão (minutos)
    description = Column(String, nullable=True) 