import React, { Fragment } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const numPasti = 144;
const costoPasto = 129;
const costoTot = costoPasto * 3;
const perc = (costoPasto / costoTot * 100).toFixed(1);

const Totali = () => {

    return(
        <Fragment>
            <TableRow>
                <TableCell rowSpan={4} colSpan={4}/>
                <TableCell><b>Numero Pasti</b></TableCell>
                <TableCell align="right">{ numPasti }</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <b>Costo Totale</b>
                    <IconButton>
                        <KeyboardArrowDownIcon />
                    </IconButton>
                </TableCell>
                <TableCell align="right"><b>{ costoTot }</b></TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ padding: 0 }} colSpan={6}>
                    <Collapse in={true} timeout="auto" unmountOnExit>
                        <Table size="small" aria-label="purchases">
                            <TableBody>
                                <TableRow>
                                    <TableCell>Totale Primi</TableCell>
                                    <TableCell align="right">{ perc }%</TableCell>
                                    <TableCell align="right">{ costoPasto }</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Totale Secondi</TableCell>
                                    <TableCell align="right">{ perc }%</TableCell>
                                    <TableCell align="right">{ costoPasto }</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Totale Contorni</TableCell>
                                    <TableCell align="right">{ perc }%</TableCell>
                                    <TableCell align="right">{ costoPasto }</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Collapse>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell><b>Costo per Pasto</b></TableCell>
                <TableCell align="right">{ (costoTot / numPasti).toFixed(2) }</TableCell>
            </TableRow>
        </Fragment>
    );
}

export default Totali;