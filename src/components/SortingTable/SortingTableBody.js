import React from 'react';
import { TableBody, TableRow } from '@material-ui/core/';
import createRows from 'utils/createRows';

const SortingTableBody = ({ rows }) => {
  return (
    <TableBody>
      { createRows(rows) }
    </TableBody>
  );
}

export default SortingTableBody;