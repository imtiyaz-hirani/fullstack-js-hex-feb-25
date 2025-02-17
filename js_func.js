//traditional way -- old way 
function welcome(){
    let fname='harry';  //this cope is only within this function 
    return "Welcome " + fname; 
}

function welcomev2(fname){
    return "Welcome " + fname;  
}

console.log(welcome()) //welcome harry
console.log(welcomev2('john')); //welcome john

//Arrow function 

const  welcomear = ()=>{
    let fname='harry';  //this cope is only within this function 
    return "Welcome " + fname; 
}

const welcomev2ar = (fname)=>{
    return "Welcome " + fname;  
}

console.log(welcomear()) //welcome harry
console.log(welcomev2ar('john')); //welcome john

/**
 * Use Case : the customer(User) is giving the name is this format: Harry James potter
 * Task: convert this name into harry_james_potter
 */

/** 
function formatName(name){
    name = name.toLowerCase().replaceAll(" ","_");
    return name; 
}
*/
const formatName = (name)=>{return name.toLowerCase().replaceAll(" ","_") }
console.log(formatName('Harry James potter'));


