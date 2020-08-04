import React, { Fragment } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

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
  <ButtonGroup disableElevation variant="contained" color="primary" aria-label="contained primary button group">
    <Button>Pranzo</Button>
    <Button>Cena</Button>
  </ButtonGroup>,
  <h3 style={{color: '#1976d2'}}>Lunedì</h3>,
  <h3 style={{color: '#1976d2'}}>Martedì</h3>,
  <h3 style={{color: '#1976d2'}}>Mercoledì</h3>,
  <h3 style={{color: '#1976d2'}}>Giovedì</h3>,
  <h3 style={{color: '#1976d2'}}>Venerdì</h3>,
  <h3 style={{color: '#1976d2'}}>Sabato</h3>,
  <h3 style={{color: '#1976d2'}}>Domenica</h3>
]

const useStyles = makeStyles({
    container: {
        maxHeight: '90vh',
        overflow: 'auto'
    },
    table: {
        width: '80%',
        maxHeight: '90vh',
        float: 'right'
    },
    meal: {
        padding: '16px 0'
    },
    subrow: {
      visibility: 'visible' //toggle to 'collapse' on click
    },
    tableHeader: {
      backgroundColor: '#eaf4f4'
    },
    option: {
      color: '#1976d2'
    }
});


const handleCollapse = () => {
  console.log('this.state.open changed!')
}

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} stickyHeader aria-label="customized table">

        <TableHead>
          <TableRow>
              {
                  days.map(day => <TableCell className={classes.tableHeader}>{day}</TableCell>)
              }
          </TableRow>
        </TableHead>

        <TableBody>
          {
            rows.map((row) => (
              <Fragment>
                <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                        {row.name}
                        {
                            row.name === 'Primi Piatti' || row.name === 'Secondi Piatti'
                            ? (
                                    <IconButton aria-label="expand row" size="small" onClick={() => handleCollapse()}>
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
                                        row.lun.map(each => {
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
                        <TableCell>Alternativa Dietetica</TableCell>
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