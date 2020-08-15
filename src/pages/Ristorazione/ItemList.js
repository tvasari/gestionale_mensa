import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListSubheader } from '@material-ui/core/';
import Item from 'components/Item';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 640,
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
                                <Item key={`item-${sectionId}-${item}`} />
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