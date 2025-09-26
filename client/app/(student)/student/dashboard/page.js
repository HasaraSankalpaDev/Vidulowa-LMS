"use client";
import { useState } from "react";

const page = () => {
  const [enrolledCourses] = useState([
    { title: "Advanced Mathematics", progress: 75 },
    { title: "Physics Fundamentals", progress: 50 },
    { title: "Chemistry Essentials", progress: 25 },
  ]);

  const [upcomingClasses] = useState([
    {
      course: "Advanced Mathematics",
      topic: "Calculus Review",
      dateTime: "July 15, 2024, 10:00 AM",
      teacher: "Mr. Silva",
    },
    {
      course: "Physics Fundamentals",
      topic: "Mechanics",
      dateTime: "July 16, 2024, 2:00 PM",
      teacher: "Ms. Fernando",
    },
    {
      course: "Chemistry Essentials",
      topic: "Chemical Reactions",
      dateTime: "July 17, 2024, 11:00 AM",
      teacher: "Dr. Rajapaksa",
    },
  ]);

  return (
    <div className="p-6 min-h-screen ">
      <h1 className="text-3xl font-bold mb-2">Student Dashboard</h1>
      <p className="text-gray-500 mb-6">
        Welcome back, S. Perera! Here's an overview of your learning journey.
      </p>

      {/* Enrolled Courses */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Enrolled Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {enrolledCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={`http://localhost:3000/images/classes-category-image-02.png`}
                alt={course.title}
                className="w-full h-36 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{course.title}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Progress {course.progress}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Classes */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Classes</h2>
        <div className="overflow-x-auto bg-white  shadow-lg">
          <table className="w-full min-w-[600px] text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 text-gray-600 uppercase text-sm font-medium">
                  Course
                </th>
                <th className="py-3 px-4 text-gray-600 uppercase text-sm font-medium">
                  Topic
                </th>
                <th className="py-3 px-4 text-gray-600 uppercase text-sm font-medium">
                  Date & Time
                </th>
                <th className="py-3 px-4 text-gray-600 uppercase text-sm font-medium">
                  Teacher
                </th>
              </tr>
            </thead>
            <tbody>
              {upcomingClasses.map((classItem, index) => (
                <tr key={index}>
                  <td className="py-4 border-b-2 border-gray-100 px-4 font-medium">
                    {classItem.course}
                  </td>
                  <td className="py-4 border-b-2 border-gray-100 px-4">
                    {classItem.topic}
                  </td>
                  <td className="py-4 border-b-2 border-gray-100 px-4">
                    {classItem.dateTime}
                  </td>
                  <td className="py-4 border-b-2 border-gray-100 px-4">
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

export default page;
