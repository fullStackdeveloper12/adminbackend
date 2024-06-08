import { contactData } from "../models/contact.js";
const Contact = contactData;

export const POST_CONTACT = async (req, res) => {
  try {
    const contactdata = new Contact(req.body);
    if (!contactdata) {
      res.status(404).json({ msg: "CONTACT DATA NOT FOUND" });
    }
    const saveContact = await contactdata.save();
    res.status(200).json(saveContact);
  } catch (err) {
    console.log(err);
  }
};

export const GET_CONTACT = async (req, res) => {
  try {
    const contactdata = await Contact.find();
    if (!contactdata) {
      res.status(404).json({ msg: "CONTACT DATA NOT FOUND" });
    }
    res.status(200).json(contactdata);
  } catch (err) {
    console.log(err);
  }
};

export const GETUPDATE_CONTACT = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const contactdatafound = await Contact.findById(id);
    if (!contactdatafound) {
      return res.status(404).json({ msg: "Home Data not Found" });
    }
    res.status(200).json(contactdatafound);
  } catch (err) {
    console.log(err);
  }
};

export const PUT_CONTACT = async (req, res) => {
  try {
    const id = req.params.id;
    const contactdatafound = await Contact.findById(id);
    if (!contactdatafound) {
      return res.status(404).json({ msg: "Home Data not Found" });
    }
    const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedContact);
  } catch (err) {
    console.log(err);
  }
};

export const DELETE_CONTACT = async (req, res) => {
  try {
    const id = req.params.id;
    const contactdatafound = await Contact.findById(id);
    if (!contactdatafound) {
      res.status(404).json({ msg: "Contact Data not Found" });
    }
    await Contact.findByIdAndDelete(id);
    res.status(200).json({ msg: "Contact Data Deleted" });
  } catch (err) {
    console.log(err);
  }
};
