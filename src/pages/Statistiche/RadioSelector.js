import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  ul: {
    listStyleType: 'none',
    padding: 0,
    color: theme.palette.primary.main,
    margin: 0
  },
  li: {
    marginBottom: '5px'
  }
}))

const RadioSelector = () => {
  const classes = useStyles();

  return(
    <ul className={classes.ul}>
      <li className={classes.li}><input type="radio" value="Anno" name="periodo"/>Anno</li>
      <li className={classes.li}><input type="radio" value="Mese" name="periodo"/>Mese</li>
    </ul>
  );
}

export default RadioSelector;