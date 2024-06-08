import { popUpData } from "../models/popup.js";
import fs from "fs";

const PopUp = popUpData;

export const POST_POPUP = async (req, res) => {
  try {
    const createpopUp = new PopUp({
      popupimg: req.file.filename,
      popupheading: req.body.popupheading,
      popupprice: req.body.popupprice,
      popupaddress: req.body.popupaddress,
    });

    const popupCreated = await createpopUp.save();
    res.status(200).json(popupCreated);
  } catch (err) {
    console.error("Error creating popup:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

export const GET_POPUP = async (req, res) => {
  try {
    const getpopup = await PopUp.find();
    if (!getpopup.length) {
      return res.status(404).json({ msg: "Data Not Found" });
    }
    res.status(200).json(getpopup);
  } catch (err) {
    console.error("Error fetching popups:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

export const GET_UPDATEPOPUP = async (req, res) => {
  try {
    const id = req.params.id;
    const foundpopup = await PopUp.findById(id);
    if (!foundpopup) {
      return res.status(404).json({ msg: "Data Not Found" });
    }
    res.status(200).json(foundpopup);
  } catch (err) {
    console.error("Error fetching popup by ID:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

export const PUT_POPUP = async (req, res) => {
  try {
    const id = req.params.id;
    let new_img;

    if (req.file) {
      new_img = req.file.filename;
      if (req.body.old_img) {
        try {
          fs.unlinkSync("./public/uploads/" + req.body.old_img);
        } catch (err) {
          console.error("Error removing old image:", err);
        }
      }
    } else {
      new_img = req.body.old_img;
    }

    const newheading = req.body.popupheading;
    const newprice = req.body.popupprice;
    const newaddress = req.body.popupaddress; // Corrected typo

    const updateData = {
      popupheading: newheading,
      popupprice: newprice,
      popupaddress: newaddress, // Corrected typo
    };

    // Only include the new image if one was uploaded
    if (new_img) {
      updateData.popupimg = new_img;
    }

    const updatedPopup = await PopUp.findByIdAndUpdate(id, updateData, {
      new: true,
    }); // Return the updated document

    if (!updatedPopup) {
      return res.status(404).json({ msg: "Popup not found" });
    }

    res.status(200).json(updatedPopup);
  } catch (err) {
    console.error("Error updating popup:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

export const DELETE_POPUP = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedPopup = await PopUp.findByIdAndDelete(id);
    if (!deletedPopup) {
      return res.status(404).json({ msg: "Popup not found" });
    }
    res.status(200).json({ msg: "Popup deleted successfully" });
  } catch (err) {
    console.error("Error deleting popup:", err);
    res.status(500).json({ msg: "Server error" });
  }
};
