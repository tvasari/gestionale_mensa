import React from 'react';
import { TableHead, TableRow } from '@material-ui/core/';

const SortingTableHeader = ({ columns }) => {
    return(
        <TableHead>
            <TableRow>
                { columns }
            </TableRow>
        </TableHead>
    );
}

export default SortingTableHeader;
