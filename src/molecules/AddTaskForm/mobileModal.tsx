/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useEffect, useState } from "react";
import { AddTaskFormProp } from ".";
import { ExTaskType } from "../../organisms/TodoPage";
import moment from "moment";
import { createTask, updateTask } from "../../services";
import { ToastContainer, toast } from "react-toastify";
import Modal from "../Modal";
import TagButton from "../../atoms/Buttons/TagButton";
import CalendarIcon from "../../atoms/vectors/calendar-icon";
import TimePicker from "../../atoms/FormItems/TimePicker";
import BellIconFilled from "../../atoms/vectors/bell-icon-filled";
import CloseIcon from "../../atoms/vectors/closeIcon";
import Button from "../../atoms/Buttons/Button";

interface MobileModalAddForm extends AddTaskFormProp {
  showModal: boolean;
}

const MobileModalAddForm = ({
  showModal,
  onClose,
  queryParams,
  setQueryParams,
  selectedTask,
}: MobileModalAddForm) => {
  const [formData, setFormData] = useState<ExTaskType>({
    startTime: moment().format("hh:mm"),
    endTime: moment().format("hh:mm"),
    date: moment().fromNow(),
    title: "",
    id: 0,
    userId: 0,
    completed: false,
  });
  const [reminderTime, setReminderTime] = useState("");
  const reminderTimes = ["15 minutes", "30 minutes", "1 hour"];
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedTask) {
      setFormData({
        ...selectedTask,
        startTime: selectedTask.startTime.split(" ")[0],
        endTime: selectedTask.startTime.split(" ")[0],
      });
    } else {
      setFormData({
        startTime: moment().format("hh:mm"),
        endTime: moment().format("hh:mm"),
        date: moment().fromNow(),
        title: "",
        id: 0,
        userId: 0,
        completed: false,
      });
    }
  }, [selectedTask]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClose = () => {
    onClose(false);
  };

  const handleSubmit = () => {
    setLoading(true);
    if (selectedTask) {
      updateTask(
        selectedTask.id,
        formData,
        (_res) => {
          setLoading(false);
          toast.success("Task updated successfully.");
          setQueryParams({ ...queryParams });
        },
        (err) => {
          setLoading(false);
          toast.error(err?.message);
        }
      );
    } else {
      createTask(
        formData,
        (_res) => {
          setLoading(false);
          toast.success("Created successfully.");
          setQueryParams({ ...queryParams });

          setFormData({
            startTime: moment().format("hh:mm"),
            endTime: moment().format("hh:mm"),
            date: moment().fromNow(),
            title: "",
            id: 0,
            userId: 0,
            completed: false,
          });
        },
        (err) => {
          setLoading(false);
          toast.error(err?.message);
        }
      );
    }
  };

  return (
    <Modal
      showModal={showModal}
      onClose={handleClose}
      title={`${selectedTask ? "Edit" : "Add"} task`}
    >
      <textarea
        name="title"
        value={formData.title}
        onChange={handleChange}
        rows={4}
        className="bg-gray-300 p-3 rounded-lg w-full outline-none"
      ></textarea>
      <div className="tags-cont">
        <TagButton icon={<CalendarIcon />} text="Today" />
        <TimePicker
          value={formData.startTime}
          onChange={(e) =>
            setFormData({ ...formData, startTime: e.target.value })
          }
        />
        <TimePicker
          value={formData.endTime}
          onChange={(e) =>
            setFormData({ ...formData, endTime: e.target.value })
          }
        />
      </div>
      <div className="reminder-cont">
        <div className="reminder-text">
          <BellIconFilled className="mr-4" />
          {reminderTime && <span>{reminderTime} before</span>}
          {!reminderTime && (
            <select
              value={reminderTime}
              onChange={(e) => setReminderTime(e.target.value)}
              placeholder="Set Reminder"
              className="selector"
            >
              {reminderTimes.map((reminder) => (
                <option value={reminder} key={reminder}>
                  {reminder}
                </option>
              ))}
            </select>
          )}
        </div>
        <CloseIcon
          className="hover:bg-gray-200 cursor-pointer rounded-full transition-all"
          onClick={() => setReminderTime("")}
        />
      </div>
      <div className="flex items-center gap-4 mt-8">
        <Button outlined onClick={handleClose}>
          Cancel
        </Button>
        <Button loading={loading} onClick={handleSubmit}>
          {selectedTask ? "Save" : "Add"}
        </Button>
      </div>
      <ToastContainer hideProgressBar position="bottom-right" />
    </Modal>
  );
};

export default MobileModalAddForm;
