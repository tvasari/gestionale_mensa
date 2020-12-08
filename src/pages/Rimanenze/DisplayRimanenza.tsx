import React, { Fragment, useState } from 'react';
import { TableCell, Typography } from '@material-ui/core/';
import SortingTable from 'components/SortingTable/SortingTable';
import { SelectorCategoria } from 'components/Selectors';
import WorkBenchTopBar from 'components/WorkBenchTopBar';
import { magazzinoHeaderLabels, magazzinoRows } from 'utils/fakeData';

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


const DisplayRimanenza = () => {
  const [categoria, setCategoria] = useState("Ortofrutta");

  return (
    <Fragment>
      <WorkBenchTopBar>
        <Typography id="dRimanenzaNomeMagazzino" color="primary" variant="body1">
          <b>Nome_Magazzino</b>
        </Typography>
        <Typography id="dRimanenzaDataRimanenza" color="primary" variant="body1">
          <b>31 agosto 2021</b>
        </Typography>
        <SelectorCategoria id="dRimanenzaCategoria" categoria={categoria} setCategoria={setCategoria}/>
      </WorkBenchTopBar>
      <SortingTable rows={magazzinoRows} columns={headerLabels}/>
    </Fragment>
  );
}

export default DisplayRimanenza;