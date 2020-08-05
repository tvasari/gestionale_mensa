import React from 'react';
import { styled } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const StyledButton = styled(Button)({
    color: '#1976d2', 
    fontWeight: '700',
    fontSize: '1em'
});

const StyledTableCell = styled(TableCell)({
    backgroundColor: '#eaf4f4'
});

const StyledHeader = styled(Typography)({
    color: '#1976d2', 
    fontWeight: '700',
    fontSize: '1.1em'
})

const MenuTableHeader = ({ daysArray }) => {
    const days = [
        <div>
          <StyledButton>Pranzo</StyledButton>
          <StyledButton>Cena</StyledButton>
        </div>,
        ...daysArray.map(day => <StyledHeader>{day}</StyledHeader>)
    ]

    return(
        <TableRow>
            {
                days.map(day => {
                    return (
                        <StyledTableCell>{day}</StyledTableCell>
                    );
                })
            }
        </TableRow>
    );
}

export default MenuTableHeader;
