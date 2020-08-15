import React from 'react';
import { TableRow, IconButton } from '@material-ui/core/';
import EditIcon from '@material-ui/icons/Edit';
import Selector from 'components/Selector';
import StyledTableCell from 'components/StyledTableCell';
import headerGenerator from 'utils/headerGenerator';



const selectors = [
    <Selector key="Mese" type="Mese"/>,
    <Selector key="Anno" type="Anno"/>,
    <Selector key="Filtra" type="Filtra"/>,
    <Selector key="Presenze" type="Presenze"/>,
]

const HeaderPresenzeMese = () => {
    return(
        <TableRow>
            { headerGenerator(selectors) }
            <StyledTableCell>
                <IconButton>
                    <EditIcon/>
                </IconButton>
            </StyledTableCell>
        </TableRow>
    );
}

export default HeaderPresenzeMese;