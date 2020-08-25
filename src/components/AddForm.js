import React from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import {
    Box, TextField, FormControl, InputLabel, Input, Select, Chip, MenuItem 
} from '@material-ui/core/';
import Selector from 'components/Selector';

const useStyles = makeStyles(theme => ({
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

const StyledBox = styled(Box)(({theme}) => ({
    overflow: 'auto',
    width: '70%',
    padding: 0,
    height: '60vh',
    margin: 'auto',
    borderColor: theme.palette.primary.main
}));

const names = [
    'formaggio'
];

const AddForm  = () => {
    const classes = useStyles();

    return(
        <StyledBox border={1}>
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
        </StyledBox>
    );
}

export default AddForm;