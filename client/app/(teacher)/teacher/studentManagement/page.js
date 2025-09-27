"use client";
import { studentsData } from "@/data/TeacherPageData";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const StudentManagement = () => {
  const [search, setSearch] = useState("");
  const [filterCourse, setFilterCourse] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredStudents = studentsData.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.id.toLowerCase().includes(search.toLowerCase());
    const matchesCourse =
      filterCourse === "All" || student.course === filterCourse;
    const matchesStatus =
      filterStatus === "All" ||
      (filterStatus === "Completed" && student.progress === 100) ||
      (filterStatus === "In Progress" && student.progress < 100);
    return matchesSearch && matchesCourse && matchesStatus;
  });

  return (
    <div className=" w-full min-h-screen mt-5">
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
        Student Management
      </h1>
      <p className="text-gray-600 mb-6">
        Manage student records, track progress, and oversee course enrollments.
      </p>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search students by name or ID"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-transparent transition-all"
          />
          <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex gap-3 flex-wrap">
          <select
            value={filterCourse}
            onChange={(e) => setFilterCourse(e.target.value)}
            className="px-4 py-3 border border-gray-300 border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-transparent transition-all"
          >
            <option value="All">All Courses</option>
            {[...new Set(studentsData.map((s) => s.course))].map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-3 border  border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-transparent transition-all"
          >
            <option value="All">All Status</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
          </select>
        </div>
      </div>

      {/* Students Table */}
      <div className="overflow-x-auto bg-white rounded-md shadow-md mt-8">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-3 px-4 font-medium">Name</th>
              <th className="py-3 px-4 font-medium">ID</th>
              <th className="py-3 px-4 font-medium">Course</th>
              <th className="py-3 px-4 font-medium">Progress</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr
                  key={student.id}
                  className="border-0 border-b-2 border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">{student.name}</td>
                  <td className="py-3 px-4 text-gray-700">{student.id}</td>
                  <td className="py-3 px-4 text-gray-700">{student.course}</td>
                  <td className="py-5 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div
                          className="bg-blue-500 h-2 rounded-full transition-all"
                          style={{ width: `${student.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm w-10">{student.progress}%</span>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-6 justify-end flex-wrap">
        <button className="bg-blue-500 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
          Add Student
        </button>
        <button className="bg-gray-200 cursor-pointer text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition">
          Edit Student
        </button>
      </div>
    </div>
  );
};

export default StudentManagement;
