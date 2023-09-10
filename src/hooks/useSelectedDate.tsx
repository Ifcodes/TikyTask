import moment, { Moment } from "moment";
import { useEffect, useState } from "react";

const useSelectedDate = () => {
  const [firstElevenDays, setFirstElevenDays] = useState<Moment[]>([]);
  const [date, setDate] = useState<Moment>(moment());

  const selectedMonth = date.month();
  const selectedMonthName = date.format("MMMM");
  const selectedMonthShortName = date.format("MMM");
  const selectedYear = date.year();
  const selectedDay = date.day();
  const selectedWeekDayName = date.format("dddd");
  const selectedWeekDayShortName = date.format("ddd");
  const firstMonthDay = moment()
    .year(selectedYear)
    .month(selectedMonth)
    .date(1);

  const getDay = (day: number) => {
    return moment().year(selectedYear).month(selectedMonth).date(day);
  };

  const getFirstElevenDays = () => {
    const days = [];
    let currentDay = firstMonthDay.date();
    while (days.length <= 10) {
      days.push(getDay(currentDay));
      currentDay = currentDay + 1;
    }

    setFirstElevenDays(days);
  };

  useEffect(() => {
    getFirstElevenDays();
  }, [date]);

  return {
    selectedMonth,
    selectedYear,
    selectedDay,
    selectedWeekDayName,
    selectedWeekDayShortName,
    firstMonthDay,
    firstElevenDays,
    date,
    selectedMonthName,
    selectedMonthShortName,
    setDate,
  };
};

export default useSelectedDate;
