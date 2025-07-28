import React from 'react'
import { ButtonProps } from '@/core/types/common'
import { cn } from '@/core/utils/helpers'
import { Icon } from '../Icon'
import styles from './Button.module.css'

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  onClick,
  disabled = false,
  loading = false,
  className,
  ...props
}) => {
  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick()
    }
  }

  return (
    <button
      className={cn(
        styles.button,
        styles[variant],
        styles[size],
        loading && styles.loading,
        disabled && styles.disabled,
        className
      )}
      onClick={handleClick}
      disabled={disabled || loading}
      {...props}
    >
      {icon && (
        <Icon 
          name={icon} 
          size={size === 'sm' ? 16 : size === 'lg' ? 20 : 18} 
        />
      )}
      {loading ? (
        <Icon name="loader-2" size={18} className={styles.spinner} />
      ) : (
        children
      )}
    </button>
  )
}