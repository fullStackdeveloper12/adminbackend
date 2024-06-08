import { homeData } from "../models/home.js";
const Home = homeData;

//HOME
//POST_HOME
export const POST_HOME = async (req, res) => {
  try {
    const homedata = new Home(req.body);
    if (!homedata) {
      return res.status(404).json({ msg: "Home Data not Found" });
    }
    const savedHomeData = await homedata.save();
    res.status(200).json(savedHomeData);
  } catch (err) {
    console.log(err);
  }
};
//POST_HOME

//GET_HOME
export const GET_HOME = async (req, res) => {
  try {
    const homedata = await Home.find();
    console.log(homedata);
    if (!homedata) {
      return res.status(404).json({ msg: "Home Data not Found" });
    }
    res.status(200).json(homedata);
  } catch (err) {
    console.log(err);
  }
};
//GET_HOME

//GETUPDATE_HOME
export const GETUPDATE_HOME = async (req, res) => {
  try {
    const id = req.params.id;
    const homedatafound = await Home.findById(id);
    if (!homedatafound) {
      return res.status(404).json({ msg: "Home Data not Found" });
    }
    res.status(200).json(homedatafound);
  } catch (err) {
    console.log(err);
  }
};
//GETUPDATE_HOME
//POSTUPDATE_HOME
export const PUTUPDATE_HOME = async (req, res) => {
  try {
    const id = req.params.id;
    const homedatafound = await Home.findById(id);
    if (!homedatafound) {
      return res.status(404).json({ msg: "Home Data not Found" });
    }
    const updatedHomeData = await Home.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedHomeData);
  } catch (err) {
    console.log(err);
  }
};
//POSTUPDATE_HOME
//DELETE_HOME
export const DELETE_HOME = async (req, res) => {
  try {
    const id = req.params.id;
    const homedatafound = await Home.findById(id);
    if (!homedatafound) {
      res.status(404).json({ msg: "Home Data not Found" });
    }
    await Home.findByIdAndDelete(id);
    res.status(200).json({ msg: "Home Data Deleted" });
  } catch (err) {
    console.log(err);
  }
};
//DELETE_HOME
//HOME
