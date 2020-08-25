import React, { Component } from 'react';
import { List, ListItem } from '@material-ui/core/';
import { Typography, IconButton, Divider} from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import NewStorageDialog from 'pages/Magazzino/NewStorageDialog';
import Item from 'components/Item';

class ListaMagazzini extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClickClose = this.handleClickClose.bind(this)
    }

    handleClickOpen() {
        this.setState({open: true});
    };

    handleClickClose() {
        this.setState({open: false});
    }

    render() {
        return (
            <List style={{width: '80%', float: 'right'}}>
                <Item isMagazzino={true} nomeMagazzino="Arquata_1"/>
                <Divider />
                <Item isMagazzino={true} nomeMagazzino="Arquata_2"/>
                <Divider />
                <ListItem>
                    <Typography color="primary">Aggiungi nuovo</Typography>
                    <IconButton onClick={this.handleClickOpen}>
                        <AddIcon />
                    </IconButton>
                    <NewStorageDialog open={this.state.open} handleClickClose={this.handleClickClose}/>
                </ListItem>
            </List>
        );
    }
}

export default ListaMagazzini;