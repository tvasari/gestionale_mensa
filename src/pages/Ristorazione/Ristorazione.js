import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PublishIcon from '@material-ui/icons/Publish';
import HeaderToolbar from './HeaderToolbar';
import ItemList from './ItemList';
import AddForm from './AddForm';

const StyledButton = styled(Button)({
    color: '#1976d2', 
    fontWeight: '700',
    fontSize: '1em'
});

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
                    <HeaderToolbar />
                </TableHead>
                <TableBody>
                    <TableRow> 
                        <TableCell style={{padding: 0}}>
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