import { useState } from "react";
import postData from "../data/postData"; 

function Post(){
    const [posts,setPosts] = useState(postData.splice(0,10))

    const remove = (id)=>{
        const updatedPost = [...posts.filter((p)=>p.id !== id)]
        setPosts(updatedPost)
    }
    return(
        <div>
            <h2>All Posts</h2>
            {
                posts.map((p,index)=>(
                    <div key={index}>
                        Post: {p.id}. {p.title} <br />
                        {p.body} <br />
                        <button onClick={()=>remove(p.id)}> remove</button>
                        <hr />
                    </div>    
                ))
            }
        </div>
    )
}

export default Post