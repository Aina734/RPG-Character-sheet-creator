import { Link } from "react-router"

function Nav () {
return (
    <>
<Link to="/">Home</Link>
<Link to="/create-character">Create Character</Link>
<Link to="/news">News</Link>
<Link to="/login">Login</Link>


    </>
)
}

export default Nav