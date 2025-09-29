"use client";

import React, { useState } from "react";
import {
  FaClock,
  FaChartLine,
  FaGlobe,
  FaUserGraduate,
  FaMoneyBillWave,
  FaChalkboardTeacher,
  FaPlayCircle,
} from "react-icons/fa";
import NavBar from "@/components/layout/NavBar/NavBar";
import Footer from "@/components/layout/Footer/Footer";
import { useParams } from "next/navigation";
import { classesDataFull as classesData } from "@/data/ClassesDeatails";

const Page = () => {
  const params = useParams();
  const id = params?.id;
  const classItem = classesData.find((c) => c.id === parseInt(id));
  const [activeTab, setActiveTab] = useState("overview");

  if (!classItem) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Class not found
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavBar />

      <main className="flex-grow py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Header */}
          <div className="text-center space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-snug">
              {classItem.title}
            </h1>
            <span
              className={`${classItem.statusColor} inline-block px-4 py-1 rounded-full text-sm font-medium`}
            >
              {classItem.status}
            </span>
          </div>

          {/* Class Banner Image */}
          <div className="w-full h-56 sm:h-72 lg:h-96 rounded-xl overflow-hidden shadow-lg">
            <img
              src={classItem.classImage}
              alt={classItem.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tabs */}
          <div className="flex justify-center overflow-x-auto border-b border-gray-200">
            {["overview", "details", "teacher", "payment", "video"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 px-6 cursor-pointer whitespace-nowrap border-b-2 font-medium text-sm uppercase tracking-wide transition-colors ${
                    activeTab === tab
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              {activeTab === "overview" && (
                <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    Overview
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {classItem.desc}
                  </p>
                </div>
              )}

              {activeTab === "details" && (
                <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    Class Details
                  </h2>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      <strong>Grade:</strong> {classItem.grade}
                    </p>
                    <p>
                      <strong>Subject:</strong> {classItem.subject}
                    </p>
                    <p>
                      <strong>Schedule:</strong> {classItem.schedule}
                    </p>
                    <p>
                      <strong>Location:</strong> {classItem.location}
                    </p>
                    <p>
                      <strong>Class Type:</strong> {classItem.classType}
                    </p>
                    <p>
                      <strong>Students Enrolled:</strong>{" "}
                      {classItem.studentsCount}+
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "teacher" && (
                <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                    Teacher Information
                  </h2>
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <img
                      src={classItem.teacherImage}
                      alt={classItem.teacher}
                      className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover shadow-md"
                    />
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                        {classItem.teacher}
                      </h3>
                      <p className="text-gray-700 mt-2">
                        {classItem.teacherBio}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "payment" && (
                <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                    Payment Details
                  </h2>
                  <p className="text-gray-700 mb-3">
                    <strong>Fee:</strong> {classItem.fee}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Payment Methods:</strong>
                  </p>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {classItem.paymentMethods.map((method, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center justify-center w-24 h-24 p-2 bg-gray-50 rounded-xl shadow hover:shadow-md transition"
                      >
                        <img
                          src={method.image}
                          alt={method.name}
                          className="w-16 h-16 object-contain"
                        />
                        <span className="text-sm mt-2 text-gray-700 text-center">
                          {method.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "video" && (
                <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <FaPlayCircle /> Sample Video
                  </h2>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      className="w-full h-64 sm:h-96 rounded-lg shadow-md"
                      src={classItem.sampleVideo}
                      title="Sample Class Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg sticky top-20 p-6 sm:p-8 space-y-6">
                {classItem.enroll ? (
                  <button className="w-full cursor-pointer bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                    Join Class Now
                  </button>
                ) : (
                  <button className="w-full cursor-pointer bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold cursor-not-allowed">
                    Enrollment Closed
                  </button>
                )}

                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-sm sm:text-base">
                    <FaClock className="text-gray-600 mt-1" />
                    <div>
                      <div className="text-gray-600 font-medium">Schedule</div>
                      <div className="font-medium">{classItem.schedule}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm sm:text-base">
                    <FaChartLine className="text-gray-600 mt-1" />
                    <div>
                      <div className="text-gray-600 font-medium">Subject</div>
                      <div className="font-medium">{classItem.subject}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm sm:text-base">
                    <FaGlobe className="text-gray-600 mt-1" />
                    <div>
                      <div className="text-gray-600 font-medium">Location</div>
                      <div className="font-medium">{classItem.location}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm sm:text-base">
                    <FaMoneyBillWave className="text-gray-600 mt-1" />
                    <div>
                      <div className="text-gray-600 font-medium">Fee</div>
                      <div className="font-medium">{classItem.fee}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm sm:text-base">
                    <FaUserGraduate className="text-gray-600 mt-1" />
                    <div>
                      <div className="text-gray-600 font-medium">Students</div>
                      <div className="font-medium">
                        {classItem.studentsCount}+
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm sm:text-base">
                    <FaChalkboardTeacher className="text-gray-600 mt-1" />
                    <div>
                      <div className="text-gray-600 font-medium">
                        Class Type
                      </div>
                      <div className="font-medium">{classItem.classType}</div>
                    </div>
                  </div>

                  {/* Payment Images in Sidebar */}
                  <div>
                    <div className="text-gray-600 font-medium mb-1">
                      Payment:
                    </div>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {classItem.paymentMethods.map((method, i) => (
                        <img
                          key={i}
                          src={method.image}
                          alt={method.name}
                          className="w-10 h-10 object-contain rounded-lg shadow"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Page;
