import React, { Fragment, useState } from 'react';
import TableCell from '@material-ui/core/TableCell';
import BackArrowButton from 'components/BackArrowButton';
import SortingTable from 'components/SortingTable/SortingTable';
import { SelectorCategoria, SelectorAnno, SelectorMese } from 'components/Selectors';
import WorkBenchTopBar from 'components/WorkBenchTopBar';
import Calendar from 'utils/Calendar';

const weekDays = [
  <TableCell></TableCell>, 
  ...Calendar.getAllMonthDays(2020, 8).map(day => {
    return(
      <TableCell align="right" style={{padding: '4px 16px'}}><b>{ day }</b></TableCell>
    );
  })
];

const numeri = weekDays.map(() => parseInt((Math.random() * 101).toFixed(0)))

numeri.pop()

const rows = {
  Uova: [...numeri],
  Latte: [...numeri],
  Olio: [...numeri],
  Zucchero: [...numeri]
}


const Storico = () => {
  const [categoria, setCategoria] = useState("Ortofrutta");
  const [mese, setMese] = useState('Gennaio');
  const [anno, setAnno] = useState('2020');

  return (
    <Fragment>
      <WorkBenchTopBar>
        <BackArrowButton path="arquata-1" />
        <SelectorMese setMese={setMese} mese={mese}/>
        <SelectorAnno setAnno={setAnno} anno={anno}/>
        <SelectorCategoria categoria={categoria} setCategoria={setCategoria}/>
      </WorkBenchTopBar>
      <SortingTable rows={rows} columns={weekDays}/>
    </Fragment>
  );
}

export default Storico;