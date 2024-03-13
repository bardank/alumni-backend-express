import { Schema, model } from "mongoose";

const OpportunitySchema = new Schema(
  {
    title: { type: String, default: "", required: true },
    description: { type: String, default: "" },
    location: { type: String, default: "" },
    companyName: { type: String, default: "" },
    link: { type: String, default: "" },
    jobType: { type: String, default: "FULLTIME" },
    approved: { type: Boolean, default: false },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

export const OpportunityModel = model("Opportunity", OpportunitySchema, "opportunities");

export default OpportunityModel;
