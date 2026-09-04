const express = require('express');
const authRoutes =require("./routes/auth.routes");
const cookieParser = require("cookie-parser")        //cookie parser require 

const app = express();
app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoutes);

module.exports = app;