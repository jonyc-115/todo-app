import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

const Header = () => {
  const { setForm, initialValue, setIsId } = useTasks();
  return (
    <header className="bg-white max-w-4xl mx-auto rounded-b-md shadow-sm mb-4">
      <div className="w-full flex justify-between items-center p-3">
        <Link to="/">
          <h2 className="font-bold text-xl">
            <span className="text-slate-800">Todo</span>
            <span className="text-slate-500">App</span>
          </h2>
        </Link>

        <nav>
          <Link
            onClick={() => {
              setForm(initialValue);
              setIsId(false);
            }}
            className="p-1 px-2 bg-blue-500 text-white rounded-md"
            to="/taskform"
          >
            Add Task
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
