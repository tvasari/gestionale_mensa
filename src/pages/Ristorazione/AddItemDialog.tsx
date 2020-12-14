import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Dialog, DialogTitle, DialogContent, FormControl, 
  InputLabel, Input, Chip, MenuItem, Select, TextField, 
  DialogActions, Button, InputAdornment  
} from '@material-ui/core/';
import { SelectorRistorazione, SelectorUM } from 'components/Selectors';
import { magazzinoRows } from 'utils/fakeData';
import staticText from "staticText.json";

const useStyles = makeStyles({
  margin: {
    margin: '15px 0'
  }
});

const ingredienti = Object.keys(magazzinoRows)

const ingredientOptions = ingredienti.map(ingrediente => (
  <MenuItem key={ingrediente} value={ingrediente}>{ ingrediente }</MenuItem>
))

const renderValueHandler = (selectedItems: string[]) => {
  return(
    <Fragment>{ 
      selectedItems.map((item: string) => <Chip key={item} label={item}/>)
    }</Fragment>
  );
}


const AddItemDialog = ({ trigger }: any) => {
  const classes = useStyles();
  const { AddItemDialog } = staticText;
  const [open, setOpen] = useState(false);
  const [typeToAdd, setTypeToAdd] = useState("");

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
        <DialogTitle>{ AddItemDialog.aggiungiOggetto }</DialogTitle>
        <DialogContent>
          <SelectorRistorazione 
            setTypeToAdd={setTypeToAdd} 
            typeToAdd={typeToAdd} 
            className={classes.margin}
          />
          <TextField className={classes.margin} fullWidth label="Nome"/>
          <FormControl className={classes.margin} fullWidth>
            <InputLabel>{ AddItemDialog.ingredienti }</InputLabel>
            <Select
              multiple
              value={ingredienti}
              onChange={() => console.log('worked!')}
              input={<Input />}
              renderValue={(selectedItems: any) => renderValueHandler(selectedItems)}
            >
              { ingredientOptions }
            </Select>
          </FormControl>
          <SelectorUM />
          <FormControl fullWidth className={classes.margin}>
            <InputLabel htmlFor="standard-adornment-amount">{ AddItemDialog.costoUm }</InputLabel>
            <Input
              id="standard-adornment-amount"
              startAdornment={<InputAdornment position="start">{ AddItemDialog.euro }</InputAdornment>}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            { AddItemDialog.aggiungi }
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

export default AddItemDialog;


