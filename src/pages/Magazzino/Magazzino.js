import React, { Fragment } from 'react';
import { TableCell, Typography } from '@material-ui/core/';
import SortingTable from 'components/SortingTable/SortingTable';
import Selector from 'components/Selector';
import { it } from 'date-fns/locale'
import format from "date-fns/format";
import WorkBenchTopBar from 'components/WorkBenchTopBar';

const oggi = format(new Date(), "d MMM yyyy", { locale: it })

const columns = ["Ortofrutta", "UM", "Quantità", "Costo/UM", "Tot."].map((columnName, i) => {
  return i === 0 ? 
  (
    <TableCell align="left" style={{padding: '8px 16px'}} key={columnName}>
      <b>{columnName}</b>
    </TableCell>
  ) : (
    <TableCell align="right" style={{padding: '8px 16px'}} key={columnName}>
      <b>{columnName}</b>
    </TableCell>
  )
});

const numeri = columns.map(day => parseInt((Math.random() * 101).toFixed(0)))

numeri.pop();

const rows = {
  "Olive": [...numeri],
  "Fagioli": [...numeri],
  "Tonno": [...numeri],
  "Pomodori": [...numeri]
}

const headers = [
  <Typography id="nomeMagazzino" color="primary" variant="body1"><b>Nome_Magazzino</b></Typography>,
  <Typography id="dataDiOggi" color="primary" variant="body1"><b>{ oggi }</b></Typography>,
  <Selector id="categoria" type="Categoria"/>
]

const Magazzino = () => {
  return (
    <Fragment>
      <WorkBenchTopBar headers={headers}/>
      <SortingTable 
        rows={rows} 
        columns={columns}
      />
    </Fragment>
  );
}

export default Magazzino;