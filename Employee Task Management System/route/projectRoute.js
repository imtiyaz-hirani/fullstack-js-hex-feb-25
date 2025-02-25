const express = require('express');
const { addProject, getAllProject } = require('../controller/projectController');
  
const router = express.Router();

router.post("/add", addProject)
router.get("/getall",getAllProject)

module.exports = router; 