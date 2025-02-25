const mongoose = require('mongoose');

const dbConnect = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://imtiyaz:imtiyaz123@training-cluster.fbvju.mongodb.net/etms?retryWrites=true&w=majority&appName=training-cluster')
        console.log('database connection established...') 
    }
    catch(err){
        console.log('Error in connection ' + err)
    }
}

module.exports = dbConnect;
