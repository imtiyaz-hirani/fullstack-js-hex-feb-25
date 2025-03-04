import usersData from '../data/user'

function ArrayOfObjects(){
    const users = usersData;
    return(
        <>
            {
                // Each child in a list should have a unique "key" prop.
            users.map((u,index)=>(
                <div key={index}>
                    Name: {u.name} <br />
                    Username: {u.username} <br />
                    City: {u.address.city} <br />
                    <hr />
                </div>
            )) 
            }
             
        </>
    )
}

export default ArrayOfObjects; 