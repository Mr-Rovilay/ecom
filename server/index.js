import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import productRoutes from "./routes/productRoutes.js";
import connectDB from "./db/db.js";
import "dotenv/config";

// Initialize the Express application
const app = express();

// Set up middlewares
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

// Define the PORT constant
const PORT = process.env.PORT || 5000;

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send("OK...my message");
});

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});
const upload = multer({ storage });

// Serve static files from the upload/images directory
app.use("/images", express.static("upload/images"));
app.use("/", productRoutes);


// Define the file upload route
app.post("/upload", upload.single("product"), (req, res) => {
   if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  res.json({
    message: "File uploaded successfully!",
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`,
  });
});

// Connect to the database and start the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}).catch(err => {
  console.error("Failed to connect to the database", err);
});
