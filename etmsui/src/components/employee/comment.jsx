import { useSearchParams } from "react-router";
import EmployeeNavbar from "./navbar";

function Comment(){
    const param = useSearchParams();

    return(
        <div className="row">
            <div className="col-lg-12">
                <EmployeeNavbar />
            </div>
            <div className="col-lg-12">
                 <h2>task Details</h2>
            </div>
            <div className="col-lg-12">
                 <div className="card">
                    <div>
                        <form>
                            <label>Enter new comment:</label>
                            <textarea rows={5} cols={50} />

                            <button>Add Comment</button>
                        </form>
                    </div>
                 </div>
                 <h2>All Comments</h2>
            </div>
        </div>
    )
}

export default Comment;