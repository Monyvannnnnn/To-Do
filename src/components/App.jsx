import React, { useEffect, useState } from "react";
import Header from "./Header";
import Task from "./Task";
import Sidebar from "./Sidebar"; // Import Sidebar

const LOCAL_STORAGE_KEY = "todo:savedTasks";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    console.log(saved);
    if(saved){
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar visibility

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }
  function addTask(taskTitle) {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  function toggleTaskCompleted(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex">
      {" "}
      {/* Add a flex container */}
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />{" "}
      {/* Render the Sidebar component with props */}
      <div className="flex-1">
        {" "}
        {/* Wrapper for Header and Task to take remaining space */}
        <Header onAddTask={addTask} />
        <Task
          tasks={tasks}
          onDelete={deleteTask}
          onComplete={toggleTaskCompleted}
        />
      </div>
    </div>
  );
}
