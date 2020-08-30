import React, { Fragment } from 'react';
import { styled } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import DDTDisplayDialog from 'pages/DDT/DDTDisplayDialog';

const CompressedCell = styled(TableCell)(() => ({
    padding: '2px 16px'
}));

const separateKeysFromValues = (rows) => {
  const allItems = Object.keys(rows);
  const allValues = Object.values(rows);
  return [allItems, allValues];
}

const isNumber = value => typeof value === 'number';

const createAlignedCells = (cellValues) => {
  cellValues.map(value => {
    return(
      <CompressedCell align={isNumber(value) ? "right" : "inherit"} key={value}>
        { value }
      </CompressedCell>
    )
  })
}

function createRows(rows) {
  const [allItems, allValues] = separateKeysFromValues(rows);

  return(
    <Fragment>
      {
        allItems.map((item, itemIndex) => {
          return (
            isNumber(parseInt(item)) && !isNaN(parseInt(item)) 
            ? (
              <Fragment key={'a'}>
                <CompressedCell>
                  <DDTDisplayDialog 
                    trigger={item}
                    title="Magazzino"
                    textFieldPlaceholder="Magazzino"
                  />
                </CompressedCell>
                { createAlignedCells(allValues[itemIndex]) }
              </Fragment>
            ) : (
              <Fragment key={item}>
                <CompressedCell>
                  {item}
                </CompressedCell>
                { createAlignedCells(allValues[itemIndex]) }
              </Fragment>
            )
          );
        })
      }
    </Fragment>
  );
  

}

export default createRows;