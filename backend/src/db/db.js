/* const mongoose = require("mongoose");

async function connectDB(){
    try {
        await mongoose.connect("mongodb://BACKEND:DqQobhkP3hitjk6p@ac-cajanr9-shard-00-00.l4y2l1v.mongodb.net:27017,ac-cajanr9-shard-00-01.l4y2l1v.mongodb.net:27017,ac-cajanr9-shard-00-02.l4y2l1v.mongodb.net:27017/?ssl=true&replicaSet=atlas-wb01zt-shard-0&authSource=admin&appName=BACKEND");
        console.log("✅ connected to DB");
    } catch (err) {
        console.log("❌ DB connection error:", err.message);
    }
}

module.exports = connectDB; */






                //project 2

const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ connected to DB");
    } catch (err) {
        console.log("❌ DB connection error:", err.message);
    }
}

module.exports = connectDB;