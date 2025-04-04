import { useEffect, useState} from "react"
import axios from "axios"
import User from "../components/User.jsx"
import { Link } from "react-router-dom"


/*
when we want to fecth some data from api 
 i should think about {use effects}

        Easy to read
              \/

 async function fetchData() {
            console.log(await axios.get("https://jsonplaceholder.typicode.com/users"))
        }
useEffect(() => {
     fetchData()   
    }, [])

*/

// const response = fetch("https://jsonplaceholder.typicode.com/users")
     //const data = response.json()

///  Working with Promises with useEffect
function Home() {
    const [users, setUsers] =useState([])



    async function fetchData() {
        const{ data }= await axios.get("https://jsonplaceholder.typicode.com/users")
            // { data } helps to single out every data property
        
        setUsers(data)

    }
    useEffect(() => {
        setTimeout(() => {
            fetchData()  
        }, 1500)
         
    } , [])
    
    {/* <h1>{ users.length > 0 ? users[0].username : null}</h1> 
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

    
    */}
    return (
        <div>
            {users.length > 0 ? users.map((user) => (
                <Link key={user.id} to={`/users/${user.id}`}>
                    <User 
                    id={user.id} 
                    name={user.name} 
                    username={user.username}
                    />
                </Link>
            )) : <h1>Loading...</h1>}
        </div>
    )
    
}
export default Home