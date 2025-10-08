"use client";
import { createContext, useContext, useEffect, useState } from "react";
import API from "@/utils/api";

const TeacherContext = createContext();

export const TeacherProvider = ({ children }) => {
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch teacher profile once when dashboard loads
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get("teachers/profile");
        setTeacher(res.data.teacher);
      } catch (err) {
        console.error(
          "Failed to fetch teacher profile:",
          err.response?.data || err
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <TeacherContext.Provider value={{ teacher, setTeacher, loading }}>
      {children}
    </TeacherContext.Provider>
  );
};

// Custom hook for easier usage
export const useTeacher = () => useContext(TeacherContext);
