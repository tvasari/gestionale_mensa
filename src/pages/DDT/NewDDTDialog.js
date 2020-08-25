import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Dialog, DialogTitle, DialogContent, ButtonGroup, 
    IconButton, TextField, DialogActions, Button 
} from '@material-ui/core/';
import Selector from 'components/Selector';
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { it } from 'date-fns/locale'
import format from "date-fns/format";
import NewDDTItemList from 'pages/DDT/NewDDTItemList';


class LocalizedUtils extends DateFnsUtils {
  getDatePickerHeaderText(date) {
    return format(date, "DDD MMM yyyy", { locale: this.locale });
  }
}

const useStyles = makeStyles((theme) => ({
  elemMargin: {
      margin: '8px 0'
    }
}));

const NewDDTDialog = ({ trigger }) => {
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
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Aggiungi DDT</DialogTitle>
                <DialogContent style={{display: 'grid'}}>
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
                      style={{padding: '5px 0'}}
                      color="primary"
                      autoComplete 
                      required 
                      placeholder="Fornitore"
                      className={classes.elemMargin} 
                    />
                    <Selector
                        fullWidth={true}
                        type="Categoria" 
                        formControlStyle={classes.elemMargin} 
                    />
                    <NewDDTItemList />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Aggiungi
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}

export default NewDDTDialog;


