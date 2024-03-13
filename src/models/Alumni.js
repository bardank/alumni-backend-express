import mongoose, { Schema, model } from "mongoose";

const AlumniSchema = new Schema(
  {
    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    isApproved: { type: Boolean, required: false, default: false },
    fullName: { type: String, required: false, default: "" },
    email: { type: String, required: false, default: "" },
    phoneNumber: { type: String, required: false, default: "" },
    currentAddress: { type: String, required: false, default: "" },
    usn: { type: String, required: false, default: "" },
    branch: { type: String, required: false, default: "" },
    isPlacementProvidedBySkit: { type: Boolean, required: false, default: "" },
    yearOfCompletion: { type: Number, required: false, default: "" },
    presentOrganization: { type: String, required: false, default: "" },
    currentPosition: { type: String, required: false, default: "" },
    suggestion: { type: String, required: false, default: "" },
    offerLetterLink: { type: String, required: false, default: "" },
    linkedIn: { type: String, required: false, default: "" },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

export const AlumniModel = model("Alumni", AlumniSchema, "alumnis");

export default AlumniModel;
