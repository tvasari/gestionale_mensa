import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import HeaderMagazzino from 'pages/Magazzino/HeaderMagazzino';

const useStyles = makeStyles(theme => ({
    container: {...theme.container, ...theme.table},
    cellPadding: {
        padding: 0
    }
}));

const Magazzino  = () => {
    const classes = useStyles();

    return(
        <TableContainer component={Paper} className={classes.container}>
            <Table>
                <TableHead>
                    <HeaderMagazzino />
                </TableHead>
                <TableBody>
                    <TableRow> 
                        <TableCell className={classes.cellPadding}>

                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Magazzino;