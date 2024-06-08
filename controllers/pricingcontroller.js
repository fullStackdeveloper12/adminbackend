import { priceListData } from "../models/pricelist.js";
const PriceList = priceListData;

export const POST_PRICELIST = async (req, res) => {
  try {
    const pricelistdata = new PriceList(req.body);
    if (!pricelistdata) {
      res.status(404).jason({ msg: "PRICELIST DATA NOT FOUND" });
    }
    const pricelistSaved = await pricelistdata.save();
    res.status(200).json(pricelistSaved);
  } catch (err) {
    console.log(err);
  }
};

export const GET_PRICELIST = async (req, res) => {
  try {
    const pricelistdata = await PriceList.find();
    if (!pricelistdata) {
      res.status(404).json({ msg: "PRICELIST DATA NOT FOUND" });
    }
    res.status(200).json(pricelistdata);
  } catch (err) {
    console.log(err);
  }
};

export const GETPATCH_PRICELIST = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedpricedata = await PriceList.findById(id);
    if (!updatedpricedata) {
      res.status(404).json({ msg: "PRICELIST DATA NOT FOUND" });
    }
    res.status(200).json(updatedpricedata);
  } catch (err) {
    console.log(err);
  }
};

export const POSTPATCH_PRICELIST = async (req, res) => {
  try {
    const id = req.params.id;
    const pricelistdata = await PriceList.findById(id);
    if (!pricelistdata) {
      return res.status(404).json({ msg: "PRICELIST DATA NOT FOUND" });
    }
    const UpdatedPriceList = await PriceList.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(UpdatedPriceList);
  } catch (err) {
    console.log(err);
  }
};

export const DELETE_PRICELIST = async (req, res) => {
  try {
    const id = req.params.id;
    const pricelistfound = await PriceList.findById(id);
    if (!pricelistfound) {
      return res.status(404).json({ msg: "Price Data not Found" });
    }
    await PriceList.findByIdAndDelete(id);
    return res.status(200).json({ msg: "Price Data Deleted Successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
};
