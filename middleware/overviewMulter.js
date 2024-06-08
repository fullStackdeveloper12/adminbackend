import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    console.log("gg", file);
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});
export const overviewUpload = multer({ storage: storage }).single(
  "overviewimg"
);
export const highlightUpload = multer({ storage: storage }).single(
  "highlightimg"
);
export const popupUpload = multer({ storage: storage }).single("popupimg");
export const galleryUpload = multer({ storage: storage }).single("galleryimg");
