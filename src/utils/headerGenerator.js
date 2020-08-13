import React from 'react';
import StyledTableCell from 'components/StyledTableCell';

const headerGenerator = (headers) => {
    return (
        headers.map((header, i) => {
            return (
                <StyledTableCell key={header + i}>
                    {header}
                </StyledTableCell>
            );
        })
    );
};

export default headerGenerator;