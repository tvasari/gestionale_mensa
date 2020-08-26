import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableRow, TextField, IconButton} from '@material-ui/core/';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import StyledTableCell from 'components/StyledTableCell';
import Piatto from 'pages/CostoPasto/Piatto';
import { costoPastoHeaderLabels } from 'utils/fakeData';

const useStyles = makeStyles({
  stickyCell: {
    position: 'sticky',
    top: 0
  }
});

const Portata = ({ elementiRistorazione }) => {
  const classes = useStyles();
  
    return(
        Object.keys(elementiRistorazione).map(portata => {
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
                    costoPastoHeaderLabels.map(headerLabel => {
                      return(
                        <StyledTableCell className={classes.stickyCell}>
                          <b>{ headerLabel }</b>
                        </StyledTableCell>
                      );
                    })
                  }
                </TableRow>
                <Fragment>
                  <Piatto elementiRistorazione={elementiRistorazione} portata={portata}/>
                </Fragment>
              </Fragment>
            );
        })
    );
}

export default Portata;
