import roomModel from "../models/Room.js";
import hotelModel from "../models/Hotel.js";

export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    const newRoom = new roomModel(req.body);

    try {
        const savedRoom = await newRoom.save()
        try {
           const data =  await hotelModel.findByIdAndUpdate(hotelId, {
                $push: {
                    rooms: savedRoom._id
                }
            }, {new:true})
        } catch (err) {
            res.status(400).json(err.message)
        }
        if (savedRoom)
            res.status(200).json(savedRoom)
        else
            res.json("room not saved")
    } catch (err) {
        res.status(400).json(err.message)
    }
}

export const updateRoom = async (req, res) => {
    try {
        const updateRoom = await roomModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        if (updateRoom)
            res.status(200).json(updateRoom);
        else
            res.send("no hotel found")
    } catch (err) {
        res.status(500).json(err.message)
    }
}

export const getRoom = async (req, res) => {
    try {
        const room = await roomModel.findById(req.params.id);
        res.status(200).json(room);
    } catch (err) {
        res.status(500).json(err.message)
    }
}

export const getRooms = async (req, res) => {
    try {
        const rooms = await roomModel.find();
        res.status(200).json(rooms);
    } catch (err) {
        res.status(500).json(err.message)
    }
}

export const deleteRoom = async (req, res) => {
    try {
        const room = await roomModel.findByIdAndDelete(req.params.id);
        try{
            await hotelModel.findByIdAndUpdate(req.params.hotelId, {
                $pull:{
                    rooms:room._id
                }
            })
        }catch(err){
            res.status(500).json(err.message)
        }
        res.status(200).json("room delted successfully");
    } catch (err) {
        res.status(500).json(err.message)
    }
}