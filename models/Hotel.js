import mongoose from 'mongoose'

const HotelSchema = new mongoose.Schema({
    name:{
        type:String,
        required:"true",
        unique:"true"
    },
    type:{
        type:String,
        required:"true"
    },
    city:{
        type:String,
        required:"true"
    },
    address:{
        type:String,
        required:"true"
    },
    distance:{
        type:String,
        required:"true"
    },
    title:{
        type:String,
        required:true
    },
    photos:{
        type:[String]
    },
    desc:{
        type:String,
        required:"true"
    },
    rating:{
        type:Number,
       min:0,
       max:5
    },
    rooms:{
        type:[String]
    },
    address:{
        type:String,
        required:"true"
    },
    cheapestPrice:{
        type:Number,
        required:true
    },
    featured:{
        type:Boolean,
        default:false
    }

});

const hotelModel = mongoose.model("hotel", HotelSchema);
export default hotelModel;
