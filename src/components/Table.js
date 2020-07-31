import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { DatePicker } from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import { white } from 'material-ui/styles/colors';
import format from "date-fns/format";
import { it } from 'date-fns/locale';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const materialTheme = createMuiTheme({
    overrides: {
      MuiFormLabel: {
        root: {
          color: white,
        },
      },
      MuiInputBase: {
        root: {
          color: white,
        },
      },
    },
});

// Database esempio
const dataStructure = {
    2019: {
        jan: {
            1: {
                pasto: 'pranzo',
                val1: 'n1',
                val2: 'n2'
            },
            2: {
                pasto: 'pranzo',
                val1: 'n1',
                val2: 'n2'
            }
        },
        feb: {
            1: {
                pasto: 'pranzo',
                val1: 'n1',
                val2: 'n2'
            },
            2: {
                pasto: 'pranzo',
                val1: 'n1',
                val2: 'n2'
            }
        }
    },
    2020: {
        jan: {
            1: {
                pasto: 'pranzo',
                val1: 'n1',
                val2: 'n2'
            },
            2: {
                pasto: 'pranzo',
                val1: 'n1',
                val2: 'n2'
            }
        },
        feb: {
            1: {
                pasto: 'pranzo',
                val1: 'n1',
                val2: 'n2'
            },
            2: {
                pasto: 'pranzo',
                val1: 'n1',
                val2: 'n2'
            }
        }
    }
}

const useStyles = makeStyles({
  table: {
    maxWidth: '80%',
    float: 'right'
  },
  option: {
      color: 'black'
  }
});

const yearCreator = (style) => {
    const years = [];

    for (let i = 2000; i <= 2199; i++) {
        years.push(<option className={style} value={i} key={i}>{i}</option>)
    }

    return years;
}

const yearSelector = (style) => (
    <ThemeProvider theme={materialTheme}>
        <FormControl>
            <InputLabel>Anno</InputLabel>
            <Select native>
                { yearCreator(style) }
            </Select>
        </FormControl>
    </ThemeProvider>
);

const monthSelector = (style) => {
    const months = [
        'Gennaio', 
        'Febbraio', 
        'Marzo', 
        'Aprile', 
        'Maggio', 
        'Giugno', 
        'Luglio', 
        'Agosto', 
        'Settembre', 
        'Ottobre', 
        'Novembre', 
        'Dicembre'
    ];
    return (
        <ThemeProvider theme={materialTheme}>
            <FormControl>
                <InputLabel>Mese</InputLabel>
                <Select native>
                    {
                        months.map(month => {
                            return <option className={style} value={month} key={month}>{month}</option>
                        })
                    }
                </Select>
            </FormControl>
        </ThemeProvider>
    );
}

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.table}>
    <Table aria-label="customized table">
        
        <TableHead backgroundColor="primary">
            <TableRow>
                {
                    [yearSelector(classes.option), monthSelector(classes.option), 'Filtra', 'Colazione'].map(header => {
                        return <StyledTableCell key={header}>{header}</StyledTableCell>
                    })
                }
            </TableRow>
            <TableRow>
                {
                    ['Giorno', 'Val1', 'Val2', 'Val3'].map(value => {
                        return <StyledTableCell key={value}>{value}</StyledTableCell>
                    })
                }
            </TableRow>
        </TableHead>

        <TableBody>
            <StyledTableRow>
                <StyledTableCell>provvisory</StyledTableCell>
                <StyledTableCell>provvisory</StyledTableCell>
                <StyledTableCell>provvisory</StyledTableCell>
                <StyledTableCell>provvisory</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell>provvisory</StyledTableCell>
                <StyledTableCell>provvisory</StyledTableCell>
                <StyledTableCell>provvisory</StyledTableCell>
                <StyledTableCell>provvisory</StyledTableCell>
            </StyledTableRow>
        </TableBody>

    </Table>
    </TableContainer>
  );
}