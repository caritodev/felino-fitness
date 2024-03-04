/* eslint-disable camelcase */
import { createTheme } from '@mui/material';
import { esES, enUS } from '@mui/material/locale';
import { esES as grid_esES, enUS as grid_enUS } from '@mui/x-data-grid';

const theme = (locale) => {
  const coreLocalization = locale === 'en-US' ? enUS : esES;
  const gridLocalization = locale === 'en-US' ? grid_enUS : grid_esES;

  return createTheme(
    {
      palette: {
        mode: 'light',
        primary: {
          main: '#1C6596',
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
    },
    coreLocalization,
    gridLocalization,
  );
};

export default theme;
