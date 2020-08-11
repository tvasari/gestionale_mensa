import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import TableRow from '@material-ui/core/TableRow';
import StyledTableCell from '../../components/StyledTableCell';
import BackArrowButton from '../../components/BackArrowButton';

const useStyles = makeStyles(theme => ({
  header: {
    color: '#1976d2', 
    fontWeight: '700',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}));

const HeaderCostoPasto = ({ sameOrigin }) => {
  const classes = useStyles();

    return(
        <TableRow>
            <StyledTableCell colSpan={5} align="left">
              <div style={{display: 'flex', alignItems: 'center'}}>
                <BackArrowButton path="Menù" />
                <h3 className={classes.header}><b>{sameOrigin} 7 Agosto 2020</b></h3>
                <IconButton>
                  <EditIcon/>
                </IconButton>
              </div>
            </StyledTableCell>
            <StyledTableCell>
              <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <IconButton>
                  <KeyboardArrowLeftIcon/>
                </IconButton>
                <IconButton>
                  <KeyboardArrowRightIcon/>
                </IconButton>
              </div>
            </StyledTableCell>
          </TableRow>
    );
}

export default HeaderCostoPasto;