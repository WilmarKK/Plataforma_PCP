from fastapi import APIRouter

router = APIRouter(prefix="/production-analyzer", tags=["production-analyzer"])

@router.get("/machines")
async def get_machines():
    """
    Lista todas as máquinas disponíveis para análise de produção
    """
    return {"message": "Lista de máquinas do analisador de produção"}

@router.get("/analysis")
async def get_production_analysis():
    """
    Retorna análise de produção
    """
    return {"message": "Análise de produção"}
