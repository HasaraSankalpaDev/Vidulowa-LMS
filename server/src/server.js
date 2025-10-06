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

// Routes
import studentRoutes from "./routes/student.routes.js";

const app = express();

// Security middlewares
app.use(helmet());
app.use(
  cors({
    origin: config.corsOrigin,
    credentials: true,
  })
);
app.use(limiter);

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
app.use("/api/students", studentRoutes);

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
