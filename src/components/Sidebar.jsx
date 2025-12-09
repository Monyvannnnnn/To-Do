import React, { useState } from "react";
import {
  AiOutlineMenuFold,
  AiOutlineDelete,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaLayerGroup } from "react-icons/fa";
import { MdOutlineNoteAlt } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function Sidebar({
  isOpen,
  onToggle,
  currentView,
  setCurrentView,
  setSearchTerm,
  groups,
  onAddGroup,
  onDeleteGroup,
  setSelectedGroup,
}) {
  const [newGroupName, setNewGroupName] = useState("");

  const handleItemClick = (itemType) => {
    setCurrentView(itemType);
    if (itemType !== "search") {
      setSearchTerm("");
    }
    if (itemType === "group") {
      setSelectedGroup(null);
    }
  };

  const handleAddGroup = () => {
    if (newGroupName.trim()) {
      onAddGroup(newGroupName);
      setNewGroupName("");
    }
  };

  const handleGroupClick = (groupId) => {
    setCurrentView("group");
    setSelectedGroup(groupId);
  };

  return (
    <div
      className={`h-screen fixed left-0 top-0 z-10 text-white transition-all duration-300 ${
        isOpen ? "w-64" : "w-14"
      } bg-gray-900 border-r border-gray-700`}
    >
      <div className="flex items-center justify-between p-4 h-16">
        {isOpen && <h1 className="text-white text-xl truncate">To Do List</h1>}
        <button onClick={onToggle} className="text-white focus:outline-none">
          {isOpen ? (
            <AiOutlineMenuFold className="text-2xl" />
          ) : (
            <AiOutlineMenuUnfold className="text-2xl mx-auto" />
          )}
        </button>
      </div>
      <ul className="pt-4 cursor-pointer">
        <NavItem
          isOpen={isOpen}
          currentView={currentView}
          viewType="search"
          onClick={() => handleItemClick("search")}
          icon={<CiSearch className="text-2xl" />}
          label="Search"
        />
        <NavItem
          isOpen={isOpen}
          currentView={currentView}
          viewType="addtask"
          onClick={() => handleItemClick("addtask")}
          icon={<IoIosAddCircleOutline className="text-2xl" />}
          label="Add Task"
        />
        <NavItem
          isOpen={isOpen}
          currentView={currentView}
          viewType="group"
          onClick={() => handleItemClick("group")}
          icon={<FaLayerGroup className="text-2xl" />}
          label="Group List"
        />
        <div className="px-4 py-2">
          {isOpen && (
            <div className="flex items-center mt-4">
              <input
                type="text"
                value={newGroupName}
                onChange={(e) => setNewGroupName(e.target.value)}
                placeholder="New Group"
                className="bg-gray-800 border border-gray-600 p-2 w-full  focus:outline-none"
              />
              <button
                onClick={handleAddGroup}
                className="p-2 border border-gray-600 bg-gray-600 hover:bg-gray-700 "
              >
                Add
              </button>
            </div>
          )}
          <ul className="mt-4 space-y-2">
            {groups.map((group) => (
              <li
                key={group.id}
                className="flex justify-between items-center p-2 hover:bg-gray-700 rounded-md"
              >
                <span
                  onClick={() => handleGroupClick(group.id)}
                  className="truncate w-full"
                >
                  {isOpen ? group.name : ""}
                </span>
                {isOpen && (
                  <button
                    onClick={() => onDeleteGroup(group.id)}
                    className="text-white hover:text-black"
                  >
                    <AiOutlineDelete />
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
        <NavItem
          isOpen={isOpen}
          currentView={currentView}
          viewType="completed"
          onClick={() => handleItemClick("completed")}
          icon={<MdOutlineNoteAlt className="text-2xl" />}
          label="Completed"
        />
      </ul>
    </div>
  );
}

const NavItem = ({ isOpen, currentView, viewType, onClick, icon, label }) => (
  <li
    className={`p-4 flex items-center relative whitespace-nowrap overflow-hidden duration-300 hover:bg-gray-600 ${
      currentView === viewType ? "bg-gray-700" : ""
    }`}
    onClick={onClick}
  >
    {icon}
    {isOpen && <span className="ml-4">{label}</span>}
  </li>
);
