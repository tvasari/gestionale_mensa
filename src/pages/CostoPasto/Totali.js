import React, { Fragment } from 'react';
import { Table, TableBody, TableRow, TableCell} from '@material-ui/core/';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { KeyboardArrowUp, KeyboardArrowDown } from '@material-ui/icons/';
import staticText from "staticText.json";


const Totali = () => {
  const numPasti = 144;
  const costoPasto = 129;
  const costoTot = costoPasto * 3;
  const perc = (costoPasto / costoTot * 100).toFixed(1);
  const portate = ["Primi", "Secondi", "Contorni"]

  return(
    <Fragment>
      <TableRow>
        <TableCell rowSpan={4} colSpan={4}/>
        <TableCell><b>{ staticText.Totali.pasti }</b></TableCell>
        <TableCell align="right">{ numPasti }</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <b>{ staticText.Totali.costo }</b>
          <IconButton>
            <KeyboardArrowDown />
          </IconButton>
        </TableCell>
        <TableCell align="right"><b>{ costoTot }</b></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={6}>
          <Collapse in={true} timeout="auto" unmountOnExit>
            <Table size="small" aria-label="purchases">
              <TableBody>
                {
                  portate.map(portata => {
                    return(
                      <TableRow>
                        <TableCell>{ `${staticText.Totali.totale} ${portata}` }</TableCell>
                        <TableCell align="right">{ perc }%</TableCell>
                        <TableCell align="right">{ costoPasto }</TableCell>
                      </TableRow>
                    );
                  })
                }
              </TableBody>
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell><b>{ staticText.Totali.costoPerPasto }</b></TableCell>
        <TableCell align="right">{ (costoTot/numPasti).toFixed(2) }</TableCell>
      </TableRow>
    </Fragment>
  );
}

export default Totali;