import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import { helpFetch } from "../helper/helpFetch";
import TaskCard from "./TaskCard";

const TasksList = () => {
  const { tasks, setTasks } = useTasks();

  useEffect(() => {
    async function awaitGet() {
      const data = await helpFetch().get("http://localhost:4000/api/tasks");

      setTasks(data);
    }

    awaitGet();

    return () => {};
  }, []);

  return (
    <ul className="p-3 mx-auto max-w-4xl grid grid-cols-fluid gap-4">
      {!tasks.length ? (
        <p className="text-center font-semibold text-slate-500 text-lg">
          There are no tasks to show
        </p>
      ) : (
        tasks?.map((task) => <TaskCard task={task} key={task._id} />)
      )}
    </ul>
  );
};

export default TasksList;
