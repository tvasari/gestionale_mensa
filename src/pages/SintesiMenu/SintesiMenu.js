import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper 
} from '@material-ui/core/';
import HeaderSintesiMese from 'pages/SintesiMenu/HeaderSintesiMenu';
import getMonthDays from 'utils/getMonthDays';

const useStyles = makeStyles(theme => ({
  container: {...theme.workBench, ...theme.container},
  datePadding: {
    padding: '0 0 0 16px'
  }
}));

const primiPiatti = getMonthDays(2020, 8).map(day => <TableCell>Pasta aglio olio e peperoncino</TableCell>)
const weekDays = (style) => getMonthDays(2020, 8).map(day => <TableCell className={style}><b>{day}</b></TableCell>)

const SintesiMese = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table>

        <TableHead>
          <HeaderSintesiMese colSpan={primiPiatti.length + 2}/>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell colSpan={2}></TableCell>
            { weekDays(classes.datePadding) }
          </TableRow>

          <TableRow>
            <TableCell rowSpan={4}><b>Pranzo</b></TableCell>
            <TableCell rowSpan={2}><b>Primi</b></TableCell>
            { primiPiatti }
          </TableRow>
          <TableRow>
            { primiPiatti }
          </TableRow>
          <TableRow>
            <TableCell rowSpan={2}><b>Secondi</b></TableCell>
            { primiPiatti }
          </TableRow>
          <TableRow>
            { primiPiatti }
          </TableRow>

          <TableRow><TableCell colSpan={primiPiatti.length + 2}></TableCell></TableRow>

          <TableRow>
              <TableCell rowSpan={4}><b>Cena</b></TableCell>
            <TableCell rowSpan={2}><b>Primi</b></TableCell>
            { primiPiatti }
          </TableRow>
          <TableRow>
            { primiPiatti }
          </TableRow>
          <TableRow>
            <TableCell rowSpan={2}><b>Secondi</b></TableCell>
            { primiPiatti }
          </TableRow>
          <TableRow>
            { primiPiatti }
          </TableRow>
          
        </TableBody>

      </Table>
    </TableContainer>
  );
}

export default SintesiMese;