import AdminNavbar from "./navbar"

function EmployeeOnboarding(){
    return(
        <>
            <div className="row">  
                <div className="col-lg-12"> <AdminNavbar /></div>
            </div>
            <div className="row mt-4">  
                <div className="col-sm-2"> </div>
                <div className="col-md-8"> 
                    <div className="card">
                        <div className="card-header">
                            Employee Onboarding - Add Details 
                        </div>
                        <div className="card-body">
                            <form class="row g-3">
                                <div class="col-md-6">
                                    <label  class="form-label">Name</label>
                                    <input type="text" class="form-control"  />
                                </div>
                                <div class="col-md-6">
                                    <label  class="form-label">City</label>
                                    <input type="text" class="form-control"  />
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress" class="form-label">Select Job Title</label>
                                    <select className="form-control">
                                        <option>----select job title----</option>
                                        <option>Software Dev</option>
                                        <option>Software tester</option>
                                        <option>Product Owner</option>
                                    </select>
                                </div>
                                <div class="col-lg-12">
                                    <label for="inputCity" class="form-label">Profile Pic</label>
                                    <input type="file" class="form-control" id="inputCity" />
                                    <br />
                                    <button className="btn btn-secondary">Upload</button>
                                </div>
                                <div class="col-lg-12">
                                    <label for="inputCity" class="form-label">Upload updated CV</label>
                                    <input type="file" class="form-control" id="inputCity" />
                                    <br />
                                    <button>Upload</button>
                                </div>
                                 <div class="col-md-6">
                                 <label for="inputZip" class="form-label">Username</label>
                                 <input type="text" class="form-control" id="inputZip" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputZip" class="form-label">Password</label>
                                    <input type="text" class="form-control" id="inputZip" />
                                </div>
                                 
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary">Employee Onboarding</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2"> </div>
            </div>
        </>
    )
}

export default EmployeeOnboarding