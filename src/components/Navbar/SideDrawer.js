import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Divider from '@material-ui/core/Divider';
import CollapsableList from './CollapsableList';

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
    },
    link: {
      textDecoration: 'none',
      color: 'black'
    }
}));

const mainPages = ['Mese', 'Menù', 'Ristorazione', 'Magazzino', 'Statistiche', 'Account'];

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
                        mainPages.map((tab, index) => (
                            <div key={tab + 'view'} className="view">
                                <NavLink 
                                    to={`/${tab.toLowerCase()}`} 
                                    className={classes.link} 
                                    activeStyle={{color: '#d50000'}}
                                >
                                    <ListItem button key={tab}>
                                        <ListItemText key={tab + index} primary={tab}/>
                                        <IconButton>
                                            <KeyboardArrowDownIcon />
                                        </IconButton>
                                    </ListItem>
                                </NavLink>
                                <Divider key={tab + 'divider'}/>
                                { tab === 'Menù'? <CollapsableList /> : null }
                            </div>
                        ))
                    }
                </List>
            </div>
        </Drawer>
    );
}

export default SideDrawer;