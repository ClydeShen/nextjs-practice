'use client';
import theme from '@/utils/theme';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
export default ThemeProvider;
