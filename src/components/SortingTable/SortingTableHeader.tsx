import React from 'react';
import { TableHead, TableRow } from '@material-ui/core/';

const SortingTableHeader = ({ columns }: any) => {
  return(
    <TableHead>
      <TableRow>
        { columns }
      </TableRow>
    </TableHead>
  );
}

export default SortingTableHeader;
