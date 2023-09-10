import { Moment } from "moment";
import DayButton from "../../atoms/Buttons/DayButton";
import "./styles.scss";

interface GroupedDayCardProps {
  days: Moment[];
  selectedDay: Moment;
  setSelectedDay: (val: Moment) => void;
}
const GroupedDayCard = ({
  days,
  selectedDay,
  setSelectedDay,
}: GroupedDayCardProps) => {
  return (
    <div className="group-wrapper">
      {days.map((day) => (
        <DayButton
          key={`day-${day.format("D")}`}
          day={day.format("ddd")}
          date={day.format("D")}
          isActive={selectedDay.format("D") === day.format("D")}
          onClick={() => setSelectedDay(day)}
        />
      ))}
    </div>
  );
};

export default GroupedDayCard;
