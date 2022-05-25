import userModel from "../models/User.js";
import bcrypt from "bcrypt"
import jwt from'jsonwebtoken'

export const createUser = async(req, res)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new userModel({
            username:req.body.username,
            email:req.body.email,
            password:hash
        });
        const user =await newUser.save();
        const {username, password, ...otherDetails} = user
        res.status(200).json(otherDetails._doc);
    }catch(err){
        res.status(500).json(err.message)
    }
}

export const getUsers= async(req, res)=>{
    try{
        const users = await userModel.find();
        console.log(users)
        res.status(200).json(users);
  
    }catch(err){
        res.status(500).json(err.message)
    }
}

export const login = async(req, res)=>{
    try{
        const user = await userModel.findOne({username:req.body.username})
        if(!user) res.status(404).json("User not found")
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordCorrect) res.status(400).json("Wrong password or username")
    
        const token = jwt.sign({ id:user._id , isAdmin:user.isAdmin },process.env.JWT)


        const {password,...otherDetails} = user
        res.cookie("isLogin", token, {httpOnly:true}).status(200).json(otherDetails._doc)
    }catch(err){
        res.status(500).json(err.message)
    }
}