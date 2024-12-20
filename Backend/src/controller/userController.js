// userController.js
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";

export const contacts = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addUser = async (req, res) => {
  const { name, email, phone, password } = req.body;
  const bcryptedPassword = await bcrypt.hash(password, 10);
  console.log(bcryptedPassword);
  try {
    const createdUser = await User.create({ name, email, phone, imagePath: req?.files?.map((file) => file?.path), password: bcryptedPassword });
    res.status(201).json({
      message: "User added successfully!",
      user: createdUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully",user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, { name, email, phone, imagePath: req?.files?.map((file) => file?.path) }, { new: true }); 
    if (!user) {  
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully", user });
  }   
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}                      

// export { contacts, addUser, deleteUser, updateUser };
