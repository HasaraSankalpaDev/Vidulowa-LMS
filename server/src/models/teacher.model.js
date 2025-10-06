import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true, minlength: 6 },
    userType: { type: String, default: "teacher" },
    subject: {
      type: String,
      required: function () {
        return this.userType === "teacher";
      },
    },
    school: {
      type: String,
      trim: true,
      required: function () {
        return this.userType === "teacher";
      },
    },
    phone: { type: String, trim: true },
  },
  { timestamps: true }
);

export const TeacherModel = mongoose.model("Teacher", teacherSchema);
