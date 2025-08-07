"""Constantes globais da aplicação PlataformaPCP.

Este módulo define constantes utilizadas em toda a aplicação, como códigos
de status HTTP personalizados, mensagens de erro padronizadas, limites e timeouts.
"""

from enum import Enum, IntEnum
from typing import Dict, Any


class StatusCode(IntEnum):
    """Códigos de status HTTP personalizados."""
    # Sucesso
    OK = 200
    CREATED = 201
    ACCEPTED = 202
    NO_CONTENT = 204
    
    # Redirecionamento
    MOVED_PERMANENTLY = 301
    FOUND = 302
    SEE_OTHER = 303
    TEMPORARY_REDIRECT = 307
    PERMANENT_REDIRECT = 308
    
    # Erros do cliente
    BAD_REQUEST = 400
    UNAUTHORIZED = 401
    FORBIDDEN = 403
    NOT_FOUND = 404
    METHOD_NOT_ALLOWED = 405
    NOT_ACCEPTABLE = 406
    CONFLICT = 409
    GONE = 410
    UNPROCESSABLE_ENTITY = 422
    TOO_MANY_REQUESTS = 429
    
    # Erros do servidor
    INTERNAL_SERVER_ERROR = 500
    NOT_IMPLEMENTED = 501
    BAD_GATEWAY = 502
    SERVICE_UNAVAILABLE = 503
    GATEWAY_TIMEOUT = 504


class ErrorMessage(str, Enum):
    """Mensagens de erro padronizadas."""
    # Erros gerais
    INTERNAL_ERROR = "Erro interno do servidor"
    NOT_FOUND = "Recurso não encontrado"
    VALIDATION_ERROR = "Erro de validação nos dados fornecidos"
    UNAUTHORIZED = "Não autorizado"
    FORBIDDEN = "Acesso proibido"
    
    # Erros de autenticação
    INVALID_CREDENTIALS = "Credenciais inválidas"
    TOKEN_EXPIRED = "Token expirado"
    INVALID_TOKEN = "Token inválido"
    
    # Erros de banco de dados
    DATABASE_ERROR = "Erro no banco de dados"
    DUPLICATE_ENTRY = "Registro duplicado"
    FOREIGN_KEY_VIOLATION = "Violação de chave estrangeira"
    
    # Erros de negócio
    INSUFFICIENT_STOCK = "Estoque insuficiente"
    INVALID_STATUS_TRANSITION = "Transição de status inválida"
    RESOURCE_LOCKED = "Recurso bloqueado por outro processo"


class PaginationConfig:
    """Configurações de paginação."""
    DEFAULT_PAGE = 1
    DEFAULT_PAGE_SIZE = 20
    MAX_PAGE_SIZE = 100
    PAGE_PARAM = "page"
    PAGE_SIZE_PARAM = "page_size"


class TimeoutConfig:
    """Configurações de timeout."""
    DEFAULT_TIMEOUT = 30  # segundos
    LONG_OPERATION_TIMEOUT = 120  # segundos
    DATABASE_TIMEOUT = 10  # segundos
    EXTERNAL_API_TIMEOUT = 15  # segundos


class CacheConfig:
    """Configurações de cache."""
    DEFAULT_TTL = 300  # segundos (5 minutos)
    LONG_TTL = 3600  # segundos (1 hora)
    SHORT_TTL = 60  # segundos (1 minuto)


class DateTimeFormat:
    """Formatos de data e hora."""
    DATE_FORMAT = "%Y-%m-%d"
    TIME_FORMAT = "%H:%M:%S"
    DATETIME_FORMAT = "%Y-%m-%d %H:%M:%S"
    ISO_FORMAT = "%Y-%m-%dT%H:%M:%S.%fZ"


class ModuleStatus(str, Enum):
    """Status dos módulos da plataforma."""
    ACTIVE = "active"
    INACTIVE = "inactive"
    MAINTENANCE = "maintenance"
    DEPRECATED = "deprecated"
    BETA = "beta"


class UserRole(str, Enum):
    """Papéis de usuário no sistema."""
    ADMIN = "admin"
    MANAGER = "manager"
    SUPERVISOR = "supervisor"
    OPERATOR = "operator"
    VIEWER = "viewer"


class FileType(str, Enum):
    """Tipos de arquivos suportados."""
    PDF = "pdf"
    CSV = "csv"
    EXCEL = "excel"
    IMAGE = "image"
    JSON = "json"
    XML = "xml"


class MetricUnit(str, Enum):
    """Unidades de medida para métricas."""
    PERCENTAGE = "%"
    SECONDS = "s"
    MINUTES = "min"
    HOURS = "h"
    DAYS = "d"
    UNITS = "un"
    KILOGRAMS = "kg"
    METERS = "m"
    LITERS = "l"
    CURRENCY = "R$"


class ProductionMetric(str, Enum):
    """Métricas de produção."""
    OEE = "oee"
    AVAILABILITY = "availability"
    PERFORMANCE = "performance"
    QUALITY = "quality"
    MTBF = "mtbf"
    MTTR = "mttr"
    PRODUCTION_RATE = "production_rate"
    CYCLE_TIME = "cycle_time"
    SETUP_TIME = "setup_time"
    DOWNTIME = "downtime"


class MaintenanceType(str, Enum):
    """Tipos de manutenção."""
    PREVENTIVE = "preventive"
    CORRECTIVE = "corrective"
    PREDICTIVE = "predictive"
    DETECTIVE = "detective"
    IMPROVEMENT = "improvement"


class MaintenancePriority(str, Enum):
    """Prioridades de manutenção."""
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"


class InventoryTransactionType(str, Enum):
    """Tipos de transações de estoque."""
    PURCHASE = "purchase"
    SALE = "sale"
    TRANSFER = "transfer"
    ADJUSTMENT = "adjustment"
    CONSUMPTION = "consumption"
    RETURN = "return"
    SCRAP = "scrap"


class QualityStatus(str, Enum):
    """Status de qualidade."""
    APPROVED = "approved"
    REJECTED = "rejected"
    PENDING = "pending"
    UNDER_ANALYSIS = "under_analysis"
    CONDITIONAL = "conditional"


class IntegrationStatus(str, Enum):
    """Status de integrações."""
    ACTIVE = "active"
    INACTIVE = "inactive"
    ERROR = "error"
    SYNCING = "syncing"
    PENDING = "pending"


class NotificationType(str, Enum):
    """Tipos de notificações."""
    INFO = "info"
    WARNING = "warning"
    ERROR = "error"
    SUCCESS = "success"
    ALERT = "alert"


class NotificationChannel(str, Enum):
    """Canais de notificação."""
    EMAIL = "email"
    SMS = "sms"
    PUSH = "push"
    IN_APP = "in_app"
    WEBHOOK = "webhook"


class ReportFormat(str, Enum):
    """Formatos de relatórios."""
    PDF = "pdf"
    EXCEL = "excel"
    CSV = "csv"
    HTML = "html"
    JSON = "json"


class ReportPeriod(str, Enum):
    """Períodos para relatórios."""
    DAILY = "daily"
    WEEKLY = "weekly"
    MONTHLY = "monthly"
    QUARTERLY = "quarterly"
    YEARLY = "yearly"
    CUSTOM = "custom"


class SystemConstants:
    """Constantes do sistema."""
    VERSION = "1.0.0"
    API_VERSION = "v1"
    COPYRIGHT = "© 2023 PlataformaPCP. Todos os direitos reservados."
    SUPPORT_EMAIL = "suporte@plataformapcp.com.br"
    SUPPORT_PHONE = "+55 (11) 1234-5678"
    DOCUMENTATION_URL = "https://docs.plataformapcp.com.br"
    MAX_UPLOAD_SIZE = 10 * 1024 * 1024  # 10MB
    DEFAULT_LANGUAGE = "pt-BR"
    AVAILABLE_LANGUAGES = ["pt-BR", "en-US", "es-ES"]