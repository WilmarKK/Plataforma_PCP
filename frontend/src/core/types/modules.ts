export type ModuleStatus = 'available' | 'development' | 'planned'

export interface ModuleInfo {
  id: string
  title: string
  description: string
  icon: string
  status: ModuleStatus
  gradient?: string
  route?: string
}

export interface ModuleCardProps extends ModuleInfo {
  onClick: (moduleId: string) => void
  loading?: boolean
}

export const MODULE_DATA: ModuleInfo[] = [
  {
    id: 'production-analyzer',
    title: 'Análise de Produção',
    description: 'Monitore e analise indicadores de produção em tempo real. OEE, disponibilidade, performance e qualidade.',
    icon: 'bar-chart-3',
    status: 'available',
    gradient: 'var(--gradient-primary)',
    route: '/modules/production-analyzer'
  },
  {
    id: 'maintenance',
    title: 'Manutenção',
    description: 'Gestão completa de manutenção preventiva, preditiva e corretiva. Controle de ativos e histórico.',
    icon: 'wrench',
    status: 'development',
    gradient: 'var(--gradient-secondary)',
    route: '/modules/maintenance'
  },
  {
    id: 'inventory',
    title: 'Estoque',
    description: 'Controle inteligente de estoque com alertas automáticos, rastreabilidade e otimização de compras.',
    icon: 'package',
    status: 'planned',
    gradient: 'var(--gradient-accent)',
    route: '/modules/inventory'
  },
  {
    id: 'quality',
    title: 'Qualidade',
    description: 'Sistema de gestão da qualidade com controle estatístico, não-conformidades e melhorias contínuas.',
    icon: 'shield-check',
    status: 'planned',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    route: '/modules/quality'
  },
  {
    id: 'integrations',
    title: 'Integrações',
    description: 'Conecte sistemas ERP, MES, SCADA e outras ferramentas. APIs robustas e sincronização em tempo real.',
    icon: 'link',
    status: 'development',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    route: '/modules/integrations'
  },
  {
    id: 'analytics',
    title: 'Analytics & BI',
    description: 'Dashboards avançados, relatórios personalizáveis e inteligência artificial para insights estratégicos.',
    icon: 'trending-up',
    status: 'planned',
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    route: '/modules/analytics'
  }
]