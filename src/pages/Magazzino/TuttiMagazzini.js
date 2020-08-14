import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Item from 'components/Item';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import FormGroup from '@material-ui/core/FormGroup';


const useStyles = makeStyles((theme) => ({
    workBench: theme.workBench,
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const TuttiMagazzini = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
    };

  return (
    <List className={classes.workBench}>
        <Item isMagazzino={true} nomeMagazzino="Arquata_1"/>
        <Divider />
        <Item isMagazzino={true} nomeMagazzino="Arquata_2"/>
        <Divider />
        <ListItem>
            <Typography color="primary">Aggiungi nuovo</Typography>
            <IconButton onClick={handleClickOpen}>
                <AddIcon />
            </IconButton>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                    <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Nuovo Magazzino
                    </Typography>
                    <Button autoFocus color="inherit" onClick={handleClose}>
                        Aggiungi
                    </Button>
                </Toolbar>
                </AppBar>
                <FormGroup>

                </FormGroup>
            </Dialog>
        </ListItem>
    </List>
  );
}

export default TuttiMagazzini;