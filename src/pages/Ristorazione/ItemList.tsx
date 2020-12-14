import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  List, ListItem, ListSubheader, ListItemText, ListItemSecondaryAction, IconButton 
} from '@material-ui/core/';
import { Edit, Delete } from '@material-ui/icons';
import staticText from "staticText.json";

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
  const { ItemList } = staticText;

  return(
    <List className={classes.root} subheader={<li />}>
      <ListSubheader className={classes.subHeader}>{ ItemList.piatti }</ListSubheader>
      {
        [0, 1, 2, 3].map((sectionId) => (
          <li key={`section-${sectionId}`}>
            <ul className={classes.ul}>
              {[0, 1, 2].map(() => (
                <ListItem>
                  <ListItemText
                    primary={ItemList.primary}
                    secondary={ItemList.secondary}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end">
                      <Edit />
                    </IconButton>
                    <IconButton edge="end">
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </ul>
          </li>
        ))
      }
      <ListSubheader className={classes.subHeader}>{ ItemList.ingredienti }</ListSubheader>
      {
        [0, 1, 2, 3].map(sectionId => (
          <li key={`section-${sectionId}`}>
            <ul className={classes.ul}>
              {[0, 1, 2].map(() => (
                <ListItem>
                  <ListItemText
                    primary={ItemList.primary}
                    secondary={ItemList.secondary}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end">
                      <Edit />
                    </IconButton>
                    <IconButton edge="end">
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </ul>
          </li>
        ))
      }
    </List>
  );
}

export default ItemList;