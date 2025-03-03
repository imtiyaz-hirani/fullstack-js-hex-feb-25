import { useState } from "react"

function StatesComp(){
    let count = 0 
    const [cnt, setCnt] = useState(0); 

    const countOp =(op)=>{
        if(op === 'INCR'){
            count = count + 1 /**Workig with normal variable - RED FLAG - X */
            setCnt(cnt + 1)  /**Working with state - Right way */
        }
            
        if(op === 'DECR'){
            count = count - 1
            setCnt(cnt-1)
        }
            
    }
    return(
        <div>
            <h3>Increment/Decrement Count</h3>
            <p>Count = {cnt}</p>
            <button onClick={()=>countOp('INCR')}>Add count</button>
            <button onClick={()=>countOp('DECR')}>Minus count</button>
        </div>
    )
}

export default StatesComp; 

// contract: if you want react to re-render a variable(count) after its value has changed 
// due to user op(INCR/DECR)
// then, make tis variable as stste in component , beacause STATES get re-rendered when
//their value changes