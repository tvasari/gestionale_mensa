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
import Collapse from '@material-ui/core/Collapse';
import WeekPicker from './WeekPicker.js';
import AddBoxIcon from '@material-ui/icons/AddBox';
import EditIcon from '@material-ui/icons/Edit';
import DateRangeIcon from '@material-ui/icons/DateRange';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    drawer: {
      flexShrink: 0,
    },
    drawerPaper: {
      width: '20%',
      position: 'absolute',
      backgroundColor: '#eaf4f4'
    },
    drawerContainer: {
      overflow: 'auto',
    },
    user: {
        display: 'flex',
        alignItems: 'center'
    },
    link: {
      textDecoration: 'none',
      color: 'black'
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    icon: {
      color: 'rgba(0, 0, 0, 0.54)'
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
                            <NavLink to={`/${tab.toLowerCase()}`} className={classes.link} activeStyle={{color: 'darkorange'}}>
                                <ListItem button key={tab}>
                                    <ListItemText key={tab + index} primary={tab} />
                                    <IconButton>
                                        <KeyboardArrowDownIcon />
                                    </IconButton>
                                </ListItem>
                            </NavLink>
                            <Divider key={tab + 'divider'}/>
                            {
                                tab === 'Menù'
                                ? (
                                    <Collapse in={true} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItem button className={classes.nested}>
                                                <WeekPicker />
                                            </ListItem>
                                            <ListItem button className={classes.nested}>
                                                <ListItemText primary="Nuovo Menù" />
                                                <AddBoxIcon className={classes.icon}/>
                                            </ListItem>
                                            <ListItem button className={classes.nested}>
                                                <ListItemText primary="Modifica Menù" />
                                                <EditIcon className={classes.icon}/>                            
                                            </ListItem>
                                            <NavLink className={classes.link} to='/SintesiMese'>
                                                <ListItem button className={classes.nested}>
                                                    <ListItemText primary="Sintesi del Mese" />
                                                    <DateRangeIcon className={classes.icon}/>
                                                </ListItem>
                                            </NavLink>
                                        </List>
                                        <Divider/>
                                    </Collapse>
                                )
                                : null
                            }
                        </div>
                        ))
                    }
                </List>
            </div>
        </Drawer>
    );
}

export default SideDrawer;