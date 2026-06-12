import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";

function AddTask({ onAdd }) {
  const navigate = useNavigate();

  function handleAdd(task) {
    onAdd({
      ...task,
      id: Date.now(),
      completed: false,
    });

    navigate("/dashboard/tasks");
  }

  return (
    <TaskForm
      buttonText="Add Task"
      onSubmit={handleAdd}
    />
  );
}

export default AddTask;