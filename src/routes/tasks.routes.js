import { Router } from "express";
import {
  getTasks,
  createTask,
  deletedTask,
  updateTask,
} from "../controllers/task.controllers.js";

const router = Router();

router.get("/tasks", getTasks);
router.post("/tasks", createTask);
router.delete("/tasks/:id", deletedTask);
router.put("/tasks/:id", updateTask);

export default router;
