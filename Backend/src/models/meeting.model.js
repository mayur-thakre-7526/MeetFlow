import mongoose, { Schema } from "mongoose";

const meetingSchema = new Schema({
  user_id: { type: String },
  meetingCode: { type: String, require: true },
  date: { type: Date, default: Date.now, require: true },
});

const meetingModel = mongoose.model("Meeting", meetingSchema);

export { meetingModel };
