const express = require('express');
const { enrollStudentInCourse, fetchAllEnrollments, getStudentsByCourseId, 
    unenrollStudentFromCourse } = require('../controllers/enrollcontroller');

const router = express.Router();

router.post('/add',enrollStudentInCourse)
router.get('/all',fetchAllEnrollments)
router.get('/students/:courseId',getStudentsByCourseId)
router.delete('/unenroll/:studentId/:courseId',unenrollStudentFromCourse)

module.exports=router; 

