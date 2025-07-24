"""
Funções utilitárias compartilhadas para regras de máquinas industriais.
Inclui padrões de extração de tempo de setup, média de produção, busca por keywords, etc.

Funções:
- extract_by_keywords: busca por palavras-chave e retorna valor associado ou padrão
- extract_average: retorna média de produção ou valor padrão

Dicas:
- Use estas funções para evitar duplicação de lógica entre regras
- Consulte os docstrings para detalhes de uso
"""
from typing import Any, Dict, Optional

def extract_by_keywords(row: Dict[str, Any], field: str, keywords: Dict[str, Any], default: Optional[Any]) -> Any:
    """
    Busca por palavras-chave no campo especificado e retorna o valor associado.
    Se nenhuma palavra-chave for encontrada, retorna o valor padrão.

    :param row: Dicionário com os dados do registro.
    :param field: Campo do registro a ser analisado.
    :param keywords: Dicionário de palavras-chave e valores associados.
    :param default: Valor padrão a ser retornado se nenhuma palavra-chave for encontrada.
    :return: Valor associado à palavra-chave encontrada ou o valor padrão.
    """
    value = (row.get(field) or '').lower()
    for k, v in keywords.items():
        if k in value:
            return v
    return default

def extract_average(row: Dict[str, Any], default: Any) -> Any:
    """
    Retorna a média de produção do registro ou o valor padrão.

    :param row: Dicionário com os dados do registro.
    :param default: Valor padrão a ser retornado se não houver média informada.
    :return: Média de produção do registro ou valor padrão.
    """
    return row.get('Média Produção') or default

# Exemplos de uso:
# row = {"Processo": "nova faca", "Média Produção": 1200}
# setup = extract_by_keywords(row, 'Processo', {'nova': 90}, 60)
# avg = extract_average(row, 1000) 