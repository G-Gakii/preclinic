import { Router } from "express";
const router = Router();
import userRouter from "../users/users.routes";

router.use("/auth", userRouter);

export default router;
