import React, { useState } from 'react';
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
  const [pastoPrincipale, setPastoPrincipale] = useState("");

  const days = [
    <SelectorPastiPrincipali setPastoPrincipale={setPastoPrincipale} pastoPrincipale={pastoPrincipale}/>,
    ...daysArray.map(day => {
      return( 
        <NavLink style={{textDecoration: 'none'}} to="/costo-pasto">
          <StyledHeader>{ day }</StyledHeader>
        </NavLink>
      );
    })
  ];

  return <TableRow>{ days.map(day => <StyledTableCell>{day}</StyledTableCell>) }</TableRow>;
}

export default HeaderMenu;
