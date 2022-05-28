import hotelModel from "../models/Hotel.js";

export const postHotel = async(req,res)=>{
    try{
       const newHotel = new hotelModel(req.body);
       const savedHotel = await newHotel.save()
       res.status(200).json(savedHotel);
    }catch(err){
        res.status(500).json(err.message)
    }
}

export const updateHotel = async(req,res)=>{
    try{
       const updateHotel = await hotelModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
       if(updateHotel)
       res.status(200).json(updateHotel);
       else
       res.send("no hotel found")
    }catch(err){
        res.status(500).json(err.message)
    }
}

export const getHotel = async(req,res)=>{
    try{
        const hotel = await hotelModel.findById(req.params.id);
        res.status(200).json(hotel);
    }catch(err){
        res.status(500).json(err.message)
    }
}

export const getHotels = async(req,res)=>{
    try{
        const hotels = await hotelModel.find();
        res.status(200).json(hotels);
    }catch(err){
        res.status(500).json(err.message)
    }
}

export const deleteHotel = async(req,res)=>{
    try{
        const hotel = await hotelModel.findByIdAndDelete(req.params.id);
        res.status(200).json("hotel delted successfully");
    }catch(err){
        res.status(500).json(err.message)
    }
}