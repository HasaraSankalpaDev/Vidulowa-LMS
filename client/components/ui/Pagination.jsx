"use client";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      {/* Prev Button */}
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="p-2 rounded hover:bg-gray-200 text-gray-400 disabled:opacity-50 cursor-pointer"
      >
        <FaChevronLeft />
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          onClick={() => onPageChange(n)}
          className={`w-8 h-8 rounded font-bold cursor-pointer ${
            currentPage === n
              ? "bg-blue-500 text-white"
              : "text-gray-700 hover:bg-gray-200"
          }`}
        >
          {n}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="p-2 rounded hover:bg-gray-200 text-gray-400 disabled:opacity-50 cursor-pointer"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
