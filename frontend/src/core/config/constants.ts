export const APP_CONFIG = {
  name: 'PlataformaPCP',
  description: 'Gestão Industrial Inteligente',
  version: '1.0.0',
  author: 'PlataformaPCP Team'
} as const

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard', // 🆕 NOVO
  PRODUCTION_ANALYZER: '/modules/production-analyzer',
  MAINTENANCE: '/modules/maintenance',
  INVENTORY: '/modules/inventory',
  QUALITY: '/modules/quality',
  INTEGRATIONS: '/modules/integrations',
  ANALYTICS: '/modules/analytics'
} as const

export const NOTIFICATION_DURATION = 3000

export const ANIMATION_DELAYS = {
  CARD_STAGGER: 100,
  FADE_IN: 800,
  LOADING_SIMULATION: 800
} as const

export const OBSERVER_OPTIONS = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
} as const