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

const columns = ["", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
const rows = ['Primi Piatti', 'Secondi Piatti', 'Contorni', 'Dessert', 'Bevande'];

const handleCollapse = () => {
  console.log('this.state.open changed!')
}

const MenuTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.workBench} stickyHeader>

        <TableHead>
          <HeaderMenu columns={columns} />
        </TableHead>

        <TableBody>
         
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MenuTable;