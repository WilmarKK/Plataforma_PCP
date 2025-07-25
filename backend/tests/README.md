# Testes Automatizados - PlataformaPCP

Este diretório contém todos os testes automatizados do backend, organizados por módulo, seguindo padrões internacionais de arquitetura modular.

## Estrutura
- `production_analyzer/` - Testes do módulo de análise de produção
- `maintenance/` - Testes do módulo de manutenção (futuro)

## Como rodar os testes
1. Ative o ambiente virtual do backend.
2. Instale as dependências de teste (pytest).
   ```bash
   ```
3. Execute os testes:
   ```bash
   pytest
   ```

## Boas práticas
- Separe os testes por módulo e contexto de negócio.
- Sempre escreva testes para novas regras, utilitários e endpoints.
- Use nomes claros e assertivos para funções de teste.
- Mantenha a cobertura de testes alta para evitar regressões.
- Documente cada novo teste criado.

## Exemplos de testes
Veja os arquivos em `production_analyzer/` para exemplos de como testar regras de máquinas, utilitários e endpoints.

> Siga sempre o padrão de documentação e modularização internacional. 