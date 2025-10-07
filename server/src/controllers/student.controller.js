// src/controllers/student.controller.js
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { StudentModel } from "../models/student.model.js";
import * as z from "zod";
import {
  registerSchema,
  loginSchema,
} from "../validations/student.validation.js";

// REGISTER STUDENT
export const registerStudent = async (req, res) => {
  try {
    console.log("Register request body:", req.body); // Debug log

    // Validate request body using Zod
    const data = registerSchema.parse(req.body);

    // Check if email already exists
    const existing = await StudentModel.findOne({ email: data.email });
    if (existing) {
      return res.status(409).json({ message: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(data.password, 12);

    // Create new student
    const student = await StudentModel.create({
      fullName: data.fullName,
      email: data.email,
      password: hashedPassword,
      phone: data.phone,
      grade: data.grade,
      school: data.school,
      userType: "student",
      subject: data.subject,
    });

    // Send success response
    res.status(201).json({
      message: "Student registered successfully",
      student: {
        id: student._id,
        fullName: student.fullName,
        email: student.email,
        userType: student.userType,
        grade: student.grade,
        school: student.school,
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

// LOGIN STUDENT
export const loginStudent = async (req, res) => {
  try {
    const data = loginSchema.parse(req.body);

    const student = await StudentModel.findOne({ email: data.email });
    if (!student)
      return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(data.password, student.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: student._id, email: student.email, userType: "student" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: student._id,
        fullName: student.fullName,
        email: student.email,
        userType: "student",
        grade: student.grade,
        school: student.school,
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
export const getProfile = async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });

    res.status(200).json({
      message: "Profile info",
      student: {
        id: req.user._id,
        fullName: req.user.fullName,
        email: req.user.email,
        phone: req.user.phone,
        grade: req.user.grade,
        school: req.user.school,
        userType: req.user.userType,
        subject: req.user.subject,
        createdAt: req.user.createdAt,
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};
