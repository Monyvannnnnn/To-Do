import React, { useState } from "react";
import Header from "./components/Header";
import Task from "./components/Task";
import Sidebar from "./components/Sidebar";
import useTaskManager from "./hooks/useTaskManager.jsx";
import Deleteall from "./common/Deleteall";

export default function App() {
  const {
    tasks,
    groups,
    addTask,
    deleteTask,
    toggleTaskCompleted,
    deleteAll,
    addGroup,
    deleteGroup,
  } = useTaskManager();
  const [currentView, setCurrentView] = useState("search");
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleAddTask = (taskTitle, groupId) => {
    addTask(taskTitle, groupId);
    setSearchTerm("");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    if (currentView === "completed") {
      return task.isCompleted && matchesSearch;
    }
    if (currentView === "group") {
      return (
        !task.isCompleted &&
        task.groupId === selectedGroup &&
        matchesSearch
      );
    }
    if (currentView === "search" || currentView === "addtask") {
      return !task.isCompleted && matchesSearch;
    }
    return false;
  });

  const totalTasksQuantity = tasks.length;
  const totalCompletedTasks = tasks.filter(
    (task) => task.isCompleted
  ).length;

  return (
    <div className="content-wrapper flex text-white min-h-screen font-poppins">
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={toggleSidebar}
        currentView={currentView}
        setCurrentView={setCurrentView}
        setSearchTerm={setSearchTerm}
        groups={groups}
        onAddGroup={addGroup}
        onDeleteGroup={deleteGroup}
        setSelectedGroup={setSelectedGroup}
      />
      <main
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        <div className="container mx-auto p-8">
          <Header
            onAddTask={handleAddTask}
            currentView={currentView}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            groups={groups}
          />
          <Task
            tasks={filteredTasks}
            onDelete={deleteTask}
            onComplete={toggleTaskCompleted}
            currentView={currentView}
            totalTasksQuantity={totalTasksQuantity}
            totalCompletedTasks={totalCompletedTasks}
            groups={groups}
          />
          <Deleteall deleteAll={deleteAll} />
        </div>
      </main>
    </div>
  );
}
