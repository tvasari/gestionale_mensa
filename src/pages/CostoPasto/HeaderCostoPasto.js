import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { KeyboardArrowLeft, KeyboardArrowRight, Edit } from '@material-ui/icons/';
import IconButton from '@material-ui/core/IconButton';
import TableRow from '@material-ui/core/TableRow';
import StyledTableCell from 'components/StyledTableCell';
import BackArrowButton from 'components/BackArrowButton';

const useStyles = makeStyles(theme => ({
  header: {
    color: theme.palette.primary.main, 
    fontWeight: '700',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  },
  barStart:{
    display: 'flex', 
    alignItems: 'center'
  },
  barEnd:{
    display: 'flex', 
    justifyContent: 'space-around'
  }
}));

const HeaderCostoPasto = () => {
  const classes = useStyles();

    return(
      <TableRow>
        <StyledTableCell colSpan={5} align="left">
          <div className={classes.barStart}>
            <BackArrowButton path="menù" />
            <h3 className={classes.header}><b>Pranzo(o Cena) 7 Agosto 2020</b></h3>
            <IconButton>
              <Edit/>
            </IconButton>
          </div>
        </StyledTableCell>
        <StyledTableCell>
          <div className={classes.barEnd}>
            <IconButton>
              <KeyboardArrowLeft/>
            </IconButton>
            <IconButton>
              <KeyboardArrowRight/>
            </IconButton>
          </div>
        </StyledTableCell>
      </TableRow>
    );
}

export default HeaderCostoPasto;