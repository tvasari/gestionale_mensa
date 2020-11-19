import React, { Fragment, useState } from 'react';
import { TableCell, TableSortLabel } from '@material-ui/core/';
import BackArrowButton from 'components/BackArrowButton';
import SortingTable from 'components/SortingTable/SortingTable';
import { SelectorCategoria, SelectorAnno, SelectorMese } from 'components/Selectors';
import WorkBenchTopBar from 'components/WorkBenchTopBar';
import AddFormDialog from 'components/AddFormDialog';
import AddIcon from '@material-ui/icons/Add';

const headCells = [
  { id: 'id', label: 'N°' },
  { id: 'data', label: 'Data' },
  { id: 'categoria', label: 'Categoria' },
  { id: 'fornitore', label: 'Fornitore' }
];

const columns = headCells.map(headCell => {
  return(
    <TableCell key={headCell.id} sortDirection='asc'>
      <TableSortLabel active={true} direction='asc'>
        { headCell.label }
      </TableSortLabel>
    </TableCell>
  );
});

const rows = {
    1: ['17/08/20', 'Ortofrutta', 'xxx SRL'],
    2: ['17/08/20', 'Ortofrutta', 'xxx SRL'],
    3: ['17/08/20', 'Ortofrutta', 'xxx SRL'],
    4: ['17/08/20', 'Ortofrutta', 'xxx SRL']
}


const DDT = () => {
  const [categoria, setCategoria] = useState("Ortofrutta");
  const [mese, setMese] = useState('Gennaio');
  const [anno, setAnno] = useState('2020');

  return (
    <Fragment>
      <WorkBenchTopBar>
        <BackArrowButton id="ddtBackArrow" path="arquata-1" />
        <SelectorMese id="ddtMese" setMese={setMese} mese={mese}/>
        <SelectorAnno id="ddtAnno" setAnno={setAnno} anno={anno}/>
        <SelectorCategoria id="ddtCategoria" categoria={categoria} setCategoria={setCategoria}/>
        <AddFormDialog 
          id="ddtAddFormDialog" 
          trigger={<AddIcon color="primary"/>} 
          title="DDT"
          textFieldPlaceholder="Fornitore"
        />  
      </WorkBenchTopBar>
      <SortingTable rows={rows} columns={columns} />
    </Fragment>
  );
}

export default DDT;