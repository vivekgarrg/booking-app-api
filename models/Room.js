import mongoose from 'mongoose'

const RoomSchema = new mongoose.Schema({
    title:{
        type:String,
        required:"true",
    },
    price:{
        type:Number,
        required:"true"
    },
    desc:{
        type:String,
        required:"true"
    },
    maxPeople:{
        type:Number,
        required:"true"
    },
    roomNumbers:[{number:Number, unavailableDates:{type:[Date]}}]
},{timestamps:true});

const roomModel = mongoose.model("room", RoomSchema);
export default roomModel;
