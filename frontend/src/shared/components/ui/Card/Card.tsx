import React from 'react'
import { CardProps } from '@/core/types/common'
import { cn } from '@/core/utils/helpers'
import styles from './Card.module.css'

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'glass',
  hover = false,
  onClick
}) => {
  return (
    <div
      className={cn(
        styles.card,
        styles[variant],
        hover && styles.hover,
        onClick && styles.clickable,
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}