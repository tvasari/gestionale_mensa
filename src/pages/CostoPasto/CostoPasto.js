import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableContainer, TableHead, Paper } from '@material-ui/core/';
import Portata from 'pages/CostoPasto/Portata';
import Totali from 'pages/CostoPasto/Totali';
import HeaderCostoPasto from 'pages/CostoPasto/HeaderCostoPasto';
import { elementiRistorazione } from 'utils/fakeData';

const useStyles = makeStyles(theme => ({
  table: theme.workBench,
  container: theme.container
}));

export default function CostoPasto() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table}>

        <TableHead>
          <HeaderCostoPasto />
        </TableHead>

        <TableBody>
          <Portata elementiRistorazione={elementiRistorazione} />
          <Totali />
        </TableBody>

      </Table>
    </TableContainer>
  );
}
