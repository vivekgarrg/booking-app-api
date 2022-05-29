import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';
import usersRoute from './routes/users.js';
import cookieParser from "cookie-parser";
import cors from 'cors'

const app = express()
dotenv.config()
const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to mongoDB");
    }catch(err){
        throw err 
    }
}

mongoose.connection.on('disconnected',()=>{
    console.log("Mongo disconnected");
})

app.use(cors())
app.use(cookieParser())
app.use(express.json())

//middleware
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

const port = 3000; 
app.listen(port, ()=>{
    connect()
    console.log(`Connected to backend at port ${port}`);
})