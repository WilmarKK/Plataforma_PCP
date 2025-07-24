# Serviços de Análise de Produção e Regras de Máquinas

Este diretório contém toda a lógica de análise de produção e regras específicas de cada máquina industrial.

## Máquinas Documentadas

- **Bobst**: Classe com métodos para cálculo de produção e tempo total.
- **CV Guangya**: Funções para extração de tempo de setup, velocidade e média de produção com base em palavras-chave do processo.
- **CV Manual**: Funções para extração de tempo de setup, velocidade e média de produção, similar à CV Guangya, mas para operações manuais.
- **Furnax**: Funções para extração de tempo de setup, velocidade (considerando micro ondulado) e média de produção, com uso de palavras-chave específicas.
- **Komori**: Funções para extração de tempo de setup (usando regex), velocidade e média de produção, com fallback para valores padrão.
- **Laminadora**: Funções para extração de tempo de setup (por keywords no campo 'Evento'), velocidade e média de produção.
- **Sakurai**: Funções para extração de tempo de setup (por keywords no campo 'Evento'), velocidade e média de produção.
- **Samkoon**: Funções para extração de tempo de setup e velocidade padrão, com fallback para valores default.
- **SBL**: Funções para extração de tempo de setup, velocidade (considerando micro ondulado) e média de produção, com uso de palavras-chave específicas.
- **Speed**: Funções para extração de tempo de setup (por keywords ou regex), velocidade e média de produção, com fallback para valores padrão.

## Utilitários Compartilhados

- **common_rules.py**: Funções utilitárias para extração de tempo de setup, média de produção e busca por palavras-chave. Devem ser usadas em todas as regras para evitar duplicidade de lógica.

### Exemplos de uso do common_rules.py
```python
from app.services.machine_rules.common_rules import extract_by_keywords, extract_average
row = {"Processo": "nova faca", "Média Produção": 1200}
setup = extract_by_keywords(row, 'Processo', {'nova': 90}, 60)
avg = extract_average(row, 1000)
```

## Exemplo de uso - Speed
```python
from app.services.machine_rules import rules_registry
row = {"Processo": "1h 30 min"}
setup = rules_registry["speed"]["extract_setup_time"](row)
speed = rules_registry["speed"]["extract_production_speed"](row)
avg = rules_registry["speed"]["extract_production_average"](row)
```

## Estrutura

- `production_analyzer/`: Funções e classes para análise geral de produção.
- `machine_rules/`: Regras específicas de cada máquina, separadas por arquivo.
- `common_rules.py`: Funções e validações comuns a todas as máquinas.
- `rules_registry.py`: Registro central de todas as máquinas e suas regras.

## Como adicionar uma nova máquina

1. Crie um novo arquivo em `machine_rules/` (ex: `nova_maquina.py`).
2. Implemente as regras com docstrings e tipagem.
3. Registre a máquina em `rules_registry.py`.
4. Adicione exemplos de uso e, se possível, testes.

## Integração com o cadastro de máquinas

- Os parâmetros das máquinas (velocidade, setup, etc.) são cadastrados via API REST.
- O frontend pode consumir as rotas para adicionar/editar máquinas.
- A lógica de produção utiliza os parâmetros cadastrados para cálculos dinâmicos.

## Testes

Testes unitários devem ser adicionados para regras críticas. 