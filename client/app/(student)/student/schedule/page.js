"use client";
import { useState, useMemo } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

const SchedulePage = () => {
  // Class data
  const availableClasses = [
    {
      course: "Advanced Mathematics",
      topic: "Advanced Integration",
      teacher: "Mr. Silva",
      date: "July 22, 2024, 9:00 AM",
      day: 22,
    },
    {
      course: "Physics Fundamentals",
      topic: "Quantum Mechanics Intro",
      teacher: "Ms. Fernando",
      date: "July 22, 2024, 1:00 PM",
      day: 22,
    },
    {
      course: "Chemistry Essentials",
      topic: "Organic Compounds",
      teacher: "Dr. Rajapaksa",
      date: "July 23, 2024, 11:00 AM",
      day: 23,
    },
    {
      course: "Computer Science",
      topic: "Data Structures",
      teacher: "Prof. Chen",
      date: "July 24, 2024, 10:00 AM",
      day: 24,
    },
    {
      course: "History of Art",
      topic: "Renaissance Period",
      teacher: "Dr. Hughes",
      date: "July 25, 2024, 2:00 PM",
      day: 25,
    },
  ];

  const [selectedDay, setSelectedDay] = useState(22);
  const [searchQuery, setSearchQuery] = useState("");

  // Classes for selected day
  const classesForDay = useMemo(
    () => availableClasses.filter((cls) => cls.day === selectedDay),
    [selectedDay]
  );

  // Filtered classes by search
  const filteredClasses = useMemo(() => {
    if (!searchQuery) return availableClasses;
    return availableClasses.filter(
      (cls) =>
        cls.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cls.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cls.teacher.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 mt-5 lg:p-6">
      {/* Header */}
      <header className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Schedule Classes
        </h1>
        <p className="text-gray-500 text-sm sm:text-base mt-1">
          Explore upcoming classes and plan your learning journey.
        </p>
      </header>

      {/* Calendar + Daily classes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Section */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5 gap-3">
            <h2 className="font-semibold text-gray-700 text-base sm:text-lg">
              July 2024
            </h2>
            <div className="flex gap-2 text-sm">
              <button className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
                Day
              </button>
              <button className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
                Week
              </button>
              <button className="px-3 py-1.5 rounded-lg bg-blue-600 text-white shadow">
                Month
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-xs sm:text-sm">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <span key={d} className="font-semibold text-gray-500">
                {d}
              </span>
            ))}
            {[...Array(31)].map((_, i) => {
              const day = i + 1;
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`h-9 w-9 sm:h-11 sm:w-11 flex items-center justify-center rounded-lg text-xs sm:text-sm font-medium transition-all ${
                    day === selectedDay
                      ? "bg-blue-600 text-white shadow-md"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* Classes for selected date */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-5">
          <h2 className="text-base sm:text-lg font-semibold mb-3 text-gray-800">
            Classes on July {selectedDay}, 2024
          </h2>
          <div className="space-y-3">
            {classesForDay.length > 0 ? (
              classesForDay.map((cls, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-md transition bg-gray-50"
                >
                  <p className="font-medium text-gray-800">{cls.course}</p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {cls.date} ·{" "}
                    <span className="font-medium">{cls.teacher}</span>
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">
                No classes scheduled for this date.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* All Available Classes */}
      <section className="mt-8 sm:mt-10 bg-white rounded-2xl shadow-md p-4 sm:p-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            All Available Classes
          </h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search course..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-300"
              />
            </div>
            <button className="px-3 py-2 rounded-lg flex items-center justify-center gap-2 text-sm bg-gray-100 hover:bg-gray-200 transition">
              <FaFilter /> Filter
            </button>
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg shadow-sm">
          <table className="w-full min-w-[600px] text-left border-collapse text-sm sm:text-base">
            {/* Table Header */}
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="py-3 px-4 font-semibold">Course</th>
                <th className="py-3 px-4 font-semibold">Topic</th>
                <th className="py-3 px-4 font-semibold">Date & Time</th>
                <th className="py-3 px-4 font-semibold">Teacher</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {filteredClasses.map((classItem, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 font-medium text-gray-800">
                    {classItem.course}
                  </td>
                  <td className="py-3 px-4 text-blue-600">{classItem.topic}</td>
                  <td className="py-3 px-4 text-gray-600">{classItem.date}</td>
                  <td className="py-3 px-4 text-gray-700">
                    {classItem.teacher}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;
