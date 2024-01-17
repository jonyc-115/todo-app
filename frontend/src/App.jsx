import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import TaskForm from "./pages/TaskForm";
import { useState } from "react";
import { TaskContextProvider } from "./context/TaskContext";
import { UserContextProvider } from "./context/UserContext";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <TaskContextProvider>
          <Header />
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/tasks" element={<h1>TaskPage</h1>} />
            <Route path="/taskform" element={<TaskForm />} />
          </Routes>
        </TaskContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
