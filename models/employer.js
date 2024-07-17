import { Schema, model, models } from "mongoose";

const EmployerSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
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
  subscription: {
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

export default models.Employer || model("Employer", EmployerSchema);
