import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import AddIcon from '@material-ui/icons/Add';
import SearchBar from './SearchBar';

const useStyles = makeStyles(theme => ({
    headerCell: {
      backgroundColor: '#eaf4f4',
     
    }
}));

const HeaderToolbar = () => {
    const classes = useStyles();

    return(
        <TableRow>
            <TableCell style={{width: '100px'}} className={classes.headerCell}>
                <SearchBar />
            </TableCell>
            <TableCell className={classes.headerCell}>
                <IconButton>
                    <AddIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
}

export default HeaderToolbar;