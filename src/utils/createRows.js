import React from 'react';
import { styled } from '@material-ui/core/styles';
import StyledTableRow from 'components/StyledTableRow';
import TableCell from '@material-ui/core/TableCell';

const CompressedCell = styled(TableCell)(() => ({
    padding: '2px 16px'
}));

function createRows(objEntries) {
    const allItems = Object.keys(objEntries);
    const allValues = Object.values(objEntries);

    return allItems.map((item, i) => {
        return(
            <StyledTableRow key={item}>
                <CompressedCell key={item + i}>{item}</CompressedCell>
                {
                    allValues[i].map((value, i) => {
                        return <CompressedCell align="right" key={value}>{value}</CompressedCell>
                    })
                }
            </StyledTableRow>
        );
    })

}

export default createRows;