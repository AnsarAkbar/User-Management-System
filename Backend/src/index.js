import express from "express";
import { connectDB } from "./db/index.js";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user/userRoutes.js"; // Import the router
// import authRoutes from "./routes/auth/authRoutes.js";
dotenv.config();

const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

app.use('/api/users', userRoutes); // Use the userRoutes
// app.use('/api/auth', authRoutes);

const port = process.env.PORT || 5000; // Use environment variable for port if available
connectDB();

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});