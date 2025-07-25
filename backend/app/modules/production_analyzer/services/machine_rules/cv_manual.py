"""
Regras de produção para a máquina CV Manual.
Implementa funções para extração de tempos, velocidades e médias de produção específicas.
Utiliza palavras-chave para identificar tempos de setup e valores padrão para fallback.

Funções:
- extract_setup_time: extrai tempo de setup por keywords
- extract_production_speed: retorna velocidade padrão
- extract_production_average: retorna média de produção ou padrão

Dicas:
- Verifique se o campo 'Processo' está presente e normalizado
- Use as keywords para identificar casos especiais
- Consulte os docstrings das funções para detalhes de uso
"""
from .common_rules import extract_by_keywords, extract_average
from typing import Any, Dict

def extract_setup_time(row: Dict[str, Any]) -> int:
    """
    Extrai o tempo de setup para a máquina CV Manual com base no campo 'Processo'.
    :param row: Dicionário com os dados do registro.
    :return: Tempo de setup em minutos.
    """
    keywords = {
        'hot stamping': 120,  # 2:00
        'faca nova': 90,     # 1:30
        'faca': 60           # 1:00
    }
    return extract_by_keywords(row, 'Processo', keywords, 30)  # 0:30 padrão

def extract_production_speed(row: Dict[str, Any]) -> int:
    """
    Retorna a velocidade padrão de produção da CV Manual.
    :param row: Dicionário com os dados do registro.
    :return: Velocidade padrão (peças/hora).
    """
    return 900

def extract_production_average(row: Dict[str, Any]) -> int:
    """
    Retorna a média de produção do registro ou o padrão da máquina.
    :param row: Dicionário com os dados do registro.
    :return: Média de produção (peças/hora).
    """
    return extract_average(row, 900)

# Exemplo de uso:
# row = {"Processo": "faca nova"}
# setup = extract_setup_time(row)
# speed = extract_production_speed(row)
# avg = extract_production_average(row) 