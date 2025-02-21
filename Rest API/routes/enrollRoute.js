const express = require('express');
const { enrollStudentInCourse, fetchAllEnrollments, getStudentsByCourseId } = require('../controllers/enrollcontroller');

const router = express.Router();

router.post('/add',enrollStudentInCourse)
router.get('/all',fetchAllEnrollments)
router.get('/students/:courseId',getStudentsByCourseId)


module.exports=router; 

