import React, { Fragment, useState } from 'react';
import { IconButton, TableCell } from '@material-ui/core/';
import EditIcon from '@material-ui/icons/Edit';
import getMonthDays from 'utils/getMonthDays';
import SortingTable from 'components/SortingTable/SortingTable';
import WorkBenchTopBar from 'components/WorkBenchTopBar';
import { SelectorPresenze, SelectorMese, SelectorAnno, SelectorPasti } from 'components/Selectors';

const PresenzeMese = () => {
  const [azienda, setAzienda] = useState('Cociv');
  const [mese, setMese] = useState('Gennaio');
  const [anno, setAnno] = useState('2020');
  const [pasto, setPasto] = useState('Colazione');

  const weekDays = [
    <TableCell key="empty"></TableCell>, 
    ...getMonthDays(parseInt(anno), 8).map(day => {
      return(
          <TableCell key={day} align="right" style={{padding: '4px 16px'}}>
            <b>{ day }</b>
          </TableCell>
        );
      })
  ];

  const createData = () => {
    
  }

  return (
    <Fragment>
      <WorkBenchTopBar>
        <IconButton>
            <EditIcon/>
        </IconButton>
        <SelectorMese setMese={setMese} mese={mese}/>
        <SelectorAnno setAnno={setAnno} anno={anno}/>
        <SelectorPasti setPasto={setPasto} pasto={pasto}/>
        <SelectorPresenze setAzienda={setAzienda} azienda={azienda}/>
      </WorkBenchTopBar>
      <SortingTable 
        columns={weekDays}
      />
    </Fragment>
  );
}

export default PresenzeMese;