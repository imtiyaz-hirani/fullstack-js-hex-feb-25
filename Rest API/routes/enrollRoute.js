const express = require('express');
const { enrollStudentInCourse, fetchAllEnrollments } = require('../controllers/enrollcontroller');

const router = express.Router();

router.post('/add',enrollStudentInCourse)
router.get('/all',fetchAllEnrollments)



module.exports=router; 

