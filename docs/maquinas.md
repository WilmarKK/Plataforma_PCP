# Regras de Máquinas Industriais

Esta seção documenta o padrão de criação, extensão e uso das regras de máquinas no backend.

## Padrão de Implementação
- Cada máquina possui um arquivo próprio em `backend/app/services/machine_rules/`
- Funções principais: extração de tempo de setup, velocidade e média de produção
- Sempre usar utilitários de `common_rules.py` para evitar duplicidade
- Registrar a máquina no `rules_registry.py` para uso dinâmico
- Documentar com docstrings e exemplos de uso

## Máquinas Implementadas
- **Bobst**
- **CV Guangya**
- **CV Manual**
- **Furnax**
- **Komori**
- **Laminadora**
- **Sakurai**
- **Samkoon**
- **SBL**
- **Speed**

## Exemplo de uso
```python
from app.services.machine_rules import rules_registry
row = {"Processo": "micro ondulado"}
setup = rules_registry["sbl"]["extract_setup_time"](row)
speed = rules_registry["sbl"]["extract_production_speed"](row)
avg = rules_registry["sbl"]["extract_production_average"](row)
```

## Como adicionar uma nova máquina
1. Crie um novo arquivo em `machine_rules/` (ex: `nova_maquina.py`)
2. Implemente as funções seguindo o padrão e usando utilitários
3. Registre a máquina no `rules_registry.py`
4. Atualize este arquivo e o README do módulo

## Dicas para extensão
- Consulte exemplos já implementados
- Use sempre tipagem forte e docstrings
- Atualize a documentação ao criar novas regras 