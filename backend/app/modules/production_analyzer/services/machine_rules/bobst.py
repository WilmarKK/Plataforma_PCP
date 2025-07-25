"""
Regras de produção para a máquina Bobst.
Esta lógica pode ser customizada conforme os parâmetros cadastrados no banco.
"""
from typing import Dict, Any

class BobstRules:
    def __init__(self, speed: float, setup_time: float):
        """
        Inicializa as regras da Bobst com parâmetros dinâmicos.
        :param speed: Velocidade padrão da máquina (peças/hora)
        :param setup_time: Tempo de setup padrão (minutos)
        """
        self.speed = speed
        self.setup_time = setup_time

    def calcular_producao(self, tempo_operacao: float) -> float:
        """
        Calcula a produção estimada para um tempo de operação (em horas).
        """
        return self.speed * tempo_operacao

    def calcular_tempo_total(self, quantidade: float) -> float:
        """
        Calcula o tempo total (em horas) para produzir uma quantidade, incluindo setup.
        """
        tempo_producao = quantidade / self.speed
        tempo_total = tempo_producao + (self.setup_time / 60)
        return tempo_total

# Exemplo de uso:
# bobst = BobstRules(speed=5000, setup_time=30)
# producao = bobst.calcular_producao(8)  # 8 horas de operação
# tempo = bobst.calcular_tempo_total(20000)  # 20.000 peças 