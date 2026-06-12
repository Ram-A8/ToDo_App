import { useParams, useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";

function EditTask({ tasks, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const task = tasks.find(
    (task) => task.id === Number(id)
  );

  function handleUpdate(updatedData) {
    onUpdate({
      ...task,
      ...updatedData,
    });

    navigate("/dashboard/tasks");
  }

  return (
    <TaskForm
      initialData={task}
      buttonText="Update Task"
      onSubmit={handleUpdate}
    />
  );
}

export default EditTask;