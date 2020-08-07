import React, { Fragment } from 'react';
import { styled } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Piatto from './Piatto';

const StyledTableCell = styled(TableCell)({
  position: 'sticky',
  top: 0,
  backgroundColor: '#eaf4f4'
})

const Portata = ({ rows }) => {
    return(
        Object.keys(rows).map(portata => {
            return (
              <Fragment>
                <TableRow >
                  <StyledTableCell>
                    <b>{portata.toUpperCase()}</b>
                    <IconButton>
                      <NoteAddIcon />
                    </IconButton>
                  </StyledTableCell>
                  <StyledTableCell><b>Ingredienti</b></StyledTableCell>
                  <StyledTableCell><b>Quantità</b></StyledTableCell>
                  <StyledTableCell><b>UM</b></StyledTableCell>
                  <StyledTableCell><b>Costo/UM</b></StyledTableCell>
                  <StyledTableCell><b>Totale per ingrediente</b></StyledTableCell>
                </TableRow>
                <Fragment>
                  <Piatto rows={rows} portata={portata}/>
                </Fragment>
              </Fragment>
            );
        })
    );
}

export default Portata;
