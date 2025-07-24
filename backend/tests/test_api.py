import pytest
from fastapi.testclient import TestClient
from app.main import app
import uuid

client = TestClient(app)

def test_health_check():
    """Testa o endpoint /health para status ok."""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"

def test_get_machines():
    """Testa o endpoint GET /machines/ para resposta 200 e formato de lista."""
    response = client.get("/machines/")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_create_machine():
    """Testa o endpoint POST /machines/ criando uma nova máquina com nome único."""
    unique_name = f"TesteAutomatizado_{uuid.uuid4()}"
    payload = {
        "name": unique_name,
        "type": "Teste",
        "speed": 1234.5,
        "setup_time": 12.3,
        "description": "Máquina criada por teste automatizado"
    }
    response = client.post("/machines/", json=payload)
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == payload["name"]
    assert data["type"] == payload["type"]
    assert data["speed"] == payload["speed"]
    assert data["setup_time"] == payload["setup_time"]
    assert data["description"] == payload["description"] 