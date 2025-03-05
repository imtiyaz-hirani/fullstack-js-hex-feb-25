import { useEffect, useState } from "react";

function EmployeeList(){
    const [employees,setEmployees] = useState([]);
    const [page,setPage] = useState(1); 
    const [totalPages, setTotalPages] = useState(0);
    useEffect(()=>{
        const getApiUrl='https://reqres.in/api/users?page=' + page
        fetch(getApiUrl)
        .then(resp => resp.json())
        .then(json=> {
            setEmployees(json.data);
            setTotalPages(json.total_pages)
        })
    },[page])
 
    return(
        <div className="card" style={{backgroundColor : "#FFEEEE"}}>
            <div className="card-body">
                <table className="table caption-top align-middle">
                    <caption>List of employees [page: {page}]</caption>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Profile Pic</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col"> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((emp, index) => (
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td >
                                        <div className="circular_image">
                                            <img src={emp.avatar}></img>
                                        </div>
                                    </td>
                                    <td style={{"width": "20%"}}>{emp.first_name}</td>
                                    <td style={{"width": "20%"}}>{emp.last_name}</td>
                                    <td style={{"width": "30%"}}>{emp.email}</td>
                                    <td>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                            </svg>    
                                        </span>
                                        &nbsp;&nbsp;&nbsp;
                                        <span>Delete Icon</span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <br />
                <nav  >
                    <ul className="pagination justify-content-center">
                        {page == 1 ?
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex="-1" >Previous</a>
                            </li> :
                            <li className="page-item ">
                                <a className="page-link" href="#" tabIndex="-1" onClick={()=>setPage(page-1)}>Previous</a>
                            </li>
                        }
                        
                        {
                            [...Array(totalPages)].map((p, index) => (
                                <li key={index} className="page-item">
                                    { (index+1) === page?
                                        <span className="page-link">{index+1} </span>
                                        :
                                        <a className="page-link" href="#" onClick={()=> setPage(index+1)}>{index+1} </a>
                                     }
                                    
                                </li>
                            ))
                        } {/** [...Array(totalPages)] = [undefined,undefined]*/ }
                        {
                            page == totalPages ?
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" >Next</a>
                                </li>
                                :
                                <li className="page-item">
                                    <a className="page-link" href="#" onClick={()=>setPage(page+1)}>Next</a>
                                </li>
                        }
                        
                        
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default EmployeeList;