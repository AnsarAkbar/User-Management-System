import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB= async()=>{
    try {
       await mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NAME}`)
       .then(()=>console.log('DB_connect successfully...!'))
       .catch((error)=>console.log('DB connection failed...!',error))
    } catch (error) {
        console.log(error)
    }
}