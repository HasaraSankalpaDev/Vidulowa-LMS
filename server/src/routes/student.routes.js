// src/routes/student.routes.js
import express from "express";
import {
  registerStudent,
  loginStudent,
  getProfile,
} from "../controllers/student.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", registerStudent);
router.post("/login", loginStudent);
router.get("/profile", authMiddleware, getProfile);

export default router;
