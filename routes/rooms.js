import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controller/room.js";
import { verifyAdmin } from "../utils.js/verifyToken.js";

const router  = express.Router();

router
.post("/:hotelId", verifyAdmin,createRoom)
.put("/:id",verifyAdmin,updateRoom)
.delete('/:id/:hotelId',verifyAdmin,deleteRoom)
.get('/:id',getRoom)
.get('/',getRooms)


export default router;