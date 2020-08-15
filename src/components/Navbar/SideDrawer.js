import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import { 
    AddBox, Edit, DateRange, KeyboardArrowDown, KeyboardArrowUp
} from '@material-ui/icons/';
import WeekPicker from 'components/Navbar/WeekPicker';
import CollapsableList from 'components/Navbar/CollapsableList';
import LinkToPage from 'components/LinkToPage';

const useStyles = makeStyles((theme) => ({
    drawer: {
      flexShrink: 0,
    },
    drawerPaper: {
      width: '20%',
      position: 'absolute',
      backgroundColor: theme.palette.primary.light
    },
    drawerContainer: {
      overflow: 'auto',
    }
}));

const mainPages = ['Mese', 'Menù', 'Ristorazione', 'Magazzino', 'Statistiche', 'Account'];

const menuSubList = [
    <WeekPicker />, 
    [<ListItemText primary="Nuovo Menù" />, <AddBox color="action"/>],  
    [<ListItemText primary="Modifica Menù" />, <Edit color="action"/>],
    <LinkToPage page="Sintesi del Mese" elemToAdd={<DateRange color="action"/>} />
]

const magazzinoSubList = [
    <LinkToPage page="Storico"/>,
    <LinkToPage page="Ordini"/>,
    <LinkToPage page="Rimanenze"/>
]

const displaySubList = (page) => {
    switch(page) {
        case "Menù":
            return <CollapsableList elemsToDispaly={menuSubList} />;
        case "Magazzino":
            return <CollapsableList elemsToDispaly={magazzinoSubList} />;
        default:
            return null;
    }
}

const SideDrawer = () => {
    const classes = useStyles();

    return(
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{paper: classes.drawerPaper}}
        >
            <Toolbar />
            <div className={classes.drawerContainer}>
                <List>
                    {
                        mainPages.map((page, index) => (
                            <div key={page + 'view'} className="view">
                                <ListItem key={page}>
                                    <LinkToPage page={page} key={page}/>
                                    <IconButton edge="end">
                                        <KeyboardArrowDown />
                                    </IconButton>
                                </ListItem>
                                <Divider key={page + 'divider'}/>
                                { displaySubList(page) }
                            </div>
                        ))
                    }
                </List>
            </div>
        </Drawer>
    );
}

export default SideDrawer;