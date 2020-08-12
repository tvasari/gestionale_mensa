import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AddBoxIcon from '@material-ui/icons/AddBox';
import EditIcon from '@material-ui/icons/Edit';
import DateRangeIcon from '@material-ui/icons/DateRange';
import WeekPicker from './WeekPicker.js';

const useStyles = makeStyles((theme) => ({
    link: {
      textDecoration: 'none',
      color: 'black'
    },
    nested: {
      paddingLeft: theme.spacing(4),
    }
}));


const CollapsableList = () => {
    const classes = useStyles();

    return(
        <Collapse in={true} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                    <WeekPicker />
                </ListItem>
                <ListItem button className={classes.nested}>
                    <ListItemText primary="Nuovo Menù" />
                    <AddBoxIcon color="action"/>
                </ListItem>
                <ListItem button className={classes.nested}>
                    <ListItemText primary="Modifica Menù" />
                    <EditIcon color="action"/>                            
                </ListItem>
                <NavLink className={classes.link} activeStyle={{color: '#d50000'}} to='/sintesi_menù'>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Sintesi del Mese" />
                        <DateRangeIcon color="action"/>
                    </ListItem>
                </NavLink>
            </List>
            <Divider/>
        </Collapse>
    );
}

export default CollapsableList;