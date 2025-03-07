import { Route, Routes } from "react-router";
import AdminNavbar from "./navbar";
import EmployeeOnboarding from "./onboarding_emp";

function AdminDashboard(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <AdminNavbar />
                </div>
            </div>
            <div className="row">
                    
            </div>
           
        </div>
    )
}

export default AdminDashboard; 