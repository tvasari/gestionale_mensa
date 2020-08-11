import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import Selector from '../../components/Selector';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import StyledTableCell from '../../components/StyledTableCell';

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        maxWidth: '80%',
        float: 'right',
        height: '90vh'
    },
    compressedCell: {
        padding: '4px 16px'
    }
});

const values = ["Giorno", "Cociv Badge", "Cociv Firme", "Tot. Cociv", "Tot."].map((item, i) => {
    return <h3 key={item} style={{color: '#1976d2'}}>{item}</h3>
});

const headerGenerator = (array) => {
    return (
        array.map((data, i) => {
            return (
                <StyledTableCell key={data + i}>
                    {data}
                </StyledTableCell>
            );
        })
    );
};

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
  const selectors = [
      <Selector key="Mese" type="Mese"/>,
      <Selector key="Anno" type="Anno"/>,
      <Selector key="Filtra" type="Filtra"/>,
      <Selector key="Presenze" type="Presenze"/>,
    ]

  return (
    <TableContainer component={Paper} className={classes.table}>
        <Table stickyHeader>
            
            <TableHead>
                <TableRow>
                    { headerGenerator(selectors) }
                    <StyledTableCell>
                        <IconButton>
                            <SearchIcon/>
                        </IconButton>
                        <IconButton>
                            <EditIcon/>
                        </IconButton>
                    </StyledTableCell>
                </TableRow>
                <TableRow>
                    { headerGenerator(values) }
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