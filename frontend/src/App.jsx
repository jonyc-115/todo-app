import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import TaskForm from "./pages/TaskForm";
import { useEffect, useState } from "react";
import { TaskContextProvider } from "./context/TaskContext";

const initialValue = {
  title: "",
  description: "",
  id: "",
};

function App() {
  const [isId, setIsId] = useState(false);
  const [form, setForm] = useState(initialValue);

  return (
    <BrowserRouter>
      <TaskContextProvider>
        <Header
          initialValue={initialValue}
          setForm={setForm}
          setIsId={setIsId}
        />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage setForm={setForm} setIsId={setIsId} isId={isId} />
            }
          />
          <Route path="/register" element={<h1>Register</h1>} />
          <Route path="/login" element={<h1>login</h1>} />
          <Route path="/tasks" element={<h1>TaskPage</h1>} />
          <Route
            path="/taskform"
            element={
              <TaskForm
                isId={isId}
                form={form}
                setForm={setForm}
                setIsId={setIsId}
                initialValue={initialValue}
              />
            }
          />
        </Routes>
      </TaskContextProvider>
    </BrowserRouter>
  );
}

export default App;
