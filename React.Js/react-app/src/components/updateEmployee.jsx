import { useEffect, useState } from "react";
import { useLocation } from "react-router";

function UpdateEmployee(){
    let location = useLocation();
    const [employee,setEmployee] = useState({}); 
    const [fname,setFname] = useState(undefined);
    const [lname,setLname] = useState(undefined);
    const [email,setEmail] = useState(undefined);

    const [msg,setMsg] = useState(undefined)
      console.log('Update of Employee with ID: ' +location.state.id);
    const getUserApi = 'https://reqres.in/api/users/'+location.state.id
      useEffect(()=>{
        fetch(getUserApi )
        .then(response=>response.json())
        .then(json=> {
             setEmployee(json.data)
        })
        .catch(err=>{
            console.log(err)
            setMsg(`Employee fetch unsuccessfull`)
        })
      },[])
    return(

        <div>
            <div className="row">
                 <div className="col-lg-12">
                    <h1 class="display-6">Update Employee</h1>
                    <hr />
                </div>   
            </div>
             <div className="row">
            <div className="col-sm-4">

            </div>
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-title">
                        <div className="card-body">
                            {msg ? <div className="alert alert-primary">
                                {msg}
                            </div> : ""}
                            <form >
                               <div className="mb-2">
                                    <label>Enter First Name: </label>
                                    <input type="text" className="form-control" 
                                        value={employee.first_name}
                                        onChange={($event)=> setFname($event.target.value)}/>
                               </div>
                               <div className="mb-2">
                                    <label>Enter Last Name: </label>
                                    <input type="text" className="form-control" 
                                        value={employee.last_name}
                                        onChange={($event)=> setLname($event.target.value)}/>
                               </div>
                               <div className="mb-2">
                                    <label>Enter Email: </label>
                                    <input type="text" className="form-control" 
                                        value={employee.email}
                                        onChange={($event)=> setEmail($event.target.value)}/>
                               </div>
                               <div>
                                     
                                    <input type="submit" value="Add User" 
                                    className="btn btn-primary"
                                    disabled={!name || !job} 
                                    />
                               </div>
                            </form>
                        </div>
                    </div>        
                </div>
            </div>
            <div className="col-sm-4">

            </div>
        </div>
        </div>
    )
}

export default UpdateEmployee