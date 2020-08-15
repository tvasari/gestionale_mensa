import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper 
} from '@material-ui/core/';
import getMonthDays from 'utils/getMonthDays';
import createRows from 'utils/createRows';
import HeaderStorico from 'pages/Storico/HeaderStorico'

const useStyles = makeStyles(theme => ({
  container: {...theme.workBench, ...theme.container},
  datePadding: {
    padding: '0 0 0 16px'
  }
}));

const weekDays = (style) => getMonthDays(2020, 8).map(day => <TableCell className={style}><b>{day}</b></TableCell>)
const primiPiatti = getMonthDays(2020, 8).map(day => 'uova ')

const numeri = weekDays().map(day => (Math.random() * 101).toFixed(0))

const oggetti = {
  Uova: [...numeri],
  Latte: [...numeri],
  Olio: [...numeri],
  Zucchero: [...numeri]
}


const Storico = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table>

        <TableHead>
          <HeaderStorico colSpan={primiPiatti.length}/>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell colSpan={2}></TableCell>
            { weekDays(classes.datePadding) }
          </TableRow>
          <TableRow>
            <TableCell rowSpan={Object.keys(oggetti).length + 1}>
              Ortofrutta
            </TableCell>
          </TableRow>
          { createRows(oggetti) }
          <TableRow>
            <TableCell rowSpan={Object.keys(oggetti).length + 1}>
              Ortofrutta
            </TableCell>
          </TableRow>
          { createRows(oggetti) }
        </TableBody>

      </Table>
    </TableContainer>
  );
}

export default Storico;