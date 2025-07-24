"""
Registry central de regras de máquinas.
Permite acessar a lógica de cada máquina dinamicamente.
"""
from app.services.machine_rules.bobst import BobstRules
from app.services.machine_rules.cv_guangya import extract_setup_time as cv_guangya_setup, extract_production_speed as cv_guangya_speed, extract_production_average as cv_guangya_avg
from app.services.machine_rules.cv_manual import extract_setup_time as cv_manual_setup, extract_production_speed as cv_manual_speed, extract_production_average as cv_manual_avg
from app.services.machine_rules.furnax import extract_setup_time as furnax_setup, extract_production_speed as furnax_speed, extract_production_average as furnax_avg
from app.services.machine_rules.komori import extract_setup_time as komori_setup, extract_production_speed as komori_speed, extract_production_average as komori_avg
from app.services.machine_rules.laminadora import extract_setup_time as laminadora_setup, extract_production_speed as laminadora_speed, extract_production_average as laminadora_avg
from app.services.machine_rules.sakurai import extract_setup_time as sakurai_setup, extract_production_speed as sakurai_speed, extract_production_average as sakurai_avg
from app.services.machine_rules.samkoon import extract_setup_time as samkoon_setup, extract_production_speed as samkoon_speed, extract_production_average as samkoon_avg
from app.services.machine_rules.sbl import extract_setup_time as sbl_setup, extract_production_speed as sbl_speed, extract_production_average as sbl_avg
from app.services.machine_rules.speed import extract_setup_time as speed_setup, extract_production_speed as speed_speed, extract_production_average as speed_avg
# Adicione aqui outras máquinas futuramente

rules_registry = {
    "bobst": BobstRules,
    "cv_guangya": {
        "extract_setup_time": cv_guangya_setup,
        "extract_production_speed": cv_guangya_speed,
        "extract_production_average": cv_guangya_avg
    },
    "cv_manual": {
        "extract_setup_time": cv_manual_setup,
        "extract_production_speed": cv_manual_speed,
        "extract_production_average": cv_manual_avg
    },
    "furnax": {
        "extract_setup_time": furnax_setup,
        "extract_production_speed": furnax_speed,
        "extract_production_average": furnax_avg
    },
    "komori": {
        "extract_setup_time": komori_setup,
        "extract_production_speed": komori_speed,
        "extract_production_average": komori_avg
    },
    "laminadora": {
        "extract_setup_time": laminadora_setup,
        "extract_production_speed": laminadora_speed,
        "extract_production_average": laminadora_avg
    },
    "sakurai": {
        "extract_setup_time": sakurai_setup,
        "extract_production_speed": sakurai_speed,
        "extract_production_average": sakurai_avg
    },
    "samkoon": {
        "extract_setup_time": samkoon_setup,
        "extract_production_speed": samkoon_speed,
        "extract_production_average": samkoon_avg
    },
    "sbl": {
        "extract_setup_time": sbl_setup,
        "extract_production_speed": sbl_speed,
        "extract_production_average": sbl_avg
    },
    "speed": {
        "extract_setup_time": speed_setup,
        "extract_production_speed": speed_speed,
        "extract_production_average": speed_avg
    },
    # ...
} 