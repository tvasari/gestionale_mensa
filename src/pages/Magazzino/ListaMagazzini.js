import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Item from 'components/Item';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import CreaMagazzino from './CreaMagazzino';

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
                    <CreaMagazzino open={this.state.open} handleClickClose={this.handleClickClose}/>
                </ListItem>
            </List>
        );
    }
}

export default ListaMagazzini;