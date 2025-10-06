// src/controllers/student.controller.js
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { StudentModel } from "../models/StudentModel.js";
import {
  registerSchema,
  loginSchema,
} from "../validations/student.validation.js";

// REGISTER STUDENT
export const registerStudent = async (req, res) => {
  try {
    const data = registerSchema.parse(req.body);

    const existing = await StudentModel.findOne({ email: data.email });
    if (existing)
      return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(data.password, 12);

    const student = await StudentModel.create({
      fullName: data.fullName,
      email: data.email,
      password: hashedPassword,
      phone: data.phone,
      grade: data.grade,
      school: data.school,
      userType: data.role,
      subject: data.subject,
    });

    res
      .status(201)
      .json({ message: "Student registered successfully", student });
  } catch (err) {
    if (err instanceof z.ZodError)
      return res.status(400).json({ errors: err.errors });
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
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
      { id: student._id, email: student.email, role: student.userType },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    if (err instanceof z.ZodError)
      return res.status(400).json({ errors: err.errors });
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};
