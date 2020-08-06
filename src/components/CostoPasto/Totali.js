import React, { Fragment } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const Totali = ({ classes }) => {
    return(
        <Fragment>
            <TableRow>
                <TableCell rowSpan={4} colSpan={4}/>
                <TableCell><b>Numero Pasti</b></TableCell>
                <TableCell>12312</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <b>Costo Totale</b>
                    <IconButton>
                        <KeyboardArrowDownIcon />
                    </IconButton>
                </TableCell>
                <TableCell>686868</TableCell>
            </TableRow>
            <Collapse in={true} timeout="auto" unmountOnExit>
                <TableRow>
                    <TableCell className={classes.nested}>Totale Primi</TableCell>
                    <TableCell className={classes.nested}>121</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className={classes.nested}>Totale Secondi</TableCell>
                    <TableCell className={classes.nested}>2343</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className={classes.nested}>Totale Contorni</TableCell>
                    <TableCell className={classes.nested}>4234</TableCell>
                </TableRow>
            </Collapse>
            <TableRow>
                <TableCell><b>Costo per Pasto</b></TableCell>
                <TableCell>1928309</TableCell>
            </TableRow>
        </Fragment>
    );
}

export default Totali;