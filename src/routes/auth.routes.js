import { Router } from "express";
import { createdUser, login } from "../controllers/auth.controller.js";

const router = Router();

router.post("/user/register", createdUser);
router.post("/user/login", login);

export default router;
