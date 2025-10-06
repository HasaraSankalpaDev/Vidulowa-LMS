// src/routes/student.routes.js
import express from "express";
import {
  registerStudent,
  loginStudent,
  getProfile,
} from "../controllers/student.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Register route
router.post("/register", registerStudent);

// Login route
router.post("/login", loginStudent);

// Profile route (protected)
router.get("/profile", authMiddleware, getProfile);

export default router;
