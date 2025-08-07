import { forwardRef } from 'react'
import { InputProps } from '@/core/types/common'
import { cn } from '@/core/utils/helpers'
import styles from './Input.module.css'

export const Input = forwardRef<HTMLInputElement, InputProps>((
  {
    className,
    error,
    icon,
    iconPosition = 'left',
    variant = 'default',
    size = 'md',
    ...props
  },
  ref
) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={cn(
          styles.input,
          styles[variant],
          styles[size],
          error && styles.error,
          icon && styles[`icon-${iconPosition}`],
          className
        )}
        ref={ref}
        {...props}
      />
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  )
})

Input.displayName = 'Input'