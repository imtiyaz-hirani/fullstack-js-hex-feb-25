const express = require('express');
const { enrollStudentInCourse } = require('../controllers/enrollcontroller');

const router = express.Router();

router.post('/add',enrollStudentInCourse)

module.exports=router; 

