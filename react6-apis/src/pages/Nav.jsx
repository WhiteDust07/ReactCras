import { Link } from "react-router-dom"

function Nav(){
    return(
    <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/users/mrbeast">mrbeast</Link>
            <Link to="/users/kyliejenner">kylie</Link>
            <Link to="/users/imancodes">imancodes</Link>
            {/* {<a href="/posts">Posts</a>} */}
    </nav>
    )
}

export default Nav