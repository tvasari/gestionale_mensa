import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Dialog, DialogTitle, DialogContent, FormControl, 
  InputLabel, Input, Chip, MenuItem, Select, TextField, 
  DialogActions, Button, InputAdornment  
} from '@material-ui/core/';
import { SelectorRistorazione, SelectorUM } from 'components/Selectors';
import { magazzinoRows } from 'utils/fakeData';

const useStyles = makeStyles({
  margin: {
    margin: '15px 0'
  }
});

const ingredienti = Object.keys(magazzinoRows)

const ingredientOptions = ingredienti.map((ingrediente) => (
  <MenuItem key={ingrediente} value={ingrediente}>
    {ingrediente}
  </MenuItem>
))

const renderValueHandler = (selectedItem) => {
  return(
    <Fragment>
      {selectedItem.map(item => <Chip key={item} label={item}/>)}
    </Fragment>
  );
}

const AddItemDialog = ({ trigger }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(
    <Fragment>
      <Button onClick={handleClickOpen} variant="text"><b>{ trigger }</b></Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Aggiungi Oggetto</DialogTitle>
        <DialogContent>
          <SelectorRistorazione className={classes.margin}/>
          <TextField className={classes.margin} fullWidth label="Nome"/>
          <FormControl className={classes.margin} fullWidth>
            <InputLabel>Ingredienti</InputLabel>
            <Select
              multiple
              value={ingredienti}
              onChange={() => console.log('worked!')}
              input={<Input />}
              renderValue={selectedItem => renderValueHandler(selectedItem)}
            >
              { ingredientOptions }
            </Select>
          </FormControl>
          <SelectorUM />
          <FormControl fullWidth className={classes.margin}>
            <InputLabel htmlFor="standard-adornment-amount">Costo/UM</InputLabel>
            <Input
              id="standard-adornment-amount"
              startAdornment={<InputAdornment position="start">€</InputAdornment>}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Aggiungi
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

export default AddItemDialog;


