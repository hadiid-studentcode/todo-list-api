import "dotenv/config";
import express from "express";

import authRouter from "./api/auth/auth.routes.js";
import taskRouter from "./api/tasks/tasks.routes.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRouter);
app.use("/api/tasks", taskRouter);

app.use(errorMiddleware);

export default app;
