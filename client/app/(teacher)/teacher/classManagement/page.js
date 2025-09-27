"use client";
import { classes } from "@/data/TeacherPageData";
import Link from "next/link";
import React, { useState, useMemo } from "react";
import {
  FaUsers,
  FaCalendarAlt,
  FaPlus,
  FaChevronRight,
  FaSearch,
} from "react-icons/fa";
const ClassManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter classes based on search term
  const filteredClasses = useMemo(() => {
    if (!searchTerm.trim()) return classes;

    const lowercasedSearch = searchTerm.toLowerCase();
    return classes.filter(
      (classItem) =>
        classItem.subject.toLowerCase().includes(lowercasedSearch) ||
        classItem.grade.toLowerCase().includes(lowercasedSearch) ||
        classItem.academicYear.toLowerCase().includes(lowercasedSearch)
    );
  }, [searchTerm, classes]);

  const handleCreateNewClass = () => {
    // Add your create new class logic here
    console.log("Create new class clicked");
    // This could open a modal or navigate to a creation page
  };

  const handleViewDetails = (classId) => {
    // Add your view details logic here
    console.log("View details for class:", classId);
    // This could navigate to class details page
  };

  return (
    <div className="min-h-screen  p-4 md:p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Class Management
        </h1>
        <p className="text-gray-600">
          Manage your classes, students, and schedules
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative flex-1 max-w-md w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search classes by subject, grade, or year..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-transparent transition-all"
          />
        </div>
        <Link
          href="/teacher/classManagement/addClass"
          className="flex items-center cursor-pointer gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          <FaPlus />
          <span>Create New Class</span>
        </Link>
      </div>

      {/* Search Results Info */}
      {searchTerm && (
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Showing {filteredClasses.length} of {classes.length} classes
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>
      )}

      {/* Your Classes Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Your Classes
        </h2>

        {/* Class Grid */}
        {filteredClasses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredClasses.map((classItem) => (
              <div
                key={classItem.id}
                className={`border-1 border-gray-400 rounded-md p-5 hover:shadow-md cursor-pointer  transition-all duration-300 hover:-translate-y-1 `}
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {classItem.grade} - {classItem.subject}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {classItem.academicYear}
                  </p>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <FaUsers className={`${classItem.textColor}`} />
                    <span>{classItem.studentCount} Students</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <FaCalendarAlt className={`${classItem.textColor}`} />
                    <span>{classItem.schedule.join(", ")}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleViewDetails(classItem.id)}
                  className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-white transition-colors text-sm font-medium hover:border-gray-400"
                >
                  View Details
                  <FaChevronRight className="text-xs" />
                </button>
              </div>
            ))}

            {/* Create New Class Card */}
            <Link
              href="/teacher/classManagement/addClass"
              className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-gray-400 transition-all duration-300 hover:bg-gray-50 cursor-pointer"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <FaPlus className="text-blue-600 text-xl" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Create New Class
              </h3>
              <p className="text-sm text-gray-600">
                Set up a new class for your students
              </p>
            </Link>
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-12 bg-white rounded-xl border-2 border-dashed border-gray-300">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaSearch className="text-gray-400 text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No classes found
            </h3>
            <p className="text-gray-600 mb-4">
              No classes match your search for "{searchTerm}". Try a different
              search term.
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="px-6 py-2 cursor-pointer bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>

      {/* Empty State when no classes exist (commented out for reference) */}
      {/*
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaUsers className="text-gray-400 text-2xl" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No classes yet</h3>
        <p className="text-gray-600 mb-4">Get started by creating your first class</p>
        <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mx-auto">
          <FaPlus />
          <span>Create New Class</span>
        </button>
      </div>
      */}
    </div>
  );
};

export default ClassManagement;
