import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import HeaderSintesiMese from './HeaderSintesiMese';

const useStyles = makeStyles(theme => ({
  container: {
    maxHeight: '90vh',
    overflow: 'auto',
    width: '80%',
    float: 'right'
  },
  datePad: {
    padding: '0 0 0 16px'
  }
}));

const findDayOfTheWeek = (dayInt) => {
  switch(dayInt) {
    case 0:
      return 'Dom'
    case 1:
      return 'Lun'
    case 2:
      return 'Mar'
    case 3:
      return 'Mer'   
    case 4:
      return 'Gio'
    case 5:
      return 'Ven'
    case 6:
      return 'Sab'
    default:
      throw new Error()
  }
}

const generateDays = (year, month, style) => {
  let maxDays = new Date(year, month, 0).getDate()
  let allDays = [];

  for (let day=1; day <= maxDays; day++) {
    let dayInWeek = new Date(year, month, day).getDay();
    let fullWeekDay = findDayOfTheWeek(dayInWeek) + ' ' + (day);
    allDays.push(<TableCell className={style}><b>{fullWeekDay}</b></TableCell>);
  }
  
  return allDays
}

const primiPiatti = generateDays(2020, 7).map(day => <TableCell>Pasta</TableCell>)


export default function SintesiMese() {
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
            { generateDays(2020, 7, classes.datePad) }
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