from fastapi import APIRouter

machine_router = APIRouter(prefix="/machine", tags=["machine"])
example_router = APIRouter(prefix="/example", tags=["example"])

@machine_router.get("/")
async def get_machines():
    return {"message": "Lista de máquinas"}

@example_router.get("/")
async def get_example():
    return {"message": "Exemplo de rota"}
