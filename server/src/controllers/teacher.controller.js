// src/controllers/teacher.controller.js
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { TeacherModel } from "../models/teacher.model.js";
import {
  registerTeacherSchema,
  loginTeacherSchema,
} from "../validations/teacher.validation.js";

// REGISTER TEACHER
export const registerTeacher = async (req, res) => {
  try {
    const data = registerTeacherSchema.parse(req.body);

    const existing = await TeacherModel.findOne({ email: data.email });
    if (existing)
      return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(data.password, 12);

    const teacher = await TeacherModel.create({
      fullName: data.fullName,
      email: data.email,
      password: hashedPassword,
      phone: data.phone,
      subject: data.subject,
      school: data.school,
    });

    res
      .status(201)
      .json({ message: "Teacher registered successfully", teacher });
  } catch (err) {
    if (err instanceof registerTeacherSchema._def.constructor) {
      return res.status(400).json({ errors: err.errors });
    }
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

// LOGIN TEACHER
export const loginTeacher = async (req, res) => {
  try {
    const data = loginTeacherSchema.parse(req.body);

    const teacher = await TeacherModel.findOne({ email: data.email });
    if (!teacher)
      return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(data.password, teacher.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: teacher._id, email: teacher.email, role: teacher.userType },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    if (err instanceof loginTeacherSchema._def.constructor) {
      return res.status(400).json({ errors: err.errors });
    }
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

// GET PROFILE
export const getTeacherProfile = async (req, res) => {
  try {
    if (!req.teacher) return res.status(401).json({ message: "Unauthorized" });

    res.status(200).json({
      message: "Profile info",
      teacher: {
        id: req.teacher._id,
        fullName: req.teacher.fullName,
        email: req.teacher.email,
        phone: req.teacher.phone,
        subject: req.teacher.subject,
        school: req.teacher.school,
        userType: req.teacher.userType,
        createdAt: req.teacher.createdAt,
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};
