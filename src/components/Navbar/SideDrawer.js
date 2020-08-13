import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Divider from '@material-ui/core/Divider';
import AddBoxIcon from '@material-ui/icons/AddBox';
import EditIcon from '@material-ui/icons/Edit';
import DateRangeIcon from '@material-ui/icons/DateRange';
import WeekPicker from './WeekPicker';
import CollapsableList from './CollapsableList';
import LinkToPage from './LinkToPage';

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
    [<ListItemText primary="Nuovo Menù" />, <AddBoxIcon color="action"/>],  
    [<ListItemText primary="Modifica Menù" />, <EditIcon color="action"/>],
    <LinkToPage page="Sintesi del Mese" elemToAdd={<DateRangeIcon color="action"/>} />
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
                                        <KeyboardArrowDownIcon />
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