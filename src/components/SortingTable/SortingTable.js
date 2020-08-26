import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableContainer, Table, Paper } from '@material-ui/core/';
import SortingTableHeader from 'components/SortingTable/SortingTableHeader';
import SortingTableBody from 'components/SortingTable/SortingTableBody';

const useStyles = makeStyles(theme => ({
  container: {...theme.workBench, ...theme.container},
  dialog: {
    float: 'right', 
    width: '100%', 
    ...theme.container
  }
}));

const SortingTable = ({ rows, columns, dialog=false }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={dialog ? classes.dialog : classes.container}>
      <Table>
        <SortingTableHeader columns={columns}/>
        <SortingTableBody rows={rows} columns={columns}/>
      </Table>
    </TableContainer>
  );
}

export default SortingTable;