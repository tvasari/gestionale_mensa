import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import WeekPicker from './WeekPicker.js';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import EditIcon from '@material-ui/icons/Edit';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DateRangeIcon from '@material-ui/icons/DateRange';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#1976d2',
  },
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
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
  toolBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  },
  nested: {
    paddingLeft: theme.spacing(4),
  }
}));

const drawerWidth = '20%';

const workingTabs = ['Mese', 'Menù', 'Pasto', 'Ingredienti', 'Magazzino', 'Statistiche', 'Account'];

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <AppBar position="relative" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
            <div className={classes.toolBar}>
                <Box m={1}>
                    <Avatar src="/broken-image.jpg" />
                </Box>
                <Typography>Nome_Utente</Typography>
            </div>
            <Button color="inherit">Esci</Button>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{paper: classes.drawerPaper}}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {
              workingTabs.map((tab, index) => (
                <div key={tab + 'view'} className="view">
                  <NavLink to={`/${tab}`} className={classes.link} activeStyle={{color: 'darkorange'}}>
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
                            <ListItemText primary="Aggiungi Menù" />
                            <IconButton>
                              <AddBoxIcon />
                            </IconButton>
                          </ListItem>
                          <ListItem button className={classes.nested}>
                            <ListItemText primary="Modifica" />
                            <IconButton>
                              <EditIcon />
                            </IconButton>
                          </ListItem>
                          <ListItem button className={classes.nested}>
                            <ListItemText primary="Sintesi del Mese" />
                            <IconButton>
                              <DateRangeIcon />
                            </IconButton>
                          </ListItem>
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

    </div>
  );
}

export default Navbar;