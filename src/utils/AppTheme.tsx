import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({

  palette: {
    primary: {
      main: '#455a64',
      light: '#cfd8dc'
    },
    secondary: {
      main: '#fff'
    }
  },
  
  container: {
    maxHeight: '90vh',
    overflow: 'auto'
  },
  workBench: {
    width: '80%',
    float: 'right'
  },

  overrides: {
    MuiInputBase: {
      root: {
        color: '#455a64'
      }
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: '#d50000'
        },
        color: '#455a64',
      }
    },
    MuiTypography: {
      colorTextPrimary: {
        color: '#4caf50'
      }
    }
  },

  props: {
    MuiInput: {
      disableUnderline: true
    }
  }

})

const AppTheme = ({ children }: any) => {
  return(
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  ); 
}

export default AppTheme;