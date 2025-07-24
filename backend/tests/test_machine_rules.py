import pytest
from app.services.machine_rules.bobst import BobstRules
from app.services.machine_rules.sbl import extract_setup_time as sbl_setup, extract_production_speed as sbl_speed, extract_production_average as sbl_avg
from app.services.machine_rules.speed import extract_setup_time as speed_setup, extract_production_speed as speed_speed, extract_production_average as speed_avg

def test_bobst_rules():
    bobst = BobstRules(speed=5000, setup_time=30)
    assert bobst.calcular_producao(2) == 10000
    assert round(bobst.calcular_tempo_total(10000), 2) == 2.5

def test_sbl_setup_keywords():
    row = {"Processo": "micro ondulado"}
    assert sbl_setup(row) == 60  # padrão
    row = {"Processo": "destaque"}
    assert sbl_setup(row) == 180

def test_speed_setup_regex():
    row = {"Processo": "1h 30 min"}
    assert speed_setup(row) == 90
    row = {"Processo": "45 min"}
    assert speed_setup(row) == 45
    row = {"Processo": "nova"}
    assert speed_setup(row) == 90

def test_speed_average():
    row = {"Média Produção": 4200}
    assert speed_avg(row) == 4200
    row = {}
    assert speed_avg(row) == 5000 