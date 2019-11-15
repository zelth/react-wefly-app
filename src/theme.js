import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0251b5',
      dark: '#0251b5',
      medium: '#87addc',
      light: '#dee7f3',
      lighter: '#ebf1f9',
      lightest: '#fafbfd'
    },

    secondary: {
      main: '#f8f8f8',
      1: '#f8f8f8',
      2: '#848f99',
      3: '#152935',
      4: '#00796b',
      5: '#f44336',
      6: '#ff6f00',
      7: '#f8e71c'
    }
  },
  typography: {
    useNextVariants: true,
  }
});

export default theme;
