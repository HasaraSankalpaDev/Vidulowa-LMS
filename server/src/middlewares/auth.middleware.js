// src/middlewares/auth.middleware.js
import jwt from "jsonwebtoken";
import { StudentModel } from "../models/student.model.js";
import { TeacherModel } from "../models/teacher.model.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Bearer TOKEN
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    let user =
      decoded.userType === "student"
        ? await StudentModel.findById(decoded.id)
        : await TeacherModel.findById(decoded.id);

    if (!user) return res.status(401).json({ message: "User not found" });

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
