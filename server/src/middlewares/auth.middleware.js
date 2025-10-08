import jwt from "jsonwebtoken";
import { TeacherModel } from "../models/teacher.model.js";
import { StudentModel } from "../models/student.model.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    let user = await TeacherModel.findById(decoded.id);
    if (!user) user = await StudentModel.findById(decoded.id);

    if (!user) return res.status(401).json({ message: "Invalid user" });

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
