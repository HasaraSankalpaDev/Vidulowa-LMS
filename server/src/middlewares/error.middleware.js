export const errorHandler = (err, req, res, next) => {
  console.error("❌ Error:", err);

  if (err.name === "ZodError") {
    return res.status(400).json({
      status: "fail",
      errors: err.errors.map((e) => e.message),
    });
  }

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
};
