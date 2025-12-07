import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Todo({ task, onDelete, onComplete }) {
  return (
    <>
      {" "}
      <div className="text-white flex justify-between max-w-[540px] border p-3 mx-auto mt-2">
        <button onClick={() => onComplete(task.id)}>
             {task.isCompleted ?<IoIosCheckmarkCircle /> :<FaRegCheckCircle />   }
          
        </button>
        <p className={task.isCompleted ? "line-through" : ""}>{task.title}</p>
        <button onClick={() => onDelete(task.id)}>
          <MdDeleteOutline />
        </button>
      </div>
     
    </>
  );
}
