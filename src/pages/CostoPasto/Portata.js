import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import StyledTableCell from '../../components/StyledTableCell';
import Piatto from './Piatto';

const useStyles = makeStyles({
  stickyCell: {
    position: 'sticky',
    top: 0
  }
});

const colNames = [
  "Ingredienti",
  "Quantità",
  "UM",
  "Costo/UM",
  "Totale per ingrediente"
]

const Portata = ({ rows }) => {
  const classes = useStyles();
  
    return(
        Object.keys(rows).map(portata => {
            return (
              <Fragment>
                <TableRow >
                  <StyledTableCell className={classes.stickyCell}>
                    <b>{portata.toUpperCase()}</b>
                    <IconButton>
                      <NoteAddIcon />
                    </IconButton>
                    <TextField
                      id="outlined-multiline-static"
                      label="Note"
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </StyledTableCell>
                  {
                    colNames.map(colName => {
                      return <StyledTableCell className={classes.stickyCell}><b>{colName}</b></StyledTableCell>
                    })
                  }
                </TableRow>
                <Fragment>
                  <Piatto rows={rows} portata={portata}/>
                </Fragment>
              </Fragment>
            );
        })
    );
}

export default Portata;
