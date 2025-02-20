/**
 * mongodb+srv://imtiyaz:imtiyaz@123@training-cluster.fbvju.mongodb.net/jobportal_trainingdb?retryWrites=true&w=majority&appName=training-cluster
 */

//mongoose: helps us connect to DB programatically and lets us perform DB ops

const mongoose = require('mongoose'); //saves mongoose in variable

//now i can use this variable to call methods of mongoose

 const dbConnect = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://imtiyaz:imtiyaz123@training-cluster.fbvju.mongodb.net/?retryWrites=true&w=majority&appName=training-cluster',{
            useUnifiedTopology: true
        }) 
    }
    catch(err){
        console.log('Error in connection ' + err)
    }
}

module.exports = dbConnect;
//dbConnect();
