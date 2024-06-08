import express from "express";
export const router = express.Router();
import {
  GET_HOME,
  POST_HOME,
  GETUPDATE_HOME,
  PUTUPDATE_HOME,
  DELETE_HOME,
} from "../controllers/controller.js";
import {
  DELETE_OVERVIEW,
  GET_OVERVIEW,
  OVERVIEW_POST,
  GETUPDATE_OVERVIEW,
  PUT_OVERVIEW,
} from "../controllers/overviewcontroller.js";
import {
  DELETE_PRICELIST,
  GETPATCH_PRICELIST,
  GET_PRICELIST,
  POSTPATCH_PRICELIST,
  POST_PRICELIST,
} from "../controllers/pricingcontroller.js";
//ImageSystem
import {
  POST_CONTACT,
  GET_CONTACT,
  GETUPDATE_CONTACT,
  PUT_CONTACT,
  DELETE_CONTACT,
} from "../controllers/contactcontroller.js";
import {
  DELETE_LOCATION,
  GETUPDATE_LOCATION,
  GET_LOCATION,
  POST_LOCATION,
  PUT_LOCATION,
} from "../controllers/locationcontroller.js";
//ImageSystem
import {
  DELETE_GALLERY,
  GET_GALLERY,
  GET_UPDATEGALLERY,
  POST_GALLERY,
  PUT_GALLERY,
} from "../controllers/gallerycontroller.js";
//OVERVIEW
import {
  DELETE_HIGHLIGHT,
  GET_HIGHLIGHT,
  GET_UPDATEHIGHLIGHT,
  POST_HIGHLIGHT,
  PUT_HIGHLIGHT,
} from "../controllers/highlightscontroller.js";
//POPUP
import {
  DELETE_POPUP,
  GET_POPUP,
  POST_POPUP,
  PUT_POPUP,
} from "../controllers/popcontroller.js";
// IMAGEUPLOAD MIDDLEWARES
import {
  galleryUpload,
  overviewUpload,
  popupUpload,
} from "../middleware/overviewMulter.js";
import { highlightUpload } from "../middleware/overviewMulter.js";
// IMAGEUPLOAD MIDDLEWARES

//HOME
router.get("/", GET_HOME);
router.post("/", POST_HOME);
router.get("/update/:id", GETUPDATE_HOME);
router.put("/update/:id", PUTUPDATE_HOME);
router.delete("/delete/:id", DELETE_HOME);
//HOME

router.post("/addoverview", overviewUpload, OVERVIEW_POST);
router.get("/getoverview", GET_OVERVIEW);
router.get("/getupdateoverview/:id", GETUPDATE_OVERVIEW);
router.put("/updateoverview/:id", overviewUpload, PUT_OVERVIEW);
router.delete("/deleteoverview/:id", DELETE_OVERVIEW);
//OVERVIEW

//PRICELIST
router.post("/addpricelist", POST_PRICELIST);
router.get("/getpricelist", GET_PRICELIST);
router.get("/getpatchpricelist/:id", GETPATCH_PRICELIST);
router.put("/updatepatchpricelist/:id", POSTPATCH_PRICELIST);
router.delete("/pricelistdelete/:id", DELETE_PRICELIST);
//PRICELIST

//CONTACT
router.post("/addcontact", POST_CONTACT);
router.get("/getcontact", GET_CONTACT);
router.get("/getupdatecontact/:id", GETUPDATE_CONTACT);
router.put("/updatecontact/:id", PUT_CONTACT);
router.delete("/deletecontact/:id", DELETE_CONTACT);
//CONTACT

//LOCATION
router.post("/addlocation", POST_LOCATION);
router.get("/getlocation", GET_LOCATION);
router.get("/getupdatelocation/:id", GETUPDATE_LOCATION);
router.put("/updatelocation/:id", PUT_LOCATION);
router.delete("/deletelocation/:id", DELETE_LOCATION);
//LOCATION

//HIGHLIGHT
router.post("/addhighlight", highlightUpload, POST_HIGHLIGHT);
router.get("/gethighlight", GET_HIGHLIGHT);
router.get("/gethighlightupdate/:id", GET_UPDATEHIGHLIGHT);
router.put("/puthighlightupdate/:id", highlightUpload, PUT_HIGHLIGHT);
router.delete("/deletehighlight/:id", DELETE_HIGHLIGHT);
//HIGHLIGHT

//POPUP
router.post("/addpopup", popupUpload, POST_POPUP);
router.get("/getpopup", GET_POPUP);
router.get("/getupdatepopup/:id", GET_POPUP);
router.put("/updatepopup/:id", popupUpload, PUT_POPUP);
router.delete("/deletepopup/:id", popupUpload, DELETE_POPUP);
//POPUP

//GALLERY
router.post("/addgallery", galleryUpload, POST_GALLERY);
router.get("/getgallery", GET_GALLERY);
router.get("/getupdategallery/:id", GET_UPDATEGALLERY);
router.put("/updategallery/:id", galleryUpload, PUT_GALLERY);
router.delete("/deletegallery/:id", DELETE_GALLERY);
//GALLERY
