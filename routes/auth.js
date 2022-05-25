import express from "express";
import {createUser, getUsers, login} from '../controller/auth.js'

const router  = express.Router();

router.post("/register", createUser)
router.post("/login", login)
router.get('/users', getUsers)

export default router;