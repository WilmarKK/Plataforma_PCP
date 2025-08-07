"""
main.py - Aplicação FastAPI simplificada para o PlataformaPCP
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Criação da aplicação FastAPI
app = FastAPI(
    title="PlataformaPCP",
    description="Dashboard de Análise de Produção Industrial",
    version="1.0.0"
)

# Configuração de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "PlataformaPCP API funcionando!"}

@app.get("/health")
def health_check():
    return {"status": "ok", "message": "Backend funcionando corretamente"}

@app.get("/api/v1/test")
def test_endpoint():
    return {"message": "Endpoint de teste funcionando!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
