import { NotificationType } from '@/core/types/common'

export const cn = (...classes: (string | undefined | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}

export const smoothScrollTo = (elementId: string): void => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

export const getStatusIcon = (status: string): string => {
  const statusMap = {
    available: 'check-circle',
    development: 'code',
    planned: 'clock'
  }
  return statusMap[status as keyof typeof statusMap] || 'clock'
}

export const getNotificationBackground = (type: NotificationType): string => {
  const backgrounds = {
    success: 'rgba(16, 185, 129, 0.9)',
    warning: 'rgba(245, 158, 11, 0.9)',
    error: 'rgba(239, 68, 68, 0.9)',
    info: 'rgba(59, 130, 246, 0.9)'
  }
  return backgrounds[type] || backgrounds.info
}

export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

export const formatModuleMessage = (moduleId: string, status: string): string => {
  const messages = {
    'production-analyzer': 'Módulo de Análise de Produção carregado!',
    'maintenance': 'Módulo de Manutenção em desenvolvimento',
    'inventory': 'Módulo de Estoque em planejamento',
    'quality': 'Módulo de Qualidade em planejamento',
    'integrations': 'Módulo de Integrações em desenvolvimento',
    'analytics': 'Módulo de Analytics em planejamento'
  }
  
  return messages[moduleId as keyof typeof messages] || 'Módulo em desenvolvimento'
}

export const getMessageType = (status: string): NotificationType => {
  const typeMap = {
    available: 'success' as const,
    development: 'warning' as const,
    planned: 'info' as const
  }
  return typeMap[status as keyof typeof typeMap] || 'info'
}