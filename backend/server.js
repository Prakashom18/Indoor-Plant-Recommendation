const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.json());


app.listen(3000,(err)=>{
    console.log('running on port 300')
});