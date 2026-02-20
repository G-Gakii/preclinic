import { ConflictError, UnathorizedError } from "../errors/AppError";
import { UserModel, tosafeUser } from "./users.model";
import {
  RegisterInput,
  AuthResponse,
  JwtPayload,
  SafeUser,
  LoginInput,
} from "./users.type";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import env from "../config/env";
import { success } from "zod";

const SALT_ROUNDS = 12;

export const signToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, env.jwt_secret, {
    expiresIn: env.expires_in,
  });
};

export const VerifyToken = (token: string): JwtPayload => {
  try {
    return jwt.verify(token, env.jwt_secret) as JwtPayload;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw new UnathorizedError("Your session as expired pleaswe log in");
    }
    throw new UnathorizedError("Invalid token");
  }
};

export const registerService = async (
  input: Omit<RegisterInput, "confirmPassword">,
): Promise<AuthResponse> => {
  const existingUser = await UserModel.findOne({ email: input.email });
  if (existingUser) {
    throw new ConflictError("An account with email already exist");
  }

  // hash the password
  const hashedPassword = await bcrypt.hash(input.password, SALT_ROUNDS);

  // create user in Db
  const user = await UserModel.create({
    fullname: input.fullname,
    email: input.email,
    password: hashedPassword,
  });

  const safeUser = tosafeUser(user);
  const token = signToken({ userId: user._id.toString(), email: user.email });
  return { success: true, token, user: safeUser };
};

export const loginService = async (
  input: LoginInput,
): Promise<AuthResponse> => {
  const user = await UserModel.findOne({ email: input.email });
  const dummyHash = "$2a$12$dummyhashthatnevermatchesanything";
  const hashCompare = user?.password ?? dummyHash;
  const passwordMatch = await bcrypt.compare(input.password, hashCompare);
  if (!user || !passwordMatch) {
    throw new UnathorizedError("Invalid email or password");
  }
  const token = signToken({ userId: user._id.toString(), email: user.email });
  const safeUser = tosafeUser(user);
  return { success: true, token, user: safeUser };
};
