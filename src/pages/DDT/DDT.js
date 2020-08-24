import React, { Fragment } from 'react';
import { TableCell, TableSortLabel } from '@material-ui/core/';
import BackArrowButton from 'components/BackArrowButton';
import SortingTable from 'components/SortingTable/SortingTable';
import Selector from 'components/Selector';
import WorkBenchTopBar from 'components/WorkBenchTopBar';

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
  <BackArrowButton path="arquata_1" />,
  <Selector key="Mese" type="Mese"/>,
  <Selector key="Anno" type="Anno"/>,
  <Selector key="Categoria" type="Categoria"/>
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