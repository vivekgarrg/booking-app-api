import express from "express";
import{ getHotel, getHotels, updateHotel, deleteHotel, postHotel, countByCities } from "../controller/hotel.js"
import { verifyAdmin } from "../utils.js/verifyToken.js";

const router  = express.Router();

router
.get('/countByCities', countByCities)
.get('/:id',getHotel)
.get('/',getHotels)
.post("/", verifyAdmin,postHotel)
.put("/:id",verifyAdmin,updateHotel)
.delete('/:id',verifyAdmin,deleteHotel)


export default router;