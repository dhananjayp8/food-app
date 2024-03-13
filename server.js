const express=require('express');
const colors=require('colors');
const cors=require('cors');
const dotenv = require("dotenv");
const morgan=require('morgan');
//rest object
const app=express();

dotenv.config();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));



//route

app.use('/api/v1/test',require('./routes/testRoutes'));

app.get('/',(req,res)=>{
    return res.status(200).send("<h1>Welcome to food server</h1>");
})

const PORT=process.env.PORT||8080
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})