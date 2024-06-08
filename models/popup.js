import mongoose from "mongoose";

const popUpSchema = mongoose.Schema({
  popupimg: {
    type: [String],
    required: true,
  },
  popupheading: {
    type: String,
    required: true,
  },
  popupprice: {
    type: String,
    required: true,
  },
  popupaddress: {
    type: String,
    required: true,
  },
});

export const popUpData = mongoose.model("popup", popUpSchema);
