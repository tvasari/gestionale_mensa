import React from 'react';
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

const drawerWidth = '20%';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#1352E3'
  },
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
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
      justifyContent: 'space-between'
  }
}));

const Navbar = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>

      <AppBar position="relative" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
            <div className={classes.user}>
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
        classes={{paper: classes.drawerPaper}}>
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {['Mese', 'Menù', 'Pasto', 'Ingredienti', 'Magazzino', 'Statistiche', 'Account'].map((text, index) => (
                <div key={text + 'view'} className="view">
                    <ListItem button key={text}>
                        <ListItemText key={text + index} primary={text} />
                    </ListItem>
                    <Divider key={text + 'divider'}/>
              </div>
            ))}
          </List>
        </div>
      </Drawer>

    </div>
  );
}

export default Navbar;