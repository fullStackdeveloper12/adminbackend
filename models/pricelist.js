import mongoose from "mongoose";

const priceListSchema = mongoose.Schema({
  pricelistprice: {
    type: String,
    required: true,
  },
  pricelistsize: {
    type: String,
    required: true,
  },
  pricelisttype: {
    type: String,
    required: true,
  },
});
export const priceListData = mongoose.model("pricelist", priceListSchema);
