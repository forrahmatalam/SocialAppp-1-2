const express = require('express');
const musicController = require("../controllers/music.controller");
const multer = require('multer');
const authMiddleware=require("../middlewares/auth.middleware");
const { route } = require('./auth.routes');

//yha only artist music create kr sake user nhi , api 

const upload =multer({
    storage:multer.memoryStorage()
})


const router =express.Router();

                 //Post Api

router.post("/upload",authMiddleware.authArtist, upload.single('music'),musicController.createMusic)
                 
                 //Post-Create Album Api
router.post("/album",authMiddleware.authArtist, musicController.createAlbum)

                 //Get Api
router.get("/" ,authMiddleware.authUser , musicController.getAllMusics)

router.get("/album",authMiddleware.authArtist, musicController.getAllMusics)

router.get("/album/:albumId",authMiddleware.authUser, musicController.getAlbumById)


module.exports=router;
