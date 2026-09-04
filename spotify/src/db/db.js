    //isme server kis trah se connect hoga database se ye hota hai


const dns = require('dns');
const mongoose = require('mongoose');


async function connectDB() {

    try{
        dns.setServers(['8.8.8.8', '1.1.1.1']);   //Extra add due to dns issue
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Database connected successfully")


    }
    catch(error) {
        console.error('Data base connection error' ,error);
    }
    
}

module.exports =connectDB;
