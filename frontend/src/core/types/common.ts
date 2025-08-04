export type NotificationType = 'success' | 'warning' | 'error' | 'info'

export interface NotificationConfig {
  message: string
  type: NotificationType
  duration?: number
}

export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'ghost' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  icon?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset' // ADICIONEI ESTA LINHA
}

export interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'glass' | 'glass-strong' | 'solid'
  hover?: boolean
  onClick?: () => void
}

export interface IconProps {
  name: string
  size?: number
  color?: string
  className?: string
}

export interface BaseComponent {
  className?: string
  children?: React.ReactNode
}