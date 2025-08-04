# Backend - PlataformaPCP (Arquitetura Modular)

## Estrutura de Pastas

```
backend/
├── app/
│   ├── core/                # Configurações, autenticação, utilitários globais
│   ├── shared/              # Middlewares, dependências comuns
│   ├── modules/             # Módulos de negócio (ex: production_analyzer, maintenance)
│   │   └── production_analyzer/
│   │       ├── api/
│   │       │   └── routes/
│   │       ├── models/
│   │       ├── schemas/
│   │       ├── services/
│   │       │   └── machine_rules/
│   │       ├── README.md
│   │       └── __init__.py
│   ├── main.py              # Inicialização FastAPI
│   └── __init__.py
├── tests/
│   ├── production_analyzer/ # Testes do módulo de análise de produção
│   │   ├── test_api.py
│   │   ├── test_machine_rules.py
│   │   ├── test_common_rules.py
│   │   ├── README.md
│   │   └── __init__.py
│   └── README.md
├── Dockerfile
├── requirements.txt
└── README.md
```

## Modularização
- Cada módulo de negócio fica em `app/modules/<nome_modulo>/`.
- Testes organizados por módulo em `tests/<nome_modulo>/`.
- O que for global (core, shared) permanece em `app/`.

## Como rodar o backend
1. Crie o ambiente virtual:
   ```sh
   python -m venv venv
   source venv/bin/activate  # Linux/macOS
   .\venv\Scripts\activate  # Windows
   ```
2. Instale as dependências:
   ```sh
   pip install -r requirements.txt
   ```
3. Configure as variáveis de ambiente:
   - Copie `.env.example` para `.env` e ajuste os valores.
4. Execute o servidor local:
   ```sh
   uvicorn app.main:app --reload
   ```

## Testes Automatizados
- Os testes estão em `tests/<nome_modulo>/`.
- Utilize `pytest` para rodar os testes:
  ```sh
  pytest
  ```

## Documentação
- Cada módulo possui README próprio explicando sua estrutura e regras.
- Consulte também a pasta `docs/` para detalhes de arquitetura, banco de dados e integrações.

> Siga sempre o padrão de documentação, modularização e organização internacional.
