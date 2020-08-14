import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import LinkToPage from './LinkToPage';
import StyledButton from './StyledButton';


const Item = ({ isMagazzino, nomeMagazzino }) => {
    return(
        <ListItem>
            {
                isMagazzino
                ? (
                    <StyledButton>
                        <LinkToPage page={nomeMagazzino} />
                    </StyledButton>
                )
                : (
                    <ListItemText
                        primary="Nome del piatto o ingrediente // nome magazzino"
                        secondary="ingredienti del piatto o um e costo/um dell'ingrediente // data creazione magazzino"
                    />
                )
            }
            <ListItemSecondaryAction>
                <IconButton edge="end">
                    <EditIcon />
                </IconButton>
                <IconButton edge="end">
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default Item;