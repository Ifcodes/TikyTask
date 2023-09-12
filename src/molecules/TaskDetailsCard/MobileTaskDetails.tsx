/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { TaskDetailsProps } from ".";
import { deleteTask } from "../../services";
import { ToastContainer, toast } from "react-toastify";
import Modal from "../Modal";
import CalendarIcon from "../../atoms/vectors/calendar-icon";
import ClockIcon from "../../atoms/vectors/clock-icon";
import Button from "../../atoms/Buttons/Button";

const MobileTaskDetails = ({
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
  return (
    <Modal showModal={showCard} onClose={onClose} title="">
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
        <Button onClick={onEdit}>Edit</Button>
      </div>
      <ToastContainer hideProgressBar position="bottom-right" />
    </Modal>
  );
};

export default MobileTaskDetails;
