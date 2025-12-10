import React, { useState, useEffect } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Todo({
  task,
  onDelete,
  onComplete,
  currentView,
  groups,
}) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // If the task becomes completed AND the current view is not 'completed' (so it should disappear from current view)
    if (task.isCompleted && currentView !== "completed") {
      setIsFadingOut(true);
    } else {
      setIsFadingOut(false); // Reset if task becomes uncompleted or view changes
    }
  }, [task.isCompleted, currentView]);

  const group = groups.find((g) => g.id === task.groupId);

  return (
    <div
      className={`text-white flex justify-between max-w-[540px] border border-gray-600 p-3 mx-auto 
                  transition-all duration-500 ease-out mb-4
                  ${
                    isFadingOut
                      ? "opacity-0 h-0 p-0 m-0 overflow-hidden border-none "
                      : ""
                  }`}
    >
      <button onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <IoIosCheckmarkCircle /> : <FaRegCheckCircle />}
      </button>
      <p className={task.isCompleted ? "line-through" : ""}>
        {task.title}
        {group && ` - ${group.name}`}
      </p>
      <button onClick={() => onDelete(task.id)}>
        <MdDeleteOutline />
      </button>
    </div>
  );
}
