import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Dialog, DialogTitle, DialogContent, FormControl, InputLabel, Input, Chip, MenuItem, Select, TextField, DialogActions, Button 
} from '@material-ui/core/';
import Selector from 'components/Selector';

const useStyles = makeStyles((theme) => ({
  elemPadding: {
      padding: '15px 0'
  }
}));

const names = [
    'formaggio',
    'mozzarella',
    'insalata'
];

const DialogForm = ({ item }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    return(
        <Fragment>
            <Button onClick={handleClickOpen} variant="text"><b>{ item }</b></Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Aggiungi Oggetto</DialogTitle>
                <DialogContent>
                    <TextField className={classes.elemPadding} fullWidth label="Nome"/>
                    <Selector className={classes.elemPadding} fullWidth={true} type="Aggiungi"/>
                    <FormControl className={classes.elemPadding} fullWidth>
                        <InputLabel className={classes.elemPadding}>Ingredienti</InputLabel>
                        <Select
                            multiple
                            value={names}
                            onChange={() => console.log('worked!')}
                            input={<Input />}
                            renderValue={(selected) => (
                                <div>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value}/>
                                    ))}
                                </div>
                            )}
                        >
                            {names.map((name) => (
                                <MenuItem key={name} value={name}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
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

export default DialogForm;


