# Utilitários Globais do Backend

Esta seção documenta funções utilitárias compartilhadas entre diferentes regras e módulos do backend.

## common_rules.py

Arquivo centralizado com funções para:
- Extração de tempo de setup por palavras-chave
- Cálculo de média de produção
- Busca genérica por keywords em campos de registros

### Por que usar?
- Evita duplicidade de lógica entre regras de máquinas
- Facilita manutenção e padronização
- Acelera o onboarding de novos desenvolvedores

### Exemplos de uso
```python
from app.services.machine_rules.common_rules import extract_by_keywords, extract_average
row = {"Processo": "nova faca", "Média Produção": 1200}
setup = extract_by_keywords(row, 'Processo', {'nova': 90}, 60)
avg = extract_average(row, 1000)
```

### Boas práticas
- Sempre utilize os utilitários ao criar novas regras de máquina
- Consulte os docstrings para detalhes de uso
- Atualize este arquivo ao criar novos utilitários globais 