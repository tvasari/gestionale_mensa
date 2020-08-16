import React from 'react';
import { TableHead, TableRow } from '@material-ui/core/';
import headerGenerator from 'utils/headerGenerator';

const SortingTableHeader = ({ headers, colSpan }) => {
    return(
        <TableHead>
            <TableRow>
                { headerGenerator(headers, colSpan) }
            </TableRow>
        </TableHead>
    );
}

export default SortingTableHeader;
