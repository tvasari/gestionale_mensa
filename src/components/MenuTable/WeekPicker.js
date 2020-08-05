import format from "date-fns/format";
import { it } from 'date-fns/locale'
import React, { useState } from "react";
import startOfWeek from "date-fns/startOfWeek";
import { DatePicker } from "@material-ui/pickers";
import { createStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core";

const WeekPicker = () => {
  const [selectedDate, handleDateChange] = useState(new Date());

  const formatWeekSelectLabel = () => {
    return `Settimana del ${format(startOfWeek(selectedDate), "d MMMM", {locale: it})}`
  };

  return (
    <DatePicker
      label="Settimana"
      value={selectedDate}
      labelFunc={formatWeekSelectLabel}
      onChange={handleDateChange}
      format='it'
      showTodayButton
      todayLabel="Oggi"
    />
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
