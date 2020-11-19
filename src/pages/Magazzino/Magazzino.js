import React, { Fragment, useState } from 'react';
import { TableCell, Typography } from '@material-ui/core/';
import SortingTable from 'components/SortingTable/SortingTable';
import { SelectorCategoria } from 'components/Selectors';
import { it } from 'date-fns/locale'
import format from "date-fns/format";
import WorkBenchTopBar from 'components/WorkBenchTopBar';
import { magazzinoHeaderLabels, magazzinoRows } from 'utils/fakeData';

const oggi = format(new Date(), "d MMM yyyy", { locale: it });

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
  const [categoria, setCategoria] = useState("Ortofrutta");

  return (
    <Fragment>
      <WorkBenchTopBar>
        <Typography id="magazzinoNomeMagazzino" color="primary" variant="body1">
          <b>Nome_Magazzino</b>
        </Typography>
        <Typography id="magazzinoDataDiOggi" color="primary" variant="body1">
          <b>{ oggi }</b>
        </Typography>
        <SelectorCategoria id="magazzinoCategoria" categoria={categoria} setCategoria={setCategoria}/>
      </WorkBenchTopBar>
      <SortingTable rows={magazzinoRows} columns={headerLabels}/>
    </Fragment>
  );
}

export default Magazzino;