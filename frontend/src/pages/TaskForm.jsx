import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

const TaskForm = () => {
  const [error, setError] = useState({
    title: "",
    description: "",
  });
  const navigate = useNavigate();
  const {
    isId,
    setIsId,
    updatedTask,
    createdTask,
    form,
    setForm,
    initialValue,
  } = useTasks();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  console.log(form);

  console.log(isId);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(!error.title);

    if (form.title !== "" && form.description !== "") {
      console.log(error);
      if (!isId) {
        await createdTask(form);
        navigate("/");
        setForm(initialValue);
        setIsId(false);
      } else {
        await updatedTask(form);
        navigate("/");
        setForm(initialValue);
        setIsId(false);
      }
    } else {
      let err = {};
      if (!form.title) {
        err.title = "la tarea debe llevar un titulo";
      }

      if (!form.description) {
        err.description = "La tarea debe llevar una descripcion";
      }

      setError(err);
      console.log(err);
    }
  };

  return (
    <div className="mx-full flex justify-center items-center p-3 min-h-[90vh]">
      <form
        onSubmit={handleSubmit}
        className="shadow-md min-w-[18rem] flex flex-col gap-4 bg-white p-4 rounded-md"
      >
        <input
          name="title"
          className=" bg-[#f7f9ff] p-2 rounded-md border border-[#cbcfe3] outline-none text-slate-700"
          type="text"
          placeholder="Title"
          onChange={handleChange}
          value={form.title}
        />
        {error && <p>{error.title}</p>}
        <textarea
          className="bg-[#f7f9ff] rounded-md resize-none p-2 border border-[#cbcfe3] outline-none text-slate-700"
          name="description"
          placeholder="Description"
          onChange={handleChange}
          value={form.description}
        ></textarea>
        {error && <p>{error.description}</p>}
        <button className="bg-blue-500 text-white p-1 rounded-md text-md font-semibold">
          {isId ? "Edit" : "Save"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
