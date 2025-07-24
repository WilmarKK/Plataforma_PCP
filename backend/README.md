# Backend - AnalisadorProduçãoWeb

Este diretório contém toda a estrutura do backend do projeto AnalisadorProduçãoWeb, desenvolvido com FastAPI, PostgreSQL e Python moderno.

## Estrutura de Pastas

```
backend/
├── app/
│   ├── api/           # Rotas e endpoints
│   ├── core/          # Configurações, segurança, conexão DB
│   ├── models/        # Modelos SQLAlchemy
│   ├── schemas/       # Schemas Pydantic
│   ├── services/      # Lógica de negócio
│   └── main.py        # Inicialização FastAPI
├── requirements.txt   # Dependências do projeto
└── alembic.ini        # Configuração de migrações
```

## Setup Inicial

1. **Crie o ambiente virtual:**
   ```powershell
   py -3.12 -m venv venv // foi preciso usar a versão -3.12...tendo em vista que muitos pacotes são incopativeis com o 3.13
   .\venv\Scripts\activate
   ```
2. **Instale as dependências:**
   ```powershell
   pip install -r requirements.txt
   
   ```
3. **Configure as variáveis de ambiente:**
   - Copie `.env.example` para `.env` e ajuste os valores conforme necessário.

4. **Execute o servidor local:**
   ```powershell
   uvicorn app.main:app --reload
   ```

## Documentação dos Arquivos

- **app/main.py**: Inicialização da aplicação FastAPI, configuração de CORS e ponto de entrada.
- **app/core/config.py**: Centraliza todas as configurações do sistema usando Pydantic Settings.
- **app/core/database.py**: Gerencia a conexão com o banco de dados PostgreSQL.

## Scripts Utilitários

### test_connection.py

- **Localização:** `backend/app/core/test_connection.py`
- **Função:** Diagnostica a conexão com o banco PostgreSQL, testando credenciais, encoding, existência do banco, tabelas e operações CRUD básicas.
- **Quando usar:** Sempre que houver dúvidas sobre a conexão do backend com o banco, antes de rodar a API ou ao configurar um novo ambiente.
- **Como rodar:**
  ```sh
  cd backend/app/core
  python test_connection.py
  ```
- **Saída esperada:** Mensagens detalhadas sobre sucesso ou falha na conexão, encoding, tabelas e operações básicas. Útil para troubleshooting rápido.

> Recomenda-se rodar este script antes de iniciar o backend, especialmente após alterações no banco ou ambiente.

## Recomendações
- Sempre documente novos arquivos e funções com docstrings.
- Consulte este README para instruções de setup e boas práticas.
- Para dúvidas sobre variáveis de ambiente, veja o arquivo `.env.example`.

---

> Para mais detalhes sobre endpoints, autenticação e integrações, consulte a pasta `docs/` do projeto.

## Testes Automatizados e Diagnóstico

- Recomenda-se criar um endpoint `/health` no backend para checagem rápida do status da API e conexão com o banco.
- Exemplo de implementação (em `app/main.py`):
  ```python
  @app.get("/health")
  def health_check(db: Session = Depends(get_db)):
      try:
          db.execute("SELECT 1")
          return {"status": "ok"}
      except Exception as e:
          return {"status": "error", "detail": str(e)}
  ```
- Para rodar testes automatizados, utilize `pytest` na pasta `backend/tests/`.

> Manter testes e diagnósticos facilita a manutenção e a confiabilidade do sistema.
