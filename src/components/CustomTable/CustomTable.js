import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Selector from './Selector';

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

const useStyles = makeStyles({
  table: {
    maxWidth: '80%',
    float: 'right',
    height: '90vh'
  },
  option: {
      color: 'black'
  },
  tableHead: {
      backgroundColor: '#fff',
      color: 'black'
  },
  tableRow: {
      padding: '0 20px'
  }
});

const yearCreator = () => {
    const years = [];

    for (let i = 2010; i <= 2100; i++) {
        years.push(i)
    }

    return years;
}

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

const meals = [
    "Colazione", 
    "Pranzo", 
    "Cena", 
    "Spuntini"
];

const values = [
    'Giorno', 
    'Cociv Badge', 
    'Cociv Firme', 
    'Tot. Cociv', 
    'Tot.'
]

const attendance = [
    'Cociv',
    'Radimero',
    'Altri'
]

const headerGenerator = (array, style) => {
    return (
        array.map((data, i) => {
            return (
                <StyledTableCell key={data + i} className={style}>
                    {data}
                </StyledTableCell>
            );
        })
    );
}

const daysCreator = (month, year, style) => {
    const monthDays = new Date(year, month + 1, 0).getDate();
    let days = [];

    for (let i=0; i <= monthDays; i++) {
        days.push(
            <StyledTableRow key={monthDays + i * 2}>
                <StyledTableCell key={monthDays + i} className={style}>{i}</StyledTableCell>
                <StyledTableCell key={"badge" + i} className={style}>badge</StyledTableCell>
                <StyledTableCell key={"firme" + i} className={style}>firme</StyledTableCell>
                <StyledTableCell key={"totale" + i} className={style}>totale</StyledTableCell>
                <StyledTableCell key={"tot" + i} className={style}>Tot.</StyledTableCell>
            </StyledTableRow>
        );
    }

    return days;
}

const CustomTable = () => {
  const classes = useStyles();
  const selectors = [
      <Selector key="Mese" type="Mese" array={months} style={classes.option}/>,
      <Selector key="Anno" type="Anno" array={yearCreator()} style={classes.option}/>,
      <Selector key="Pasto" type="Pasto" array={meals} style={classes.option}/>,
      <Selector key="Presenze" type="Presenze" array={attendance} style={classes.option}/>,
    ]

  return (
    <TableContainer component={Paper} className={classes.table}>
        <Table aria-label="customized table">
            
            <TableHead>
                <TableRow>
                    {
                        headerGenerator(selectors, classes.tableHead)
                    }
                    <TableCell>
                        <Button variant="outlined" color="primary">
                            Modifica
                        </Button>
                    </TableCell>
                </TableRow>
                <TableRow>
                    {
                        headerGenerator(values, classes.tableHead)
                    }
                </TableRow>
            </TableHead>

            <TableBody>
                {
                    daysCreator(8, 2020, classes.tableRow)
                }
            </TableBody>

        </Table>
    </TableContainer>
  );
}

export default CustomTable;