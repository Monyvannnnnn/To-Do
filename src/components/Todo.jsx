import React, { useState, useEffect } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";

export default function Todo({
  task,
  onDelete,
  onComplete,
  currentView,
  groups,
  onUpdate,
}) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  useEffect(() => {
    // If the task becomes completed AND the current view is not 'completed' (so it should disappear from current view)
    if (task.isCompleted && currentView !== "completed") {
      setIsFadingOut(true);
    } else {
      setIsFadingOut(false); // Reset if task becomes uncompleted or view changes
    }
  }, [task.isCompleted, currentView]);

  const group = groups.find((g) => g.id === task.groupId);

  const handleUpdate = () => {
    onUpdate(task.id, editedTitle);
    setIsEditing(false);
  };

  return (
    <div
      className={`text-white flex justify-between items-center max-w-[540px] border border-gray-600 p-3 mx-auto 
                  transition-all duration-500 ease-out mb-4
                  ${
                    isFadingOut
                      ? "opacity-0 h-0 p-0 m-0 overflow-hidden border-none "
                      : ""
                  }`}
    >
      <div className="flex items-center space-x-2">
        <button onClick={() => onComplete(task.id)}>
          {task.isCompleted ? <IoIosCheckmarkCircle /> : <FaRegCheckCircle />}
        </button>
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="bg-gray-800 text-white"
          />
        ) : (
          <p className={task.isCompleted ? "line-through" : ""}>
            {task.title}
            {group && ` - ${group.name}`}
          </p>
        )}
      </div>
      <div className="flex items-center space-x-2">
        {isEditing ? (
          <button onClick={handleUpdate} className="text-blue-500">
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)}>
            <MdEdit />
          </button>
        )}
        <button onClick={() => onDelete(task.id)}>
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
}
