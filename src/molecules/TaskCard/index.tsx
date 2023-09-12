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
  handleCardClick: () => void;
}

const TaskCard = ({
  title,
  completed,
  startTime,
  endTime,
  date,
  handleChecked,
  handleCardClick,
}: TaskCardProps) => {
  const dateString = moment(date).fromNow();
  return (
    <div className="task-card-container" onClick={handleCardClick}>
      <div className="text-content-cont">
        <div className="w-8">
          <CheckBox checked={completed} onChange={handleChecked} />
        </div>
        <div className="ml-3">
          <p
            className={clsx(
              "font-medium text-gray-900 ",
              completed && " line-through"
            )}
          >
            {`${title.charAt(0).toUpperCase()}${title.substring(1)}`}
          </p>
          <p className={clsx("text-gray-600", completed && "line-through")}>
            {startTime} - {endTime}
          </p>
        </div>
      </div>
      <span className="text-gray-600 text-[0.875rem] text-right">
        {dateString}
      </span>
    </div>
  );
};

export default TaskCard;
