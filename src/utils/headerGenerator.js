import React from 'react';
import StyledTableCell from 'components/StyledTableCell';

const headerGenerator = (headers, colSpan) => {
    return (
        headers.map((header, i) => {
            return i === headers[headers.length - 1] ?
            (
                <StyledTableCell colSpan={colSpan} key={header + i}>
                    {header}
                </StyledTableCell>
            )
            :
            (
                <StyledTableCell key={header + i}>
                    {header}
                </StyledTableCell>
            )
        })
    );
};

export default headerGenerator;