// src/models/StudentModel.js
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    grade: { type: String },
    school: { type: String },
    phone: { type: String },
    userType: { type: String, default: "student" },
  },
  { timestamps: true }
);

export const StudentModel = mongoose.model("Student", studentSchema);
