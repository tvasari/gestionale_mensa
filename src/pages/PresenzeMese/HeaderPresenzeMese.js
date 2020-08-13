import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import StyledTableCell from 'components/StyledTableCell';
import SearchIcon from '@material-ui/icons/Search';
import EditIcon from '@material-ui/icons/Edit';
import Selector from 'components/Selector';
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
                    <SearchIcon/>
                </IconButton>
                <IconButton>
                    <EditIcon/>
                </IconButton>
            </StyledTableCell>
        </TableRow>
    );
}

export default HeaderPresenzeMese;