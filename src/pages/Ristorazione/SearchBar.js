import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputBase, Paper, IconButton } from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 600
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  }
}));

const SearchBar = () => {
  const classes = useStyles();

  return(
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Cerca"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" className={classes.iconButton}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
