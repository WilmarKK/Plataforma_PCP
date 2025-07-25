"""
Regras de produção para a máquina Samkoon.
Implementa funções para extração de tempos, velocidades e médias de produção específicas.
Utiliza valores padrão para setup e velocidade, facilitando fallback em casos de dados incompletos.

Constantes:
- SAMKOON_DEFAULT_SPEED: velocidade padrão de produção
- SAMKOON_DEFAULT_SETUP: tempo padrão de setup

Funções:
- extract_setup_time: retorna tempo padrão de setup
- extract_production_speed: retorna velocidade padrão
- extract_production_average: retorna média de produção ou padrão

Dicas:
- Use os valores padrão para garantir robustez
- Consulte os docstrings das funções para detalhes de uso
"""
from typing import Any, Dict

SAMKOON_DEFAULT_SPEED = 1000
SAMKOON_DEFAULT_SETUP = 120

def extract_setup_time(row: Dict[str, Any]) -> int:
    """
    Extrai o tempo de setup para a máquina Samkoon.
    :param row: Dicionário com os dados do registro.
    :return: Tempo de setup em minutos.
    """
    return SAMKOON_DEFAULT_SETUP  # 2:00

def extract_production_speed(row: Dict[str, Any]) -> int:
    """
    Retorna a velocidade padrão de produção da Samkoon.
    :param row: Dicionário com os dados do registro.
    :return: Velocidade padrão (peças/hora).
    """
    return SAMKOON_DEFAULT_SPEED

def extract_production_average(row: Dict[str, Any]) -> int:
    """
    Retorna a média de produção do registro ou o padrão da máquina.
    :param row: Dicionário com os dados do registro.
    :return: Média de produção (peças/hora).
    """
    return row.get('Média Produção') or SAMKOON_DEFAULT_SPEED

# Exemplo de uso:
# row = {}
# setup = extract_setup_time(row)
# speed = extract_production_speed(row)
# avg = extract_production_average(row) 