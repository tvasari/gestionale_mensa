import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableRow  from '@material-ui/core/TableRow';
import AddIcon from '@material-ui/icons/Add';
import StyledTableCell from 'components/StyledTableCell';
import SearchBar from 'pages/Ristorazione/SearchBar';
import AddItemDialog from 'pages/Ristorazione/AddItemDialog';

const useStyles = makeStyles({
    searchBarWidth: {
        width: '100px'
    }
});

const HeaderRistorazione = () => {
    const classes = useStyles();

    return(
        <TableRow>
            <StyledTableCell className={classes.searchBarWidth}>
                <SearchBar />
            </StyledTableCell>
            <StyledTableCell>
                <AddItemDialog trigger={<AddIcon color="primary"/>}/>
            </StyledTableCell>
        </TableRow>
    );
}

export default HeaderRistorazione;