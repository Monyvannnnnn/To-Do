import React from "react";
import Todo from "./Todo";

export default function Task() {
  return (
    <>
      <div className="max-w-[700px] flex mx-auto justify-between mt-10">
        {" "}
        <div className="flex">
          <p className="text-white">Create Task:</p>
          <span className="text-black bg-white px-2 ml-2">10</span>
        </div>
        <div className="flex">
          <p className="text-white">Completed:</p>
          <span className="text-black bg-white px-2 ml-2"> 1 of 10</span>
        </div>
      </div>
      <div className="">
        <Todo />
      </div>
    </>
  );
}
