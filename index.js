const connectToMongo = require('./db');
const express = require('express');
require('dotenv').config();

connectToMongo();
const app = express();

const port = process.env.PORT;


app.get('/', (req,res)=>{
    res.send("helloddd Worldsss");
})

app.listen(port,()=>{
    console.log(`server are running on port no. http://localhost:${port}`)
});