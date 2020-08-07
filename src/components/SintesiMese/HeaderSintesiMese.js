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

const HeaderCostoPasto = ({ colSpan }) => {
    const classes = useStyles();

    return(
        <TableRow>
            <TableCell colSpan={colSpan} align="left" className={classes.headerCell}>
                <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '20vw'}}>
                    <IconButton>
                    <NavLink to="/Menù">
                        <KeyboardBackspaceIcon/>
                    </NavLink>
                    </IconButton>
                    <Selector type='Mese'/>
                    <Selector type='Anno'/>
                </div>
            </TableCell>
          </TableRow>
    );
}

export default HeaderCostoPasto;