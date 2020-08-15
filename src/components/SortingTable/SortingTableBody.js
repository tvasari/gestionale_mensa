import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableHead, TableBody, TableRow } from '@material-ui/core/';
import createRows from 'utils/createRows';
import headerGenerator from 'utils/headerGenerator';

const useStyles = makeStyles(theme => ({
    workBench: theme.workBench
}));

const SortingTableBody = ({ colNames, rowsObj}) => {
    const classes = useStyles();
    
    return(
        <Table stickyHeader className={classes.workBench}>
            
            <TableHead>
                <TableRow>
                    { headerGenerator(colNames) }
                </TableRow>
            </TableHead>

            <TableBody>
                { createRows(rowsObj) }
            </TableBody>

        </Table>
    );
}

export default SortingTableBody;