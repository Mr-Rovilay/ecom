import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import connectDB from "./db/db.js";

import "dotenv/config";

const app = express();

app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );

  app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
    res.send("OK...my message");
  });
  
  connectDB().then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  });