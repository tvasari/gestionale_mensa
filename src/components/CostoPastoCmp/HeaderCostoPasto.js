import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

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

const HeaderCostoPasto = ({ sameOrigin }) => {
  const classes = useStyles();

    return(
        <TableRow>
            <TableCell colSpan={5} align="left" className={classes.headerCell}>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <IconButton>
                  <NavLink to="/Menù">
                    <KeyboardBackspaceIcon/>
                  </NavLink>
                </IconButton>
                <IconButton>
                  <EditIcon/>
                </IconButton>
                <h3 className={classes.header}><b>{sameOrigin} 7 Agosto 2020</b></h3>
              </div>
            </TableCell>
            <TableCell className={classes.headerCell}>
              <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <IconButton>
                  <KeyboardArrowLeftIcon/>
                </IconButton>
                <IconButton>
                  <KeyboardArrowRightIcon/>
                </IconButton>
              </div>
            </TableCell>
          </TableRow>
    );
}

export default HeaderCostoPasto;