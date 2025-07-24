# Core do Backend - AnalisadorProducaoWeb

Este diretório centraliza as configurações, scripts utilitários e arquivos essenciais para o funcionamento do backend.

## Estrutura
- **config.py**: Configurações globais do sistema (variáveis, ambiente, etc).
- **database.py**: Gerenciamento da conexão com o banco PostgreSQL.
- **test_connection.py**: Script utilitário para diagnóstico completo da conexão com o banco.

## Scripts Utilitários

### test_connection.py
- Diagnostica a conexão com o banco, encoding, existência do banco, tabelas e operações CRUD básicas.
- Execute sempre que houver dúvidas sobre a conexão ou ao configurar um novo ambiente.
- Como rodar:
  ```sh
  cd backend/app/core
  python test_connection.py
  ```

## Boas Práticas
- Sempre documente novos scripts e configs.
- Mantenha as variáveis sensíveis fora do código (use .env sempre que possível).
- Consulte este README para dicas de manutenção e troubleshooting. 