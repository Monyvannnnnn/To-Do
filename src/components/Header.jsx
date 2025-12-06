import React from "react";
import { IoIosAddCircle } from "react-icons/io";

export default function Header() {
  return (
    <div className="max-w-[1200px] mx-auto h-[200px] ">
      <div className="max-w-[800px] mx-auto h-[600px] border border-white mt-20">
        <h1 className="text-white text-center text-2xl mt-20 ">To Do List</h1>
        <form className="flex justify-center my-10  text-white">
          <input
            type="text"
            placeholder="Add your task"
            className="placeholder:text-white border border-white w-[560px] p-2  "
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
  );
}
