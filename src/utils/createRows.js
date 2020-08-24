import React from 'react';
import { styled } from '@material-ui/core/styles';
import StyledTableRow from 'components/StyledTableRow';
import { TableCell, Link } from '@material-ui/core/';

const CompressedCell = styled(TableCell)(() => ({
    padding: '2px 16px'
}));

function createRows(rows) {
    const allItems = Object.keys(rows);
    const allValues = Object.values(rows);
    console.log(parseInt(allItems))

    return allItems.map((item, itemIndex) => {
        return(
            <StyledTableRow key={item}>
                <CompressedCell key={item + itemIndex}>
                    { 
                        typeof parseInt(item) === 'number' && !isNaN(parseInt(item))
                        ? <Link href="#">{ item }</Link> 
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