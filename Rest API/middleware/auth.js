const jwt = require('jsonwebtoken');

const auth = (req,res,callback)=>{

    try{
        let token = req.header('Authorization');
    /*
    Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhcnJ5IiwiaWF0IjoxNzQwMzg5NjQ1LCJleHAiOjE3NDAzOTMyNDV9.sOI7599MmLt7o4wMfGtHeH2bEdnafrUwLRLU3N4HNi8
    */

    if(!token)
        return res.status(400).json({'msg' : 'No token given!!!'})

    let actualToken = token.split(' ')[1]; 
    /** eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhcnJ5IiwiaWF0IjoxNzQwMzg5NjQ1LCJleHAiOjE3NDAzOTMyNDV9.sOI7599MmLt7o4wMfGtHeH2bEdnafrUwLRLU3N4HNi8 */

    const SECRET_KEY = '15111983200722';
    const decodedToken = jwt.verify(actualToken, SECRET_KEY);
    let userObj = decodedToken; 

    req.user = userObj; 
    callback(); 
    }
    catch(err){
        res.status(400).json({'err' : err})
    }
    
}

module.exports = auth; 