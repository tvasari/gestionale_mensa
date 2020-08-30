import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'img/logo.png';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Box, Avatar, Typography } from '@material-ui/core/';

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


const TopBar = () => {
    const classes = useStyles();

    return(
        <AppBar position="relative" className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
                <div className={classes.toolBar}>
                    <NavLink className={classes.navLink} to="/italiana_mense_gestionale">
                        <img src={logo} alt="Italiana Mense" className={classes.logo}/>
                    </NavLink>
                    <Box m={1}>
                        <Avatar src="/broken-image.jpg"/>
                    </Box>
                    <Typography>Nome_Utente</Typography>
                </div>
                <NavLink className={classes.navLink} to="/registrati">
                    <Typography variant="button" color="secondary">Esci</Typography>
                </NavLink>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;