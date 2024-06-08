import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  contactheading: {
    type: String,
    required: true,
  },
  aboutdeveloper: {
    type: String,
    required: true,
  },
  contactnumber: {
    type: Number,
    required: true,
  },
});
export const contactData = mongoose.model("contact", contactSchema);
