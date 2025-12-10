import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

export default function Header({
  onAddTask,
  currentView,
  searchTerm,
  setSearchTerm,
  groups,
}) {
  const [title, setTitle] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (currentView === "addtask") {
      if (!title.trim()) {
        return;
      }
      onAddTask(title, selectedGroup);
      setTitle("");
      setSelectedGroup("");
    }
  }

  function handleChange(event) {
    if (currentView === "search") {
      setSearchTerm(event.target.value);
    } else {
      setTitle(event.target.value);
    }
  }

  const getTitle = () => {
    switch (currentView) {
      case "search":
        return "Search";
      case "group":
        return "Group List";
      case "completed":
        return "Completed";
      case "addtask":
        return "Add Task";
      default:
        return "To Do List";
    }
  };

  const getButtonText = () => {
    return currentView === "search" ? "Search" : "Add Task";
  };

  const getPlaceholder = () => {
    return currentView === "search" ? "Type to search..." : "Add your task";
  };

  const inputValue = currentView === "search" ? searchTerm : title;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="text-center mb-10">
        <h1 className="text-white text-3xl font-bold">{getTitle()}</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg mx-auto"
      >
        <input
          type="text"
          placeholder={getPlaceholder()}
          className="placeholder:text-gray-400 border border-gray-600 bg-transparent text-white w-full p-3  focus:outline-none focus:ring-2 focus:ring-gray-500"
          value={inputValue}
          onChange={handleChange}
        />
        {currentView === "addtask" && (
          <select
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
            className="border border-gray-600 bg-gray-800/50 text-white py-3.5 w-full sm:w-auto "
          >
            <option value="">Select a group</option>
            {groups.map((group) => (
              <option key={group.id} value={group.id}>
                {group.name}
              </option>
            ))}
          </select>
        )}
        <button
          className="flex items-center justify-center  text-white px-6 py-3  w-full border border-gray-600 transition duration-300 hover:bg-gray-700/50 disabled:bg-gray-800/50 cursor-pointer "
          disabled={currentView === "addtask" && !title.trim()}
        >
          {getButtonText()} <IoIosAddCircle className="ml-2" />
        </button>
      </form>
    </div>
  );
}
