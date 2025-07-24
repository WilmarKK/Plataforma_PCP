"""
Regras de produção para máquinas Speed/HCD.
Implementa funções para extração de tempos, velocidades e médias de produção específicas.
Utiliza regex e palavras-chave para identificar tempos de setup e valores padrão para fallback.

Constantes:
- SPEED_DEFAULT: velocidade padrão de produção (unidades/hora)
- SETUP_KEYWORDS: dicionário de palavras-chave para setup

Funções:
- extract_setup_time: extrai tempo de setup por keywords ou regex
- extract_production_speed: retorna velocidade padrão
- extract_production_average: retorna média de produção ou padrão

Dicas:
- Verifique se o campo 'Processo' está presente e normalizado
- Use regex para identificar formatos variados de tempo
- Consulte os docstrings das funções para detalhes de uso
"""
import re
from .common_rules import extract_by_keywords, extract_average
from typing import Any, Dict, Optional

SPEED_DEFAULT = 5000

SETUP_KEYWORDS = {
    'nova': 90
}

def extract_setup_time(row: Dict[str, Any]) -> Optional[int]:
    """
    Extrai o tempo de setup para máquinas do tipo Speed/HCD com base no campo 'Processo'.
    Tenta extrair por palavras-chave e regex.
    :param row: Dicionário com os dados do registro.
    :return: Tempo de setup em minutos, ou None se não encontrado.
    """
    processo = row.get('Processo', '').lower()
    # Primeiro, verifica palavras-chave
    setup = extract_by_keywords(row, 'Processo', SETUP_KEYWORDS, None)
    if setup is not None:
        return setup
    # Regex para formatos como '1h 30 min', '45 min', etc.
    match = re.search(r'(\d{1,2})\s*h(?:ora)?(?:s)?\s*(\d{1,2})?\s*min', processo)
    if match:
        horas = int(match.group(1))
        minutos = int(match.group(2)) if match.group(2) else 0
        return horas * 60 + minutos
    match = re.search(r'(\d{1,2})\s*min', processo)
    if match:
        return int(match.group(1))
    return None  # Não retorna padrão, só se encontrar no processo

def extract_production_speed(row: Dict[str, Any]) -> int:
    """
    Retorna a velocidade padrão de produção da Speed/HCD.
    :param row: Dicionário com os dados do registro.
    :return: Velocidade padrão (unidades/hora).
    """
    return SPEED_DEFAULT

def extract_production_average(row: Dict[str, Any]) -> int:
    """
    Retorna a média de produção do registro ou o padrão da máquina.
    :param row: Dicionário com os dados do registro.
    :return: Média de produção (unidades/hora).
    """
    return extract_average(row, SPEED_DEFAULT)

# Exemplo de uso:
# row = {"Processo": "1h 30 min"}
# setup = extract_setup_time(row)
# speed = extract_production_speed(row)
# avg = extract_production_average(row) 