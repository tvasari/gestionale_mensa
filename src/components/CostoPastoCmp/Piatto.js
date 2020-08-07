import React, { Fragment } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const Piatto = ({ rows, portata }) => {
    return(
        Object.keys(rows[portata]).map(piatto => {
            return(
              <Fragment>
                {
                  Object.keys(rows[portata][piatto]['ingredienti']).map((ingrediente, index) => {
                    return(
                      <TableRow>
                        {
                          index === 0 ? <TableCell>{piatto}</TableCell> : <TableCell></TableCell>
                        }
                        <Fragment>
                          <TableCell>
                            {ingrediente}
                          </TableCell>
                          <TableCell align="right">
                            {rows[portata][piatto]['ingredienti'][ingrediente].qty}
                          </TableCell>
                          <TableCell>
                            {rows[portata][piatto]['ingredienti'][ingrediente].um}
                          </TableCell>
                          <TableCell align="right">
                            {rows[portata][piatto]['ingredienti'][ingrediente].costoUm}
                          </TableCell>
                          <TableCell align="right">
                            {rows[portata][piatto]['ingredienti'][ingrediente].costoUm}
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
                    <b>Somma</b><b>2020</b>
                  </TableCell>
                </TableRow>
                <TableRow><TableCell colSpan={8}></TableCell></TableRow>
              </Fragment>
            );
        })
    );
}

export default Piatto;