const Color = Object.freeze({
  primary: '#00695C',
  secondary: '#ef6c00',
  success: '#388e3c',
  info: '#2196F3',
  warning: '#ffc107',
  danger: '#b71c1c',
  paper: '#f4f4f4',
  white: '#ffffff',
});

const themeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: Color.primary,
    },
    secondary: {
      main: Color.secondary,
    },
    success: {
      main: Color.success,
    },
    info: {
      main: Color.info,
    },
    warning: {
      main: Color.warning,
    },
    danger: {
      main: Color.danger,
    },
    background: {
      paper: Color.white,
      default: Color.paper,
    },
  },
  typography: {
    fontSize: 16,
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          boxShadow: 'none',
          textTransform: 'none',
          borderRadius: 20,
          padding: '4px 12px',
          fontWeight: 400,
        },
      },
    },
  },
};

export default themeOptions;
