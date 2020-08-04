import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

function createData(name, lun, mar, mer, gio, ven, sab, dom) {
  return { name, lun, mar, mer, gio, ven, sab, dom };
}

const primiPiatti = [
    ['Pasta', 'Minestra'], 
    ['Pasta', 'Minestra'], 
    ['Pasta', 'Minestra'], 
    ['Pasta', 'Minestra'], 
    ['Pasta', 'Minestra'], 
    ['Pasta', 'Minestra'], 
    ['Pasta', 'Minestra']
]

const rows = [
  createData('Primi Piatti', ...primiPiatti),
  createData('Secondi Piatti', ...primiPiatti),
  createData('Contorni', ...primiPiatti),
  createData('Dessert', ...primiPiatti),
  createData('Bevande', ...primiPiatti),
];

const days = [
    "Giorni",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
    "Domenica"
]

const useStyles = makeStyles({
  table: {
    width: '80%',
    height: '90vh',
    float: 'right'
  },
  meal: {
    padding: '16px 0'
  }
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
              {
                  days.map(day => <StyledTableCell>{day}</StyledTableCell>)
              }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.map((row) => (
                <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                        {row.name}
                    </StyledTableCell>
                        {
                            Object.keys(row).map(day => {
                                return day === 'name' 
                                ? null
                                : (
                                    <StyledTableCell>
                                        {
                                            row.lun.map(each => {
                                                return (
                                                    <TableRow>
                                                        <TableCell className={classes.meal}>{each}</TableCell>
                                                    </TableRow>
                                                );
                                            })
                                        }
                                    </StyledTableCell>
                                );
                            })
                        }
                </StyledTableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}