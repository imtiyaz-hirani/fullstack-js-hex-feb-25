const dbConnect =  require('./dbconfig');
const mongoose = require('mongoose'); //saves mongoose in variable
const Employee = require('./employee');

const fetchEmployee = async ()=>{
    try{
       await dbConnect();
        //since i am fetching the data from db, i won't prepare the object 
        const empArry = await Employee.find(); 
        empArry.forEach(e=>console.log(e))
    }
    catch(err){
        console.log(err)
    }
    finally{
        mongoose.connection.close(); 
    }
}
fetchEmployee();