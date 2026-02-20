import mongoose from "mongoose";
import env from "./env";

export const connectDB = async () => {
  try {
    await mongoose.connect(env.DB_URL!);
    console.log("connected to database successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // Stop app if DB fails
  }
};
