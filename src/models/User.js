import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    fullName: { type: String, required: true },
    role: { type: String, default: "Admin" },
    username: { type: String, default: "" },
    email: { type: String, required: true },
    password: { type: String, required: true, select: false, default: "" },
    phone: { type: Number },
    salt: { type: String, select: false },
    verifiedPhone: { type: Boolean, default: false },
    accessToken: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

export const UserModel = model("User", UserSchema, "users");

export default UserModel;
