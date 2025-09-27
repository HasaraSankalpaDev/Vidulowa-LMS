"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import {
  subjects,
  grades,
  academicYears,
  daysOfWeek,
} from "@/data/TeacherPageData";

const AddClassPage = () => {
  const [className, setClassName] = useState("");
  const [academicYear, setAcademicYear] = useState(academicYears[0]);
  const [classDescription, setClassDescription] = useState("");
  const [subject, setSubject] = useState(subjects[0]);
  const [grade, setGrade] = useState(grades[0]);
  const [schedule, setSchedule] = useState([]);

  const toggleDay = (day) => {
    setSchedule((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleCreateClass = () => {
    const newClass = {
      className,
      academicYear,
      classDescription,
      subject,
      grade,
      schedule,
    };
    console.log(newClass);
    alert("Class Created Successfully!");
    // Reset form if needed
  };

  return (
    <div className="mx-auto mt-5 ">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
          Add New Class
        </h1>
        <p className="text-gray-600">Set up a new class for your students</p>
      </div>

      {/* Form */}
      <div className="bg-white py-8 px-5 rounded-md border-2 border-blue-100 shadow-md space-y-6">
        {/* Class Name & Academic Year */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="e.g. Grade 10 - Mathematics"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="pl-3 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 transition-all"
          />
          <select
            value={academicYear}
            onChange={(e) => setAcademicYear(e.target.value)}
            className="pl-3 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 transition-all"
          >
            {academicYears.map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
        </div>

        {/* Class Description */}
        <textarea
          placeholder="Enter a brief description of the class"
          value={classDescription}
          onChange={(e) => setClassDescription(e.target.value)}
          className="pl-3 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 transition-all"
        />

        {/* Subject & Grade */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="pl-3 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 transition-all"
          >
            {subjects.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>

          <select
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="pl-3 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 transition-all"
          >
            {grades.map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>
        </div>

        {/* Class Schedule */}
        <div>
          <label className="block mb-2 text-gray-700 font-medium">
            Class Schedule
          </label>
          <div className="flex flex-wrap gap-3">
            {daysOfWeek.map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => toggleDay(day)}
                className={`px-4 cursor-pointer py-2 border rounded-full transition ${
                  schedule.includes(day)
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-4 flex-wrap">
          <button
            onClick={() => console.log("Cancelled")}
            className="px-6 cursor-pointer py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleCreateClass}
            className="px-6 cursor-pointer py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
          >
            <FaPlus /> Create Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddClassPage;
