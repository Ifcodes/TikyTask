/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { TaskType } from "../../utils/types";
import BackgroundCard from "../../atoms/Cards/BackgroundCard";
import CloseIcon from "../../atoms/vectors/closeIcon";
import CalendarIcon from "../../atoms/vectors/calendar-icon";
import ClockIcon from "../../atoms/vectors/clock-icon";
import "./styles.scss";
import Button from "../../atoms/Buttons/Button";
import clsx from "clsx";
import { deleteTask } from "../../services";
import { ToastContainer, toast } from "react-toastify";

export interface TaskDetailsProps extends TaskType {
  startTime: string;
  endTime: string;
  date: string;
  showCard: boolean;
  onClose: (val: boolean) => void;
  onEdit: () => void;
  queryParams: any;
  setQueryParams: (val: any) => void;
}
const TaskDetailsCard = ({
  id,
  showCard,
  title,
  date,
  endTime,
  startTime,
  queryParams,
  onEdit,
  onClose,
  setQueryParams,
}: TaskDetailsProps) => {
  const [loading, setLoading] = useState(false);
  const handleDelete = () => {
    setLoading(true);

    deleteTask(
      id,
      (_res) => {
        setLoading(false);
        toast.success("Task deleted successfully.");
        setQueryParams({ ...queryParams });
      },
      (err) => {
        setLoading(false);
        toast.error(err?.message);
        setQueryParams({ ...queryParams });
      }
    );
  };

  const handleEdit = () => {
    onClose(false);
    onEdit();
  };
  return (
    <BackgroundCard className={clsx(showCard ? "block" : "hidden")}>
      <CloseIcon className="close-icon" onClick={() => onClose(false)} />
      <p className="title-text">{`${title
        .charAt(0)
        .toUpperCase()}${title.substring(1)}`}</p>
      <div className="date-cont mb-2">
        <CalendarIcon />
        <span className="text-gray-normal font-medium">{date}</span>
      </div>
      <div className="date-cont">
        <ClockIcon />
        <span className="text-gray-normal font-medium">
          {startTime} - {endTime}
        </span>
      </div>
      <div className="flex items-center gap-4 mt-8">
        <Button loading={loading} outlined onClick={handleDelete}>
          Delete
        </Button>
        <Button onClick={handleEdit}>Edit</Button>
      </div>
      <ToastContainer hideProgressBar position="bottom-right" />
    </BackgroundCard>
  );
};

export default TaskDetailsCard;
