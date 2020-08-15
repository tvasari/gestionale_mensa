import React from 'react';
import { ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
import { Delete, Edit } from '@material-ui/icons/';
import LinkToPage from 'components/LinkToPage';
import StyledButton from 'components/StyledButton';


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
                    <Edit />
                </IconButton>
                <IconButton edge="end">
                    <Delete/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default Item;