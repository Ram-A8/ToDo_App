import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Todo App</h2>

      <div className="nav-links">
        <Link to="/dashboard/tasks">Tasks</Link>
        <Link to="/add-task">Add Task</Link>
      </div>
    </nav>
  );
}

export default Navbar;