import React from 'react';
import { styled } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import DDTDisplayDialog from 'pages/DDT/DDTDisplayDialog';
import StyledTableRow from 'components/StyledTableRow';

const CompressedCell = styled(TableCell)(() => ({
    padding: '2px 16px'
}));

const separateKeysFromValues = (rows) => {
  const allItems = Object.keys(rows);
  const allValues = Object.values(rows);
  return [allItems, allValues];
}

const isValidNumber = value => typeof value === 'number' && !isNaN(value);

const createAlignedCells = (cellValues) => {
  return cellValues.map((value, valueIndex) => {
    return(
      <CompressedCell align={isValidNumber(value) ? "right" : "inherit"} key={valueIndex}>
        { value }
      </CompressedCell>
    )
  })
}

function createRows(rows) {
  const [allItems, allValues] = separateKeysFromValues(rows);

  return(
    allItems.map((item, itemIndex) => {
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