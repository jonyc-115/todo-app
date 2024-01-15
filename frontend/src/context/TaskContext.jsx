import { createContext, useContext, useState } from "react";
import { helpFetch } from "../helper/helpFetch";

const initialValue = {
  title: "",
  description: "",
  _id: "",
};

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTask debe usarse dentro de un TaskContextProvider");
  }

  //console.log(context);

  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [isId, setIsId] = useState(false);
  const [tasks, setTasks] = useState([]);
  const { post, put, del } = helpFetch();
  const [form, setForm] = useState(initialValue);

  const deletedTask = async (id) => {
    try {
      await del(`http://localhost:4000/api/tasks/${id}`);
      const newTasks = tasks.filter((task) => task._id !== id);

      return setTasks(newTasks);
    } catch (error) {
      console.log(error);
    }
  };

  const updatedTask = async (task) => {
    try {
      await put(`http://localhost:4000/api/tasks/${task._id}`, { body: task });

      const newTasks = tasks.map((el) => (el._id === task._id ? task : el));

      setTasks(newTasks);
    } catch (error) {
      console.log(error);
    }
  };

  const createdTask = async (task) => {
    const newTask = await post("http://localhost:4000/api/tasks/", {
      body: task,
    });

    console.log(newTask);

    setTasks([...tasks, newTask]);
  };

  return (
    <TaskContext.Provider
      value={{
        deletedTask,
        tasks,
        isId,
        setIsId,
        setTasks,
        updatedTask,
        createdTask,
        form,
        setForm,
        initialValue,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
