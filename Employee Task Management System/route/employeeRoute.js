const express = require('express');
const { addEmployee, getAllEmployee, login, uploadCV, test } = require('../controller/employeeController');
const auth = require('../middleware/auth');
const multer = require('multer');
const router = express.Router();
const upload = multer({ dest: 'D:/hex-full-stack-js-feb-25/etmsui/public/docs/cv/' })

router.post("/add",auth, addEmployee)
router.get("/getall",auth,getAllEmployee)
router.post("/login",login)
router.post("/uploadcv",upload.single('file'),auth,uploadCV)

module.exports = router; 