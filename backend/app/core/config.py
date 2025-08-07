"""config.py - Configurações globais da aplicação PlataformaPCP

Este módulo centraliza todas as configurações do projeto, incluindo variáveis de ambiente,
parâmetros de conexão, segurança e ajustes gerais. Use este arquivo para escalar e manter
as configurações de forma organizada.

Nota: Este arquivo está sendo migrado para o módulo app.core.config.
Por favor, utilize as importações do novo módulo para novas implementações.
"""

# Importar do novo módulo de configurações
from app.core.config.settings import settings
from app.core.config.environment import get_environment, is_production, is_development, is_testing
from app.core.config.constants import StatusCode, ErrorMessage, PaginationConfig

# Exportar para manter compatibilidade com código existente
__all__ = [
    'settings',
    'get_environment',
    'is_production',
    'is_development',
    'is_testing',
    'StatusCode',
    'ErrorMessage',
    'PaginationConfig',
]
