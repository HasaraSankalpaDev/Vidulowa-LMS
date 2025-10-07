// src/controllers/teacher.controller.js
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { TeacherModel } from "../models/teacher.model.js";
import * as z from "zod";
import {
  registerTeacherSchema,
  loginTeacherSchema,
} from "../validations/teacher.validation.js";

// REGISTER TEACHER
export const registerTeacher = async (req, res) => {
  try {
    console.log("Register request body:", req.body); // Debug log

    // Validate request body using Zod
    const data = registerTeacherSchema.parse(req.body);

    // Check if email already exists
    const existing = await TeacherModel.findOne({ email: data.email });
    if (existing) {
      return res.status(409).json({ message: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(data.password, 12);

    // Create new teacher
    const teacher = await TeacherModel.create({
      fullName: data.fullName,
      email: data.email,
      password: hashedPassword,
      phone: data.phone,
      subject: data.subject,
      school: data.school,
      userType: "teacher",
    });

    // Send success response
    res.status(201).json({
      message: "Teacher registered successfully",
      teacher: {
        id: teacher._id,
        fullName: teacher.fullName,
        email: teacher.email,
        userType: teacher.userType,
        subject: teacher.subject,
        school: teacher.school,
      },
    });
  } catch (err) {
    console.log("Registration error:", err); // Debug log

    // Handle Zod validation errors
    if (err instanceof z.ZodError) {
      return res.status(400).json({
        message: "Validation failed",
        errors: err.errors.map((error) => ({
          field: error.path[0],
          message: error.message,
        })),
      });
    }

    // Handle other errors
    res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
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
      { id: teacher._id, email: teacher.email, userType: "teacher" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: teacher._id,
        fullName: teacher.fullName,
        email: teacher.email,
        userType: "teacher",
        subject: teacher.subject,
        school: teacher.school,
      },
    });
  } catch (err) {
    if (err instanceof z.ZodError)
      return res.status(400).json({
        message: "Validation failed",
        errors: err.errors.map((error) => ({
          field: error.path[0],
          message: error.message,
        })),
      });
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

// GET PROFILE
export const getTeacherProfile = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    res.status(200).json({
      message: "Profile info",
      teacher: {
        id: req.user._id,
        fullName: req.user.fullName,
        email: req.user.email,
        phone: req.user.phone,
        subject: req.user.subject,
        school: req.user.school,
        userType: req.user.userType,
        createdAt: req.user.createdAt,
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};
