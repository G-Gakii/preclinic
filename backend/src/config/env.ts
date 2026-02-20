import dotenv from "dotenv";
dotenv.config();
import { SignOptions } from "jsonwebtoken";

const jwt_secret = process.env.JWT_SECRET;
if (!jwt_secret) {
  throw new Error("JWT_SECRET is required");
}

const expires_in = (process.env.EXPIRES_IN ?? "7d") as SignOptions["expiresIn"];

dotenv.config();
const env = {
  Port: process.env.PORT || 3000,
  DB_URL: process.env.MONGO_URL!,
  jwt_secret,
  expires_in,
};

export default env;
