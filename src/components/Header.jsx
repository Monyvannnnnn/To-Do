import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import Sidebar from "./Sidebar";

export default function Header({ onAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <div>
   

      <div className="max-w-[1200px] mx-auto h-[200px]">
        <div className="max-w-[600px] mx-auto border border-white mt-20 h-[600px] ">
          <h1 className="text-white text-center text-2xl mt-20 ">To Do List</h1>
          <form
            onSubmit={handleSubmit}
            className="flex justify-center my-10  text-white"
          >
            <input
              type="text"
              placeholder="Add your task"
              className="placeholder:text-white border border-white w-[400px] p-2  "
              value={title}
              onChange={onChangeTitle}
            />
            <button
              className="flex items-center 
          bg-black 
          text-white 

          border border-white 
          px-6 py-3 

          transition duration-300 hover:bg-white hover:text-black cursor-pointer"
            >
              Add Task <IoIosAddCircle />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
