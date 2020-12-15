import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import { AddBox, Edit, DateRange, KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons/';
import WeekPicker from 'components/Navbar/WeekPicker';
import CollapsableList from 'components/Navbar/CollapsableList';
import LinkToPage from 'components/LinkToPage';
import staticText from 'staticText.json';

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

const { pages, subList } = staticText.SideDrawer;
const { presenzeMese, menu, ristorazione, magazzino, statistiche, account } = pages;

const mainPages = [presenzeMese, menu, ristorazione, magazzino, statistiche, account];

const menuSubList = [
  <WeekPicker key="weekPicker"/>, 
  <Fragment key="nuovoMenù">
    <ListItemText primary={subList.nuovoMenu}/>
    <AddBox color="action"/>
  </Fragment>,  
  <Fragment key="modificaMenù">
    <ListItemText primary={subList.modificaMenu} /> 
    <Edit color="action"/>
  </Fragment>,
  <LinkToPage key="sintesiMese" page={subList.sintesiMese} elemToAdd={ <DateRange color="action"/> }/>
]

const magazzinoSubList = [
  <LinkToPage key="storico" page={subList.storico}/>,
  <LinkToPage key="ddt" page={subList.ddt}/>,
  <LinkToPage key="rimanenze" page={subList.rimanenze}/>
]

const displaySubList = (page: string) => {
  switch(page) {
    case "Menù":
      return <CollapsableList elemsToDispaly={menuSubList}/>;
    case "Magazzino":
      return <CollapsableList elemsToDispaly={magazzinoSubList}/>;
    default:
      return null;
  }
}

const SideDrawer = () => {
  const classes = useStyles();

  return(
    <Drawer className={classes.drawer} variant="permanent" classes={{paper: classes.drawerPaper}}>
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {
            mainPages.map(page => (
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