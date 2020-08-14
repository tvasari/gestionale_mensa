import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import PublishIcon from '@material-ui/icons/Publish';
import HeaderToolbar from './HeaderRistorazione';
import ItemList from './ItemList';
import AddForm from './AddForm';
import StyledButton from '../../components/StyledButton';

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
                    <HeaderToolbar />
                </TableHead>
                <TableBody>
                    <TableRow> 
                        <TableCell className={classes.cellPadding}>
                            <ItemList />
                        </TableCell>
                        <TableCell align="center">
                            <AddForm />
                            <StyledButton startIcon={<PublishIcon />}>
                                Aggiungi
                            </StyledButton>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Ristorazione;