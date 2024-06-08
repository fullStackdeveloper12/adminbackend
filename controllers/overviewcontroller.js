import { overviewData } from "../models/overview.js";
import fs from "fs";
const Overview = overviewData;

//OVERVIEW_POST
export const OVERVIEW_POST = async (req, res) => {
  try {
    const createoverview = new Overview({
      overviewheading: req.body.overviewheading,
      overviewcontent: req.body.overviewcontent,
      overviewimg: req.file.filename,
    });

    const overviewCreated = await createoverview.save();
    res.status(200).json(overviewCreated);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
};

// GET_OVERVIEW
export const GET_OVERVIEW = async (req, res) => {
  try {
    const overviewdata = await Overview.find();
    if (!overviewdata) {
      return res.status(404).json({ msg: "Overview Data Not Found" });
    }
    res.status(200).json(overviewdata);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
};

// GETUPDATE_OVERVIEW
export const GETUPDATE_OVERVIEW = async (req, res) => {
  try {
    const id = req.params.id;
    const getupdateoverview = await Overview.findById(id);
    if (!getupdateoverview) {
      return res.status(404).json({ msg: "OVERVIEW DATA NOT FOUND" });
    }
    res.status(200).json(getupdateoverview);
  } catch (err) {
    console.log("Error occurred:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

// PUT_OVERVIEW
export const PUT_OVERVIEW = async (req, res) => {
  try {
    const id = req.params.id;
    let new_img;

    if (req.file) {
      new_img = req.file.filename;
      if (req.body.old_img) {
        try {
          fs.unlinkSync("./public/uploads/" + req.body.old_img);
        } catch (err) {
          console.log("Error removing old image:", err);
        }
      }
    } else {
      new_img = req.body.old_img;
    }

    const newheading = req.body.overviewheading;
    const newcontent = req.body.overviewcontent;

    const updateData = {
      overviewheading: newheading,
      overviewcontent: newcontent,
    };

    // Only include the new image if one was uploaded
    if (new_img) {
      updateData.overviewimg = new_img;
    }

    const updatedOverview = await Overview.findByIdAndUpdate(id, updateData, {
      new: true,
    }); // Return the updated document

    if (!updatedOverview) {
      return res.status(404).json({ msg: "Overview not found" });
    }

    res.status(200).json(updatedOverview);
  } catch (err) {
    console.log("Error occurred:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

// DELETE_OVERVIEW
export const DELETE_OVERVIEW = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOverview = await Overview.findByIdAndDelete(id);
    if (!deletedOverview) {
      return res.status(404).json({ msg: "Overview Data Not Found" });
    }
    res.status(200).json({ msg: "Overview Data Deleted Successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
};


