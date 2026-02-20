import mongoose, { Schema } from "mongoose";
import { User, SafeUser } from "./users.type";

const UserSchema = new Schema<User>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const tosafeUser = (user: User): SafeUser => {
  const { password, ...rest } = user.toObject();
  return rest;
};

const UserModel = mongoose.model<User>("user", UserSchema);
export { UserModel, tosafeUser };
