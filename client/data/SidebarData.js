import {
  AiOutlineDashboard,
  AiOutlineCalendar,
  AiOutlineUser,
} from "react-icons/ai";

export const studentProfile = {
  name: "S. Perera",
  role: "Student",
  avatar:
    "https://img.freepik.com/premium-photo/cartoon-character-with-blue-shirt-glasses_561641-2084.jpg?semt=ais_incoming&w=740&q=80",
};

export const studentMenu = [
  {
    name: "Dashboard",
    icon: AiOutlineDashboard,
    href: "/student/dashboard",
  },
  {
    name: "Assignments & Exams",
    icon: AiOutlineCalendar,
    href: "/student/assignments",
  },
  {
    name: "Schedule Classes",
    icon: AiOutlineCalendar,
    href: "/student/schedule",
  },
  {
    name: "Profile & Settings",
    icon: AiOutlineUser,
    href: "/student/profile",
  },
];
