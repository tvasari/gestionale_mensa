import React from 'react';
import { styled } from '@material-ui/core/styles';
import StyledTableRow from 'components/StyledTableRow';
import TableCell from '@material-ui/core/TableCell';
import NewDDTDialog from 'pages/DDT/NewDDTDialog';

const CompressedCell = styled(TableCell)(() => ({
    padding: '2px 16px'
}));

function createRows(rows) {
    const allItems = Object.keys(rows);
    const allValues = Object.values(rows);

    return allItems.map((item, itemIndex) => {
        return(
            <StyledTableRow key={item}>
                <CompressedCell key={item + itemIndex}>
                    { 
                        typeof parseInt(item) === 'number' && !isNaN(parseInt(item))
                        ? <NewDDTDialog trigger={item} />
                        : item 
                    }
                </CompressedCell>
                {
                    allValues[itemIndex].map((value, valueIndex) => {
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