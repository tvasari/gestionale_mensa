import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import IconButton from '@material-ui/core/IconButton';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Selector from '../Selector';

const useStyles = makeStyles(theme => ({
    header: {
      color: '#1976d2', 
      fontWeight: '700',
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    headerCell: {
      backgroundColor: '#eaf4f4'
    }
  }));

const HeaderSintesiMese = ({ colSpan }) => {
    const classes = useStyles();

    return(
        <TableRow>
            <TableCell colSpan={2} align="left" className={classes.headerCell}>
                <div>
                    <IconButton style={{padding: 0}}>
                      <NavLink style={{color: '#1976d2'}} to="/Menù">
                          <KeyboardBackspaceIcon/>
                      </NavLink>
                    </IconButton>
                </div>
            </TableCell>
            <TableCell colSpan={colSpan} className={classes.headerCell}>
                <Selector type='Mese'/>
                <Selector type='Anno'/>
            </TableCell>
        </TableRow>
    );
}

export default HeaderSintesiMese;