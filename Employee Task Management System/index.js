const express = require('express');
const dbConnect = require('./config/dbConfig');
const app = express(); 
const employeeRoute = require('./route/employeeRoute');
const { json } = require('body-parser');

const $PORT = process.env.$PORT || 5001; 

app.use(express.json())

dbConnect();

app.use('/api/employee', employeeRoute)
app.listen($PORT, ()=> console.log(`Server listening on port ${$PORT}`))