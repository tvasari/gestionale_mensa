import React, { Fragment, useState, useEffect } from 'react';
import { IconButton, TableCell, TableHead, TableBody, TableContainer, Table, TableRow } from '@material-ui/core/';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles, styled } from '@material-ui/core';
import WorkBenchTopBar from 'components/WorkBenchTopBar';
import { SelectorPresenze, SelectorMese, SelectorAnno, SelectorPasti } from 'components/Selectors';
import StyledTableRow from 'components/StyledTableRow';
import Calendar from 'utils/Calendar';

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

  const rowNames = [
    `${azienda} Badge`,
    `${azienda} Firme`,
    `TOT ${azienda}`,
    "TOT"
  ]

  async function getPresenze(url) {
    const response = await fetch(url);
    return response.json()
  }

  async function getFilteredPresenze() {
    const data = await getPresenze('http://localhost:3001/presenze');

    const presenze = await data.filter(objPresenza => {
      return objPresenza.nome_azienda === azienda 
      && objPresenza.nome_pasto === pasto 
      && new Date(objPresenza.data).getMonth() === Calendar.monthStringToNumber(mese)
      && new Date(objPresenza.data).getFullYear() === parseInt(anno)
    })

    return presenze
  }

  const createWeekDaysCells = () => {
    return Calendar.getAllMonthDays(parseInt(anno), Calendar.monthStringToNumber(mese)).map((day, i) => {
      return(
        <CompressedTableCell key={day} monthdaynumber={i + 1} align="right">
          <b>{ day }</b>
        </CompressedTableCell>
      );
    })
  }

  const weekDays = [
    <TableCell key="empty"></TableCell>,
    ...createWeekDaysCells()
  ];

  const createData = (columns, rows) => {
    return rows.map(row => {
      return (
        <StyledTableRow key={row}>
          <CompressedTableCell>{ row }</CompressedTableCell>
          {
            createWeekDaysCells().map(weekDay => {
              return <CompressedTableCell key={weekDay.key}>{weekDay.props.monthdaynumber}</CompressedTableCell>
            })
          }
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