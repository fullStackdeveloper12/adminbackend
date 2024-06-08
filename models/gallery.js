import mongoose from "mongoose";

const gallerySchema = mongoose.Schema({
  galleryimg: {
    type: [String],
    required: true,
  },
});
export const galleryData = mongoose.model("gallery", gallerySchema);
