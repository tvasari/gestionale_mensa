import React from 'react';
import { IconButton, TableCell } from '@material-ui/core/';
import EditIcon from '@material-ui/icons/Edit';
import getMonthDays from 'utils/getMonthDays';
import Selector from 'components/Selector';
import SortingTable from 'components/SortingTable/SortingTable'

const headers = [
  <IconButton>
      <EditIcon/>
  </IconButton>,
  <Selector key="Mese" type="Mese"/>,
  <Selector key="Anno" type="Anno"/>,
  <Selector key="Filtra" type="Filtra"/>,
  <Selector key="Presenze" type="Presenze"/>,
]


const weekDays = [<TableCell></TableCell>, ...getMonthDays(2020, 8).map(day => <TableCell align="right" style={{padding: '4px 16px'}}><b>{day}</b></TableCell>)]
const primiPiatti = getMonthDays(2020, 8).map(day => 'uova ')

const numeri = weekDays.map(day => (Math.random() * 101).toFixed(0))

numeri.pop()

const oggetti = {
  "Cociv Badge": [...numeri],
  "Cociv Firme": [...numeri],
  "Tot. Cociv": [...numeri],
  "Tot.": [...numeri]
}

const PresenzeMese = () => {
  return (
    <SortingTable 
      objEntries={oggetti} 
      colArray={weekDays} 
      headers={headers} 
      colSpan={primiPiatti.length}
    />
  );
}

export default PresenzeMese;