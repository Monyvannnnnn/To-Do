import React from "react";

export default function Deleteall({ deleteAll }) {
  return (
    <div className="flex justify-center mt-4">
      <button
        className="text-white bg-gray-800/50 border border-gray-600 hover:bg-gray-700 duration-300 py-2 px-4 "
        onClick={deleteAll}
      >
        Delete All
      </button>
    </div>
  );
}
