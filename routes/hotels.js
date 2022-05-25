import express from "express";
import Hotel from "../models/Hotel.js";

const router  = express.Router();

router
.post("/",async(req,res)=>{
    const newHotel = new Hotel(req.body);
    try{
       const savedHotel = await newHotel.save()
       res.status(200).json(savedHotel);
    }catch(err){
        res.status(500).json(err.message)
    }
})
.put("/:id",async(req,res)=>{
    try{
       const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {new:true})
       res.status(200).json(updateHotel);
    }catch(err){
        res.status(500).json(err.message)
    }
})

export default router;