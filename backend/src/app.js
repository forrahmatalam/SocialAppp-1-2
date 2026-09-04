/* const express = require('express');
const app = express();

const noteModel = require("./models/post.model");

         //ye Middleware hai
app.use(express.json());  //Ye JSON data ko read (parse) karta hai jo tum Postman se bhejte ho

const notes = [];



              // Post Api
app.post("/notes", async (req, res) => {
    const data = req.body;

    await noteModel.create({
        title: data.title,
        description: data.description
    });

    res.status(201).json({
        message: "notes created successfully"
    });
});


          //Get Api
    app.get("/notes", async (req, res) => {
   const notes = await noteModel.find() //find-method krne ke lie find if .findOne() likenge to {jo likenge to single obj return kregi nhi array form me find ke sath bhi condition lga sakte ho }

   res.status(200).json ({
    message:"Notes fetch sucessfully",
    notes:notes
   });

    });

  
         //Delete Api
    app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id;

    await noteModel.findOneAndDelete({
        _id: id   //underscore kuki dbs me _ ke form me save hoti hai
    });

    res.status(200).json({
        message: "Note deleted successfully"
    });
});
      

      //Patch Api
      app.patch("/notes/:id", async (req, res) => {
        const id = req.params.id
        const description = req.body.description

        await noteModel.findByIdAndUpdate({_id:id} , {description:description})

        res.status(200).json({
            message:"Notes updated sucessfully"
        });

    });
    module.exports = app; */










const express = require('express');
const app = express();
const multer = require('multer');
const cors = require("cors")      //require cors

const uploadFile = require("../services/storage.service");
const postModel = require("./models/post.model");

app.use(cors())              //middleware of cors
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

// Post API
app.post('/create-post', upload.single("image"), async (req, res) => {
    console.log(req.body);
    console.log(req.file);

    const result = await uploadFile(req.file.buffer);
    console.log(result);

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    });

    return res.status(201).json({
        message: "post created sucessfully",
        post
    });
});

// Get API
app.get("/posts", async (req, res) => {
    const posts = await postModel.find();

    return res.status(200).json({
        message: "post fetch sucessfully",
        posts
    });
});

module.exports = app;