const  Variables=()=>{
    const name='harry'
    let age = 21
    let x=10;
    let y=5; 
    let graduated = true

    let employee={
        name: "john doe",
        jobTitle: "Developer",
        city: "New York"
    }

    const contactInfo = ()=>{
        console.log("contact info revealed!!!!")
    }

    return(
        <div>
            <h3>Variable Component</h3>
            <p>Name: {name} </p>
            <p>age: {age} </p>
            <p>x+y: {x+y} </p>
            <p>Did u graduate? {graduated === true? 'YES' : 'NO'}</p>
            <hr />
            <h3>Employee Details</h3>
            <span>Name: {employee.name}</span> <br />
            <span>Job Title: {employee.jobTitle}</span> <br />
            <span>City: {employee.city}</span> <br />
            {/** onClick event handler calling the function contactInfo*/}
            <button onClick={contactInfo}>contact</button>
        </div>
    )
}

export default Variables;