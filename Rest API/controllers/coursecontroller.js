const Course = require("../models/course");

/*
AIM: is to insert course in DB
BODY:{
        "title": "Node.js Rest API",
        "credits": 100,
        "shortDesc": "Create rest apis using node.js express server, mongo db",
        "fee": 7500
} 
*/
exports.addCourse = async (req,res)=>{   //req is to rad the values , res is to give the output json
    try{
        let courseData = req.body; 
        const courseObj = new Course(courseData); //obj created 
        courseData = await courseObj.save();
        res.status(200).json(courseData); 
    }
    catch(err){
        res.status(400).json({'msg' : `error in api: ${err.message}`}); 
    }
}

exports.getAllCourses = async (req,res)=>{
   try{
        const courses = await Course.find();
        res.status(200).json(courses);
   }
   catch(err){
        res.status(400).json({'msg' : `error in api: ${err.message}`}); 
}    
}

exports.deleteCourse = (req,res)=>{

}

exports.getCourseById = async(req,res)=>{
    try{
        let id = req.params.id; 
        let courseObj = await Course.findOne({'_id': id})
        res.status(200).json(courseObj);
    }
    catch(err){
        res.status(400).json({'msg' : `error in api: ${err.message}`}); 
    }
}

exports.updateCourse = (req,res)=>{

}
