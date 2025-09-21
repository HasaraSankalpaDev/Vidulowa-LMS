"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";

const ClassesFilter = ({
  search,
  setSearch,
  filters,
  selectedFilters,
  handleFilterChange,
}) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center bg-white rounded-xl shadow p-4 mb-8">
      {/* Search */}
      <div className="flex items-center flex-1 bg-gray-100 rounded-md px-3 py-2">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search for classes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent outline-none flex-1 text-gray-700"
        />
      </div>

      {/* Dropdown Filters */}
      <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
        {filters.map((f) => (
          <select
            key={f.label}
            className="flex items-center gap-1 bg-blue-50 text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-100 transition border-none focus:outline-none"
            value={selectedFilters[f.label] || ""}
            onChange={(e) => handleFilterChange(f.label, e.target.value)}
          >
            <option value="">{f.label}</option>
            {f.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ))}
      </div>
    </div>
  );
};

export default ClassesFilter;
