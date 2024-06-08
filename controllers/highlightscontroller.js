import { highlightData } from "../models/highlight.js";
const HighLight = highlightData;
import fs from "fs";

export const POST_HIGHLIGHT = async (req, res) => {
  try {
    const createHighLight = new HighLight({
      highlightimg: req.file.filename,
      highlightcontent: req.body.highlightcontent,
      highlightheading: req.body.highlightheading,
      highlightfeaturea: req.body.highlightfeaturea,
      highlightfeatureb: req.body.highlightfeatureb,
      highlightfeaturec: req.body.highlightfeaturec,
      highlightfeatured: req.body.highlightfeatured,
      highlightfeaturee: req.body.highlightfeaturee,
      highlightfeaturef: req.body.highlightfeaturef,
    });

    const highLightCreated = await createHighLight.save();
    res.status(200).json(highLightCreated);
  } catch (err) {
    console.log(err);
  }
};

export const GET_HIGHLIGHT = async (req, res) => {
  try {
    const highlightdata = await HighLight.find();
    if (!highlightdata) {
      return res.status(404).json(highlightdata);
    }
    res.status(200).json(highlightdata);
  } catch (err) {
    console.log(err);
  }
};

export const GET_UPDATEHIGHLIGHT = async (req, res) => {
  try {
    const id = req.params.id;
    const foundhighlight = await HighLight.findById(id);
    if (!foundhighlight) {
      res.status(404).json({ msg: "HIGHLIGHT NOT FOUND" });
    }
    res.status(200).json(foundhighlight);
  } catch (err) {
    console.log(err);
  }
};

export const PUT_HIGHLIGHT = async (req, res) => {
  try {
    const id = req.params.id;
    let new_img = req.body.old_img;

    if (req.file) {
      new_img = req.file.filename;
      if (req.body.old_img) {
        try {
          fs.unlinkSync("./public/uploads/" + req.body.old_img);
        } catch (er) {
          console.log(er);
        }
      }
    }

    const updatedhighlightdata = {
      highlightcontent: req.body.highlightcontent,
      highlightheading: req.body.highlightheading,
      highlightfeaturea: req.body.highlightfeaturea,
      highlightfeatureb: req.body.highlightfeatureb,
      highlightfeaturec: req.body.highlightfeaturec,
      highlightfeatured: req.body.highlightfeatured,
      highlightfeaturee: req.body.highlightfeaturee,
      highlightfeaturee: req.body.highlightfeaturef,
      highlightimg: new_img, // Ensure the new image is always set
    };

    const highlightupdated = await HighLight.findByIdAndUpdate(
      id,
      updatedhighlightdata,
      { new: true }
    );

    if (!highlightupdated) {
      return res.status(404).json({ msg: "HIGHLIGHT DATA NOT FOUND" });
    }
    res.status(200).json(highlightupdated);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "INTERNAL SERVER ERROR" });
  }
};

export const DELETE_HIGHLIGHT = async (req, res) => {
  try {
    const id = req.params.id;
    const deletehighlight = await HighLight.findByIdAndDelete(id);
    if (!deletehighlight) {
      return res.status(404).json({ msg: "Overview Data Not Found" });
    }
    res.status(200).json({ msg: "Overview Data Deleted Successfully" });
  } catch (err) {
    console.log(err);
  }
};
