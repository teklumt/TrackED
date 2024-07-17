import { ownerDocument } from "@mui/material";
import { Schema, model, models } from "mongoose";

const DocumentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  ID: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  ownerSub: {
    type: String,
    required: true,
  },
  document: {
    type: String,
    required: true,
  },
  by: {
    type: String,
  },
});

export default models.Document || model("Document", DocumentSchema);
