const express=require('express');
const db=require('./db');
const newTour=require('./models/NewTour');
const bodyParser=require('body-parser');
const app=express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const cors = require('cors');
app.use(cors());

app.get('/',async(req,res)=>{
    try{
        res.send("Hello from the server Side!");
    }catch(err){
        res.status.json({error:"Error"})
    }
})

app.post('/addnewtour',async(req,res)=>{
    try{
        const data=await new newTour(req.body);
        const responseData=await data.save();

        res.status(200).json({data:responseData});
    }catch(err){
        console.log("Some error occured while fetching data from the database server");
        res.status(500).json({error:err});
    }
})

app.get('/getTours',async(req,res)=>{
    try{
        const responseData=await newTour.find();
        res.json(responseData);
    }catch(err){
        res.status(500).json({error:"Error occured form the server side!"});
    }
})

app.listen(3000,()=>{
    console.log("Server is live now!");
})