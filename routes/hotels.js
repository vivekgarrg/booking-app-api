import express from "express";
import{ getHotel, getHotels, updateHotel, deleteHotel, postHotel } from "../controller/hotel.js"

const router  = express.Router();

router
.post("/",postHotel)
.put("/:id",updateHotel)
.delete('/:id',deleteHotel)
.get('/:id',getHotel)
.get('/',getHotels)


export default router;