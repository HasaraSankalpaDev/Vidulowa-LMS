"use client";

import Footer from "@/components/layout/Footer/Footer";
import NavBar from "@/components/layout/NavBar/NavBar";
import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const teacherData = {
  name: "Anushka Silva",
  degree: "B.Sc. in Mathematics, M.Sc. in Applied Mathematics",
  rating: 4.5,
  reviews: 25,
  subjects: ["Mathematics", "Physics"],
  about: `A passionate and experienced mathematics educator with over 10 years of experience in helping students excel in university entrance examinations. My teaching philosophy revolves around making complex concepts simple and relatable. I am dedicated to creating a supportive and engaging learning environment for all my students.`,
  contact: {
    email: "anushka.silva@example.com",
    phone: "+94 77 123 4567",
    location: "Colombo, Sri Lanka",
  },
  stats: {
    experience: 10,
    students: 1500,
    activeClasses: 2,
    reviews: 25,
  },
  classes: [
    {
      title: "Advanced Mathematics for University Entrance",
      schedule: "Every Saturday & Sunday | 8:30 AM - 12:30 PM",
    },
    {
      title: "Combined Maths – Theory & Revision",
      schedule: "Every Monday & Wednesday | 4:00 PM – 6:00 PM",
    },
  ],
  certifications: [
    "Cambridge International Teaching Certification",
    "Advanced Pedagogy Workshop – Sri Lanka Educators Forum",
  ],
  education: [
    {
      degree: "B.Sc. in Mathematics",
      university: "University of Colombo",
      year: "2010 – 2014",
    },
    {
      degree: "M.Sc. in Applied Mathematics",
      university: "University of Peradeniya",
      year: "2015 – 2017",
    },
    {
      degree: "Professional Teaching Diploma",
      university: "National Institute of Education, Sri Lanka",
      year: "2018",
    },
  ],
};

const TeacherPage = () => {
  const [activeTab, setActiveTab] = useState("classes");

  return (
    <div>
      <NavBar />
      <div className=" my-10">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Teacher Info */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt={teacherData.name}
                  className="w-32 h-32 rounded-full object-cover shadow-md"
                />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {teacherData.name}
                  </h2>
                  <p className="text-gray-700 mt-1">{teacherData.degree}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex gap-1 text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>
                          {i < Math.floor(teacherData.rating) ? "★" : "☆"}
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-600">
                      {teacherData.rating} ({teacherData.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {teacherData.subjects.map((subj, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-full text-sm bg-blue-100 text-blue-700"
                      >
                        {subj}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* About */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  About Me
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {teacherData.about}
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
              <div className="flex space-x-4 overflow-x-auto">
                {["classes", "certifications", "education"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-shrink-0 cursor-pointer px-4 py-2 font-medium text-sm uppercase border-b-2 transition-colors ${
                      activeTab === tab
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-blue-600 hover:border-blue-600"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="mt-4 space-y-4">
                {/* Classes Tab */}
                {activeTab === "classes" &&
                  teacherData.classes.map((cls, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center p-4 bg-gray-50 rounded shadow hover:shadow-md transition cursor-pointer"
                    >
                      <div>
                        <h4 className="font-semibold">{cls.title}</h4>
                        <p className="text-gray-600">{cls.schedule}</p>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors cursor-pointer">
                        View Details
                      </button>
                    </div>
                  ))}

                {/* Certifications Tab */}
                {activeTab === "certifications" &&
                  teacherData.certifications.map((cert, i) => (
                    <div
                      key={i}
                      className="p-4 bg-gray-50 rounded shadow hover:shadow-md transition cursor-pointer"
                    >
                      {cert}
                    </div>
                  ))}

                {/* Education Tab */}
                {activeTab === "education" &&
                  teacherData.education.map((edu, i) => (
                    <div
                      key={i}
                      className="p-4 bg-gray-50 rounded shadow hover:shadow-md transition cursor-pointer flex justify-between items-center"
                    >
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {edu.degree}
                        </h4>
                        <p className="text-gray-600">{edu.university}</p>
                      </div>
                      <span className="text-sm text-gray-500">{edu.year}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Contact */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition space-y-4">
              <h3 className="font-semibold text-lg text-gray-900">
                Contact Information
              </h3>
              <div className="flex items-center gap-2 text-gray-700">
                <FaEnvelope /> <span>{teacherData.contact.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <FaPhone /> <span>{teacherData.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <FaMapMarkerAlt /> <span>{teacherData.contact.location}</span>
              </div>
              <button className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </div>

            {/* Stats */}
            <div className="bg-white p-6 rounded-xl shadow grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {teacherData.stats.experience}+
                </div>
                <div className="text-gray-600 text-sm">Years of Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {teacherData.stats.students}+
                </div>
                <div className="text-gray-600 text-sm">Students Taught</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {teacherData.stats.activeClasses}
                </div>
                <div className="text-gray-600 text-sm">Active Classes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {teacherData.stats.reviews}
                </div>
                <div className="text-gray-600 text-sm">Reviews</div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default TeacherPage;
