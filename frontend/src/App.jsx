import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<h1>Register</h1>} />
        <Route path="/login" element={<h1>login</h1>} />
        <Route path="/tasks" element={<h1>TaskPage</h1>} />
        <Route path="/formtask" element={<h1>FormTaskPage</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
