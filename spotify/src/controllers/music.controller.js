//yha only artist music create kr sake user nhi , logic

const musicModel=require('../models/music.model');
const {uploadFile} = require("../services/storage.services");
const albumModel=require("../models/album.model");


async function createMusic(req,res) {

    try{
    const {title} =req.body;

    if(!req.file){
        return res.status(400).json({message:"Music file is required"})
    }

    const result =await uploadFile(req.file.buffer.toString('base64'))

    const music = await musicModel.create({
        uri:result.url,
        title,
        artist:req.user.id,
    })

    res.status(201).json({
        message:"Music created sucessfully",
        music:{
            id:music._id,
            uri:music.uri,
            title:music.title,
            artist:music.artist,
        }
    })
   
    
}catch(err){
    console.log(err);
        return res.status(500).json({message:"Music upload failed"})
    }
}

async function createAlbum(req,res) {

    
     const {title,musics} = req.body;
      const album =await albumModel.create({
        title,
        artist:req.user.id,
        musics:musics,
      })
 
      res.status(201).json({
        message:"Album created sucessfully",
        album:{
            id:album._id,
            title:album.title,
            artist:album.artist,
            musics:album.musics,
        }
      })




}


async function getAllMusics(req,res) {

    const music =await musicModel.limit(2).findOne().populate("artist","username")

    res.status(200).json({
        message:"message fetch sucessfully",
        musics:music, 
    })
    
}


async function getAllAlbums(req,res){
    const album = await albumModel.findOne().select("title artist").populate("artist" ,"username")

    res.status(200).json({
        message:"Album create sucessfully",
        albums:album,
    })
}

async function getAlbumById(req,res) {

    const albumId=req.params.albumId;
    const album=await albumModel.findById(albumId).populate("artist" ,"username email").populate("musics")

    return res.status(200).json({
        message:"Album fetched sucessfully",
        album:album,
    })
    
}
module.exports={createMusic,createAlbum , getAllMusics ,getAllAlbums ,getAlbumById}
