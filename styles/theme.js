/* eslint-disable camelcase */
import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#C5A48A',
      light: '#6C9AFF',
    },
    secondary: {
      main: '#37AFFF',
      light: '#86CFFF',
      contrastText: '#fff',
    },
    error: {
      main: '#F44336',
      light: '#F88078',
    },
    success: {
      main: '#4CAF50',
      light: '#91E295',
    },
    warning: {
      main: '#ED6C02',
      light: '#FFB547',
    },
    company: {
      main: '#2196F314',
      errorBg: '#FEECEB',
      error: '#621B16',
    },
  },
});

export default theme;
