import React from 'react';
import { styled } from '@material-ui/core/styles';
import StyledTableRow from 'components/StyledTableRow';
import TableCell from '@material-ui/core/TableCell';
import DDTDisplayDialog from 'pages/DDT/DDTDisplayDialog';

const CompressedCell = styled(TableCell)(() => ({
    padding: '2px 16px'
}));

const separateItemsFromValues = (rows) => {
  const allItems = Object.keys(rows);
  const allValues = Object.values(rows);
  return [allItems, allValues];
}

function createRows(rows) {
  const [allItems, allValues] = separateItemsFromValues(rows);

  return allItems.map((item, itemIndex) => {
    return(
      <StyledTableRow key={item}>
        <CompressedCell key={item + itemIndex}>
          { 
            typeof parseInt(item) === 'number' && !isNaN(parseInt(item))
            ? <DDTDisplayDialog 
                trigger={item}
                title="Magazzino"
                textFieldPlaceholder="Magazzino"
              />
            : item 
          }
        </CompressedCell>
        {
          allValues[itemIndex].map(value => {
            return(
              <CompressedCell align={typeof value === 'number' ? "right" : "inherit"} key={value}>
                { value }
              </CompressedCell>
            )
          })
        }
      </StyledTableRow>
    );
  })

}

export default createRows;