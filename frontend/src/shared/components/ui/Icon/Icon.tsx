import React, { useEffect, useRef } from 'react'
import { IconProps } from '@/core/types/common'
import { cn } from '@/core/utils/helpers'

declare global {
  interface Window {
    lucide: {
      createIcons: () => void
    }
  }
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color,
  className
}) => {
  const iconRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (window.lucide && iconRef.current) {
      window.lucide.createIcons()
    }
  }, [name])

  return (
    <i
      ref={iconRef}
      data-lucide={name}
      width={size}
      height={size}
      style={{ color }}
      className={cn('inline-block', className)}
    />
  )
}