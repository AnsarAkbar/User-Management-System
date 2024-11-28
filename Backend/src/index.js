import express, { response } from "express";
import { connectDB } from "./db/index.js";
import { User } from "./models/user.model.js";
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
    res.json({ data: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// post
app.post("/add-users", async (req, res) => {
  const { name, gmail, phone } = await req.body;
  try {
    const userData = await User.create({ name, gmail, phone });
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
    res.status(200).json({ message: "Successfully deleted...!", deletedData });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(process.env.PORT || port, () => {
  console.log(
    `Server is runing at http://localhost:${process.env.PORT || port}`
  );
});