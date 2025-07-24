# Exemplos de Requests/Responses da API

## Cadastro de Máquina (cURL)
```bash
curl -X POST http://localhost:8000/machines/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Bobst 102",
    "type": "bobst",
    "speed": 5000,
    "setup_time": 30,
    "description": "Máquina Bobst para corte e vinco."
  }'
```

## Cadastro de Máquina (Python requests)
```python
import requests

resp = requests.post(
    "http://localhost:8000/machines/",
    json={
        "name": "Bobst 102",
        "type": "bobst",
        "speed": 5000,
        "setup_time": 30,
        "description": "Máquina Bobst para corte e vinco."
    }
)
print(resp.json())
```

## Listar máquinas
```bash
curl http://localhost:8000/machines/
```

## Atualizar máquina
```bash
curl -X PUT http://localhost:8000/machines/1 \
  -H "Content-Type: application/json" \
  -d '{"speed": 5200}'
```

---

*Para detalhes dos endpoints, veja [endpoints.md](endpoints.md)* 