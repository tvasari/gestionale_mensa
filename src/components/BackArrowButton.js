import React from 'react';
import { NavLink } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const BackArrowButton = ({ path }) => {
    return(
        <IconButton style={{padding: 0}}>
            <NavLink style={{color: '#1976d2'}} to={`/${path}`}>
                <KeyboardBackspaceIcon/>
            </NavLink>
        </IconButton>
    );
}

export default BackArrowButton;