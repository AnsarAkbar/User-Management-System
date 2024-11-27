import mongoose from "mongoose";
import express from 'express'
import { connectDB } from "./db/index.js";
import { User } from "./models/user.model.js";
import bodyParser from 'express';

const app=express()
app.use(bodyParser.json())
const port = 3000;

// get 
app.get('/', (req, res) => {
    res.status(200).json({ name: 'Ansar' })
})

// post
app.post('/users-list', async(req, res) => {
    const {name,gmail,phone} = await req.body;
    try {
        const userData= await User.create({name,gmail,phone})
        res.status(200).json({message:'User created successfully...!',userData})
    } catch (error) {
        res.status(401).json({message:error.message})
    }
});

//delete
// app.delete()


connectDB()

app.listen(port, () => {
    console.log(`Server is runing at http://localhost:${port}`)
})