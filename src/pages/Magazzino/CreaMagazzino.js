import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import { 
    IconButton, Typography, Slide, FormGroup, FormControl, 
    InputLabel, Select, ButtonGroup, TextField, Toolbar, 
    AppBar, Dialog, Button 
} from '@material-ui/core';


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
                    <IconButton edge="start" color="inherit" onClick={() => handleClickClose()} aria-label="close">
                    <CloseIcon />
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
                <FormControl variant="outlined" className={classes.textField}>
                    <InputLabel>Categoria</InputLabel>
                    <Select label="Categoria" onChange={() => console.log('changed')} native>
                        {
                            ['Ortofrutta', 'Carne Gelo'].map(categoria => <option value={categoria}>{categoria}</option>)
                        }
                    </Select>
                </FormControl>
                <FormControl style={{display: 'inline'}} variant="outlined" className={classes.inputMargin}>
                    <span className={classes.textField}>
                        <InputLabel>Oggetto</InputLabel>
                        <Select style={{width: '30%'}} label="Oggetto" onChange={() => console.log('changed')} native>
                            {
                                ['Uova', 'Tonno'].map(oggetto => <option value={oggetto}>{oggetto}</option>)
                            }
                        </Select>
                        <TextField
                            style={{width: '10%', marginLeft: '10px'}}
                            label="Quantità"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                    </span>
                </FormControl>
                <ButtonGroup>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                    <IconButton>
                        <DoneIcon />
                    </IconButton>
                </ButtonGroup>
            </FormGroup>
            
        </Dialog>
    );
}

export default CreaMagazzino;