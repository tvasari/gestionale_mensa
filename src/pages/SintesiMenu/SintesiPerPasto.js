import React from 'react';
import { TableRow, TableCell } from '@material-ui/core/';

const SintesiPerPasto = ({ pasto, primiPiatti }) => {
    return(
        <TableRow>
            <TableCell rowSpan={4}><b>Pranzo</b></TableCell>
            <TableCell rowSpan={2}><b>Primi</b></TableCell>
            { primiPiatti }
          </TableRow>
          <TableRow>
            { primiPiatti }
          </TableRow>
          <TableRow>
            <TableCell rowSpan={2}><b>Secondi</b></TableCell>
            { primiPiatti }
          </TableRow>
          <TableRow>
            { primiPiatti }
        </TableRow>
    );
}

export default SintesiPerPasto;