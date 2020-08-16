import React from 'react';
import { TableCell, Typography } from '@material-ui/core/';
import SortingTable from 'components/SortingTable/SortingTable';
import Selector from 'components/Selector';
import { it } from 'date-fns/locale'
import format from "date-fns/format";

const oggi = format(new Date(), "d MMM yyyy", { locale: it })

const colNames = ["Ortofrutta", "UM", "Quantità", "Costo/UM", "Tot."].map((colName, i) => {
    return <TableCell style={{padding: '8px 16px'}} key={colName}><b>{colName}</b></TableCell>
});

const numeri = colNames.map(day => (Math.random() * 101).toFixed(0))

numeri.pop()

const objEntries = {
  "Olive": [...numeri],
  "Fagioli": [...numeri],
  "Tonno": [...numeri],
  "Pomodori": [...numeri]
}

const headers = [
  <Typography color="primary" variant="body1"><b>Nome_Magazzino</b></Typography>,
  <Typography color="primary" variant="body1"><b>{oggi}</b></Typography>,
  <Selector type="Categoria"/>
]

const Magazzino = () => {
  return (
    <SortingTable 
      objEntries={objEntries} 
      colArray={colNames} 
      headers={headers} 
      colSpan={colNames.length}
    />
  );
}

export default Magazzino;