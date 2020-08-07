import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles(theme => ({
    nested: {
      paddingLeft: theme.spacing(4),
    }
}));

const Totali = () => {
    const classes = useStyles();

    return(
        <Fragment>
            <TableRow>
                <TableCell rowSpan={4} colSpan={4}/>
                <TableCell><b>Numero Pasti</b></TableCell>
                <TableCell align="right">12312</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <b>Costo Totale</b>
                    <IconButton>
                        <KeyboardArrowDownIcon />
                    </IconButton>
                </TableCell>
                <TableCell align="right"><b>1243</b></TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ padding: 0 }} colSpan={6}>
                    <Collapse in={true} timeout="auto" unmountOnExit>
                        <Table size="small" aria-label="purchases">
                            <TableBody>
                                <TableRow>
                                    <TableCell>Totale Primi</TableCell>
                                    <TableCell align="right">34%</TableCell>
                                    <TableCell align="right">121</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Totale Secondi</TableCell>
                                    <TableCell align="right">34%</TableCell>
                                    <TableCell align="right">2343</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Totale Contorni</TableCell>
                                    <TableCell align="right">34%</TableCell>
                                    <TableCell align="right">4234</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Collapse>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell><b>Costo per Pasto</b></TableCell>
                <TableCell align="right">1928309</TableCell>
            </TableRow>
        </Fragment>
    );
}

export default Totali;