import React from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import Selector from '../../components/Selector';

const useStyles = makeStyles(theme => ({
    container: {
      overflow: 'auto',
      width: '80%',
      padding: 0,
      height: '60vh',
      margin: 'auto'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    }
}));

const names = [
    'formaggio'
];

const AddForm  = () => {
    const classes = useStyles();

    return(
        <Box className={classes.container} border={1} borderColor="#1976d2">
            <form style={{display: 'grid'}} noValidate autoComplete="off">
                <TextField className={classes.formControl} label="Nome"/>
                <Selector type="Tipo" formControlStyle={classes.formControl}/>
                <FormControl className={classes.formControl}>
                    <InputLabel>Ingredienti</InputLabel>
                    <Select
                        multiple
                        value={names}
                        onChange={() => console.log('worked!')}
                        input={<Input />}
                        renderValue={(selected) => (
                            <div className={classes.chips}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} className={classes.chip} />
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
            </form>
        </Box>
    );
}

export default AddForm;