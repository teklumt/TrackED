import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fname: {
    type: String,
  },
  lname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  ID: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  subscrbition: {
    type: String,
    required: true,
  },
  Documents: {
    type: Array,
  },
  photo: {
    type: String,
    required: true,
  },
});

export default models.User || model("User", UserSchema);
