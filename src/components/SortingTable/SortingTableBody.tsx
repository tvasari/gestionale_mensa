import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import createRows from 'utils/createRows';

const SortingTableBody = ({ rows }: any) => {
  return (
    <TableBody>
      { createRows(rows) }
    </TableBody>
  );
}

export default SortingTableBody;