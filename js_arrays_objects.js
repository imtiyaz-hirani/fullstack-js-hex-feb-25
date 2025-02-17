const x = [4,6,1,8,3,0]; 

console.log(x.length); //6
console.log(x[3]) //8
/*
Employee: Table 
id  name        dept        empNum      city    
1   harry       IT          E8879       Chennai
2   ronald      DEV         E4457       Mumbai
*/

let emp1={ //this is an object in JS 
    id: 1,
    name: 'harry',
    dept: 'IT',
    empNum: 'E8879',
    city: 'Chennai',
    salary: 87000,
    contact: '7766879879'
}

let emp2={ //this is an object in JS 
    id: 2,
    name: 'ronald',
    dept: 'DEV',
    empNum: 'E4457',
    city: 'Mumbai',
    salary: 98000,
    contact: '7788994768'
}

let employee =[emp1,emp2]; 
const empArray=[];
console.log(empArray.length); //0
empArray.push(emp1);
empArray.push(emp2); 
console.log(empArray.length); //2
console.log(employee.length); //2

/** Iterate over the array */
empArray.forEach((e)=>console.log(e.city))

/**
 filter method : it filters the records which do not satisfy the given criteria 
 Filter empArray based on given city 
 */
 let empFilter = empArray.filter((e)=>e.city.toLowerCase() === 'chennai'.toLowerCase())
 empFilter.forEach((e)=>console.log(e))
//Note: ===  checks datatype and then value. where as == checks only value 

/** Spread operator: it creates a clone of the array
 * let x=[1,2,3]; x:100X:1,2,3
 * ...x          ---> 200X: 1,2,3   
 */
 console.log(...empArray.filter((e)=>e.city.toLowerCase() === 'chennai'.toLowerCase()))

 console.log("-----After Increment----")
 /* Map: give increment of 10% to all employees working in Dev department 
 piped methods: filter + map 
 */
 let empArrayIncr =  
 empArray
 .filter((e)=>e.dept.toLowerCase() === 'DEV'.toLowerCase())
 .map((e)=>({...e, salary: e.salary+(e.salary*0.1)}))

console.log(empArrayIncr)
console.log("-----original array-----")
console.log(empArray)

//ConcurrentException 

/**
 * for(Employee e : empArry){
 *      emArray.remove(e);  
 *      
 * }
 * 
 */

/** Sort operation 
 * [2,4] : NO Swap   -ve : nothing
 * [2,2] : No Swap   0 : nothing
 * [4,2] : Yes Swap +ve : swap  
 * 
*/
/*ascending order sorting 
Sort the employees in ascending order of salary 
*/
let emp3={ //this is an object in JS 
    id: 3,
    name: 'john',
    dept: 'DEV',
    empNum: 'E7857',
    city: 'Mumbai',
    salary: 82000,
    contact: '7755694768'
}
empArray.push(emp3)
console.log("-------After sorting---------")
console.log(empArray.sort((e1,e2)=>e1.salary - e2.salary)) //ascending

console.log(empArray.sort((e1,e2)=>e2.salary - e1.salary)) //decending


/*
Variables
Functions : arrow func 
Arrays of objects : foreach, map, sort, filter 

tomorrow: Promise/async await 
*/