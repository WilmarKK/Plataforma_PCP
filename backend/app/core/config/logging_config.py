"""Configuração do sistema de logs da aplicação PlataformaPCP.

Este módulo configura o sistema de logs da aplicação, incluindo formatação,
nível de log, handlers e integração com serviços de monitoramento.
"""

import logging
import logging.handlers
import os
from pathlib import Path
from typing import Dict, Any, Optional

from app.core.config.environment import is_production, is_development, is_testing


def get_log_level() -> int:
    """Obtém o nível de log baseado na configuração.
    
    Returns:
        int: Nível de log do módulo logging
    """
    log_level = os.environ.get("LOG_LEVEL", "debug").upper()
    return getattr(logging, log_level, logging.INFO)


def setup_logging(log_file: Optional[str] = None) -> None:
    """Configura o sistema de logs da aplicação.
    
    Args:
        log_file: Caminho para o arquivo de log. Se None, usa o valor de LOG_FILE
    """
    log_level = get_log_level()
    log_format = os.environ.get("LOG_FORMAT", "%(asctime)s - %(name)s - %(levelname)s - %(message)s")
    
    # Configuração básica
    logging.basicConfig(
        level=log_level,
        format=log_format,
        datefmt="%Y-%m-%d %H:%M:%S",
    )
    
    # Configurar log para arquivo se especificado
    if log_file or os.environ.get("LOG_FILE"):
        file_path = log_file or os.environ.get("LOG_FILE")
        if file_path:
            # Garantir que o diretório exista
            log_dir = os.path.dirname(file_path)
            if log_dir and not os.path.exists(log_dir):
                os.makedirs(log_dir)
            
            # Adicionar handler de arquivo com rotação
            file_handler = logging.handlers.RotatingFileHandler(
                file_path,
                maxBytes=10 * 1024 * 1024,  # 10 MB
                backupCount=5,
                encoding="utf-8"
            )
            file_handler.setLevel(log_level)
            file_handler.setFormatter(logging.Formatter(log_format))
            
            # Adicionar ao logger root
            root_logger = logging.getLogger()
            root_logger.addHandler(file_handler)
    
    # Configurações específicas por ambiente
    if is_production():
        # Em produção, podemos adicionar handlers para serviços como Sentry, ELK, etc.
        configure_production_logging()
    elif is_development():
        # Em desenvolvimento, podemos ter logs mais detalhados
        configure_development_logging()
    elif is_testing():
        # Em testes, podemos suprimir alguns logs
        configure_testing_logging()


def configure_production_logging() -> None:
    """Configura logs específicos para ambiente de produção."""
    # Reduzir verbosidade de alguns loggers de bibliotecas
    logging.getLogger("uvicorn.access").setLevel(logging.WARNING)
    logging.getLogger("sqlalchemy.engine").setLevel(logging.WARNING)
    
    # Aqui poderíamos adicionar integrações com serviços de monitoramento
    # como Sentry, Datadog, ELK Stack, etc.
    try:
        # Exemplo de integração com Sentry (comentado)
        # import sentry_sdk
        # sentry_sdk.init(dsn=settings.SENTRY_DSN)
        pass
    except ImportError:
        logging.warning("Sentry SDK não está instalado. Monitoramento de erros desativado.")


def configure_development_logging() -> None:
    """Configura logs específicos para ambiente de desenvolvimento."""
    # Em desenvolvimento, queremos logs detalhados do SQLAlchemy
    logging.getLogger("sqlalchemy.engine").setLevel(logging.INFO)
    
    # Configurar cores nos logs do console se disponível
    try:
        import coloredlogs
        coloredlogs.install(
            level=get_log_level(),
            fmt=os.environ.get("LOG_FORMAT", "%(asctime)s - %(name)s - %(levelname)s - %(message)s")
        )
    except ImportError:
        logging.debug("coloredlogs não está instalado. Logs coloridos desativados.")


def configure_testing_logging() -> None:
    """Configura logs específicos para ambiente de teste."""
    # Em testes, queremos reduzir a verbosidade
    logging.getLogger("uvicorn").setLevel(logging.ERROR)
    logging.getLogger("sqlalchemy").setLevel(logging.WARNING)


def get_logger(name: str) -> logging.Logger:
    """Obtém um logger configurado para o módulo especificado.
    
    Args:
        name: Nome do módulo (geralmente __name__)
        
    Returns:
        logging.Logger: Logger configurado
    """
    return logging.getLogger(name)