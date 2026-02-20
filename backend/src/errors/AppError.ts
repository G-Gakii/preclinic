export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;

  constructor(message: string, statusCode: number, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this, this.constructor);
  }
}
// ── 400 Bad Request ──
export class BadRequestError extends AppError {
  constructor(message: string) {
    super(message, 400);
  }
}

// ── 401 Unauthorized ──
export class UnathorizedError extends AppError {
  constructor(message = "Unathorized : please log in") {
    super(message, 401);
  }
}
// ── 403 Forbidden ──
export class ForbiddenError extends AppError {
  constructor(message = "You dont have permission") {
    super(message, 403);
  }
}

// ── 404 Not Found ──
export class NotFoundError extends AppError {
  constructor(resource = "resource") {
    super(`${resource} not found`, 404);
  }
}

// ── 409 Conflict ──
export class ConflictError extends AppError {
  constructor(message: string) {
    super(message, 409);
  }
}

// ── 422 Validation Failed ──
export class ValidationError extends AppError {
  public readonly errors: Record<string, string>;
  constructor(message: string, errors: Record<string, string> = {}) {
    super(message, 422);
    this.errors = errors;
  }
}
