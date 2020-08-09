import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Item from './Item';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 640,
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 483,
    },
    listSection: {
      backgroundColor: 'inherit',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
  }));

const ItemList = () => {
    const classes = useStyles();

    return(
        <List className={classes.root} subheader={<li />}>
            <ListSubheader>{`Piatti`}</ListSubheader>
            {
                [0, 1, 2, 3].map((sectionId) => (
                    <li key={`section-${sectionId}`} className={classes.listSection}>
                        <ul className={classes.ul}>
                            
                            {[0, 1, 2].map((item) => (
                                <Item key={`item-${sectionId}-${item}`} />
                            ))}
                        </ul>
                    </li>
                ))
            }
            <ListSubheader>{`Ingredienti`}</ListSubheader>
            {
                [0, 1, 2, 3].map((sectionId) => (
                    <li key={`section-${sectionId}`} className={classes.listSection}>
                        <ul className={classes.ul}>
                            
                            {[0, 1, 2].map((item) => (
                                <Item key={`item-${sectionId}-${item}`} />
                            ))}
                        </ul>
                    </li>
                ))
            }
        </List>
    );
}

export default ItemList;