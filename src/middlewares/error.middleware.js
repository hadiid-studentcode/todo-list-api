const errorMiddleware = (err, req, res, next) => {
  console.error(err);

  const statusCode = err.statusCode || 500;
  const message = "Unauthorized" || "Internal Server Error";
  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};

export default errorMiddleware;
