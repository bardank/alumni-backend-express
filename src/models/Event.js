import { Schema, model } from "mongoose";

const EventSchema = new Schema(
  {
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    eventName: { type: String, required: false, default: "" },
    date: { type: Date },
    location: { type: String, default: "" },
    image: { type: String, default: "" },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

export const EventModel = model("Event", EventSchema, "events");

export default EventModel;
