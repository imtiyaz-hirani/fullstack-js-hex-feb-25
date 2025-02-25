const mongoose = require('mongoose');

const taskSchema =  new mongoose.Schema({
    title: {type: String,required: true },
    shortDescription: {type: String,required: true },
    startDate: {type: Date , default: Date.now  },
    estimatedEndDate: {type: Date , default: Date.now },
    project:{ type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true},
}); 

const Task= mongoose.model("Task", taskSchema); 
module.exports = Task;