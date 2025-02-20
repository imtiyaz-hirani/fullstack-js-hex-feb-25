
/*
AIM: is to insert course in DB
BODY:{
        "title": "Node.js Rest API",
        "credits": 100,
        "shortDesc": "Create rest apis using node.js express server, mongo db",
        "fee": 7500
} 
*/
exports.addCourse = (req,res)=>{   //req is to rad the values , res is to give the output json
    try{
        const courseData = req.body; 
        //console.log('inside addCourse controller method....')
        console.log(courseData)
        res.status(200).json(courseData); 
    }
    catch(err){
        console.log(err)
    }
}

exports.getAllCourses = (req,res)=>{

}

exports.deleteCourse = (req,res)=>{

}

exports.getCourseById = (req,res)=>{

}

exports.updateCourse = (req,res)=>{

}
