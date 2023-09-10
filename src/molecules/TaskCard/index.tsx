import { ChangeEvent } from "react";
import CheckBox from "../../atoms/FormItems/Checkbox";
import moment, { Moment } from "moment";
import clsx from "clsx";
import "./styles.scss";

interface TaskCardProps {
  title: string;
  completed: boolean;
  handleChecked: (val: ChangeEvent<HTMLInputElement>) => void;
  date: Moment;
  startTime: string;
  endTime: string;
}

const TaskCard = ({
  title,
  completed,
  startTime,
  endTime,
  date,
  handleChecked,
}: TaskCardProps) => {
  const dateString = moment(date).fromNow();
  return (
    <div className="task-card-container">
      <div className="text-content-cont">
        <CheckBox checked={completed} onChange={handleChecked} />
        <div className="ml-3">
          <p
            className={clsx(
              "font-medium text-dark",
              completed && " line-through"
            )}
          >
            {title}
          </p>
          <p className={clsx("text-gray-600", completed && "line-through")}>
            {startTime} - {endTime}
          </p>
        </div>
      </div>
      <span className="text-gray-600 text-[0.875rem]">{dateString}</span>
    </div>
  );
};

export default TaskCard;
