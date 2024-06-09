import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import themeOptions from './themeOptions';

const createCustomTheme = () => {
  return responsiveFontSizes(createTheme(themeOptions));
};
const myTheme = createCustomTheme();
export default myTheme;
