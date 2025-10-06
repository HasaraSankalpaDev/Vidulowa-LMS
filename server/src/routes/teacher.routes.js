// src/routes/teacher.routes.js
import express from "express";
import {
  registerTeacher,
  loginTeacher,
  getTeacherProfile,
} from "../controllers/teacher.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", registerTeacher);
router.post("/login", loginTeacher);
router.get("/profile", authMiddleware, getTeacherProfile);

export default router;
