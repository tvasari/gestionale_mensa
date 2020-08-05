import React, { useState } from "react";
import format from "date-fns/format";
import { it } from 'date-fns/locale'
import startOfWeek from "date-fns/startOfWeek";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker } from "@material-ui/pickers";
import { createStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";

class LocalizedUtils extends DateFnsUtils {
  getDatePickerHeaderText(date) {
    return format(date, "d MMM yyyy", { locale: this.locale });
  }
}

const WeekPicker = () => {
  const [selectedDate, handleDateChange] = useState(new Date());

  // Fai iniziare la settimana a Lunedì e non Domenica
  const formatWeekSelectLabel = () => {
    return `Settimana del ${format(startOfWeek(selectedDate), "d MMMM", {locale: it})}`
  };

  return (
    <MuiPickersUtilsProvider utils={LocalizedUtils} locale={it}>
      <DatePicker
        label="Settimana"
        value={selectedDate}
        labelFunc={formatWeekSelectLabel}
        onChange={handleDateChange}
        showTodayButton
        todayLabel="Oggi"
        cancelLabel="Annulla"
      />
    </MuiPickersUtilsProvider>
  );
}

const styles = createStyles(theme => ({
  dayWrapper: {
    position: "relative",
  },
  day: {
    width: 36,
    height: 36,
    fontSize: theme.typography.caption.fontSize,
    margin: "0 2px",
    color: "inherit",
  },
  customDayHighlight: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "2px",
    right: "2px",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "50%",
  },
  nonCurrentMonthDay: {
    color: theme.palette.text.disabled,
  },
  highlightNonCurrentMonthDay: {
    color: "#676767",
  },
  highlight: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  firstHighlight: {
    extend: "highlight",
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
  },
  endHighlight: {
    extend: "highlight",
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%",
  },
}));

export default withStyles(styles)(WeekPicker);
