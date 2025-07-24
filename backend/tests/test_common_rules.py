from app.services.machine_rules.common_rules import extract_by_keywords, extract_average

def test_extract_by_keywords():
    """Testa busca por palavras-chave e valor padrão."""
    row = {"Processo": "nova faca"}
    keywords = {"nova": 90, "faca": 60}
    assert extract_by_keywords(row, "Processo", keywords, 30) == 90
    row = {"Processo": "faca antiga"}
    assert extract_by_keywords(row, "Processo", keywords, 30) == 60
    row = {"Processo": "outro"}
    assert extract_by_keywords(row, "Processo", keywords, 30) == 30

def test_extract_by_keywords_case_insensitive():
    """Testa busca insensível a maiúsculas/minúsculas."""
    row = {"Processo": "Nova Faca"}
    keywords = {"nova": 90, "faca": 60}
    assert extract_by_keywords(row, "Processo", keywords, 30) == 90

def test_extract_by_keywords_missing_field():
    """Testa comportamento quando o campo está ausente."""
    row = {"Outro": "valor"}
    keywords = {"nova": 90}
    assert extract_by_keywords(row, "Processo", keywords, 30) == 30

def test_extract_by_keywords_none_value():
    """Testa comportamento quando o valor do campo é None."""
    row = {"Processo": None}
    keywords = {"nova": 90}
    assert extract_by_keywords(row, "Processo", keywords, 30) == 30

def test_extract_average():
    """Testa retorno da média de produção e valor padrão."""
    row = {"Média Produção": 1200}
    assert extract_average(row, 1000) == 1200
    row = {}
    assert extract_average(row, 1000) == 1000
    row = {"Média Produção": None}
    assert extract_average(row, 1000) == 1000 