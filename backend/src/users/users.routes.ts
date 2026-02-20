import { Router } from "express";
import { loginSchema, registerSchema, validate } from "./users.validation";
import { loginController, registerController } from "./users.controller";

const router = Router();
router.post("/register", validate(registerSchema), registerController);
router.post("/login", validate(loginSchema), loginController);

export default router;
