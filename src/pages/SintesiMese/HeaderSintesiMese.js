import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import Selector from '../../components/Selector';
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

const HeaderSintesiMese = ({ colSpan }) => {
    const classes = useStyles();

    return(
        <TableRow>
            <StyledTableCell colSpan={2} align="left">
              <BackArrowButton path="Menù" />
            </StyledTableCell>
            <StyledTableCell colSpan={colSpan}>
              <Box mr={2} width="fit-content" display="inline">
                <Selector type='Mese'/>
              </Box>
              <Selector type='Anno'/>
            </StyledTableCell>
        </TableRow>
    );
}

export default HeaderSintesiMese;