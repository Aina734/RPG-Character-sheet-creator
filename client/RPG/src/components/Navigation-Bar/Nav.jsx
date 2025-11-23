import { Link } from "react-router"
import "./Nav.css"
function Nav () {
return (
    <>
<header>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/create-character">Create Character</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </nav>
</header>

    </>
)
}

export default Nav