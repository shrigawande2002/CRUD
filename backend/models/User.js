import mongoose, { trusted } from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema( {

    name:{
        type:String,
        required:true
    },
    
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }


})

export default mongoose.model('User' , userSchema);