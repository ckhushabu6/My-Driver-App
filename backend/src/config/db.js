const mongoose = require('mongoose');
const connectDB  = async ()=>{
    try{
    await mongoose.connect("mongodb://127.0.0.1:27017/driversdb");
    console.log("connected to mongodb");
    }catch(error){
        console.error("Error connecting to mongodb", error);
    }
   
}

module.exports = connectDB;