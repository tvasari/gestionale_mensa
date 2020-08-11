import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1976d2',
            contrastText: '#ff9100'
        },
        secondary: {
            main: '#eaf4f4'
        }
    }
})

const AppTheme = ({ children }) => {
    return(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    ); 
}

export default AppTheme;