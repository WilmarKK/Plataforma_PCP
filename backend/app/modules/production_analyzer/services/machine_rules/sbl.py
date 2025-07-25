"""
Regras de produção para a máquina SBL.
Implementa funções para extração de tempos, velocidades e médias de produção específicas.
Utiliza palavras-chave para identificar tempos de setup e velocidades especiais (ex: micro ondulado).

Constantes:
- SBL_DEFAULT_SPEED: velocidade padrão de produção
- SBL_MICRO_ONDULADO_SPEED: velocidade para micro ondulado
- SETUP_KEYWORDS: palavras-chave para setup
- SPEED_KEYWORDS: palavras-chave para velocidade

Funções:
- extract_setup_time: extrai tempo de setup por keywords
- extract_production_speed: extrai velocidade por keywords
- extract_production_average: retorna média de produção ou padrão

Dicas:
- Verifique se o campo 'Processo' está presente e normalizado
- Use as keywords para identificar casos especiais
- Consulte os docstrings das funções para detalhes de uso
"""
from .common_rules import extract_by_keywords, extract_average
from typing import Any, Dict

SBL_DEFAULT_SPEED = 4000
SBL_MICRO_ONDULADO_SPEED = 2000

SETUP_KEYWORDS = {
    'destaque': 180,  # 3:00
    'relevo + corte': 120,  # 2:00
    'hot stamping': 120,    # 2:00
    'nova': 90              # 1:30
}

SPEED_KEYWORDS = {
    'micro ondulado': SBL_MICRO_ONDULADO_SPEED
}

def extract_setup_time(row: Dict[str, Any]) -> int:
    """
    Extrai o tempo de setup para a máquina SBL com base no campo 'Processo'.
    :param row: Dicionário com os dados do registro.
    :return: Tempo de setup em minutos.
    """
    return extract_by_keywords(row, 'Processo', SETUP_KEYWORDS, 60)

def extract_production_speed(row: Dict[str, Any]) -> int:
    """
    Retorna a velocidade padrão de produção da SBL, considerando micro ondulado.
    :param row: Dicionário com os dados do registro.
    :return: Velocidade padrão (peças/hora).
    """
    return extract_by_keywords(row, 'Processo', SPEED_KEYWORDS, SBL_DEFAULT_SPEED)

def extract_production_average(row: Dict[str, Any]) -> int:
    """
    Retorna a média de produção do registro ou o padrão da máquina.
    :param row: Dicionário com os dados do registro.
    :return: Média de produção (peças/hora).
    """
    return extract_average(row, extract_production_speed(row))

# Exemplo de uso:
# row = {"Processo": "micro ondulado"}
# setup = extract_setup_time(row)
# speed = extract_production_speed(row)
# avg = extract_production_average(row) 