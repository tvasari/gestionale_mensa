import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import Toolbar from '../../components/RistorazioneCmp/Toolbar';
import ItemList from '../../components/RistorazioneCmp/ItemList';
import AddForm from '../../components/RistorazioneCmp/AddForm';

const useStyles = makeStyles(theme => ({
    container: {
      maxHeight: '90vh',
      overflow: 'auto',
      width: '80%',
      float: 'right'
    }
}));

const Ristorazione  = () => {
    const classes = useStyles();

    return(
        <TableContainer component={Paper} className={classes.container}>
            <Table>
                <TableHead>
                    <Toolbar />
                </TableHead>
                <TableBody>
                    <TableRow> 
                        <TableCell style={{padding: 0}}><ItemList /></TableCell>
                        <TableCell align="center" style={{padding: 0}}><AddForm /></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Ristorazione;