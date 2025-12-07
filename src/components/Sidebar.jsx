import React from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaLayerGroup } from "react-icons/fa";
import { MdOutlineNoteAlt } from "react-icons/md";
import { AiOutlineMenuUnfold } from "react-icons/ai";

export default function Sidebar({ isOpen, onToggle }) {
  return (
    // 1. IMPROVED: Added bg-gray-900 and fixed position/z-index for typical sidebar use
    // 2. WIDTTH: w-64 is 256px, w-20 is 80px.
    <div
      className={`h-screen  fixed left-0 top-0 z-10 text-white transition-all duration-300 ${
        isOpen ? "w-55" : "w-16"
      } border-r border-white`}
    >
      {/* HEADER SECTION: Title and Toggle Button */}
      <div className="flex items-center justify-between p-4 h-16">
        {/* Only show title when open, with text truncation and overflow hidden */}
        {isOpen && <h1 className="text-white text-xl  truncate">To Do List</h1>}

        {/* Toggle button always visible and centered */}
        {/* 🔑 CONDITIONAL RENDERING FOR ICONS */}
        {isOpen ? (
          // Show FOLD icon (to close sidebar) when sidebar IS open
          <AiOutlineMenuFold
            className={`text-white cursor-pointer text-2xl `}
            onClick={onToggle}
          />
        ) : (
          // Show UNFOLD icon (to open sidebar) when sidebar IS NOT open
          <AiOutlineMenuUnfold
            className={`text-white cursor-pointer text-2xl  mx-auto`}
            onClick={onToggle}
          />
        )}
      </div>{" "}
      {/* MENU LIST */}
      <ul className="pt-4 cursor-pointer">
        {/* 3. ALIGNMENT FIX: Use relative and absolute positioning to center icons when closed. */}
        <li className="p-4 hover:bg-white hover:text-black flex items-center relative whitespace-nowrap overflow-hidden duration-300">
          <CiSearch className="text-2xl" />
          {/* Text is positioned absolutely and fades in/out */}
          <span
            className={`ml-4 absolute left-12 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            Search
          </span>
        </li>

        <li className="p-4 hover:bg-white hover:text-black flex items-center relative whitespace-nowrap overflow-hidden duration-300">
          <FaLayerGroup className="text-2xl" />
          <span
            className={`ml-4 absolute left-12 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            Group List
          </span>
        </li>

        <li className="p-4 hover:bg-white hover:text-black flex items-center relative whitespace-nowrap overflow-hidden duration-300">
          <MdOutlineNoteAlt className="text-2xl" />
          <span
            className={`ml-4 absolute left-12 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            Completed
          </span>
        </li>
      </ul>
    </div>
  );
}
