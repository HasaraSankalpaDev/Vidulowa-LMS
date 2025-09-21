"use client";
import React, { useState } from "react";
import Footer from "@/components/layout/Footer/Footer";
import NavBar from "@/components/layout/NavBar/NavBar";
import { classesData } from "@/data/ClassesDeatails";
import Pagination from "@/components/ui/Pagination";
import ClassesFilter from "@/components/pages/classes/ClassesFilter";
import ClassCard from "@/components/pages/classes/ClassCard";
import { motion } from "framer-motion";

const filters = [
  {
    label: "Subject",
    options: [
      "Math",
      "Physics",
      "Chemistry",
      "Biology",
      "IT",
      "English",
      "Sinhala",
      "Tamil",
    ],
  },
  {
    label: "Teacher",
    options: [
      "Dr. Nimal",
      "Mrs. Anusha",
      "Mr. Ravi",
      "Ms. Chamari",
      "Mr. Dilan",
      "Mrs. Malsha",
    ],
  },
  {
    label: "Grade",
    options: Array.from({ length: 13 }, (_, i) => (i + 1).toString()),
  },
];

const Page = () => {
  const [search, setSearch] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;

  // Handle filter change
  const handleFilterChange = (label, value) => {
    setSelectedFilters((prev) => ({ ...prev, [label]: value }));
    setCurrentPage(1); // reset pagination when filters change
  };

  // Filter + search
  const filteredData = classesData.filter((cls) => {
    const matchesSearch =
      search === "" ||
      cls.title.toLowerCase().includes(search.toLowerCase()) ||
      cls.desc.toLowerCase().includes(search.toLowerCase());

    const matchesFilters = Object.entries(selectedFilters).every(
      ([key, value]) => !value || cls[key.toLowerCase()] === value
    );

    return matchesSearch && matchesFilters;
  });

  // Pagination
  const totalPages = Math.ceil(filteredData.length / perPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <div>
      <NavBar />
      <motion.main
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="bg-gray-50  py-15 px-2 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4">
              Our Classes
            </h1>
            <p className="text-gray-500 text-center max-w-2xl mx-auto">
              Explore our diverse range of classes designed to enhance your
              learning journey in Sri Lanka.
            </p>
          </div>

          {/* Search & Filters */}
          <ClassesFilter
            search={search}
            setSearch={setSearch}
            filters={filters}
            selectedFilters={selectedFilters}
            handleFilterChange={handleFilterChange}
          />

          {/* Classes List */}
          <div className="flex flex-col gap-6">
            {paginatedData.length > 0 ? (
              paginatedData.map((cls, index) => (
                <ClassCard {...cls} key={index} index={index} />
              ))
            ) : (
              <p className="text-gray-500 text-center">No classes found.</p>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Page;
