import express from "express";
import { connectDB } from "./db/index.js";
import { User } from "./models/user.model.js";
import multer from "multer";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json()); // Handle JSON bodies
app.use(cors()); // Enable CORS

const port = 5000;
connectDB();

// Setup multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/temp"); // Directory for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Set unique filename
  },
});
const upload = multer({ storage: storage });

// Get request to fetch users
app.get("/", async (req, res) => {
  try {
    const data = await User.find();
    res.json({ data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST request to add a new user
app.post("/add-users", upload.single("image_uri"), async (req, res) => {

  const { name, email, phone } = req.body; // Extract text fields from body
  const imagePath = req.file ? req.file.filename : null; // Extract image file path
  try {
    const userData = await User.create({ name, email, phone, imagePath });
    res.status(200).json({ message: "User created successfully!", userData });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// PUT to update request
app.put('/:id', async (req, res) => {
  const data = req.body
  console.log("============",req.body)
  const { id } = req.params
  console.log('...........id',id)
  try {
    const updatedData = await User.findByIdAndUpdate(id, data)
    res.status(200).json({ message: 'User updated successfully...!', updatedData })
  } catch (error) {
    res.status(400).json({ message: "Something wrong", error: error.message })
  }
})
// DELETE to delete data
app.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const deletedData = await User.findByIdAndDelete(id)
    res.status(200).json({ message: 'User deleted successfully...!', deletedData },)
  } catch (error) {
    console.log(error.message)
  }
})

// Start the server
app.listen(process.env.PORT || port, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT || port}`);
});
