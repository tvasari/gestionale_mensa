import React, { useState } from "react";
import format from "date-fns/format";
import { it } from "date-fns/locale";
import startOfWeek from "date-fns/startOfWeek";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import staticText from "staticText.json";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

class LocalizedUtils extends DateFnsUtils {

  getDatePickerHeaderText(date: Date) {
    return format(date, "d MMM yyyy", { locale: this.locale });
  }

}

const WeekPicker = () => {
  const [selectedDate, handleDateChange] = useState<Date | null>(new Date());
  const { subList } = staticText.SideDrawer;

  const formatWeekSelectLabel = (selectedDate: Date | null) => {
    const selectedDateClone: Date = selectedDate ? new Date(selectedDate.getTime()) : new Date();

    const weeklyMonday = startOfWeek(selectedDateClone).setDate(
      selectedDateClone.getDay() !== 0
      ? startOfWeek(selectedDateClone).getDate() + 1
      : startOfWeek(selectedDateClone.setDate(selectedDateClone.getDate() - 1)).getDate() + 1
    )

    const week = `${format(weeklyMonday, "d MMM Y", {locale: it})}`;
    return `${subList.settimana} del ${week}`
  };

  return (
    <MuiPickersUtilsProvider utils={LocalizedUtils} locale={it}>
      <DatePicker
        label={subList.settimana}
        value={selectedDate}
        labelFunc={formatWeekSelectLabel}
        onChange={handleDateChange}
        showTodayButton
        todayLabel={subList.oggi}
        cancelLabel={subList.annulla}
        disableToolbar
      />
    </MuiPickersUtilsProvider>
  );
}

export default WeekPicker;
