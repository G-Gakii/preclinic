import { Request, Response, NextFunction } from "express";
import { success, ZodError } from "zod";
import { AppError, ValidationError } from "../errors/AppError";
// safely extract a message from any thrown value ──
const getErrorMessage = (err: unknown): string => {
  if (err instanceof Error) return err.message;
  return "Unexpected error occurred";
};

// Helper: convert Zod validation errors to field→message

const formatZodError = (err: ZodError): Record<string, string> => {
  const fields: Record<string, string> = {};

  err.issues.forEach((element) => {
    const key = element.path.join(",") || "value";
    fields[key] = element.message;
  });
  return fields;
};

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (err instanceof ZodError) {
    res.status(422).json({
      success: false,
      message: "Validation failed",
      errors: formatZodError(err),
    });
  }

  if (err instanceof ValidationError) {
    res.status(422).json({
      success: false,
      message: err.message,
      errors: err.errors,
    });
  }
  if (err instanceof AppError && err.isOperational) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
    return;
  }
};

// handles routes that don't exist.
export const nonFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  res.status(404).json({
    success: false,
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
};
