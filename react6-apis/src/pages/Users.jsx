import { useParams, Link } from "react-router-dom"
import {useEffect, useState} from "react"
import axios from "axios"
// import User from '../components/User.jsx'



function Users() {
    const {id} = useParams()
    const [user, setUser] = useState({})
    
    
    async function fetchId() {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`) 
        

        setUser(data)
    }

    useEffect(() => {
        fetchId()
    }, [])
    
    
    
    return (
    <>
    <div>
        <Link to="/">Back to home</Link>
        <h1>{user.id}</h1>
        <h1>{user.name}</h1>
        <h1>{user.username}</h1>
    </div>
    
    
    
    </>)
    
}
export default Users