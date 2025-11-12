import { Router } from "express";
import * as taskController from "./tasks.controller.js";
import { protect } from "../../middlewares/auth.middleware.js";

const router = Router();

router.use(protect);

router.route("/")
    .get(taskController.getTasks)
    .post(taskController.createTask)

router.route("/:id")
    .put(taskController.updateTask)
    .delete(taskController.deleteTask)



export default router;
