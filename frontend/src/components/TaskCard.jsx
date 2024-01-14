import React from "react";
import { useTasks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ task }) => {
  const { setForm, deletedTask, setIsId } = useTasks();
  const navigate = useNavigate();

  return (
    <li className="p-2 bg-white shadow-md rounded-md" key={task.id}>
      <div className="mb-3">
        <h3 className="font-semibold text-lg">{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => {
            setForm(task);
            setIsId(true);
            navigate("/taskform");
          }}
          className="bg-blue-500 text-white py-1 px-3 rounded-md"
        >
          Edit
        </button>
        <button
          onClick={() => {
            deletedTask(task.id);
          }}
          className="bg-red-500 text-white px-3 py-1 rounded-md"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskCard;
