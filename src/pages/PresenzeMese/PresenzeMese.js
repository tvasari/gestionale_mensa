import React, { Fragment } from 'react';
import { IconButton, TableCell } from '@material-ui/core/';
import EditIcon from '@material-ui/icons/Edit';
import getMonthDays from 'utils/getMonthDays';
import SortingTable from 'components/SortingTable/SortingTable';
import WorkBenchTopBar from 'components/WorkBenchTopBar';
import { SelectorPresenze, SelectorMese, SelectorAnno, SelectorPasti } from 'components/Selectors';

const headers = [
  <IconButton id="pMeseEdit">
      <EditIcon/>
  </IconButton>,
  <SelectorMese id="pMeseMese"/>,
  <SelectorAnno id="pMeseAnno"/>,
  <SelectorPasti id="pMesePasti"/>,
  <SelectorPresenze id="pMesePresenze"/>,
] 


const weekDays = [
  <TableCell key="empty"></TableCell>, 
  ...getMonthDays(2020, 8).map((day, i) => {
    return(
        <TableCell key={day} align="right" style={{padding: '4px 16px'}}>
          <b>{ day }</b>
        </TableCell>
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