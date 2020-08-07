import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import Portata from '../../components/CostoPastoCmp/Portata';
import Totali from '../../components/CostoPastoCmp/Totali';
import HeaderCostoPasto from '../../components/CostoPastoCmp/HeaderCostoPasto';

const useStyles = makeStyles(theme => ({
  table: {
    width: '80%',
    float: 'right'
  },
  container: {
    maxHeight: '90vh',
    overflow: 'auto'
  },
  nested: {
    paddingLeft: theme.spacing(4),
  }
}));

const rows = {
  primi: {
    'pasta aglio olio e peperoncino': {
      ingredienti: {
        aglio: {
          qty: 2,
          um: 'Kg',
          costoUm: 1.2
        },
        olio: {
          qty: 2,
          um: 'Kg',
          costoUm: 1.2
        },
        peperoncino: {
          qty: 2,
          um: 'Kg',
          costoUm: 1.2
        }
      }
    },
    'penne al pesto': {
      ingredienti: {
        pesto: {
          qty: 2,
          um: 'Kg',
          costoUm: 1.2
        },
        olio: {
          qty: 2,
          um: 'Kg',
          costoUm: 1.2
        },
        parmigiano: {
          qty: 2,
          um: 'Kg',
          costoUm: 1.2
        }
      }
    }
  },
  secondi: {
    'pollo alla cacciatora': {
      ingredienti: {
        aglio: {
          qty: 2,
          um: 'Kg',
          costoUm: 1.2
        },
        olio: {
          qty: 2,
          um: 'Kg',
          costoUm: 1.2
        },
        peperoncino: {
          qty: 2,
          um: 'Kg',
          costoUm: 1.2
        }
      }
    }
  }
}

const sameOrigin = 'Pranzo/Cena';

export default function CostoPasto() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="spanning table">

        <TableHead>
          <HeaderCostoPasto sameOrigin={sameOrigin} />
        </TableHead>

        <TableBody>
          <Portata rows={rows} />
          <Totali />
        </TableBody>

      </Table>
    </TableContainer>
  );
}
