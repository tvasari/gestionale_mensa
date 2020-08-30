import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
  appBar: {
    ...theme.workBench,
    backgroundColor: theme.palette.primary.light
  },
  header: {
    padding: "0 20px"
  }
}));

const WorkBenchTopBar = ({ headers }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        {
          headers.map((header, i) => {
            return (
              <div key={header.props.id} className={classes.header}>
                { header }
              </div>
            );
          })
        }
      </Toolbar>
    </AppBar>
  );
};

export default WorkBenchTopBar;