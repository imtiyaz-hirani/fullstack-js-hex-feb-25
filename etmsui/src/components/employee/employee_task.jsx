import EmployeeNavbar from "./navbar"

function EmployeeTask() {
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <EmployeeNavbar />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mt-4">
                    <div className="card">
                        <div className="card-header">
                            Start Date: 2025-03-03
                        </div>
                        <div className="card-body">
                             Title: Develop Account Model APIs
                             <br />
                             Project Name: Banking System
                             <br />
                             create CRUD Apis for Account model and activate auth
                              <br /><br />
                              <button className="btn btn-info" > View Full Details</button>  
                        </div>
                        <div className="card-footer">
                            Estimated End Date: 2025-03-03 
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-4">
                    <div className="card">
                        <div className="card-header">
                            Start Date: 2025-03-03
                        </div>
                        <div className="card-body">
                             Title: Develop Account Model APIs
                             <br />
                             Project Name: Banking System
                             <br />
                             create CRUD Apis for Account model and activate auth
                              <br /><br />
                              <button className="btn btn-info" > View Full Details</button>  
                        </div>
                        <div className="card-footer">
                            Estimated End Date: 2025-03-03 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeeTask