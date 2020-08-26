import React, { useState } from 'react';
import { styled, createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import StyledTableRow from 'components/StyledTableRow';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core/';
import { TextField, Select, IconButton } from '@material-ui/core/';
import { Add } from '@material-ui/icons/';

const theme = createMuiTheme({
  overrides:{
    MuiSelect:{
      select:{
        padding: 0
      }
    },
    MuiInputBase:{
      input:{
        padding: 0,
      }
    }
  },
  props: {
    MuiInput: {
      disableUnderline: true
    }
  }
})

const useStyles = makeStyles({
  fontSize:{
    fontSize: '0.9rem'
  }
})

const CompressedCell = styled(TableCell)(() => ({
    padding: '2px 0'
}));

const StockItemList = () => {
  const classes = useStyles();
  
  const [oggetto, nuovoOggetto] = useState('Uova');

  const handleChange = (event) => {
    nuovoOggetto(event.target.value);
  };

  return(
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <CompressedCell className={classes.fontSize}>Oggetto</CompressedCell>
            <CompressedCell className={classes.fontSize}>Quantità</CompressedCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <ThemeProvider theme={theme}>
              <CompressedCell>
                <Select
                  className={classes.fontSize}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={oggetto}
                  onChange={handleChange}
                  native
                  autoWidth
                >
                  <option className={classes.fontSize}>Uova</option>
                  <option className={classes.fontSize}>Olive</option>
                  <option className={classes.fontSize}>Prosciutto</option>
                </Select>
              </CompressedCell>
              <CompressedCell>
                <TextField
                  type="number"
                  color="primary"
                />
              </CompressedCell>
            </ThemeProvider>
          </StyledTableRow>
          <StyledTableRow>
            <CompressedCell colSpan={2}>
              <IconButton size="small" style={{float: 'right'}}>
                <Add />
              </IconButton>
            </CompressedCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StockItemList;