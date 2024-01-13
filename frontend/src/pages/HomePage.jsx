import { useEffect, useState } from "react";

const initialValue = {
  title: "",
  description: "",
  id: "",
};

const HomePage = () => {
  const [form, setForm] = useState(initialValue);
  const [data, setData] = useState([]);
  const [isId, setIsId] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    async function awaitFetch() {
      const res = await fetch("http://localhost:3000/tasks");

      const json = await res.json();

      setData(json);
    }

    awaitFetch();

    return () => {};
  }, []);

  const createdTask = async (data) => {
    const res = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    return json;
  };

  const deletedTask = async (id) => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const newData = data.filter((task) => task.id !== id);

    setData(newData);
  };

  const updateTask = async (data) => {
    const res = await fetch(`http://localhost:3000/tasks/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    return json;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isId) {
      const json = await createdTask(form);

      console.log(json);

      setData([...data, json]);
    } else {
      const json = await updateTask(form);
      console.log(json);

      const newData = data.map((task) => (task.id === json.id ? json : task));

      setData(newData);
    }
    setForm(initialValue);
    setIsId(false);
  };

  console.log(isId);

  return (
    <main>
      <div className="mx-auto max-w-lg p-3">
        <form
          onSubmit={handleSubmit}
          className="shadow-md flex flex-col gap-4 bg-white p-4 rounded-md"
        >
          <input
            name="title"
            className=" bg-[#f7f9ff] p-2 rounded-md border border-[#cbcfe3] outline-none text-slate-700"
            type="text"
            placeholder="Title"
            onChange={handleChange}
            value={form.title}
          />
          <textarea
            className="bg-[#f7f9ff] rounded-md resize-none p-2 border border-[#cbcfe3] outline-none text-slate-700"
            name="description"
            placeholder="Description"
            onChange={handleChange}
            value={form.description}
          ></textarea>
          <button className="bg-blue-500 text-white p-1 rounded-md text-md font-semibold">
            Create
          </button>
        </form>
      </div>
      <section>
        <ul className="p-3 mx-auto max-w-lg grid grid-cols-fluid gap-4">
          {data?.map((task) => {
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
          })}
        </ul>
      </section>
    </main>
  );
};

export default HomePage;
