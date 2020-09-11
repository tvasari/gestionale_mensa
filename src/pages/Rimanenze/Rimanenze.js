import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { 
  List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Divider 
} from '@material-ui/core/';
import { Visibility, GetApp } from '@material-ui/icons/';

const useStyles = makeStyles((theme) => ({
  workBench: theme.workBench
}));

const Rimanenze = () => {
  const classes = useStyles();

  return (
    <List className={classes.workBench}>
      <ListItem>
        <ListItemText primary="Rimanenze al 31/08/21"/>
        <ListItemSecondaryAction>
          <NavLink style={{textDecoration: 'none'}} to="/display-rimanenza">
            <IconButton>
              <Visibility/>
            </IconButton>
          </NavLink>
          <IconButton edge="end">
            <GetApp />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="Rimanenze al 30/09/21"/>
        <ListItemSecondaryAction>
          <NavLink style={{textDecoration: 'none'}} to="/display-rimanenza">
            <IconButton>
              <Visibility/>
            </IconButton>
          </NavLink>
          <IconButton edge="end">
            <GetApp />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </List>
  );
}

export default Rimanenze;