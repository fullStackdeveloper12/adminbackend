import mongoose from "mongoose";

const locationSchema = mongoose.Schema({
  locationurl: {
    type: String,
    required: true,
  },
  locationheading: {
    type: String,
    required: true,
  },
  locationa: {
    type: String,
    required: true,
  },
  timea: {
    type: String,
    required: true,
  },
  locationb: {
    type: String,
    required: true,
  },
  timeb: {
    type: String,
    required: true,
  },
});
export const locationData = mongoose.model("location", locationSchema);
