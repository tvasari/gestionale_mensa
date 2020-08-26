import React, { Fragment } from 'react';
import TableCell from '@material-ui/core/TableCell';
import getMonthDays from 'utils/getMonthDays';
import BackArrowButton from 'components/BackArrowButton';
import SortingTable from 'components/SortingTable/SortingTable';
import Selector from 'components/Selector';
import WorkBenchTopBar from 'components/WorkBenchTopBar';

const weekDays = [
  <TableCell></TableCell>, 
  ...getMonthDays(2020, 8).map(day => {
    return(
      <TableCell align="right" style={{padding: '4px 16px'}}>
        <b>{ day }</b>
      </TableCell>
    );
  })
];

const numeri = weekDays.map(day => parseInt((Math.random() * 101).toFixed(0)))

numeri.pop()

const rows = {
  Uova: [...numeri],
  Latte: [...numeri],
  Olio: [...numeri],
  Zucchero: [...numeri]
}

const headers = [
  <BackArrowButton id="arquata_1" path="arquata_1" />,
  <Selector id="mese" key="Mese" type="Mese"/>,
  <Selector id="anno" key="Anno" type="Anno"/>,
  <Selector id="categoria" key="Categoria" type="Categoria"/>
]


const Storico = () => {
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

export default Storico;