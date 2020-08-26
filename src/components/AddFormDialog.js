import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button 
} from '@material-ui/core/';
import Selector from 'components/Selector';
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { it } from 'date-fns/locale'
import format from "date-fns/format";
import StockItemList from 'components/StockItemList';

class LocalizedUtils extends DateFnsUtils {
  getDatePickerHeaderText(date) {
    return format(date, "DDD MMM yyyy", { locale: this.locale });
  }
}

const useStyles = makeStyles({
  elemMargin: {
    margin: '8px 0'
  },
  container:{
    display: 'grid'
  }
});

const AddFormDialog = ({ trigger, title, textFieldPlaceholder }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedDate, handleDateChange] = useState(new Date());

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
        <DialogTitle>Aggiungi { title }</DialogTitle>
        <DialogContent className={classes.container}>
          <MuiPickersUtilsProvider utils={LocalizedUtils} locale={it}>
            <DatePicker
              label="Data"
              labelFunc={() => format(new Date(), "d MMM Y", {locale: it})}
              value={selectedDate}
              onChange={handleDateChange}
              showTodayButton
              todayLabel="Oggi"
              cancelLabel="Annulla"
              disableToolbar
            />
          </MuiPickersUtilsProvider>
          <TextField
            color="primary"
            autoComplete 
            required 
            placeholder={`Nome ${textFieldPlaceholder}`}
            className={classes.elemMargin} 
          />
          <Selector
            fullWidth={true}
            type="Categoria" 
            formControlStyle={classes.elemMargin} 
          />
          <StockItemList />
          <Button color="primary"><b>Aggiungi Categoria</b></Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Conferma
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

export default AddFormDialog;


