
/* <h1>{ users.length > 0 ? users[0].username : null}</h1> 
        shorter usage is below
    
        <h1>{ users.length > 0 && users[0].username}</h1>

        event shorter is below
        <h1>{ users[0]?.username}</h1> 
        
        <div>
        {
        users.length > 0 
        ? <h1>{ users.length > 0 && users[0].username}</h1>
        : <h2>Loading...</h2> 
        </div>
        }
    
                                🔔🔔
        index gives every user index from 0 to how many you want i guess
        key gives unique id for each prompt
        {users.map((user, index))
        also child in a list should have a unique "key" prop. alwaayse
        }
                           🔔  IMPORTANT 
        index create key
        
        {users.map((user , index) => (
            <div key={index} style={{border: "1px solid red", fontSize: "20px", margin: "8px 0"}}>

    
*/

function User({ id, name, username}) {
    return (
        <div>
            <div  
            style={{border: "1px solid red", fontSize: "20px", margin: "8px 0"}}>
                <div>{name}</div>
                <div>{username}</div>
                <div>{id}</div>
            </div>
        </div>
    
    )
}

export default User;