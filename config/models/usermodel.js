import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type: String,
        unique: trusted,
    },
    password{
        type:String,
        required:true,
    },
    phone{
        type:String,
        required:true,
    },

},{timestamp:true})
const usermodel = mongoose.model("user", userSchema);

export default usermodel
