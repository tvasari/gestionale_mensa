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
                          <TableCell>
                            {rows[portata][piatto]['ingredienti'][ingrediente].qty}
                          </TableCell>
                          <TableCell>
                            {rows[portata][piatto]['ingredienti'][ingrediente].um}
                          </TableCell>
                          <TableCell>
                            {rows[portata][piatto]['ingredienti'][ingrediente].costoUm}
                          </TableCell>
                          <TableCell>
                            {rows[portata][piatto]['ingredienti'][ingrediente].costoUm}
                          </TableCell>
                        </Fragment>
                      </TableRow>
                    );
                  })
                }
                <TableRow>
                  <TableCell colSpan={4}></TableCell>
                  <TableCell><b>Somma</b></TableCell>
                  <TableCell>1500</TableCell>
                </TableRow>
                <TableRow><TableCell colSpan={8}></TableCell></TableRow>
              </Fragment>
            );
        })
    );
}

export default Piatto;