import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button 
} from '@material-ui/core/';
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { it } from 'date-fns/locale'
import format from "date-fns/format";
import StockItemList from 'components/StockItemList';
import { SelectorCategoria } from 'components/Selectors';
import staticText from "staticText.json";

class LocalizedUtils extends DateFnsUtils {
  getDatePickerHeaderText(date: Date) {
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

const AddFormDialog = ({ trigger, title, textFieldPlaceholder }: any) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [categoria, setCategoria] = useState("Ortofrutta");
  const [selectedDate, handleDateChange] = useState<Date | null>(new Date());

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
        <DialogTitle>{ `${staticText.AddItemDialog.aggiungi} ${title}` }</DialogTitle>
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
            autoComplete="on"
            required 
            placeholder={`Nome ${textFieldPlaceholder}`}
            className={classes.elemMargin} 
          />
          <SelectorCategoria categoria={categoria} setCategoria={setCategoria}/>
          <StockItemList />
          <Button color="primary"><b>{staticText.AddFormDialog.categoria}</b></Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            { staticText.AddFormDialog.conferma }
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

export default AddFormDialog;


