import { useEffect, useState } from "react";

function Effects(){
    const [x,setX] = useState(undefined);

    useEffect(()=>{
        console.log('use effect called....')
        setX(11)
    },[]);  //use effect does not depend on any state so run only once. 

    const add = ()=>{
        setX(x+2)
    }
    return(
        <>
            {console.log('return called.....' + x)}
            <p>{x}</p>
            <button onClick={add}>Add 2 to x</button>
        </>
    )
}

export default Effects; 