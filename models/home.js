import mongoose from "mongoose";

const homeSchema = mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  contactno: {
    type: Number,
    required: true,
  },
  appartment: {
    type: String,
    required: true,
  },
  keyfeaturea: {
    type: String,
    required: true,
  },
  keyfeatureb: {
    type: String,
    required: true,
  },
  keyfeaturec: {
    type: String,
    required: true,
  },
});

export const homeData = mongoose.model("Home", homeSchema);
