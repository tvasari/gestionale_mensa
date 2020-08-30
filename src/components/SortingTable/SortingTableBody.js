import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import StyledTableRow from 'components/StyledTableRow';
import createRows from 'utils/createRows';

const SortingTableBody = ({ rows }) => {
  return (
    <TableBody>
      <StyledTableRow>
        { createRows(rows) }
      </StyledTableRow>
    </TableBody>
  );
}

export default SortingTableBody;