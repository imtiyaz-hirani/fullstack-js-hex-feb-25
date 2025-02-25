const express = require('express');
const dbConnect = require('./config/dbConfig');
const app = express(); 
const employeeRoute = require('./route/employeeRoute');
const projectRoute = require('./route/projectRoute');
const taskRoute = require('./route/taskRoute');

const { json } = require('body-parser');

const $PORT = process.env.$PORT || 5001; 

app.use(express.json())

dbConnect();

app.use('/api/employee', employeeRoute)
app.use('/api/project', projectRoute)
app.use('/api/task', taskRoute)

app.listen($PORT, ()=> console.log(`Server listening on port ${$PORT}`))