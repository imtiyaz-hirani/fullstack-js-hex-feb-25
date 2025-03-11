function EmpProfile() {

    return (
        <div className="card">
            <div className="card-header">
                Employee Profile
            </div>
            <div className="card-body">
                <form class="row g-3" >
                    <div class="col-md-6">
                        <label class="form-label">Name</label>
                        <input type="text" class="form-control"
                           />
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">City</label>
                        <input type="text" class="form-control"
                            />
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Salary</label>
                        <input type="text" class="form-control"
                             />
                    </div>
                    <div class="col-6">
                        <label for="inputAddress" class="form-label">Select Job Title</label>
                        <input type="text" class="form-control" disabled="true"  />
                    </div>
                    <hr />
                    <div class="col-md-6">
                        <label for="inputZip" class="form-label">Username</label>
                        <input type="text" class="form-control"
                             />
                    </div>
                    <div class="col-md-6">
                        <label for="inputZip" class="form-label">Password</label>
                        <input type="text" class="form-control"
                             />
                    </div>
                    <hr />
                    <div class="col-lg-12">
                        <label for="inputCity" class="form-label">Profile Pic</label>
                        <input type="file" class="form-control" id="inputCity" />
                        <br />
                        <button className="btn btn-secondary">Upload</button>
                    </div>
                    <hr />
                    <div class="col-lg-12">
                        <label for="inputCity" class="form-label">Upload updated CV</label>
                        <input type="file" class="form-control" id="inputCity" />
                        <br />
                        <button>Upload</button>
                    </div>
                    <hr />
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Save Profile</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EmpProfile