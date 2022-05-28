import express from "express";
import{ getHotel, getHotels, updateHotel, deleteHotel, postHotel } from "../controller/hotel.js"
import { verifyAdmin } from "../utils.js/verifyToken.js";

const router  = express.Router();

router
.post("/", verifyAdmin,postHotel)
.put("/:id",verifyAdmin,updateHotel)
.delete('/:id',verifyAdmin,deleteHotel)
.get('/:id',getHotel)
.get('/',getHotels)


export default router;