import { locationData } from "../models/location.js";
const Locationn = locationData;

export const POST_LOCATION = async (req, res) => {
  try {
    const locationdata = new Locationn(req.body);
    if (!locationdata) {
      res.status(404).json({ msg: "LOACTION DATA NOT FOUND" });
    }
    const savedlocation = await locationdata.save();
    res.status(200).json(savedlocation);
  } catch (err) {
    console.log(err);
  }
};

export const GET_LOCATION = async (req, res) => {
  try {
    const locationdata = await Locationn.find();
    if (!locationdata) {
      res.status(404).json({ msg: "LOCATION DATA NOT FOUND" });
    }
    res.status(200).json(locationdata);
  } catch (err) {
    console.log();
  }
};

export const GETUPDATE_LOCATION = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedLocation = await Locationn.findById(id);
    if (!updatedLocation) {
      res.status(404).json({ msg: "LOCATION NOT FOUND" });
    }
    res.status(200).json(updatedLocation);
  } catch (err) {
    console.log(err);
  }
};

export const PUT_LOCATION = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedLocation = await Locationn.findById(id);
    if (!updatedLocation) {
      res.status(404).json({ msg: "LOCATION NOT FOUND" });
    }
    const UpdatedLocationData = await Locationn.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(UpdatedLocationData);
  } catch (err) {
    console.log(err);
  }
};

export const DELETE_LOCATION = async (req, res) => {
  try {
    const id = req.params.id;
    const deletelocation = await Locationn.findById(id);
    if (!deletelocation) {
      res.status(404).json({ msg: "LOCATION NOT FOUND" });
    }
    await Locationn.findByIdAndDelete(id);
    res.status(200).json({ msg: "Location Data Deleted" });
  } catch (err) {
    console.log(err);
  }
};
