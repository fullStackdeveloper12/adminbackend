import mongoose from "mongoose";

const overviewSchema = mongoose.Schema({
  overviewimg: {
    type: [String],
    required: false,
  },
  overviewheading: {
    type: String,
    required: false,
  },
  overviewcontent: {
    type: String,
    required: false,
  },
});
export const overviewData = mongoose.model("overview", overviewSchema);
