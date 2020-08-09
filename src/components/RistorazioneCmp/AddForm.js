import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';



const useStyles = makeStyles(theme => ({
    container: {
      maxHeight: '90vh',
      overflow: 'auto',
      width: '80%',
      padding: 0
    }
}));

const AddForm  = () => {
    const classes = useStyles();

    return(
        <Box className={classes.container} borderColor="#1976d2">
            {props => (
                <Paper {...props} variant="outlined">
                    <div>asd</div>
                </Paper>
            )}
        </Box>
    );
}

export default AddForm;