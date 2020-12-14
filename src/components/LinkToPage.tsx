import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
        color: 'black',
        width: 'inherit',
        display: 'flex'
    }
})

const LinkToPage = ({ page, elemToAdd }: any) => {
    const classes = useStyles();

    return(
        <NavLink 
            to={`/${page.toLowerCase().replace(/\s/g, '-')}`} 
            activeStyle={{color: '#d50000'}} 
            className={classes.link}
        >
            <ListItemText primary={page}></ListItemText>
            { !elemToAdd ? null : elemToAdd }
        </NavLink>
    );
}

export default LinkToPage;