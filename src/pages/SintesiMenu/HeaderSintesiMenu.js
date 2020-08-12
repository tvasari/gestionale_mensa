import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import Selector from '../../components/Selector';
import StyledTableCell from '../../components/StyledTableCell';
import BackArrowButton from '../../components/BackArrowButton';

const HeaderSintesiMese = ({ colSpan }) => {
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