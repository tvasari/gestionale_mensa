import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const useStyles = makeStyles(theme => ({
    fontColor:{
        color: theme.palette.primary.main
    },
    iconButton: {
        padding: 0
    }
}));

const BackArrowButton = ({ path }) => {
    const classes = useStyles();

    return(
        <IconButton className={classes.iconButton}>
            <NavLink className={classes.fontColor} to={`/${path}`}>
                <KeyboardBackspaceIcon/>
            </NavLink>
        </IconButton>
    );
}

export default BackArrowButton;