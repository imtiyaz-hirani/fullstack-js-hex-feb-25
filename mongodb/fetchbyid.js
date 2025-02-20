const mongoose = require('mongoose');
const Employee = require('./employee');
const dbConnect = require('./dbconfig');

const fetchById=async (empId)=>{

    try{
        await dbConnect();

        const emp = await Employee.findOne({'_id': empId})
        if(!emp)    //if emp is undefined(NOT defined) 
            console.log('emp record not found for id' + empId)
        else
            console.log(emp); 
    }
    catch(err){
        console.log(err)
    }
    finally{
        mongoose.connection.close();
    }
}


const fetchByName = async(name)=>{
    try{
        await dbConnect();
        //extract fname and lname from name
        let fname = name.split(' ')[0];
        let lname = name.split(' ')[1];

        const emp = await 
        Employee.find({'fname': fname , 'lname': lname})
        console.log(emp); 
    }
    catch(err){
        console.log(err)
    }
    finally{
        mongoose.connection.close();
    }
}
//dbConnect() 
//call methods 
//close the db
fetchById('67b57f3a2a7ee47f5fc7e000');
//fetchByName('ronald weasley');