const mongoose = require('mongoose');


const musicSchema=new mongoose.Schema({
    uri:{
        type:String,
        required:true,
      
    },
    title:{
        type:String,
        required:true,

    },

    artist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user" ,  //artist ki id user coll me save hogi na islie ref dia
        required:true ,

    }
})


const musicModel = mongoose.model("music" ,musicSchema)

module.exports=musicModel;