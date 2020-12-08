import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles, styled, IconButton } from '@material-ui/core';
import { TableCell, TableHead, TableBody, TableContainer, Table, TableRow } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import WorkBenchTopBar from 'components/WorkBenchTopBar';
import { SelectorPresenze, SelectorMese, SelectorAnno, SelectorPasti } from 'components/Selectors';
import StyledTableRow from 'components/StyledTableRow';
import Calendar from 'utils/Calendar';
import { Presenza } from 'model/data.model';

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
  const [presenzeArray, setPresenzeArray] = useState<Presenza[]>([]);

  const rows = {
    badge: `${azienda} Badge`,
    firma: `${azienda} Firme`,
    totaleAzienda: `TOT ${azienda}`,
    totaleComplessivo: "TOT"
  }

  useEffect(() => {

    async function getPresenze() {
      await fetch('http://localhost:3000/presenze')
        .then(response => response.json())
        .then((presenze: Presenza[]) => presenze.filter((presenza: Presenza) => {
          return presenza.nome_azienda === azienda 
          && presenza.nome_pasto === pasto 
          && new Date(presenza.data).getMonth() === Calendar.monthStringToNumber(mese)
          && new Date(presenza.data).getFullYear() === parseInt(anno)
        }))
        .then((filteredPresenze: Presenza[]) => setPresenzeArray(filteredPresenze))
        .catch(e => `Unable to retrive data ${e}` )
    }

    getPresenze();

  }, [azienda, pasto, mese, anno]);

  const getAllMonthDays = (anno: string, mese: string) => {
    const { getAllMonthDays, monthStringToNumber } = Calendar;

    return getAllMonthDays(
      parseInt(anno),
      monthStringToNumber(mese)
    )
  }

  const createWeekDaysCells = (anno: string, mese: string) => {
    return getAllMonthDays(anno, mese).map((day, i) => {
      return(
        <CompressedTableCell key={day} monthdaynumber={i + 1} align="right">
          <b>{ day }</b>
        </CompressedTableCell>
      );
    })
  }

  const weekDaysRow = [<TableCell key="empty"></TableCell>, ...createWeekDaysCells(anno, mese)];

  const isSameDay = (presenzaDate, monthdaynumber) => {
    return new Date(presenzaDate).getDate() === monthdaynumber ? true : false;
  }

  const isSameType = (presenzaType, presenzaRow) => {
    return presenzaType === presenzaRow ? true : false;
  }

  const createData = rows => {
    return Object.entries(rows).map(row => {
      return (
        <StyledTableRow key={row[1]}>
          <CompressedTableCell>{ row[1] }</CompressedTableCell>
          {
            createWeekDaysCells().map(weekDay => {
              const matchedPresenza = presenzeArray?.filter(presenza => {
                return (
                  isSameDay(presenza.data, weekDay.props.monthdaynumber) 
                  && isSameType(presenza.type, row[0])
                );
              });

              return (
                <CompressedTableCell key={weekDay.key}>
                  { matchedPresenza && matchedPresenza[0]?.numero_presenze }
                </CompressedTableCell>
              );
            })
          }
        </StyledTableRow>
      );
    })
  }

  return (
    <Fragment>
      <WorkBenchTopBar>
        <IconButton><EditIcon/></IconButton>
        <SelectorMese setMese={setMese} mese={mese}/>
        <SelectorAnno setAnno={setAnno} anno={anno}/>
        <SelectorPasti setPasto={setPasto} pasto={pasto}/>
        <SelectorPresenze setAzienda={setAzienda} azienda={azienda}/>
      </WorkBenchTopBar>
      <TableContainer className={classes.container}>
        <Table>
          <TableHead>
            <TableRow>{ weekDaysRow }</TableRow>
          </TableHead>
          <TableBody>
            { createData(rows) }
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}

export default PresenzeMese;