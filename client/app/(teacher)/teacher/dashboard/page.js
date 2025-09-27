"use client";
import { stats, completionData, monthlyData } from "@/data/TeacherPageData";
import React from "react";
import { FaUsers } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Dashboard = () => {
  return (
    <div className="min-h-screen mt-5">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Dashboard
        </h1>
        <p className="text-gray-600">
          Manage your classes, students, and schedules
        </p>
      </div>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 font-medium">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {stat.value}
                </p>
              </div>
              <div className={`p-3 rounded-xl ${stat.color} bg-opacity-10`}>
                <stat.icon className={`text-2xl ${stat.textColor}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Student Progress */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Student Progress
          </h3>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">Overall Progress</span>
            <span className="text-lg font-bold text-gray-900">78%</span>
          </div>

          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Avg. Class Score</span>
              <span>85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-green-500 h-3 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-3">
              Course Completion
            </h4>
            <div className="space-y-3">
              {completionData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.status}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full ${item.color}`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-10">
                      {item.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Monthly Progress with Recharts */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Monthly Progress
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={monthlyData}>
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="value"
                fill="#3B82F6"
                name="Student Progress"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Recent Activity
        </h3>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-xl transition duration-200"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FaUsers className="text-blue-600 text-lg" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  New assignment submitted in Mathematics
                </p>
                <p className="text-xs text-gray-400">2 hours ago</p>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                New
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
