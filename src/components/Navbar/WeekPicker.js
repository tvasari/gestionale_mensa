import React, { useState } from "react";
import format from "date-fns/format";
import { it } from 'date-fns/locale'
import startOfWeek from "date-fns/startOfWeek";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

class LocalizedUtils extends DateFnsUtils {
  getDatePickerHeaderText(date) {
    return format(date, "d MMM yyyy", { locale: this.locale });
  }
}

const WeekPicker = () => {
  const [selectedDate, handleDateChange] = useState(new Date());

  const formatWeekSelectLabel = () => {
    const selectedDateClone = new Date(selectedDate.getTime());

    const weeklyMonday = startOfWeek(selectedDateClone).setDate(
      selectedDateClone.getDay() !== 0
      ? startOfWeek(selectedDateClone).getDate() + 1
      : startOfWeek(selectedDateClone.setDate(selectedDateClone.getDate() - 1)).getDate() + 1
    )
    return `Settimana del ${format(weeklyMonday, "d MMM Y", {locale: it})}`
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
        disableToolbar
      />
    </MuiPickersUtilsProvider>
  );
}

export default WeekPicker;
