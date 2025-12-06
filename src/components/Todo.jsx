import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

export default function Todo({ task, onDelete, onComplete }) {
  return (
    <>
      {" "}
      <div className="text-white flex justify-between max-w-[700px] border p-3 mx-auto mt-2">
        <button onClick={() => onComplete(task.id)}>
          {" "}
          <FaRegCheckCircle />
        </button>
        <p className={task.isCompleted ? "line-through" : ""}>{task.title}</p>
        <button onClick={() => onDelete(task.id)}>
          <MdDeleteOutline />
        </button>
      </div>
    </>
  );
}
