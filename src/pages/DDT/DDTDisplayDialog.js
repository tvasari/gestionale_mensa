import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, TableCell
} from '@material-ui/core/';
import SortingTable from 'components/SortingTable/SortingTable';
import { magazzinoHeaderLabels, magazzinoRows } from 'utils/fakeData';

const useStyles = makeStyles({
  elemMargin: {
    margin: '8px 0'
  },
  container:{
    display: 'grid'
  }
});

const headerLabels = magazzinoHeaderLabels.map((headerLabel, i) => {
  return(
    <TableCell 
      align={i === 0 ? "left" : "right"} 
      style={{padding: '8px 16px'}} 
      key={headerLabel}
    >
      <b>{ headerLabel }</b>
    </TableCell>
  );
});

const DDTDisplayDialog = ({ trigger }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(
    <Fragment>
      <Button onClick={handleClickOpen} variant="text"><b>{ trigger }</b></Button>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle>DDT #{ trigger }</DialogTitle>
        <DialogContent className={classes.container}>
          <Typography gutterBottom color="primary" variant="body1">25 Agosto 2020</Typography>
          <Typography gutterBottom color="primary" variant="body1">Fornitore: AIA</Typography>
          <SortingTable 
            rows={magazzinoRows} 
            columns={headerLabels}
            dialog={true}
          />
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

export default DDTDisplayDialog;
