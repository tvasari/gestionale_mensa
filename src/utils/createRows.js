import React from 'react';
import { styled } from '@material-ui/core/styles';
import StyledTableRow from 'components/StyledTableRow';
import TableCell from '@material-ui/core/TableCell';

const CompressedCell = styled(TableCell)(({theme}) => ({
    padding: '4px 16px'
}));

function createData() {
    return { ...arguments };
}

const createRows = (array, val1, val2, val3, val4, style) => {

    const rows = array.map(item => {
        return createData(item, val1, val2, val3, val4)
    })

    return rows.map((item, i) => {
        let itemValues = Object.values(item);

        return(
            <StyledTableRow key={itemValues[0] + i}>
                <CompressedCell key={itemValues[0]}>{itemValues[0]}</CompressedCell>
                <CompressedCell align="right" key={"Kg" + i}>{itemValues[1]}</CompressedCell>
                <CompressedCell align="right" key={5 + i}>{itemValues[2]}</CompressedCell>
                <CompressedCell align="right" key={1.5 + i}>{itemValues[3]}</CompressedCell>
                <CompressedCell align="right" key={"tot" + i}>{itemValues[4]}</CompressedCell>
            </StyledTableRow>
        );
    })

}

export default createRows;