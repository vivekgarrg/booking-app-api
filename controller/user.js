import userModel from "../models/User.js";


export const updateUser = async(req,res)=>{
    try{
       const updateUser = await userModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
       res.status(200).json(updateUser);
    }catch(err){
        res.status(500).json(err.message)
    }
}

export const getUser = async(req,res)=>{
    try{
        const User = await userModel.findById(req.params.id);
        res.status(200).json(User);
    }catch(err){
        res.status(500).json(err.message)
    }
}


export const deleteUser = async(req,res)=>{
    try{
        const User = await userModel.findByIdAndDelete(req.params.id);
        res.status(200).json("User delted successfully");
    }catch(err){
        res.status(500).json(err.message)
    }
}