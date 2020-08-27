import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListSubheader, ListItemText } from '@material-ui/core/';
import ListItemWrapper from 'components/ListItemWrapper';
import { Edit, Delete } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 480,
  },
  ul: {
    padding: 0,
  },
  subHeader: {
    backgroundColor: theme.palette.primary.light
  }
}));

const ItemList = () => {
  const classes = useStyles();

  return(
    <List className={classes.root} subheader={<li />}>
      <ListSubheader className={classes.subHeader}>{`Piatti`}</ListSubheader>
      {
        [0, 1, 2, 3].map((sectionId) => (
          <li key={`section-${sectionId}`} className={classes.listSection}>
            <ul className={classes.ul}>
              {[0, 1, 2].map((item) => (
                <ListItemWrapper key={`item-${sectionId}-${item}`} iconAction1={<Edit />} iconAction2={<Delete />}>
                  <ListItemText
                    primary="Nome del piatto o ingrediente"
                    secondary="ingredienti del piatto o um e costo/um dell'ingrediente"
                  />
                </ListItemWrapper>
              ))}
            </ul>
          </li>
        ))
      }
      <ListSubheader className={classes.subHeader}>{`Ingredienti`}</ListSubheader>
      {
        [0, 1, 2, 3].map((sectionId) => (
          <li key={`section-${sectionId}`}>
            <ul className={classes.ul}>
              {[0, 1, 2].map((item) => (
                <ListItemWrapper key={`item-${sectionId}-${item}`} iconAction1={<Edit />} iconAction2={<Delete />}>
                  <ListItemText
                    primary="Nome del piatto o ingrediente"
                    secondary="ingredienti del piatto o um e costo/um dell'ingrediente"
                  />
                </ListItemWrapper>
              ))}
            </ul>
          </li>
        ))
      }
    </List>
  );
}

export default ItemList;