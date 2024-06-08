import express from "express";
import path from "path";
import cors from "cors";
// import bodyParser from "body-parser";

export const configureMiddleware = (app) => {
  //middlewares
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  0;
  app.use(express.static(path.join(path.resolve(), "public")));
 // app.use(bodyParser, express.urlencoded({ extended: true }));
  app.use(cors());
};
