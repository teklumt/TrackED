import { Schema, model, models } from "mongoose";

const FeedbackSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

export default models.Feedback || model("Feedback", FeedbackSchema);
