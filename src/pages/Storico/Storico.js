import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import getMonthDays from 'utils/getMonthDays';
import BackArrowButton from 'components/BackArrowButton';
import SortingTable from 'components/SortingTable/SortingTable';
import Selector from 'components/Selector';

const weekDays = [<TableCell></TableCell>, ...getMonthDays(2020, 8).map(day => <TableCell align="right" style={{padding: '4px 16px'}}><b>{day}</b></TableCell>)]
const primiPiatti = getMonthDays(2020, 8).map(day => 'uova ')

const numeri = weekDays.map(day => (Math.random() * 101).toFixed(0))

numeri.pop()

const oggetti = {
  Uova: [...numeri],
  Latte: [...numeri],
  Olio: [...numeri],
  Zucchero: [...numeri]
}

const headers = [
  <BackArrowButton path="arquata_1" />,
  <Selector key="Mese" type="Mese"/>,
  <Selector key="Anno" type="Anno"/>,
  <Selector key="Categoria" type="Categoria"/>
]


const Storico = () => {
  return (
    <SortingTable 
      objEntries={oggetti} 
      colArray={weekDays} 
      headers={headers} 
      colSpan={primiPiatti.length}
    />
  );
}

export default Storico;