# Testes Automatizados - Backend

Esta pasta contém testes unitários e de integração para o backend do AnalisadorProduçãoWeb.

## Como rodar os testes

1. Ative o ambiente virtual do backend.
2. Instale as dependências de teste (pytest).
   ```bash
   pip install pytest
   ```
3. Execute os testes:
   ```bash
   pytest
   ```

## Boas práticas
- Sempre escreva testes para novas regras, utilitários e endpoints.
- Use nomes claros e assertivos.
- Mantenha a cobertura de testes alta para evitar regressões.

## Exemplos de testes
Veja os arquivos `test_machine_rules.py` e `test_common_rules.py` para exemplos de como testar regras de máquinas e utilitários. 