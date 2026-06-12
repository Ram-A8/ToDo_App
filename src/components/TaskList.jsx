import { Link } from "react-router-dom";

function TaskList({
  tasks,
  onDelete,
  onToggle,
}) {
  if (tasks.length === 0) {
    return <p>No tasks available.</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="task-card"
        >
          <div className="task-info">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() =>
                onToggle(task.id)
              }
            />

            <span
              className={
                task.completed
                  ? "completed"
                  : ""
              }
            >
              {task.title}
            </span>
          </div>

          <div className="actions">
            <Link to={`/edit/${task.id}`}>
              <button className="edit-btn">
                Edit
              </button>
            </Link>

            <button
              className="delete-btn"
              onClick={() =>
                onDelete(task.id)
              }
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;