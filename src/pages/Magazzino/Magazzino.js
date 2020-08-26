import React, { Fragment } from 'react';
import { TableCell, Typography } from '@material-ui/core/';
import SortingTable from 'components/SortingTable/SortingTable';
import Selector from 'components/Selector';
import { it } from 'date-fns/locale'
import format from "date-fns/format";
import WorkBenchTopBar from 'components/WorkBenchTopBar';
import { magazzinoHeaderLabels, magazzinoRows } from 'utils/fakeData';

const oggi = format(new Date(), "d MMM yyyy", { locale: it });

const headers = [
  <Typography id="nomeMagazzino" color="primary" variant="body1"><b>Nome_Magazzino</b></Typography>,
  <Typography id="dataDiOggi" color="primary" variant="body1"><b>{ oggi }</b></Typography>,
  <Selector id="categoria" type="Categoria"/>
];

const headerLabels = magazzinoHeaderLabels.map((headerLabel, i) => {
  return(
    <TableCell 
      align={i === 0 ? "left" : "right"} 
      style={{padding: '8px 16px'}} 
      key={headerLabel}
    >
      <b>{ headerLabel }</b>
    </TableCell>
  );
});

const Magazzino = () => {
  return (
    <Fragment>
      <WorkBenchTopBar headers={headers}/>
      <SortingTable 
        rows={magazzinoRows} 
        columns={headerLabels}
      />
    </Fragment>
  );
}

export default Magazzino;