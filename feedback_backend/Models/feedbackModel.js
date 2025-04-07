const mongoose=require("mongoose");

// schema for the feedback
const feedbackSchema=new mongoose.Schema({
    fullName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    feedback : {
        type : String,
        required : true    
    },
    timestamp : {
        type : Date,
        default : Date.now
    }
},{versionKey : false})


module.exports=mongoose.model("feedback",feedbackSchema)