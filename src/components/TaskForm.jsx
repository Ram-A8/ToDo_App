import { useState } from "react";

function TaskForm({
  initialData = {},
  onSubmit,
  buttonText,
}) {
  const [title, setTitle] = useState(
    initialData.title || ""
  );

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({ title });

    setTitle("");
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          required
        />

        <button type="submit">
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;