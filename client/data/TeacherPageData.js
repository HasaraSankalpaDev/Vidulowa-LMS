import {
  AiOutlineDashboard,
  AiOutlineCalendar,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineFileText,
  AiOutlineBarChart,
  AiOutlineTeam,
} from "react-icons/ai";
import {
  FaUsers,
  FaBook,
  FaCheckCircle,
  FaClipboardList,
} from "react-icons/fa";

export const teacherProfile = {
  name: "W.K Sumanapala",
  role: "Teacher",
  avatar:
    "https://img.freepik.com/premium-photo/adult-male-3d-character-avatar-with-smiling-facial-expression_639806-3106.jpg",
};

export const teacherMenu = [
  {
    name: "Dashboard",
    icon: AiOutlineDashboard,
    href: "/teacher/dashboard",
  },
  {
    name: "Class Management",
    icon: AiOutlineBook,
    href: "/teacher/classManagement",
  },
  {
    name: "Student Management",
    icon: AiOutlineTeam,
    href: "/teacher/studentManagement",
  },
  {
    name: "Profile & Settings",
    icon: AiOutlineUser,
    href: "/teacher/profileSettings",
  },
];
export const classes = [
  {
    id: 1,
    subject: "Mathematics",
    grade: "Grade 10",
    academicYear: "2024 Academic Year",
    studentCount: 35,
    schedule: ["Mon", "Wed", "Fri"],
    color: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
    textColor: "text-blue-800",
  },
  {
    id: 2,
    subject: "Physics",
    grade: "Grade 11",
    academicYear: "2024 Academic Year",
    studentCount: 28,
    schedule: ["Tue", "Thu"],
    color: "bg-gradient-to-br from-green-50 to-green-100 border-green-200",
    textColor: "text-green-800",
  },
  {
    id: 3,
    subject: "Chemistry",
    grade: "Grade 12",
    academicYear: "2024 Academic Year",
    studentCount: 42,
    schedule: ["Mon", "Tue", "Thu"],
    color: "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200",
    textColor: "text-purple-800",
  },
  {
    id: 4,
    subject: "Biology",
    grade: "Grade 10",
    academicYear: "2024 Academic Year",
    studentCount: 31,
    schedule: ["Wed", "Fri"],
    color: "bg-gradient-to-br from-red-50 to-red-100 border-red-200",
    textColor: "text-red-800",
  },
  {
    id: 5,
    subject: "English Literature",
    grade: "Grade 9",
    academicYear: "2024 Academic Year",
    studentCount: 38,
    schedule: ["Mon", "Wed", "Fri"],
    color: "bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200",
    textColor: "text-amber-800",
  },
  {
    id: 6,
    subject: "Computer Science",
    grade: "Grade 11",
    academicYear: "2024 Academic Year",
    studentCount: 25,
    schedule: ["Tue", "Thu"],
    color: "bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200",
    textColor: "text-indigo-800",
  },
];

export const stats = [
  {
    title: "Total Students",
    value: "1,250",
    icon: FaUsers,
    color: "bg-white",
    textColor: "text-blue-600",
  },
  {
    title: "Active Courses",
    value: "8",
    icon: FaBook,
    color: "bg-white",
    textColor: "text-green-600",
  },
  {
    title: "Completed Lessons",
    value: "240",
    icon: FaCheckCircle,
    color: "bg-white",
    textColor: "text-purple-600",
  },
  {
    title: "Pending Assignments",
    value: "12",
    icon: FaClipboardList,
    color: "bg-white",
    textColor: "text-orange-600",
  },
];

export const completionData = [
  { status: "Completed", percentage: 65, color: "bg-white" },
  { status: "In Progress", percentage: 25, color: "bg-white" },
  { status: "Not Started", percentage: 10, color: "bbg-white" },
];

export const monthlyData = [
  { month: "Jan", value: 65 },
  { month: "Feb", value: 59 },
  { month: "Mar", value: 80 },
  { month: "Apr", value: 81 },
  { month: "May", value: 56 },
  { month: "Jun", value: 55 },
  { month: "Jul", value: 40 },
  { month: "Aug", value: 45 },
  { month: "Sep", value: 60 },
  { month: "Oct", value: 75 },
  { month: "Nov", value: 80 },
  { month: "Dec", value: 85 },
];

export const studentsData = [
  {
    id: "STU1001",
    name: "Ethan Carter",
    course: "Introduction to Programming",
    progress: 75,
  },
  {
    id: "STU1002",
    name: "Olivia Bennett",
    course: "Digital Marketing Fundamentals",
    progress: 90,
  },
  {
    id: "STU1003",
    name: "Noah Thompson",
    course: "Data Science Essentials",
    progress: 60,
  },
  {
    id: "STU1004",
    name: "Ava Rodriguez",
    course: "Graphic Design Basics",
    progress: 85,
  },
  {
    id: "STU1005",
    name: "Liam Walker",
    course: "Project Management Principles",
    progress: 50,
  },
  {
    id: "STU1006",
    name: "Sophia Hayes",
    course: "Financial Accounting",
    progress: 95,
  },
  {
    id: "STU1007",
    name: "Jackson Reed",
    course: "Business Strategy",
    progress: 70,
  },
  {
    id: "STU1008",
    name: "Isabella Morgan",
    course: "Human Resources Management",
    progress: 80,
  },
  {
    id: "STU1009",
    name: "Aiden Cooper",
    course: "Supply Chain Management",
    progress: 65,
  },
  {
    id: "STU1010",
    name: "Mia Foster",
    course: "Entrepreneurship 101",
    progress: 88,
  },
];

export const subjects = [
  "Mathematics",
  "Science",
  "English",
  "Sinhala",
  "Tamil",
  "History",
  "Geography",
  "Commerce",
  "Accounting",
  "Economics",
  "Buddhism",
  "Christianity",
  "Hinduism",
  "Islam",
  "Information & Communication Technology (ICT)",
  "Biology",
  "Physics",
  "Chemistry",
  "Logic",
  "Political Science",
  "Business Studies",
];

// Grades for Sri Lanka schools
export const grades = [
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9", // Start of O/L preparation
  "Grade 10",
  "Grade 11", // O/L exams
  "Grade 12", // A/L preparation
  "Grade 13",
];

export const academicYears = [
  "2024 Academic Year",
  "2025 Academic Year",
  "2026 Academic Year",
];
export const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
