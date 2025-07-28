export const THEME = {
    colors: {
      bg: {
        primary: '#0a0a0b',
        secondary: '#1a1a1d',
        card: 'rgba(255, 255, 255, 0.03)',
        hover: 'rgba(255, 255, 255, 0.06)',
      },
      border: 'rgba(255, 255, 255, 0.1)',
      text: {
        primary: '#ffffff',
        secondary: '#a1a1aa',
        muted: '#71717a',
      },
      accent: '#3b82f6',
      accentHover: '#2563eb',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      accent: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      success: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      analytics: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
      '3xl': '4rem',
    },
    borderRadius: {
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '20px',
    },
    breakpoints: {
      mobile: '768px',
      tablet: '1024px',
      desktop: '1400px',
    },
  } as const
  
  export type ThemeColors = typeof THEME.colors
  export type ThemeGradients = typeof THEME.gradients