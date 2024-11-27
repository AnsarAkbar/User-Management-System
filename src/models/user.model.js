import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gmail: {
        type: String,
        required: true, 
        unique: true
    },
    phone: {
        type: Number,
        required: true, 
        unique: true
    }},{timestamps:true}
);

export const User = mongoose.model("User", userSchema);