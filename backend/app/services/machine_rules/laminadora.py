"""
Regras de produção para a máquina Laminadora.
Implementa funções para extração de tempos, velocidades e médias de produção específicas.
Utiliza palavras-chave para identificar tempos de setup e valores padrão para fallback.

Constantes:
- LAMINADORA_DEFAULT_SPEED: velocidade padrão de produção

Funções:
- extract_setup_time: extrai tempo de setup por keywords
- extract_production_speed: retorna velocidade padrão
- extract_production_average: retorna média de produção ou padrão

Dicas:
- Verifique se o campo 'Evento' está presente e normalizado
- Use as keywords para identificar casos especiais
- Consulte os docstrings das funções para detalhes de uso
"""
from .common_rules import extract_by_keywords, extract_average
from typing import Any, Dict

LAMINADORA_DEFAULT_SPEED = 4000

def extract_setup_time(row: Dict[str, Any]) -> int:
    """
    Extrai o tempo de setup para a máquina Laminadora com base no campo 'Evento'.
    :param row: Dicionário com os dados do registro.
    :return: Tempo de setup em minutos.
    """
    keywords = {
        'acerto': 45
    }
    return extract_by_keywords(row, 'Evento', keywords, 0)

def extract_production_speed(row: Dict[str, Any]) -> int:
    """
    Retorna a velocidade padrão de produção da Laminadora.
    :param row: Dicionário com os dados do registro.
    :return: Velocidade padrão (peças/hora).
    """
    return LAMINADORA_DEFAULT_SPEED

def extract_production_average(row: Dict[str, Any]) -> int:
    """
    Retorna a média de produção do registro ou o padrão da máquina.
    :param row: Dicionário com os dados do registro.
    :return: Média de produção (peças/hora).
    """
    return extract_average(row, LAMINADORA_DEFAULT_SPEED)

# Exemplo de uso:
# row = {"Evento": "acerto"}
# setup = extract_setup_time(row)
# speed = extract_production_speed(row)
# avg = extract_production_average(row) 