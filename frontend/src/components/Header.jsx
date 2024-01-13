import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2>
        <span>Todo</span>
        <span>App</span>
      </h2>

      <div>
        <Link to="taskFofrm">Add Task</Link>
      </div>
    </header>
  );
};

export default Header;
