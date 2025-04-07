const express = require("express");
const server=require("./configs/server.config")
const feedbackModel=require("./Models/feedbackModel")
const app=express();
const mongoose=require("mongoose")



/**
 * Connecting to database
 */
mongoose.connect("mongodb+srv://mainaryanshrivastav2003:zS6j3snCxxw0IOBm@feedback.ttvghbe.mongodb.net/?retryWrites=true&w=majority&appName=feedback")

const db=mongoose.connection
db.on("error",()=>{
    console.log("Problem in connecting to Database")
})
db.once("open",()=>{
    console.log("Successfully connected to Database")
})





/** 
 * Starting the server
 */

app.listen(server.PORT,()=>{
    console.log("Server started at Port Number :- ",server.PORT)
})