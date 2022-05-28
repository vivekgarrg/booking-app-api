import express from "express";
const app =express()
import{ getUser, updateUser, deleteUser } from "../controller/User.js"
import { verifyUser } from "../utils.js/verifyToken.js";

const router  = express.Router();


router
.route('/:id')
.put(verifyUser,updateUser)
.delete(verifyUser,deleteUser)
.get(verifyUser,getUser)



export default router;