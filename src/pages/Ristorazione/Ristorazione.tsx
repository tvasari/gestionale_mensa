import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper 
} from '@material-ui/core/';
import HeaderRistorazione from 'pages/Ristorazione/HeaderRistorazione';
import ItemList from 'pages/Ristorazione/ItemList';

const useStyles = makeStyles(theme => ({
    container: {...theme.container, ...theme.workBench},
    cellPadding: {
        padding: 0
    }
}));

const Ristorazione  = () => {
    const classes = useStyles();

    return(
        <TableContainer component={Paper} className={classes.container}>
            <Table>
                <TableHead>
                    <HeaderRistorazione />
                </TableHead>
                <TableBody>
                    <TableRow> 
                        <TableCell colSpan={3} className={classes.cellPadding}>
                            <ItemList />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Ristorazione;