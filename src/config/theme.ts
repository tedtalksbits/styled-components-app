export const theme = {
  palette: {
    mode: 'light',
    error: {
      main: 'hsl(340, 87%, 50%)',
      light: 'hsl(340, 87%, 55%)',
      dark: 'hsl(340, 87%, 45%)',
    },
    success: {
      main: 'hsl(139, 73%, 50%)',
      light: 'hsl(139, 73%, 55%)',
      dark: 'hsl(139, 73%, 45%)',
    },
    secondary: {
      main: 'hsl(260, 90%, 50%)',
      light: 'hsl(260, 90%, 55%)',
      dark: 'hsl(260, 90%, 45%)',
    },
    warning: {
      main: 'hsl(25, 89%, 50%)',
      light: 'hsl(25, 89%, 55%)',
      dark: 'hsl(25, 89%, 45%)',
    },
    primary: {
      main: 'hsl(199, 92%, 50%)',
      light: 'hsl(199, 92%, 55%)',
      dark: 'hsl(199, 92%, 45%)',
    },
    info: {
      main: 'hsl(199, 92%, 50%)',
      light: 'hsl(199, 92%, 55%)',
      dark: 'hsl(199, 92%, 45%)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: {
      default: '#fff',
      paper: '#fff',
    },
    text: {
      primary: 'hsl(0, 0%, 13%)',
      secondary: 'hsl(0, 0%, 45%)',
    },
  },

  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
  },
  fontFamily:
    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif',
};

export const darkTheme = {
  ...theme,
  palette: {
    ...theme.palette,
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#fff',
      secondary: 'hsl(0, 0%, 65%)',
    },
  },
};

export type Theme = typeof theme;
