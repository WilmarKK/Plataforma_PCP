import { useCallback } from 'react'
import { NotificationType } from '@/core/types/common'
import { getNotificationBackground } from '@/core/utils/helpers'
import { NOTIFICATION_DURATION } from '@/core/config/constants'

export const useNotification = () => {
  const showNotification = useCallback((
    message: string, 
    type: NotificationType = 'info',
    duration: number = NOTIFICATION_DURATION
  ) => {
    const notification = document.createElement('div')
    
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem 1.5rem;
      border-radius: 12px;
      color: white;
      font-weight: 500;
      z-index: 1000;
      transform: translateX(400px);
      transition: all 0.3s ease;
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    `
    
    notification.style.background = getNotificationBackground(type)
    notification.textContent = message
    
    document.body.appendChild(notification)
    
    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)'
    }, 100)
    
    // Remove after duration
    setTimeout(() => {
      notification.style.transform = 'translateX(400px)'
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification)
        }
      }, 300)
    }, duration)
  }, [])

  const showSuccess = useCallback((message: string) => {
    showNotification(message, 'success')
  }, [showNotification])

  const showWarning = useCallback((message: string) => {
    showNotification(message, 'warning')
  }, [showNotification])

  const showError = useCallback((message: string) => {
    showNotification(message, 'error')
  }, [showNotification])

  const showInfo = useCallback((message: string) => {
    showNotification(message, 'info')
  }, [showNotification])

  return {
    showNotification,
    showSuccess,
    showWarning,
    showError,
    showInfo
  }
}