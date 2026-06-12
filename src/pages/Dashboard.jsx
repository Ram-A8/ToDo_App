import TaskList from "../components/TaskList";

function Dashboard({
  tasks,
  onDelete,
  onToggle,
}) {
  return (
    <div className="container">
      <h1>Todo List</h1>

      <TaskList
        tasks={tasks}
        onDelete={onDelete}
        onToggle={onToggle}
      />
    </div>
  );
}

export default Dashboard;