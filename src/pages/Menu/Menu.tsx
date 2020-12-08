import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper 
} from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
import { KeyboardArrowUp, KeyboardArrowDown } from '@material-ui/icons/';
import HeaderMenu from 'pages/Menu/HeaderMenu';

const useStyles = makeStyles(theme => ({
  container: theme.container,
  workBench: theme.workBench,
  meal: {
    padding: '16px 0'
  },
  subrow: {
    visibility: 'visible' //toggle to 'collapse' on click
  }
}));

function createData(name, Lunedì, Martedì, Mercoledì, Giovedì, Venerdì, Sabato, Domenica) {
  return { name, Lunedì, Martedì, Mercoledì, Giovedì, Venerdì, Sabato, Domenica };
}

let daysArray = Object.keys(createData())
daysArray.shift()

const primiPiatti = daysArray.map(() => ["Pasta", "Minestra"])

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

const MenuTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.workBench} stickyHeader>

        <TableHead>
          <HeaderMenu daysArray={daysArray} />
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
                          { true ? <KeyboardArrowUp/> : <KeyboardArrowDown/> }
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

export default MenuTable;