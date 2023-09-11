/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import BackgroundCard from "../../atoms/Cards/BackgroundCard";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import moment from "moment";

interface CalendarProps {
  selectedDate: any;
  handleChange: (e: any) => void;
}

const Calendar = ({ selectedDate, handleChange }: CalendarProps) => {
  return (
    <BackgroundCard>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar value={dayjs(moment(selectedDate).format("YYYY-MM-DD"))} onChange={handleChange} />
      </LocalizationProvider>
    </BackgroundCard>
  );
};

export default Calendar;
