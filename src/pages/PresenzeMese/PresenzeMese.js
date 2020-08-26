import React, { Fragment } from 'react';
import { IconButton, TableCell } from '@material-ui/core/';
import EditIcon from '@material-ui/icons/Edit';
import getMonthDays from 'utils/getMonthDays';
import Selector from 'components/Selector';
import SortingTable from 'components/SortingTable/SortingTable';
import WorkBenchTopBar from 'components/WorkBenchTopBar';

const headers = [
  <IconButton id="edit">
      <EditIcon/>
  </IconButton>,
  <Selector id="mese" key="Mese" type="Mese"/>,
  <Selector id="anno" key="Anno" type="Anno"/>,
  <Selector id="filtra" key="Filtra" type="Filtra"/>,
  <Selector id="presenze" key="Presenze" type="Presenze"/>,
]


const weekDays = [
  <TableCell></TableCell>, 
  ...getMonthDays(2020, 8).map(day => {
    return(
        <TableCell align="right" style={{padding: '4px 16px'}}><b>{day}</b></TableCell>
      );
    })
];

const numeri = weekDays.map(day => parseInt((Math.random() * 101).toFixed(0)))

numeri.pop()

const rows = {
  "Cociv Badge": [...numeri],
  "Cociv Firme": [...numeri],
  "Tot. Cociv": [...numeri],
  "Tot.": [...numeri]
}

const PresenzeMese = () => {
  return (
    <Fragment>
      <WorkBenchTopBar headers={headers}/>
      <SortingTable 
        rows={rows} 
        columns={weekDays}
      />
    </Fragment>
  );
}

export default PresenzeMese;