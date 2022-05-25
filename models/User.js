import mongoose from 'mongoose'

const USerSchema = new mongoose.Schema({
    username:{
        type:String,
        required:"true",
        required:"true"
    },
    email:{
        type:String,
        required:"true",
        unique:"true"
    },
    password:{
        type:String,
        required:"true"
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

const userModel = mongoose.model("users", USerSchema);
export default userModel;
