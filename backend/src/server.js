const express = require('express');
const connectDB = require('./configs/db');
const userRouter = require('./routers/user.routes');
connectDB();
const app = express();
const port = 3000;
app.use(express.json());
app.get('/',(req , res)=>{
    try{
     res.json({message: "Welcome to the API"});
        console.log("Root route accessed");
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Internal Server Error"});
    }
})

app.use('/api/users', userRouter);
//undefine routes
app.use((req, res ) =>{
    res.status(404).json({message: "Route not found"});

})

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);

}) 