import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import headerGenerator from 'utils/headerGenerator';
import HeaderPresenzeMese from './HeaderPresenzeMese';

const useStyles = makeStyles(theme => ({
    container: theme.container,
    table: theme.table,
    compressedCell: {
        padding: '4px 16px'
    }
}));

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const colNames = ["Giorno", "Cociv Badge", "Cociv Firme", "Tot. Cociv", "Tot."].map((colName, i) => {
    return <Typography variant='body1' key={colName} color='primary'><b>{colName}</b></Typography>
});


const dataRowCreator = (month, year, style) => {
    const monthDays = new Date(year, month + 1, 0).getDate();
    let dataRow = [];

    for (let i=0; i <= monthDays; i++) {
        dataRow.push(
            <StyledTableRow key={monthDays + i * 2}>
                <TableCell className={style} key={monthDays + i}>{i}</TableCell>
                <TableCell className={style} key={"badge" + i}>badge</TableCell>
                <TableCell className={style} key={"firme" + i}>firme</TableCell>
                <TableCell className={style} key={"totale" + i}>totale</TableCell>
                <TableCell className={style} key={"tot" + i}>Tot.</TableCell>
            </StyledTableRow>
        );
    }
    return dataRow;
};

const MonthlyTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
        <Table stickyHeader className={classes.table}>
            
            <TableHead>
                <HeaderPresenzeMese />
                <TableRow>
                    { headerGenerator(colNames) }
                </TableRow>
            </TableHead>

            <TableBody>
                { dataRowCreator(8, 2020, classes.compressedCell) }
            </TableBody>

        </Table>
    </TableContainer>
  );
}

export default MonthlyTable;