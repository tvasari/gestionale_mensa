import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'img/logo.png';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Box, Avatar, Typography, Button } from '@material-ui/core/';
import { LoadedUserContext } from 'utils/LoadedUser';
import staticText from "staticText.json";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.primary.main,
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 0
  },
  logo: {
    padding: '0 8px', 
    margin: '0 30px', 
    width: '5vw', 
    height: '64px'
  },
  navLink: {
    display: 'contents',
    textDecoration: 'none'
  }
}));

const logoutRequest = () => fetch('http://localhost:3001/esci');

const TopBar = () => {
  const classes = useStyles();
  const loadedUserFullName = useContext(LoadedUserContext);

  return(
    <AppBar position="relative" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <div className={classes.toolBar}>
          <NavLink className={classes.navLink} to="/italiana-mense-gestionale">
            <img src={logo} alt="Italiana Mense" className={classes.logo}/>
          </NavLink>
          <Box m={1}>
            <Avatar src="/broken-image.jpg"/>
          </Box>
          <Typography>{ loadedUserFullName }</Typography>
        </div>
        <NavLink className={classes.navLink} to="/accedi">
          <Button variant="text" color="secondary" onClick={() => logoutRequest()}>
            { staticText.TopBar.esci }
          </Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;