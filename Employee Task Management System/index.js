const express = require('express');
const dbConnect = require('./config/dbConfig');
const app = express(); 

const $PORT = process.env.$PORT || 5001; 

dbConnect();

app.listen($PORT, function () {
    console.log(`Server listening on port ${$PORT}`)
})