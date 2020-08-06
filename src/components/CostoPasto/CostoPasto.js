import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Portata from './Portata';
import Totali from './Totali';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

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
  },
  header: {
    color: '#1976d2', 
    fontWeight: '700',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  },
  headerCell: {
    backgroundColor: '#eaf4f4'
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
          <TableRow>
            <TableCell colSpan={5} align="left" className={classes.headerCell}>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <IconButton>
                  <NavLink to="/Menù">
                    <KeyboardBackspaceIcon/>
                  </NavLink>
                </IconButton>
                <IconButton>
                  <EditIcon/>
                </IconButton>
                <h3 className={classes.header}><b>{sameOrigin} 7 Agosto 2020</b></h3>
              </div>
            </TableCell>
            <TableCell className={classes.headerCell}>
              <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <IconButton>
                  <KeyboardArrowLeftIcon/>
                </IconButton>
                <IconButton>
                  <KeyboardArrowRightIcon/>
                </IconButton>
              </div>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <Portata rows={rows} />
          <Totali classes={classes} />
        </TableBody>

      </Table>
    </TableContainer>
  );
}
