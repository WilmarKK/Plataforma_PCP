export const usePerformance = () => {
    const logLoadTime = (appName: string): void => {
      if (typeof window !== 'undefined' && window.performance) {
        const loadTime = performance.now()
        console.log(`${appName} loaded in ${Math.round(loadTime)}ms`)
      }
    }
  
    const measureFunctionTime = <T extends (...args: any[]) => any>(
      fn: T,
      name: string
    ): T => {
      return ((...args: Parameters<T>) => {
        const start = performance.now()
        const result = fn(...args)
        const end = performance.now()
        console.log(`${name} executed in ${Math.round(end - start)}ms`)
        return result
      }) as T
    }
  
    return {
      logLoadTime,
      measureFunctionTime
    }
  }