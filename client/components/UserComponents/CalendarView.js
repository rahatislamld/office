// CalendarView.js
import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function CalendarView() {
  const [selectedDate, handleDateChange] = React.useState(new Date());

  return (
    <Paper style={{ padding: "20px" }}>
      <Typography variant="h6" style={{ marginBottom: "20px" }}>
        Select a Date
      </Typography>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          variant="inline"
          value={selectedDate}
          onChange={handleDateChange}
          animateYearScrolling
        />
      </MuiPickersUtilsProvider>
    </Paper>
  );
}

export default CalendarView;
