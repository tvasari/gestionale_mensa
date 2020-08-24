import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableContainer, Table, Paper } from '@material-ui/core/';
import NewSortingTableHeader from 'components/SortingTable/SortingTableHeader';
import SortingTableBody from 'components/SortingTable/SortingTableBody';

const useStyles = makeStyles(theme => ({
  container: {...theme.workBench, ...theme.container},
}));

const SortingTable = ({ rows, columns }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table>
            <NewSortingTableHeader columns={columns}/>
            <SortingTableBody rows={rows} columns={columns}/>
      </Table>
    </TableContainer>
  );
}

export default SortingTable;