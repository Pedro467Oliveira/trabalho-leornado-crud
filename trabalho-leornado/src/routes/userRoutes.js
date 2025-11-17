import { Router } from "express";
import { createUserController, getUsersController } from "../controllers/userController.js";

const router = Router();

router.post("/users", createUserController);
router.get("/users", getUsersController);  // ← AQUI

export default router;

