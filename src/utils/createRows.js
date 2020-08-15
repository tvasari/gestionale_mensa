import React from 'react';
import { styled } from '@material-ui/core/styles';
import StyledTableRow from 'components/StyledTableRow';
import TableCell from '@material-ui/core/TableCell';

const CompressedCell = styled(TableCell)(() => ({
    padding: '4px 16px'
}));

function createRows(allItemsAndValues) {
    const allItems = Object.keys(allItemsAndValues);
    const allValues = Object.values(allItemsAndValues);

    return allItems.map((item, i) => {
        return(
            <StyledTableRow key={item}>
                <CompressedCell key={item + i}>{item}</CompressedCell>
                {
                    allValues[i].map((value, i) => {
                        return <CompressedCell key={value}>{value}</CompressedCell>
                    })
                }
            </StyledTableRow>
        );
    })

}

export default createRows;