import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Add, Done, Close } from '@material-ui/icons/';
import { 
    IconButton, Typography, Slide, FormGroup, 
    ButtonGroup, TextField, Toolbar, 
    AppBar, Dialog, Button 
} from '@material-ui/core';
import Selector from 'components/Selector';

const useStyles = makeStyles((theme) => ({
    workBench: theme.workBench,
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    formGroup: {
        margin: '20px 50px'
    },
    inputMargin: {
        display: 'inline',
        margin: '15px 0',
    },
    textField: {
        margin: '15px 0',
        width: '30%'
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CreaMagazzino = ({ handleClickClose, open }) => {
    const classes = useStyles();

    return(
        <Dialog fullScreen open={open} onClose={() => handleClickClose()} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={() => handleClickClose()}>
                        <Close/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Nuovo Magazzino
                    </Typography>
                    <Button autoFocus color="inherit" onClick={() => handleClickClose()}>
                        Conferma
                    </Button>
                </Toolbar>
            </AppBar>
            <FormGroup className={classes.formGroup}>
                <TextField className={classes.textField} label="Nome" variant="outlined" />
                <Selector type="Categoria" variant="outlined" formControlStyle={classes.textField} />
                <span>
                    <Selector type="Oggetti" variant="outlined" formControlStyle={classes.textField} />
                    <TextField
                        style={{width: '10%', margin: '15px 10px'}}
                        label="Quantità"
                        type="number"
                        InputLabelProps={{shrink: true}}
                        variant="outlined"
                    />
                </span>
                <ButtonGroup>
                    <IconButton>
                        <Add />
                    </IconButton>
                    <IconButton>
                        <Done />
                    </IconButton>
                </ButtonGroup>
            </FormGroup>    
        </Dialog>
    );
}

export default CreaMagazzino;