import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItemText, Divider } from '@material-ui/core/';
import ListItemWrapper from 'components/ListItemWrapper';
import { Visibility, GetApp } from '@material-ui/icons/';

const useStyles = makeStyles((theme) => ({
  workBench: theme.workBench
}));

const Rimanenze = () => {
  const classes = useStyles();

  return (
    <List className={classes.workBench}>
      <ListItemWrapper iconAction1={<Visibility />} iconAction2={<GetApp />}>
        <ListItemText
          primary="Rimanenze al 31/08/21"
        />
      </ListItemWrapper>
      <Divider />
      <ListItemWrapper iconAction1={<Visibility />} iconAction2={<GetApp />}>
        <ListItemText
          primary="Rimanenze al 30/09/21"
        />
      </ListItemWrapper>
      <Divider />
    </List>
  );
}

export default Rimanenze;