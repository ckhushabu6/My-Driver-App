const express = require('express');
const userRouter = express.Router();
const authController = require('../controllers/auth.controller');
const { autC} = require('../controllers/auth.controller');
export const authController = (req, res)=>{
    try{
         const userdata = res.body;
        res.status.json(
            {
                "message" : 'User authenticated' ,
                "data" : userdata
        });
    }catch(err){
        res.status(500).json(
            {
                message: 'sercer error' , 
                error : err.message
            }
        );
    }
}



