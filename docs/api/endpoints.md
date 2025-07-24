# Documentação de Endpoints da API

## Máquinas Industriais

### Listar máquinas
- **GET** `/machines/`
- **Descrição:** Lista todas as máquinas cadastradas.
- **Resposta:**
```json
[
  {
    "id": 1,
    "name": "Bobst 102",
    "type": "bobst",
    "speed": 5000,
    "setup_time": 30,
    "description": "Máquina Bobst para corte e vinco."
  }
]
```

### Cadastrar máquina
- **POST** `/machines/`
- **Body:**
```json
{
  "name": "Bobst 102",
  "type": "bobst",
  "speed": 5000,
  "setup_time": 30,
  "description": "Máquina Bobst para corte e vinco."
}
```
- **Resposta:**
```json
{
  "id": 1,
  "name": "Bobst 102",
  "type": "bobst",
  "speed": 5000,
  "setup_time": 30,
  "description": "Máquina Bobst para corte e vinco."
}
```

### Detalhar máquina
- **GET** `/machines/{machine_id}`
- **Resposta:** igual ao cadastro

### Atualizar máquina
- **PUT** `/machines/{machine_id}`
- **Body:**
```json
{
  "speed": 5200
}
```
- **Resposta:** igual ao cadastro

### Remover máquina
- **DELETE** `/machines/{machine_id}`
- **Resposta:**
```json
true
```

---

*Para exemplos práticos, veja [exemplos.md](exemplos.md)* 