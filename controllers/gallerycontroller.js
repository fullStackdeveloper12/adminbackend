import { galleryData } from "../models/gallery.js";
const Gallery = galleryData;
import fs from "fs";

export const POST_GALLERY = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded");
    }

    const img = req.file.filename;

    const galleryUpload = new Gallery({
      galleryimg: img,
    });
    const addedimg = await galleryUpload.save();
    res.status(200).json(addedimg);
  } catch (err) {
    console.log(err);
    res.status(500).send("Failed to upload gallery");
  }
};

export const GET_GALLERY = async (req, res) => {
  try {
    const foundgallery = await Gallery.find();
    if (!foundgallery) {
      return res.status(404).json("Error");
    }
    res.status(200).json(foundgallery);
  } catch (err) {
    console.log(err);
    res.status(500).send("Failed to get gallery");
  }
};

export const GET_UPDATEGALLERY = async (req, res) => {
  try {
    const id = req.params.id;
    const foundgallery = await Gallery.findById(id);
    if (!foundgallery) {
      return res.status(404).json("Gallery not found");
    }
    res.status(200).json(foundgallery);
  } catch (err) {
    console.log(err);
    res.status(500).send("Failed to get gallery");
  }
};

export const PUT_GALLERY = async (req, res) => {
  try {
    const id = req.params.id;
    const existingGallery = await Gallery.findById(id);

    if (!existingGallery) {
      return res.status(404).json("Gallery not found");
    }

    if (req.file) {
      const img = req.file.filename;
      existingGallery.galleryimg = img;
    }

    existingGallery.save();
    res.status(200).json(existingGallery);
  } catch (err) {
    console.log(err);
    res.status(500).send("Failed to update gallery");
  }
};

export const DELETE_GALLERY = async (req, res) => {
  try {
    const id = req.params.id;
    const galleryToDelete = await Gallery.findById(id);
    if (!galleryToDelete) {
      return res.status(404).json("Gallery not found");
    }

    const img = galleryToDelete.galleryimg;
    try {
      fs.unlinkSync(`./public/uploads/${img}`);
    } catch (err) {
      console.log(`Failed to delete image: ${img}`, err);
    }

    await Gallery.findByIdAndDelete(id);
    res.status(200).json({ msg: "Gallery deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send("Failed to delete gallery");
  }
};
