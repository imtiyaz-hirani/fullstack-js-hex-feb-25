const dbConnect = require('./dbconfig'); 
const mongoose = require('mongoose');
const Employee = require('./employee')

async function addEmployee (){
   try{
    await dbConnect();
    //prepare new Employee object and give properties to that object
    let emp1={
        fname: 'ronald',
        lname: 'weasley',
        city: 'surrey',
        salary: 88000
    }
    const empObj = new Employee(emp1);  //preparing the object of Employee Model 

    await empObj.save(); //save method will save this object in DB 
    console.log('Employee record added in DB....')
   }
   catch(err){
    console.log(err)
   }
   finally{ 
    /* this block will always be called, regardless of weather your code works or not
    and so this is an ideal place to close DB connection
    */
    mongoose.connection.close(); 
    console.log('DB connection closed...')
   }
}                                                                       
addEmployee();
