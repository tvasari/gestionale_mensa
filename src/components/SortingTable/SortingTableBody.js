import React from 'react';
import { TableBody, TableRow } from '@material-ui/core/';
import createRows from 'utils/createRows';

const SortingTableBody = ({ objEntries, colArray }) => {
  return (
    <TableBody>
      <TableRow>
        { colArray }
      </TableRow>
      { createRows(objEntries) }
    </TableBody>
  );
}

export default SortingTableBody;