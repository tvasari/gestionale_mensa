import React, { Fragment } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const Piatto = ({ rows, portata }) => {
  let totIngrArray = []

  const multiply = (qty, costoUm) => qty * costoUm;
  const sum = (array) => array.reduce((acc, num) => acc + num, 0).toFixed(1);

  return(
      Object.keys(rows[portata]).map(piatto => {
        totIngrArray = []
          return(
            <Fragment>
              {
                Object.keys(rows[portata][piatto]['ingredienti']).map((ingrediente, index) => {
                  const { qty, um, costoUm } =  rows[portata][piatto]['ingredienti'][ingrediente]
                  const totIngr = multiply(qty, costoUm);
                  totIngrArray.push(totIngr)

                  return(
                    <TableRow>
                      {
                        index === 0 ? <TableCell>{piatto}</TableCell> : <TableCell></TableCell>
                      }
                      <Fragment>
                        <TableCell>
                          { ingrediente }
                        </TableCell>
                        <TableCell align="right">
                          { qty }
                        </TableCell>
                        <TableCell>
                          { um }
                        </TableCell>
                        <TableCell align="right">
                          { costoUm }
                        </TableCell>
                        <TableCell align="right">
                          { totIngr }
                        </TableCell>
                      </Fragment>
                    </TableRow>
                  );
                })
              }
              <TableRow>
                <TableCell colSpan={4}></TableCell>
                <TableCell></TableCell>
                <TableCell style={{display: 'flex', justifyContent: 'space-between', borderBottom: 0}}>
                  <b>Somma</b><b>{ sum(totIngrArray) }</b>
                </TableCell>
              </TableRow>
              <TableRow><TableCell colSpan={8}></TableCell></TableRow>
            </Fragment>
          );
      })
  );
}

export default Piatto;