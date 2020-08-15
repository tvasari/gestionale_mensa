import React from 'react';
import { TableRow, Box } from '@material-ui/core/';
import Selector from 'components/Selector';
import StyledTableCell from 'components/StyledTableCell';
import BackArrowButton from 'components/BackArrowButton';
import headerGenerator from 'utils/headerGenerator';


const selectors = [
  <Selector key="Mese" type="Mese"/>,
  <Selector key="Anno" type="Anno"/>,
  <Selector key="Categoria" type="Categoria"/>,
]

const HeaderStorico = ({ colSpan }) => {
  return(
      <TableRow>
          <StyledTableCell colSpan={2} align="left">
            <BackArrowButton path="arquata_1" />
          </StyledTableCell>
          { headerGenerator(selectors, colSpan) }
      </TableRow>
  );
}

export default HeaderStorico;