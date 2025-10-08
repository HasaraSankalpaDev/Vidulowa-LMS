// src/server.js
import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { config } from "./config/config.js";
import { connectDB } from "./utils/db.js";
import { limiter } from "./middlewares/rateLimiter.middleware.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import "express-async-errors"; // catch async errors automatically
import cookieParser from "cookie-parser";

// Routes
import studentRoutes from "./routes/student.routes.js";
import teacherRoutes from "./routes/teacher.routes.js";

const app = express();

// Security middlewares
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(limiter);
app.use(express.json());
app.use(cookieParser());

// Body parser
app.use(express.json({ limit: "10kb" }));

// Logging (dev only)
if (config.nodeEnv === "development") {
  app.use(morgan("dev"));
}

// Root route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Vidulowa LMS API is running 🚀" });
});

// API Routes
app.use("/api/v1/students", studentRoutes);
app.use("/api/v1/teachers", teacherRoutes);

// Global error handler (must be last)
app.use(errorHandler);

// Connect to DB & start server
connectDB().then(() => {
  app.listen(config.port, () => {
    console.log(`✅ Server running securely on port ${config.port}`);
  });
});

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error("❌ Uncaught Exception:", err);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error("❌ Unhandled Rejection:", err);
  process.exit(1);
});
