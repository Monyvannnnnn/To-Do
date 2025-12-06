import React from "react";
import Todo from "./Todo";

export default function Task({ tasks, onDelete, onComplete }) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <>
      <div className="max-w-[700px] flex mx-auto justify-between mt-10 mb-10">
        {" "}
        <div className="flex ">
          <p className="text-white ">Create Task:</p>
          <span className="text-black bg-white px-2 ml-2">{tasksQuantity}</span>
        </div>
        <div className="flex">
          <p className="text-white">Completed:</p>
          <span className="text-black bg-white px-2 ml-2">
            {completedTasks} of {tasksQuantity}
          </span>
        </div>
      </div>
      <div className="">
        {tasks.map((task) => (
          <Todo
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}
      </div>
    </>
  );
}
