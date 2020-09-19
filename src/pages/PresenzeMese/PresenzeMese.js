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
  const [presenzeArray, setPresenzeArray] = useState();

  const rowNames = [
    `${azienda} Badge`,
    `${azienda} Firme`,
    `TOT ${azienda}`,
    "TOT"
  ]

  useEffect(() => {

    async function getPresenze() {
      await fetch('http://localhost:3001/presenze')
        .then(response => response.json())
        .then(presenze => presenze.filter(objPresenza => {
          return objPresenza.nome_azienda === azienda 
          && objPresenza.nome_pasto === pasto 
          && new Date(objPresenza.data).getMonth() === Calendar.monthStringToNumber(mese)
          && new Date(objPresenza.data).getFullYear() === parseInt(anno)
        }))
        .then(filteredPresenze => setPresenzeArray(filteredPresenze))
    }

    getPresenze();

  }, [azienda, pasto, mese, anno])

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
              if (presenzeArray !== undefined && presenzeArray.length > 0) { 
                return new Date(presenzeArray[0].data).getDate() === weekDay.props.monthdaynumber
                ? (
                  <CompressedTableCell key={weekDay.key}>
                    { presenzeArray[0].numero_presenze }
                  </CompressedTableCell>
                ) : (
                  <CompressedTableCell key={weekDay.key}></CompressedTableCell>
                )
              } else {
                return <CompressedTableCell key={weekDay.key}></CompressedTableCell>
              }
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