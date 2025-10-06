import jwt from "jsonwebtoken";
import { StudentModel } from "../models/student.model.js";
import { TeacherModel } from "../models/teacher.model.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer "))
      return res.status(401).json({ message: "Unauthorized" });

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    let user;
    if (decoded.role === "student") {
      user = await StudentModel.findById(decoded.id).select("-password");
      req.student = user;
    } else if (decoded.role === "teacher") {
      user = await TeacherModel.findById(decoded.id).select("-password");
      req.teacher = user;
    }

    if (!user) return res.status(401).json({ message: "Unauthorized" });

    next();
  } catch (err) {
    res
      .status(401)
      .json({ message: "Invalid or expired token", error: err.message });
  }
};
