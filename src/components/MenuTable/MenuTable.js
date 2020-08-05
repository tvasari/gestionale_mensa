import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import MenuTableHeader from './MenuTableHeader';

const useStyles = makeStyles({
  container: {
      maxHeight: '90vh',
      overflow: 'auto'
  },
  table: {
      width: '80%',
      float: 'right'
  },
  meal: {
      padding: '16px 0'
  },
  subrow: {
    visibility: 'visible' //toggle to 'collapse' on click
  },
  tableHead: {
    backgroundColor: '#eaf4f4'
  }
});

function createData(name, Lunedì, Martedì, Mercoledì, Giovedì, Venerdì, Sabato, Domenica) {
  return { name, Lunedì, Martedì, Mercoledì, Giovedì, Venerdì, Sabato, Domenica };
}

let daysArray = Object.keys(createData())
daysArray.shift()

const primiPiatti = daysArray.map(day => ["Pasta", "Minestra"])

const rows = [
  createData('Primi Piatti', ...primiPiatti),
  createData('Secondi Piatti', ...primiPiatti),
  createData('Contorni', ...primiPiatti),
  createData('Dessert', ...primiPiatti),
  createData('Bevande', ...primiPiatti)
];

const handleCollapse = () => {
  console.log('this.state.open changed!')
}

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} stickyHeader>

        <TableHead>
          <MenuTableHeader daysArray={daysArray} />
        </TableHead>

        <TableBody>
          {
            rows.map((row) => (
              <Fragment>
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    <b>{row.name}</b>
                    {
                      row.name === 'Primi Piatti' || row.name === 'Secondi Piatti'
                      ? (
                          <IconButton size="small" onClick={() => handleCollapse()}>
                              {true ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                          </IconButton> 
                      )
                      : null
                    }
                  </TableCell>
                  {
                    Object.keys(row).map(day => {
                      return day === 'name' 
                      ? null
                      : (
                          <TableCell>
                            {
                              row.Lunedì.map(each => {
                                return (
                                  <TableRow>
                                      <TableCell className={classes.meal}>{each}</TableCell>
                                  </TableRow>
                                );
                              })
                            }
                          </TableCell>
                        );
                      })
                    }
                </TableRow>
                <Fragment>
                  {
                    row.name === 'Primi Piatti' || row.name === 'Secondi Piatti'
                    ? (
                      <TableRow className={classes.subrow}>
                        <TableCell><b>Alternativa Dietetica</b></TableCell>
                        <TableCell>Alt</TableCell>
                        <TableCell>Alt</TableCell>
                        <TableCell>Alt</TableCell>
                        <TableCell>Alt</TableCell>
                        <TableCell>Alt</TableCell>
                        <TableCell>Alt</TableCell>
                        <TableCell>Alt</TableCell>
                      </TableRow>
                    )
                    : null
                  }
                </Fragment>
              </Fragment>
                
            ))
          }
        </TableBody>

      </Table>
    </TableContainer>
  );
}