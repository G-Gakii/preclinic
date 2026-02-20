import mongoose, { Document, Schema } from "mongoose";
export interface User extends Document {
  id: string;
  fullname: string;
  email: string;
  password: string;
  createdAt: Date;
}
//  Safe version returned to client (no password)
export type SafeUser = Omit<User, "password">;

//  JWT token payload
export interface JwtPayload {
  userId: string;
  email: string;
  iat?: number;
  exp?: number;
}

// register request body
export interface RegisterInput {
  fullname: string;
  email: string;
  password: string;
  confirmPassword?: string;
}
// Login request body
export interface LoginInput {
  email: string;
  password: string;
}

//  Auth response sent to client
export interface AuthResponse {
  success: boolean;
  token: string;
  user: SafeUser;
}
// Extend Express Request to include user
declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}
