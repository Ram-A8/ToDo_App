import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";

function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((t) =>
        t.id === updatedTask.id ? updatedTask : t
      )
    );
  };

  return (
    <>
      {/* ✅ Navbar shown on every page */}
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Navigate to="/dashboard/tasks" replace />}
        />

        <Route
          path="/dashboard/tasks"
          element={
            <Dashboard
              tasks={tasks}
              onDelete={deleteTask}
              onToggle={toggleComplete}
            />
          }
        />

        <Route
          path="/add-task"
          element={<AddTask onAdd={addTask} />}
        />

        <Route
          path="/edit/:id"
          element={
            <EditTask
              tasks={tasks}
              onUpdate={updateTask}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;