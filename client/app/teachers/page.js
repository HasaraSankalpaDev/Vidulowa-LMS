"use client";
import Footer from "@/components/layout/Footer/Footer";
import NavBar from "@/components/layout/NavBar/NavBar";
import { teachers } from "@/data/TeachersData";
import React, { useState } from "react";

const page = () => {
  const subjects = [
    "All",
    ...Array.from(new Set(teachers.map((t) => t.subject))),
  ];

  const [search, setSearch] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");

  const filteredTeachers = teachers.filter((t) => {
    const matchesSubject =
      selectedSubject === "All" || t.subject === selectedSubject;
    const matchesSearch =
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.subject.toLowerCase().includes(search.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  return (
    <div>
      <NavBar />
      <main className="bg-gray-50  py-18 px-2 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4">
            Our Expert Instructors
          </h1>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
            Meet the dedicated team of educators at EduLink, committed to your
            academic success.
          </p>

          {/* Search Bar */}
          <div className="flex justify-center mb-6">
            <input
              type="text"
              placeholder="Search by subject or teacher name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-2xl rounded-lg bg-gray-50 px-4 py-3 text-gray-700 outline-none border border-blue-100 shadow-sm focus:border-blue-400 transition"
            />
          </div>

          {/* Subject Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-15">
            {subjects.map((subject) => (
              <button
                key={subject}
                onClick={() => setSelectedSubject(subject)}
                className={`px-4 py-2 cursor-pointer rounded-md text-sm font-semibold transition ${
                  selectedSubject === subject
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-100"
                }`}
              >
                {subject}
              </button>
            ))}
          </div>

          {/* Teachers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            {filteredTeachers.map((teacher) => (
              <div key={teacher.name} className="flex flex-col items-center">
                <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200 mb-3 shadow">
                  <img
                    src={teacher.img}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="font-semibold text-gray-900 text-center">
                  {teacher.name}
                </div>
                <div className="text-gray-500 text-sm text-center">
                  {teacher.subject}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default page;
