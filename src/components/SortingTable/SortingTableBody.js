import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import createRows from 'utils/createRows';
import headerGenerator from 'utils/headerGenerator';

const useStyles = makeStyles(theme => ({
    workBench: theme.workBench
}));

const SortingTableBody = ({ colNames, rowsArray}) => {
    const classes = useStyles();
    
    return(
        <Table stickyHeader className={classes.workBench}>
            
            <TableHead>
                <TableRow>
                    { headerGenerator(colNames) }
                </TableRow>
            </TableHead>

            <TableBody>
                { createRows(rowsArray, 'Kg', 5, 1.5, 'tot') }
            </TableBody>

        </Table>
    );
}

export default SortingTableBody;