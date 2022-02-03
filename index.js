require('dotenv').config();
const cors = require("cors");
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3230;
const Routes = require('./router')
const fileUpload = require("express-fileupload");

app.use(fileUpload());
const connectDB = require('./config/db');
connectDB();

app.use(express.static("public"));
app.use(cors());
app.use(express.json());

// Routes 
app.use('/', Routes);

app.use('/upload', express.static("upload"))


app.listen(PORT, console.log(`Listening on port ${PORT}.`));