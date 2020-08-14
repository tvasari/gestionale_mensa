import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';

const useStyles = makeStyles(theme => ({
    workBench: theme.workBench
}));

const SortingTableHeader = ({ headerElem }) => {
    const classes = useStyles();

    return(
        <Table className={classes.workBench}>
            { headerElem }
        </Table>
    );
}

export default SortingTableHeader;
