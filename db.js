const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);

const mongoURI =process.env.MONGO_URI;

const connectToMongo = async()=> {
    try{
        mongoose.connect(mongoURI, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("connected to mongo successfully");
    }catch (error){ 
        console.log("Failed to connect to mongo", error);
        process.exit(1);
    }

};

module.exports = connectToMongo;
