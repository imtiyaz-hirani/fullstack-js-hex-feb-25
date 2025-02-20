/**Setting up express server  */
const express = require('express'); 
const dbConnect = require('./dbconfig');
const app = express(); //henceforth app is our main server variable 
const courseRoute = require('./routes/courseRoute');

//body parser to read json
app.use(express.json())

//connect to mongoDB 
dbConnect();

//reach out to routes
app.use('/api/course',courseRoute);

const PORT = process.env.PORT || 5000; 
app.listen(PORT,()=>{console.log(`express server listening to port ${PORT}`)}); 

///process.env.PORT - this is to read cloud server's port number 