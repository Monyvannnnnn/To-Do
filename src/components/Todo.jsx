import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

export default function Todo() {
  return (
    <>
      {" "}
      <div className="text-white flex justify-between max-w-[700px] border p-3 mx-auto mt-10">
        <button>
          {" "}
          <FaRegCheckCircle />
        </button>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <button>
          <MdDeleteOutline />
        </button>
      </div>
    </>
  );
}
