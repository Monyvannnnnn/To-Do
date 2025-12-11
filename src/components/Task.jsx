import React from "react";
import Todo from "./Todo";

export default function Task({
  tasks,
  onDelete,
  onComplete,
  onUpdate,
  currentView,
  groups,
}) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <div className="bg-gray-800/50 border border-gray-600 p-6 mt-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-lg  text-white">
            Tasks: <span className="text-white">{tasksQuantity}</span>
          </p>
        </div>
        <div>
          <p className="text-lg  text-white">
            Completed:{" "}
            <span className="text-white">
              {completedTasks} of {tasksQuantity}
            </span>
          </p>
        </div>
      </div>
      <div className="space-y-4">
        {tasks.map((task) => (
          <Todo
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
            onUpdate={onUpdate}
            currentView={currentView}
            groups={groups}
          />
        ))}
      </div>
    </div>
  );
}
