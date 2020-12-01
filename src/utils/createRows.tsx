import React from 'react';
import { styled } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import DDTDisplayDialog from 'pages/DDT/DDTDisplayDialog';
import StyledTableRow from 'components/StyledTableRow';

const CompressedCell = styled(TableCell)(() => ({
    padding: '2px 16px'
}));

const separateKeysFromValues = (rows: any) => {
  const allItems = Object.keys(rows);
  const allValues = Object.values(rows);
  return [allItems, allValues];
}

const isValidNumber = (value: number) => typeof value === 'number' && !isNaN(value);

const createAlignedCells = (cellValues: any[]) => {
  return cellValues.map((value, valueIndex) => {
    return(
      <CompressedCell align={isValidNumber(value) ? "right" : "inherit"} key={valueIndex}>
        { value }
      </CompressedCell>
    )
  })
}

function createRows(rows: any) {
  const [allItems, allValues]: any[] = separateKeysFromValues(rows);

  return(
    allItems.map((item: string, itemIndex: number) => {
      return (
        isValidNumber(parseInt(item))
        ? (
          <StyledTableRow key={item}>
            <CompressedCell>
              <DDTDisplayDialog 
                trigger={item}
                title="Magazzino"
                textFieldPlaceholder="Magazzino"
              />
            </CompressedCell>
            { createAlignedCells(allValues[itemIndex]) }
          </StyledTableRow>
        ) : (
          <StyledTableRow key={item}>
            <CompressedCell>
              {item}
            </CompressedCell>
            { createAlignedCells(allValues[itemIndex]) }
          </StyledTableRow>
        )
      );
    })
  );

}

export default createRows;