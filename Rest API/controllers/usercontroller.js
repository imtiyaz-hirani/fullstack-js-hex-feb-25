const User = require("../models/user");
const bcrypt = require('bcryptjs')
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken');

exports.signup = async (req,res)=>{
    const errors = validationResult(req); 
    if(!errors.isEmpty())
        return res.status(400).json({err: errors.array()});

    const {name,username,password} = req.body; 
    //console.log(name, ' ', username, ' ' ,password)
    
    /** check if username is already taken, we do not allow duplicates */
    let user  =  await User.findOne({'username' : username}); 
    if(user) 
        return res.status(400).json({'msg' : 'Username already taken!!!!'}); 
    /** 
     * save the user in DB
     * encrypt the password using bcrypt
     */
    let salt = 10; //needed for hash algo: SHA256 
    const hashedPassword = await bcrypt.hash(password,salt); 
    let userObj ={
        'name': name,
        'username': username,
        'password': hashedPassword
    }
    user = new User(userObj); 
    user = await user.save();

    return res.json(user); 
}

exports.login = async (req,res)=>{
    const errors = validationResult(req); 
    if(!errors.isEmpty())
        return res.status(400).json({err: errors.array()});

    const {username,password} = req.body;
    
    /** fetch User by given username  */
    let user = await User.findOne({'username' : username}); 

    if(!user) //if user if undefined
        return res.status(400).json({'msg':'Invalid Credentials!!!!'})
    
    /** check the password 
     * plan password() - password   ::    $2b$10$q4ZbqGgTUpaa0rWmSHXEieiCBUaU3R9Uk8JKdQt2izia7NmBUsBhS
     * use bcrypt to compare plain text and hashed password   
    */
    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid)
        return res.status(400).json({'msg':'Invalid Credentials!!!!'})

    /* generate the token 
       define your secret key (private key)  
    */
   const SECRET_KEY = '15111983200722';
   let userObj = {
    'username' : user.username,
    //'id' : user._id
   }
   const token = jwt.sign(userObj, SECRET_KEY , {'expiresIn' :'1h'}); 
   
    return res.json({'token' : token})
}