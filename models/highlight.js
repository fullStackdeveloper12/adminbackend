import mongoose from "mongoose";

const highlightSchema = mongoose.Schema({
  highlightimg: {
    type: String,
  },
  highlightcontent: {
    type: String,
  },
  highlightheading: {
    type: String,
  },
  highlightfeaturea: {
    type: String,
    required: true,
  },
  highlightfeatureb: {
    type: String,
    required: true,
  },
  highlightfeaturec: {
    type: String,
    required: true,
  },
  highlightfeatured: {
    type: String,
    required: true,
  },
  highlightfeaturee: {
    type: String,
    required: true,
  },
  highlightfeaturef: {
    type: String,
    required: true,
  },
});
export const highlightData = mongoose.model("highlight", highlightSchema);
