const e = require("express");
const Course = require("../models/course");
const Enrollment = require("../models/enrollment");
const Student = require("../models/student");

exports.enrollStudentInCourse = async (req,res)=>{
    try {
        //console.log('enroll api called....');
        const { sid, cid } = req.body;
        //console.log(`student id: ${sid} and course id: ${cid}`)

        //step 1: validate sid and cid 
        let student = await Student.findById(sid);

        if (!student) { //if student is not found/defined 
            return res.status(400).json({ 'msg': 'student id invalid!!' });
        }

        let course = await Course.findById(cid);

        if (!course) {
            return res.status(400).json({ 'msg': 'course id invalid!!' });
        }

        //step 2 : create enroll obj and save it in db
        let enrollObj = {
            student: sid,
            course: cid
        }
        let enroll = new Enrollment(enrollObj);
        enroll = await enroll.save();

        res.status(200).json(enroll);
    }
    catch (err) {
        res.status(400).json({ 'msg': `ERROR in api: ${err}` })
    }
    
}

exports.fetchAllEnrollments= async (req,res)=>{
    try{
        const enrollments = await Enrollment.find().populate("student").populate("course");
        res.status(200).json(enrollments);
    }
    catch(err){
        res.status(400).json({ 'msg': `ERROR in api: ${err.message}` })
    }
}

/* fetch all students enroled in course with given id. 
PATH: /api/enroll/students
param: courseId
response: student[]
*/
exports.getStudentsByCourseId = async (req,res)=>{
    try{
        let courseId = req.params.courseId; 
        //validate courseId
        const course = await Course.findById(courseId); 
        if(!course)
            return res.status(400).json({'msg' : 'Invalid id ' + courseId})

        const enrolls = await Enrollment.find({'course' : courseId}).populate("student","_id name email")
        let students = enrolls.map(e=>e.student)
        return res.status(200).json(students)
    }
    catch(err){
        res.status(400).json({ 'msg': `ERROR in api: ${err.message}` })
    }
}

/* fetch all courses based on given student id. 
PATH: /api/enroll/courses
param: studentId
response: course[]
*/
exports.getCoursesByStudentId=(req,res)=>{
    //to be done by u... 
}


/** to un-enroll studet from a course
 * PATH: /api/enroll/unenroll
 * PARAMS: courseId, studentId
 * res: "Student unenrolled from the course" 
 */

exports.unenrollStudentFromCourse = async (req, res) => {
    try {
        let studentId = req.params.studentId;
        let courseId = req.params.courseId;

        //step 1: validate sid and cid 
        let student = await Student.findById(studentId);

        if (!student) { //if student is not found/defined 
            return res.status(400).json({ 'msg': 'student id invalid!!' });
        }

        let course = await Course.findById(courseId);

        if (!course) {
            return res.status(400).json({ 'msg': 'course id invalid!!' });
        }

        //step 2: check if this student is enrolled in the course
        const enrollment = await Enrollment.findOne({ 'student': studentId, 'course': courseId });

        if (!enrollment) {
            return res.status(400).json({ 'msg': 'student is not enrolled in course!!' });
        }

        await Enrollment.deleteOne({ 'student': studentId, 'course': courseId });
        return res.status(200).json({ 'msg': 'Student un-enrolled from course' })
    }
    catch (err) {
        res.status(400).json({ 'msg': `ERROR in api: ${err.message}` })
    }

};

exports.getEnrollmentbyDateRange=async (req,res)=>{
    const {fromDate,toDate} = req.query; 
    //console.log(fromDate) -- "2025-02-21"
    //console.log(toDate) -- '2025-02-23'

    const fDate = new Date(fromDate);
    const tDate = new Date(toDate)
    console.log(fDate)  
    console.log(tDate) 

    if(isNaN(fDate)){
        return res.status(400).json({'msg': 'From date invalid, correct format: YYYY-MM-DD'})
    }
    if(isNaN(tDate)){
        return res.status(400).json({'msg': 'To date invalid, correct format: YYYY-MM-DD'})
    }
    
    const enrolls = await Enrollment.find({'date_of_enroll': {$gt:fDate , $lt:tDate} })
    
    res.status(200).json(enrolls)
}

// = (eq) !=(neq) <(lt)  >(gt)  <=(lte)  >=(gte)    tdate>date_of_enroll>fdate 