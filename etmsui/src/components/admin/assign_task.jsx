import { useEffect, useState } from "react";
import AdminNavbar from "./navbar";
import axios from "axios";

function AssignTask(){
    const [employees, setEmployees] = useState([]); 
    const [tasks,settasks] = useState([]); 
    const [empId,setEmpId] = useState(undefined)
    useEffect(()=>{
        const getAllEmployees = async ()=>{
            let header = {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
            const resp = await axios.get('http://localhost:5001/api/employee/getall',
                {headers : header}
            )
            setEmployees(resp.data)
        }

        const getAllTask=()=>{
            //attach resp.data to tasks
        }

        getAllEmployees();
        getAllTask(); 
    },[])
    const process =(e)=>{
        e.preventDefault();
        //call post api 
        console.log(empId)
    }
    return (
        <div >
             <div className="row">
                <div className="col-lg-12"> <AdminNavbar /></div>
            </div>
            <div className="row">
                <div className="col-sm-4">  

                </div>
                <div className="col-sm-4" style={{marginTop: '8%'}}>  
                    <div className="card">
                        <div className="card-header">
                            Assign task to Employee
                        </div>
                        <div className="card-body">
                            <form onSubmit={process}> 
                                <div className="mt-4">
                                    <label>Select Employee: </label>
                                    <select className="form-control" 
                                        onChange={(e)=> setEmpId(e.target.value)}>                                  
                                        <option>--------Select Employee------</option>
                                        {/** iterate over employees */}
                                        {
                                            employees.map((e,index)=>(
                                                <option key={index} value={e._id}>
                                                    {e.name} -- {e.jobTitle}
                                                </option>
                                            ))
                                        }
                                       
                                    </select>
                                </div>
                                <div className="mt-4">
                                <label>Select Task: </label>
                                    <select className="form-control">
                                    <option>--------Select Task------</option>
                                        {/** iterate over tasks */}
                                        <option value="67bd66041538c4c5ca513fe9">
                                                Develop Account Model APIs 
                                        </option>
                                    </select>
                                </div>
                                <div className="mt-4">
                                    <input type="submit" value="Process" className="btn btn-warning"/>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
                <div className="col-sm-4">  

                </div>
            </div>
        </div>
    )
}

export default AssignTask;
