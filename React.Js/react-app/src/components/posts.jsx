import { useState } from "react";
import postData from "../data/postData"; 

function Post(){
    const [posts,setPosts] = useState(postData.splice(0,10))
    //100X: {},{},{},{},{}.....{} -- 100
    //posts = 100X 

    //101X: {},{},{},{}.....{} --99
    //posts=101X

    //102X: {},{},{},{}.....{} --98
    //posts=102X
    const remove = (id)=>{
        setPosts([...posts.filter((p)=>p.id !== id)])
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