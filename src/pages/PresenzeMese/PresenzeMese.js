import React, { Fragment, useState, useEffect } from 'react';
import { IconButton, TableCell, TableHead, TableBody, TableContainer, Table, TableRow } from '@material-ui/core/';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles, styled } from '@material-ui/core';
import getMonthDays from 'utils/getMonthDays';
import WorkBenchTopBar from 'components/WorkBenchTopBar';
import { SelectorPresenze, SelectorMese, SelectorAnno, SelectorPasti } from 'components/Selectors';
import StyledTableRow from 'components/StyledTableRow';
import monthToNumber from 'utils/monthToNumber';

const useStyles = makeStyles(theme => ({
  container: {...theme.workBench, ...theme.container},
}));

const CompressedTableCell = styled(TableCell)(() => ({
    padding: '2px 16px'
}));

const PresenzeMese = () => {
  const classes = useStyles();
  const [azienda, setAzienda] = useState('Cociv');
  const [mese, setMese] = useState('Gennaio');
  const [anno, setAnno] = useState('2020');
  const [pasto, setPasto] = useState('Colazione');

  useEffect(() => {
    fetch('http://localhost:3001/presenze')
    .then(result => result.json())
    .then(data => console.log(data))
  });

  const weekDays = [
    <TableCell key="empty"></TableCell>, 
    ...getMonthDays(parseInt(anno), monthToNumber(mese)).map(day => {
      return(
          <CompressedTableCell key={day} align="right">
            <b>{ day }</b>
          </CompressedTableCell>
        );
      })
  ];

  const rowNames = [
    `${azienda} Badge`,
    `${azienda} Firme`,
    `TOT ${azienda}`,
    "TOT"
  ]

  const createData = (columns, rows) => {
    return rows.map(row => {
      return (
        <StyledTableRow key={row}>
          <CompressedTableCell>{ row }</CompressedTableCell>

        </StyledTableRow>
      );
    })

  }

  return (
    <Fragment>
      <WorkBenchTopBar>
        <IconButton>
            <EditIcon/>
        </IconButton>
        <SelectorMese setMese={setMese} mese={mese}/>
        <SelectorAnno setAnno={setAnno} anno={anno}/>
        <SelectorPasti setPasto={setPasto} pasto={pasto}/>
        <SelectorPresenze setAzienda={setAzienda} azienda={azienda}/>
      </WorkBenchTopBar>
      <TableContainer className={classes.container}>
        <Table>
          <TableHead>
            <TableRow>
              { weekDays }
            </TableRow>
          </TableHead>
          <TableBody>
            { createData(weekDays, rowNames) }
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}

export default PresenzeMese;