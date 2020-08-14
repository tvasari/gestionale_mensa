import React from 'react';
import { makeStyles } from '@material-ui/core/styles';import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import HeaderPresenzeMese from './HeaderPresenzeMese';
import SortingTableHeader from 'components/SortingTable/SortingTableHeader';
import SortingTableBody from 'components/SortingTable/SortingTableBody';

const useStyles = makeStyles(theme => ({
    container: theme.container
}));

const colNames = ["Giorno", "Cociv Badge", "Cociv Firme", "Tot. Cociv", "Tot."].map((colName, i) => {
    return <Typography variant='body1' key={colName} color='primary'><b>{colName}</b></Typography>
});

const getAllDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const listAllDays = (nDays) => {
    let allDays = [];
    for (let i=1; i <= nDays; i++) {
        allDays.push(i)
    }
    return allDays;
}

const daysArray = listAllDays(getAllDaysInMonth(2020, 7));

const PresenzeMese = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
        <SortingTableHeader headerElem={<HeaderPresenzeMese />} />
        <SortingTableBody colNames={colNames} rowsArray={daysArray}/>
    </TableContainer>
  );
}

export default PresenzeMese;