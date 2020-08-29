import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from '@material-ui/core/styles';
import { TableRow, Typography } from '@material-ui/core/';
import StyledTableCell from 'components/StyledTableCell';
import { SelectorPastiPrincipali } from 'components/Selectors';

const StyledHeader = styled(Typography)(({theme}) => ({
  color: theme.palette.primary.main, 
  fontWeight: '700',
  fontSize: '1.1em'
}))

const HeaderMenu = ({ daysArray }) => {
  const days = [
    <SelectorPastiPrincipali/>,
    ...daysArray.map(day => {
      return( 
        <NavLink style={{textDecoration: 'none'}} to="/costo_pasto">
          <StyledHeader>
            {day}
          </StyledHeader>
        </NavLink>
      );
    })
  ];

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
