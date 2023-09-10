/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "../../atoms/Buttons/Button";
import PlusIcon from "../../atoms/vectors/plus-icon";
import "./styles.scss";
import useSelectedDate from "../../hooks/useSelectedDate";
import GroupedDayCard from "../../molecules/GroupedDayCards";
import { useEffect, useState } from "react";
import { demoData } from "../../utils/demoData";
import TaskCard from "../../molecules/TaskCard";
import moment from "moment";
import { TaskType } from "../../utils/types";

const TodoPage = () => {
  const { firstElevenDays, selectedYear, date, selectedMonthName, setDate } =
    useSelectedDate();
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    const defaultData = demoData.slice(0, 7);
    setTasks(defaultData);
  }, []);

  console.log({ firstElevenDays });
  const handleChange = (e: any, taskId: number) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === taskId) task.completed = e.target.checked;

        return task;
      })
    );
  };

  return (
    <>
      <section className="header">
        <div className="header-text">
          <h1>Good morning!</h1>
          <p>You got some task to do.</p>
        </div>
        <Button className=" w-max px-4" suffix={<PlusIcon />}>
          Create New Task
        </Button>
      </section>
      <section className="content">
        <div className="todo-content">
          <h5 className="month-text">
            {selectedMonthName} {selectedYear}
          </h5>
          <div className="group-card-cont">
            <GroupedDayCard
              days={firstElevenDays}
              selectedDay={date}
              setSelectedDay={setDate}
            />
          </div>
          <h5 className="month-text mt-8">My Tasks</h5>
          <div className="task-content">
            {tasks.map((task) => {
              const startTime = moment().format("hh:mm a");
              const endTime = moment().format("hh:mm a");
              return (
                <TaskCard
                  date={moment()}
                  startTime={startTime}
                  endTime={endTime}
                  handleChecked={(e) => handleChange(e, task.id)}
                  {...task}
                />
              );
            })}
          </div>
          <hr className="w-full border border-solid border-gray-200 my-8" />
        </div>
        <div></div>
      </section>
    </>
  );
};

export default TodoPage;
