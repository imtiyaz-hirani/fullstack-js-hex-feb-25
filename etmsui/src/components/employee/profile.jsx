import axios from "axios";
import { useState } from "react"

function EmpProfile() {

    const [file,setFile] = useState(undefined); 

    const handeFileChange=(e)=>{
        setFile(e.target.files[0]); //the file is not being represented by 'file' state variable
    }

    const uploadCV=async ()=>{
        if(!file){
            console.log('file not present ' + file)   
        }
        const fData = new FormData() 
        fData.append('file', file)
        const header = {
            'Authorization' : 'Bearer ' + localStorage.getItem('token'),
            'Content-Type' : 'multipart/form-data'
        }
        try{
            const resp = await axios.post('http://localhost:5001/api/employee/uploadcv',fData, {
                headers : header
            })
            console.log(resp) //u mush set the message here using toaster
        }
        catch(err){
            console.log(err)
        }



    }
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
                    </form>
                    <hr />
                    <div class="col-lg-12">
                        <label >Profile Pic</label>
                        <input type="file" class="form-control" onChange={handeFileChange}/>
                        <br />
                        <button className="btn btn-secondary" onClick={uploadCV}>Upload</button>
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
                 
            </div>
        </div>
    )
}

export default EmpProfile