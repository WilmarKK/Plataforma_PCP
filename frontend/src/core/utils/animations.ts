// Animation utilities for the platform

export const ANIMATION_DURATIONS = {
    fast: 150,
    normal: 300,
    slow: 500,
    ultra: 800,
  } as const;
  
  export const EASING = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  } as const;
  
  export const createFadeInAnimation = (
    delay: number = 0,
    duration: number = ANIMATION_DURATIONS.normal
  ): string => {
    return `
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInUp ${duration}ms ${EASING.easeOut} ${delay}ms forwards;
    `;
  };
  
  export const createSlideInAnimation = (
    direction: 'left' | 'right' | 'up' | 'down' = 'up',
    delay: number = 0,
    duration: number = ANIMATION_DURATIONS.normal
  ): string => {
    const transforms = {
      left: 'translateX(-20px)',
      right: 'translateX(20px)',
      up: 'translateY(20px)',
      down: 'translateY(-20px)',
    };
  
    return `
      opacity: 0;
      transform: ${transforms[direction]};
      animation: slideIn${direction.charAt(0).toUpperCase() + direction.slice(1)} ${duration}ms ${EASING.easeOut} ${delay}ms forwards;
    `;
  };
  
  export const createStaggerAnimation = (
    elements: NodeListOf<Element> | Element[],
    baseDelay: number = 100
  ): void => {
    Array.from(elements).forEach((element, index) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.animationDelay = `${index * baseDelay}ms`;
    });
  };
  
  export const observeIntersection = (
    elements: NodeListOf<Element> | Element[],
    callback: (entry: IntersectionObserverEntry) => void,
    options: IntersectionObserverInit = {}
  ): IntersectionObserver => {
    const defaultOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options,
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(callback);
    }, defaultOptions);
  
    Array.from(elements).forEach(el => observer.observe(el));
    
    return observer;
  };
  
  export const animateOnIntersect = (
    selector: string,
    animationClass: string = 'animate-in'
  ): IntersectionObserver => {
    const elements = document.querySelectorAll(selector);
    
    return observeIntersection(elements, (entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass);
      }
    });
  };
  
  // CSS-in-JS animation helpers
  export const pulse = {
    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  };
  
  export const spin = {
    animation: 'spin 1s linear infinite',
  };
  
  export const bounce = {
    animation: 'bounce 1s infinite',
  };
  
  export const fadeIn = {
    animation: `fadeInUp ${ANIMATION_DURATIONS.normal}ms ${EASING.easeOut} forwards`,
  };
  
  export const slideUp = {
    animation: `slideInUp ${ANIMATION_DURATIONS.normal}ms ${EASING.easeOut} forwards`,
  };