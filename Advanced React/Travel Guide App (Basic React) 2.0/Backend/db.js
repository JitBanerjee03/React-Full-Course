const mongoose=require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_LOCAL_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db=mongoose.connection;

db.on('connected',()=>console.log('Database connected successfully!'));
db.on('disconnected',()=>console.log('Database disconnected!'));
db.on('reconnected',()=>console.log('Database reconnected successfully!'));

module.exports=db;