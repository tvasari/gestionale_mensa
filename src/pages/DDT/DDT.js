import React, { Fragment } from 'react';
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

const columns = headCells.map((headCell, i) => {
  return(
    <TableCell
      key={headCell.id}
      sortDirection='asc'
    >
      <TableSortLabel
        active={true}
        direction='asc'
      >
      {headCell.label}
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

const headers = [
  <BackArrowButton id="ddtBackArrow" path="arquata_1" />,
  <SelectorMese id="ddtMese"/>,
  <SelectorAnno id="ddtAnno"/>,
  <SelectorCategoria id="ddtCategoria"/>,
  <AddFormDialog 
    id="ddtAddFormDialog" 
    trigger={<AddIcon color="primary"/>} 
    title="DDT"
    textFieldPlaceholder="Fornitore"
  />
]

const DDT = () => {
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

export default DDT;