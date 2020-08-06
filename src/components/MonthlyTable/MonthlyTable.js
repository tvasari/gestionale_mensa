import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Selector from './Selector';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    padding: '5px 20px'
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
        color: '#1976d2'
    },
    tableHead: {
      backgroundColor: '#eaf4f4',
    }
});

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

const attendance = [
    'Cociv',
    'Radimero',
    'Altri'
];

const values = ["Giorno", "Cociv Badge", "Cociv Firme", "Tot. Cociv", "Tot."].map((item, i) => {
    return <h3 key={item} style={{color: '#1976d2'}}>{item}</h3>
});

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
};

const yearCreator = () => {
    const years = [];

    for (let i = 2010; i <= 2100; i++) {
        years.push(i)
    }

    return years;
};

const dataRowCreator = (month, year) => {
    const monthDays = new Date(year, month + 1, 0).getDate();
    let dataRow = [];

    for (let i=0; i <= monthDays; i++) {
        dataRow.push(
            <StyledTableRow key={monthDays + i * 2}>
                <StyledTableCell key={monthDays + i}>{i}</StyledTableCell>
                <StyledTableCell key={"badge" + i}>badge</StyledTableCell>
                <StyledTableCell key={"firme" + i}>firme</StyledTableCell>
                <StyledTableCell key={"totale" + i}>totale</StyledTableCell>
                <StyledTableCell key={"tot" + i}>Tot.</StyledTableCell>
            </StyledTableRow>
        );
    }
    return dataRow;
};

const MonthlyTable = () => {
  const classes = useStyles();
  const selectors = [
      <Selector key="Mese" type="Mese" array={months} style={classes.option}/>,
      <Selector key="Anno" type="Anno" array={yearCreator()} style={classes.option}/>,
      <Selector key="Tipo" type="Tipo" array={meals} style={classes.option}/>,
      <Selector key="Presenze" type="Presenze" array={attendance} style={classes.option}/>,
    ]

  return (
    <TableContainer component={Paper} className={classes.table}>
        <Table stickyHeader>
            
            <TableHead>
                <TableRow>
                    { headerGenerator(selectors, classes.tableHead) }
                    <TableCell className={classes.tableHead}>
                        <IconButton>
                            <SearchIcon/>
                        </IconButton>
                        <IconButton>
                            <EditIcon/>
                        </IconButton>
                    </TableCell>
                </TableRow>
                <TableRow>
                    { headerGenerator(values, classes.tableHead) }
                </TableRow>
            </TableHead>

            <TableBody>
                { dataRowCreator(8, 2020) }
            </TableBody>

        </Table>
    </TableContainer>
  );
}

export default MonthlyTable;