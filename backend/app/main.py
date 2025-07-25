# PlataformaPCP - Backend Modular
# Este projeto segue arquitetura modularizada, com múltiplos módulos em app/modules.
"""
main.py - Inicialização da aplicação FastAPI para o PlataformaPCP

Este arquivo contém a configuração básica do servidor FastAPI,
seguindo as melhores práticas de estrutura e tipagem.
"""

from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy import text
from app.api.routes import machine_router, example_router
from app.core.database import get_db

# Instância principal da aplicação FastAPI
def create_app() -> FastAPI:
    """
    Cria e configura a instância do FastAPI.
    Retorna:
        FastAPI: instância configurada da aplicação.
    """
    app = FastAPI(
        title="PlataformaPCP",
        description="Dashboard de Análise de Produção Industrial",
        version="1.0.0",
        docs_url="/docs",
        redoc_url="/redoc"
    )

    # Configuração de CORS para permitir acesso do frontend
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],  # Ajustar para domínios específicos em produção
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Rotas principais serão incluídas aqui
    app.include_router(machine_router)
    app.include_router(example_router)

    return app

app = create_app()

@app.get("/health")
def health_check(db: Session = Depends(get_db)):
    try:
        db.execute(text("SELECT 1"))
        return {"status": "ok"}
    except Exception as e:
        return {"status": "error", "detail": str(e)}

# Ponto de entrada para execução local
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
