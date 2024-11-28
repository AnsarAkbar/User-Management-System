import express, { response } from "express";
import { connectDB } from "./db/index.js";
import { User } from "./models/user.model.js";
// import multer from 'multer'
import bodyParser from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(bodyParser.json());
const port = 5000;
connectDB();

// get
app.get("/", async (req, res) => {
  try {
    const data = await User.find();
    res.json({ data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// post
// import multer from 'multer';
// import path from 'path';

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './public/temp'); // Specify your upload directory
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Set file name to current time + original file extension
//   },
// });

// const upload = multer({ storage: storage })
// upload.array("files",5),
app.post("/add-users",async (req, res) => {

  // console.log('req.files', req.files)
  const { name, email, phone } = await req.body;
  console.log(await req.body)
  // const imagePath=req.files?.map(e=>e.filename)
  // console.log(imagePath)

  try {
    const userData = await User.create({ name, email, phone});
    res
      .status(200)
      .json({ message: "User created successfully...!", userData });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});
// update
app.put("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const updatedData = req.body;
    const newData = await User.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    res.status(200).json({ message: "User updated successfully...!", newData });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

//delete
app.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedData = await User.findByIdAndDelete(id);
    res.status(200).json({ message: "Successfully deleted...!", deletedData});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(process.env.PORT || port, () => {
  console.log(
    `Server is runing at http://localhost:${process.env.PORT || port}`
  );
});