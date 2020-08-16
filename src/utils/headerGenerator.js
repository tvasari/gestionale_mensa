import React from 'react';
import StyledTableCell from 'components/StyledTableCell';

const headerGenerator = (headers, colSpan) => {
    return (
        headers.map((header, i) => {
            return i === headers.length - 1 
            ? ( 
                <StyledTableCell colSpan={colSpan} key={header + i}>
                    {header}
                </StyledTableCell>
            ) : (
                <StyledTableCell colSpan={3} key={header + i}>
                    {header}
                </StyledTableCell>
            )
        })
    );
};

export default headerGenerator;