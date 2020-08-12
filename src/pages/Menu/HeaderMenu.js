import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import StyledTableCell from '../../components/StyledTableCell';
import StyledButton from '../../components/StyledButton';

const StyledHeader = styled(Typography)(({theme}) => ({
    color: theme.palette.primary.main, 
    fontWeight: '700',
    fontSize: '1.1em'
}))

const HeaderMenu = ({ daysArray }) => {
    const days = [
        <div>
          <StyledButton>Pranzo</StyledButton>
          <StyledButton>Cena</StyledButton>
        </div>,
        ...daysArray.map(day => {
            return( 
                <NavLink style={{textDecoration: 'none'}} to="/costo_pasto">
                    <StyledHeader>
                        {day}
                    </StyledHeader>
                </NavLink>
            );
        })
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

export default HeaderMenu;
