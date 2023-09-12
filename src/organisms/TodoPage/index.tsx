/* eslint-disable @typescript-eslint/no-unused-vars */
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
import Paginator from "../../molecules/Paginator";
import { useNavigate, useParams } from "react-router-dom";
import TaskDetailsCard from "../../molecules/TaskDetailsCard";
import AddTaskForm from "../../molecules/AddTaskForm";
import Calendar from "../../molecules/Calendar";
import dayjs from "dayjs";
import { getTasks, updateTask } from "../../services";
import ErrorFallback from "../../molecules/ErrorFallBack";
import { CircularProgress } from "@mui/material";
import MobileModalAddForm from "../../molecules/AddTaskForm/mobileModal";
import Input from "../../atoms/FormItems/Input";
import RecorderIcon from "../../atoms/vectors/recorder-icon";
import MobileTaskDetails from "../../molecules/TaskDetailsCard/MobileTaskDetails";

export interface ExTaskType extends TaskType {
  startTime: string;
  endTime: string;
  date: string;
}

const TodoPage = () => {
  const navigate = useNavigate();
  const { page } = useParams();
  const { firstElevenDays, selectedYear, date, selectedMonthName, setDate } =
    useSelectedDate();
  const [allTasks, setAllTasks] = useState<TaskType[][]>([]);
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(Math.ceil(demoData.length / 7));
  const [selectedTask, setSelectedTask] = useState<ExTaskType | null>(null);
  const [showTaskDetails, setShowTaskDetails] = useState(false);
  const [showEditTaskDetails, setShowEditTaskDetails] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [firstLoading, setFirstLoading] = useState(false);
  const [queryParams, setQueryParams] = useState({
    page: 1,
  });

  const groupTasks = (data: TaskType[], defaultIndx: number) => {
    const groupedTasks = [];
    for (let i = 0; i < data.length; i += 7) {
      groupedTasks.push(data.slice(i, i + 7));
    }

    setAllTasks(groupedTasks);
    setTasks(groupedTasks[defaultIndx]);
  };

  useEffect(() => {
    if (allTasks.length > 0) {
      setLoading(true);
    } else {
      setFirstLoading(true);
    }
    getTasks(
      (res) => {
        setLoading(false);
        setFirstLoading(false);

        groupTasks(res, Number(page) - 1 || 0);
      },
      (err) => {
        setLoading(false);
        setFirstLoading(false);

        setError(err?.message);
      }
    );
  }, [queryParams]);

  useEffect(() => {
    if (page && allTasks.length > 0) setTasks(allTasks[Number(page) - 1]);
  }, [page]);

  const handleChange = (e: any, taskId: number) => {
    updateTask(
      taskId,
      { completed: e.target.checked },
      (_res) => {
        setTasks((prev) =>
          prev.map((task) => {
            if (task.id === taskId) task.completed = e.target.checked;

            return task;
          })
        );
      },
      (err) => {
        console.log(err?.message);
      }
    );
  };

  const handlePagination = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
    navigate(`/${value}`);
    setTasks(allTasks[value - 1]);
  };

  const handlePageNav = (type: string) => {
    if (type === "next" && currentPage < allTasks.length) {
      setCurrentPage(currentPage + 1);
      navigate(`/${currentPage + 1}`);
    }

    if (type === "prev" && page && Number(page) > 1) {
      setCurrentPage(currentPage - 1);
      navigate(`/${currentPage - 1}`);
    }
  };

  const handleTaskClick = (task: ExTaskType) => {
    setSelectedTask(task);
    setShowTaskDetails(true);
    setShowEditTaskDetails(false);
  };

  const handleDateChange = (val: any) => {
    const dat = dayjs(val).format("YYYY-MM-DD");
    setDate(moment(dat));
  };

  return (
    <>
      <section className="header">
        <div className="header-text">
          <h1>Good morning!</h1>
          <p>You got some task to do.</p>
        </div>
        <Button
          className=" hidden lg:flex w-max px-4"
          prefixIcon={<PlusIcon />}
          onClick={() => {
            setShowEditTaskDetails(true);
            setSelectedTask(null);
          }}
        >
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
          {error ? (
            <ErrorFallback errorMessage={error} cta={() => location.reload()} />
          ) : (
            <>
              <h5 className="month-text mt-8 flex items-center gap-3">
                My Tasks {loading && <CircularProgress size={16} />}
              </h5>
              <div className="task-content">
                {firstLoading ? (
                  <div className="flex justify-center item-center h-72">
                    <CircularProgress />
                  </div>
                ) : tasks.length > 0 ? (
                  <>
                    {tasks.map((task) => {
                      const startTime = moment().format("hh:mm a");
                      const endTime = moment().format("hh:mm a");
                      const date = moment();
                      return (
                        <TaskCard
                          key={`${task.id}`}
                          date={date}
                          startTime={startTime}
                          endTime={endTime}
                          handleChecked={(e) => handleChange(e, task.id)}
                          handleCardClick={() =>
                            handleTaskClick({
                              ...task,
                              startTime,
                              endTime,
                              date: date.format("Do MMMM, YYYY"),
                            })
                          }
                          {...task}
                        />
                      );
                    })}
                    <div className="lg:hidden my-4">
                      <Paginator
                        defaultPage={Number(page) || 0}
                        onChange={handlePagination}
                        count={totalPages}
                        page={Number(page) || 1}
                        handleNavigation={handlePageNav}
                      />
                    </div>
                  </>
                ) : (
                  <div className="h-40 flex items-center justify-center">
                    No data found
                  </div>
                )}
              </div>
              <hr className="w-full border border-solid border-gray-200 mt-8 hidden lg:block" />
              <div className="hidden lg:block">
                <Paginator
                  defaultPage={Number(page) || 0}
                  onChange={handlePagination}
                  count={totalPages}
                  page={Number(page) || 1}
                  handleNavigation={handlePageNav}
                />
              </div>
            </>
          )}
        </div>
        <div className="mobile-input">
          <Input
            placeholder="Input task"
            readOnly
            onClick={() => {
              setShowEditTaskDetails(true);
              setSelectedTask(null);
            }}
            icon={<RecorderIcon />}
          />
        </div>
        <div className="todo-utils-cont">
          {selectedTask && showTaskDetails && (
            <TaskDetailsCard
              queryParams={queryParams}
              showCard={showTaskDetails}
              onClose={setShowTaskDetails}
              setQueryParams={setQueryParams}
              onEdit={() => {
                setShowEditTaskDetails(true);
                setShowTaskDetails(false);
              }}
              {...selectedTask}
            />
          )}
          {showEditTaskDetails && (
            <AddTaskForm
              queryParams={queryParams}
              setQueryParams={setQueryParams}
              selectedTask={selectedTask}
              onClose={() => setShowEditTaskDetails(false)}
            />
          )}
          {!showEditTaskDetails && !showTaskDetails && (
            <Calendar selectedDate={date} handleChange={handleDateChange} />
          )}
        </div>
        <div className="lg:hidden">
          <MobileModalAddForm
            showModal={showEditTaskDetails}
            queryParams={queryParams}
            setQueryParams={setQueryParams}
            selectedTask={selectedTask}
            onClose={() => setShowEditTaskDetails(false)}
          />
        </div>
        {selectedTask && showTaskDetails && (
          <div className="lg:hidden">
            <MobileTaskDetails
              queryParams={queryParams}
              showCard={showTaskDetails}
              onClose={setShowTaskDetails}
              setQueryParams={setQueryParams}
              onEdit={() => {
                setShowEditTaskDetails(true);
                setShowTaskDetails(false);
              }}
              {...selectedTask}
            />
          </div>
        )}
      </section>
    </>
  );
};

export default TodoPage;
