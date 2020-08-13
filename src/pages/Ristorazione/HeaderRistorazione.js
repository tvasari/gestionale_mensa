import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import TableRow from '@material-ui/core/TableRow';
import AddIcon from '@material-ui/icons/Add';
import StyledTableCell from 'components/StyledTableCell';
import SearchBar from './SearchBar';

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
                <IconButton>
                    <AddIcon />
                </IconButton>
            </StyledTableCell>
        </TableRow>
    );
}

export default HeaderRistorazione;