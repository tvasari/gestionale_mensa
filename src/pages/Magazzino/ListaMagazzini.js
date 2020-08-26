import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core/';
import { Typography, Divider} from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import NewStorageDialog from 'pages/Magazzino/NewStorageDialog';
import Item from 'components/Item';

const useStyles = makeStyles((theme) => ({
  workBench: theme.workBench
}));

const ListaMagazzini = () => {
  const classes = useStyles();

  return (
    <List className={classes.workBench}>
      <Item isMagazzino={true} nomeMagazzino="Arquata_1"/>
      <Divider />
      <Item isMagazzino={true} nomeMagazzino="Arquata_2"/>
      <Divider />
      <ListItem>
        <Typography color="primary">Aggiungi nuovo</Typography>
        <NewStorageDialog trigger={<AddIcon color="primary"/>}/>
      </ListItem>
    </List>
  );
}

export default ListaMagazzini;