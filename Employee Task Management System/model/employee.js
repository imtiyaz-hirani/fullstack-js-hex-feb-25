const mongoose = require('mongoose');

const employeeSchema =  new mongoose.Schema({
    name: {type: String,required: true },
    jobTitle: {type: String,required: true },
    city: {type: String },
    salary: {type: Number,required: true },
    profilePic: {type: String  },
    cv: {type: String  },
}); 

const Employee= mongoose.model("Employee", employeeSchema); 
module.exports = Employee;