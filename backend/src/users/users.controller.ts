import { catchAsync } from "../utils/catchAsync";

import { registerService, loginService } from "./users.service";
import { Request, Response } from "express";

export const registerController = catchAsync(
  async (req: Request, res: Response) => {
    const { confirmPassword, ...data } = req.body;
    const result = await registerService(data);
    res.status(201).json(result);
  },
);
export const loginController = catchAsync(
  async (req: Request, res: Response) => {
    const result = await loginService(req.body);
    res.status(200).json(result);
  },
);
