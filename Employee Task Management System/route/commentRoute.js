const express = require('express');
const auth = require('../middleware/auth');
const { addComment } = require('../controller/commentController');

const router = express.Router();

router.post("/add",auth, addComment)
 
module.exports = router; 