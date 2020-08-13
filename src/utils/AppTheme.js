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
    table: {
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
        MuiTable: {
            stickyHeader: {
                borderCollapse: 'collapse'
            }
        }
    },
    props: {
        MuiInput: {
            disableUnderline: true
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