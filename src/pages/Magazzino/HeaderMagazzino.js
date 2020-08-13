import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import StyledTableCell from 'components/StyledTableCell';
import Selector from 'components/Selector';
import { it } from 'date-fns/locale'
import format from "date-fns/format";

const oggi = format(new Date(), "d MMM yyyy", { locale: it })

const HeaderMagazzino = () => {
    return(
        <TableRow>
            <StyledTableCell>
                <Typography color="primary" variant="body1"><b>Nome_Magazzino</b></Typography>
            </StyledTableCell>
            <StyledTableCell>
                <Typography color="primary" variant="body1"><b>{oggi}</b></Typography>
            </StyledTableCell>
            <StyledTableCell colSpan={3}>
                <Selector type="Categoria"/>
            </StyledTableCell>
        </TableRow>
    );
}

export default HeaderMagazzino;