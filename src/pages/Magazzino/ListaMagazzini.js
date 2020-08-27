import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core/';
import { Typography, Divider} from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import AddFormDialog from 'components/AddFormDialog';
import ListItemWrapper from 'components/ListItemWrapper';
import LinkToPage from 'components/LinkToPage';
import StyledButton from 'components/StyledButton';
import { Edit, Delete } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  workBench: theme.workBench
}));

const ListaMagazzini = () => {
  const classes = useStyles();

  return (
    <List className={classes.workBench}>
      <ListItemWrapper iconAction1={<Edit />} iconAction2={<Delete />}>
        <StyledButton>
            <LinkToPage page="Arquata_1" />
        </StyledButton>
      </ListItemWrapper>
      <Divider />
      <ListItemWrapper iconAction1={<Edit />} iconAction2={<Delete />}>
        <StyledButton>
            <LinkToPage page="Arquata_2" />
        </StyledButton>
      </ListItemWrapper>
      <Divider />
      <ListItem>
        <Typography color="primary">Aggiungi nuovo</Typography>
        <AddFormDialog 
          trigger={<AddIcon color="primary"/>}
          title="Magazzino"
          textFieldPlaceholder="Magazzino"
        />
      </ListItem>
    </List>
  );
}

export default ListaMagazzini;